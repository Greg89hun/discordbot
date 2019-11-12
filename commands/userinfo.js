module.exports = {
	name: 'userinfo',
	description: 'Infó lekérdezése egy adott felhasználóról.',
	execute(message) {
		const member = message.mentions.members.first();
		const user = member.user;
		message.channel.send(`Név: ${user.username}, ID: ${user.id}, Felhasználónév: ${user.lastMessage.member.nickname}`);
	},
};