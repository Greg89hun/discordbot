//csakegybot by Greg89

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

//join 
client.on("ready", () => {
  console.log("Bot elindítva...");
  client.user.setActivity("brazzers.com", {
  type: "WATCHING",
  url: "https://www.brazzers.com"
});
});

//üzenetek 
client.on("message", (message) => {
	// bot prefix védelem
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;
	// ha a parancs nem létezik ne csináljon semmit
	if (!cmd) return;
	//cucckombino
	if (message.content.startsWith(config.prefix + "ping")) {
	message.channel.send("Ne pingeljé mán more!");
	} else
	if (message.content.startsWith(config.prefix + "cheeki")) {
	message.channel.send("BREEKI!");
	}else
	if (msg.content.toLowerCase().startsWith(prefix + "clearchat")) {
		async function clear() {
			msg.delete();
			const fetched = await msg.channel.fetchMessages({limit: 99});
			msg.channel.bulkDelete(fetched);
		}
		clear();
	}
});




//token helye 
client.login(config.token);