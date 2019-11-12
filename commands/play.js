const {
	Util
} = require('discord.js');
const ytdl = require('ytdl-core');

module.exports = {
	name: 'play',
	description: 'Zene lej�tsz�sa a voice csatorn�n.',
	async execute(message) {
		const args = message.content.split(' ');
		const queue = message.client.queue;
		const serverQueue = message.client.queue.get(message.guild.id);

		const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send('Voice szob�ban kell lenned a parancs be�r�sakor, m�sk�pp nem kezd�dik el a m�sor, te temet�...');
		const permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
			return message.channel.send('Nem tudok bel�pni a voice csatorn�dra te fitymat�ltel�k! El�bb jogokat k�ne adnod... -_-');
		}

		const songInfo = await ytdl.getInfo(args[1]);
		const song = {
			title: songInfo.title,
			url: songInfo.video_url,
		};

		if (!serverQueue) {
			const queueContruct = {
				textChannel: message.channel,
				voiceChannel: voiceChannel,
				connection: null,
				songs: [],
				volume: 5,
				playing: true,
			};

			queue.set(message.guild.id, queueContruct);

			queueContruct.songs.push(song);

			try {
				var connection = await voiceChannel.join();
				queueContruct.connection = connection;
				this.play(message, queueContruct.songs[0]);
			} catch (err) {
				console.log(err);
				queue.delete(message.guild.id);
				return message.channel.send(err);
			}
		} else {
			serverQueue.songs.push(song);
			return message.channel.send(`${song.title} hozz�adva a list�hoz!`);
		}
	},

	play(message, song) {
		const queue = message.client.queue;
		const guild = message.guild;
		const serverQueue = queue.get(message.guild.id);
	
		if (!song) {
			serverQueue.voiceChannel.leave();
			queue.delete(guild.id);
			return;
		}
	
		const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
			.on('end', () => {
				console.log('A lej�tsz�s a v�g�hez �rt! Kellene valami zen�t raknod, mert menten agy�rh�gyg�rcs�t kapok az unalomt�l he!');
				serverQueue.songs.shift();
				this.play(message, serverQueue.songs[0]);
			})
			.on('error', error => {
				console.error(error);
			});
		dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
	}
};