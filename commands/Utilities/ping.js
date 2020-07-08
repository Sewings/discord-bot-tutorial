const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    message.channel.send(`Pong !`);

}

exports.help = {
    name: "ping",
    aliases: ['pong']
}