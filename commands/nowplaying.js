module.exports = {
	name: 'nowplaying',
	description: 'Az �ppen lej�tszott zene c�m�nek lek�r�se.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Nem is megy a zene, te farok. Meg�rtott a mentes v�z?');
		return message.channel.send(`�pp ezt a zen�t hallgatod: ${serverQueue.songs[0].title}`);
	},
};