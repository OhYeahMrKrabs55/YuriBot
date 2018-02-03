const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client ();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("ready", () => {
    client.user.setGame("use !help");
});
client.on('message', msg => {
  if (msg.content === '!help') {
    msg.reply('Hello! Im YuriBot im still being made so cheak back later!');
  }
});
client.on('message', msg => {
	if (msg.content === '!test') {
		msg.channel.send('Oh Ok');
	}
});
bot.on('guildMemberAdded', member => {
   member.send("Welcome to the server!");
});
client.on('message', msg => {
	if (msg.content === '!cmds') {
		msg.reply('STILL BEING MADE');
	}
});
client.on('message', msg => {
	if (msg.content === '!ping') {
		msg.reply('No pong 4 u');
	}
});
client.on('message', msg => {
	if (msg.content === 'Yuri sucks') {
		msg.reply('No');
		msg.delete()
	}
});
client.on('message', msg => {
	if (msg.content === '!meme') {
		msg.reply('Here!,https://imgur.com/gallery/u7zTe');
	}
});
client.login('process.env.BOT_TOKEN');
