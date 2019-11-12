module.exports = {
	name: 'purge',
	description: 'Legut�bbi �zenetek t�rl�se az �sszes chatszob�ban.',
	async execute(message) {
		const args = message.content.split(' ');
		let deleteCount = 0;
		try {
			deleteCount = parseInt(args[1], 10);
		}catch(err) {
			return message.reply('Meg kell adnod h�ny �zenetet szeretn�l t�r�lni. (max 100)')
		}
        

		if (!deleteCount || deleteCount < 2 || deleteCount > 100)
			return message.reply('Adj meg egy sz�mot 2 �s 100 k�z�tt. Amennyit be�rsz, annyi �zenetet t�rl�k. :P');

		const fetched = await message.channel.fetchMessages({
			limit: deleteCount,
		});
		message.channel.bulkDelete(fetched)
			.catch(error => message.reply(`Sajnos nem tudtam t�r�lni az �zeneteket. Indok: ${error}`));
	},
};