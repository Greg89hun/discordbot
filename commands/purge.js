module.exports = {
	name: 'purge',
	description: 'Legutóbbi üzenetek törlése az összes chatszobában.',
	async execute(message) {
		const args = message.content.split(' ');
		let deleteCount = 0;
		try {
			deleteCount = parseInt(args[1], 10);
		}catch(err) {
			return message.reply('Meg kell adnod hány üzenetet szeretnél törölni. (max 100)')
		}
        

		if (!deleteCount || deleteCount < 2 || deleteCount > 100)
			return message.reply('Adj meg egy számot 2 és 100 között. Amennyit beírsz, annyi üzenetet törlök. :P');

		const fetched = await message.channel.fetchMessages({
			limit: deleteCount,
		});
		message.channel.bulkDelete(fetched)
			.catch(error => message.reply(`Sajnos nem tudtam törölni az üzeneteket. Indok: ${error}`));
	},
};