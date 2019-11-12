module.exports = {
	name: 'kick',
	description: 'Felhasználó kirúgása a szerverrõl.',
	execute(message) {
		const member = message.mentions.members.first();

		if (!member) {
            return message.reply('Meg kell említened a felhasználót, hogy kirúghassam!');
		}

		if (!member.kickable) {
            return message.reply('Nem tudom kirúgni ezt a felhasználót he!');
		}

		return member
			.kick()
			.then(() => message.reply(`${member.user.tag} was kicked.`))
            .catch(error => message.reply('Valamiféle ilyenolyan hiba történt!'));
	},
};