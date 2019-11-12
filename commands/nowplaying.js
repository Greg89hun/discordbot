module.exports = {
	name: 'nowplaying',
	description: 'Az éppen lejátszott zene címének lekérése.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Nem is megy a zene, te farok. Megártott a mentes víz?');
		return message.channel.send(`Épp ezt a zenét hallgatod: ${serverQueue.songs[0].title}`);
	},
};