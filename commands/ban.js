module.exports = {
	name: 'ban',
	description: 'Felhaszn�l� bannol�sa a szerverr�l.',
	execute(message) {
		const member = message.mentions.members.first();

		if (!member) {
			return message.reply('Meg kell eml�tened a felhaszn�l�t, hogy bannolhassam!');
		}

		if (!message.member.hasPermission("MANAGE\_MEMBERS")) {
			return message.reply('Nem tudom bannolni ezt a felhaszn�l�t teee!');
		}

		return member
			.ban()
			.then(() => message.reply(`${member.user.tag} bannolva lett.`))
			.catch(error => message.reply('Valamif�le ilyenolyan hiba t�rt�nt!'));
	},
};