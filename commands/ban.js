module.exports = {
	name: 'ban',
	description: 'Felhasználó bannolása a szerverrõl.',
	execute(message) {
		const member = message.mentions.members.first();

		if (!member) {
			return message.reply('Meg kell említened a felhasználót, hogy bannolhassam!');
		}

		if (!message.member.hasPermission("MANAGE\_MEMBERS")) {
			return message.reply('Nem tudom bannolni ezt a felhasználót teee!');
		}

		return member
			.ban()
			.then(() => message.reply(`${member.user.tag} bannolva lett.`))
			.catch(error => message.reply('Valamiféle ilyenolyan hiba történt!'));
	},
};