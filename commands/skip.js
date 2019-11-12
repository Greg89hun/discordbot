module.exports = {
	name: 'skip',
	description: 'Következõ zenére váltás.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
        if (!message.member.voiceChannel) return message.channel.send('Egy voice szobában kell lenned a zene leállításához!');
		if (!serverQueue) return message.channel.send('Nem is megy a zene te dila!');
		serverQueue.connection.dispatcher.end();
	},
};