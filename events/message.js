module.exports = (client, message) => {
    // Ignore any messages that do not start with the prefix,
    // or were sent by a bot
    const prefix = client.db.ensure(message.guild.id, '~', 'prefix');
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    // Get list of args separated by spaces
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Todo:
    // Automatically refreshes and announces holidays
    if(client.commands.has(command)) {
        client.commands.get(command).execute(client, message, args);
    }
};