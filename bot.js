const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
const config = require('./utils/config');
client.config = config;

// Load all events from the /events/ folder
fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        // Ignore anything that is not a js file
        if (!file.endsWith('.js')) return;
        // Load event file
        const event = require(`./events/${file}`);
        // Get event name
        let eventName = file.split('.')[0];
        // Assign event handler
        // Calls the event with client passed as the first parameter,
        // followed by the event's normal parameters
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

client.commands = new Discord.Collection();
// Load all commands from the /commands/ folder
fs.readdir('./commands/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        // Ignore anything that is not a js file
        if (!file.endsWith('.js')) return;
        // Load command file
        let command = require(`./commands/${file}`);
        // Get command name
        let commandName = file.split('.')[0];
        // Store command in client
        client.commands.set(commandName, command);
    });
});

// Activate bot
client.login(config.DISCORD_BOT_TOKEN);