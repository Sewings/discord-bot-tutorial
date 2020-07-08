const Discord = require("discord.js");
const config = require("./Storage/config.json");
const bot = new Discord.Client();

let prefix = "!";

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const loadCommands = require("./functions/commands.js");

const load = async () => {
    await loadCommands.run(bot);
}

bot.on('ready', () => {
    console.log(`${bot.user.username} is ready !`);
});

bot.on('message', message => {
    
    const args = message.content.split(/ +/g);
    const command = args.shift().slice(prefix.length).toLowerCase();
    const cmd = bot.commands.get(command) || bot.aliases.get(command);

    if(!message.content.toLowerCase().startsWith(prefix) || !message.guild || message.author.bot || !cmd) return;

    cmd.run(bot, message, args).catch(e => {return console.log(e)});

});

load();
bot.login(config.token);