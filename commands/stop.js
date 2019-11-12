module.exports = {
	name: 'stop',
	description: 'Az összes listában lévõ zene leállítása.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
        if (!message.member.voiceChannel) return message.channel.send('Egy voice szobában kell lenned a zene leállításához!');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
	},
};