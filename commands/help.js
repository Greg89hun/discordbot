const fs = require('fs')

module.exports = {
	name: 'help',
	description: 'El�rhet� parancsok list�ja.',
	execute(message) {
		let str = '';
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
			str += `Parancs: ${command.name}, Le�r�s: ${command.description} \n`;
		}

		message.channel.send(str);
	},
};