const fs = require('fs')
const Discord = require('discord.js');
const Client = require('./client/Client');
const {
	prefix,
	token,
} = require('./config.json');

const client = new Client();
client.commands = new Discord.Collection();

const queue = new Map();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

console.log(client.commands);

client.once('ready', () => {
    console.log('csakegymusicbot betöltve...');
    client.user.setGame('pornhub.com');
});

client.once('reconnecting', () => {
	console.log('Újracsatlakozás...');
});

client.once('disconnect', () => {
    console.log('csakegymusicbot lecsatlakoztatva...');
});

client.on('message', async message => {
	const args = message.content.slice(1).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);

	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("Ne pingeljél már te fitymatöltelék, mert betakarlak a gecibe!");
    }

    if (message.content.startsWith(prefix + "toto")) {
        message.channel.send("Call of Toti™ - Az elsõ ezen a néven, az egyetlen, a legnagyobb, igen õ az... a nagyságos Kürtseggû Totó");
    }

	try {
		command.execute(message);
	} catch (error) {
		console.error(error);
        message.reply('Valamiféle ilyenolyan hiba történt!');
	}
});

client.login(token);