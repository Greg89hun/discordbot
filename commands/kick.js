module.exports = {
	name: 'kick',
	description: 'Felhaszn�l� kir�g�sa a szerverr�l.',
	execute(message) {
		const member = message.mentions.members.first();

		if (!member) {
            return message.reply('Meg kell eml�tened a felhaszn�l�t, hogy kir�ghassam!');
		}

		if (!member.kickable) {
            return message.reply('Nem tudom kir�gni ezt a felhaszn�l�t he!');
		}

		return member
			.kick()
			.then(() => message.reply(`${member.user.tag} was kicked.`))
            .catch(error => message.reply('Valamif�le ilyenolyan hiba t�rt�nt!'));
	},
};