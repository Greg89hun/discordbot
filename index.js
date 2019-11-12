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
    console.log('csakegymusicbot bet�ltve...');
    client.user.setGame('pornhub.com');
});

client.once('reconnecting', () => {
	console.log('�jracsatlakoz�s...');
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
        message.channel.send("Ne pingelj�l m�r te fitymat�ltel�k, mert betakarlak a gecibe!");
    }

    if (message.content.startsWith(prefix + "toto")) {
        message.channel.send("Call of Toti� - Az els� ezen a n�ven, az egyetlen, a legnagyobb, igen � az... a nagys�gos K�rtsegg� Tot�");
    }

	try {
		command.execute(message);
	} catch (error) {
		console.error(error);
        message.reply('Valamif�le ilyenolyan hiba t�rt�nt!');
	}
});

client.login(token);