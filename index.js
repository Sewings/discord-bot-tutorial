const Discord = require("discord.js");
const config = require("./Storage/config.json");
const bot = new Discord.Client();

let prefix = "!";

bot.on('ready', () => {
    console.log(`${bot.user.username} is ready !`);
});

bot.on('message', message => {
    if(message.content === `${prefix}ping`){
        message.channel.send("Pong !!");
    }
});

bot.login(config.token);