module.exports = {
	name: 'userinfo',
	description: 'Inf� lek�rdez�se egy adott felhaszn�l�r�l.',
	execute(message) {
		const member = message.mentions.members.first();
		const user = member.user;
		message.channel.send(`N�v: ${user.username}, ID: ${user.id}, Felhaszn�l�n�v: ${user.lastMessage.member.nickname}`);
	},
};