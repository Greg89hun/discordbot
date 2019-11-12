module.exports = {
	name: 'skip',
	description: 'K�vetkez� zen�re v�lt�s.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
        if (!message.member.voiceChannel) return message.channel.send('Egy voice szob�ban kell lenned a zene le�ll�t�s�hoz!');
		if (!serverQueue) return message.channel.send('Nem is megy a zene te dila!');
		serverQueue.connection.dispatcher.end();
	},
};