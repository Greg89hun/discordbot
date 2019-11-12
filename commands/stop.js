module.exports = {
	name: 'stop',
	description: 'Az �sszes list�ban l�v� zene le�ll�t�sa.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
        if (!message.member.voiceChannel) return message.channel.send('Egy voice szob�ban kell lenned a zene le�ll�t�s�hoz!');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
	},
};