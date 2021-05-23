module.exports = {
    name: 'setprefix',
    description: 'sets the prefix character used for commands',
    execute: (client, message, args) => {
        // Check user permissions
        if (!message.member.permissions.has('MANAGE_CHANNELS')) {
            return message.reply('You must have permission to manage channels to use this command.');
        }

        // Handle missing args
        if (args.length === 0) return message.reply('Please specify a character to use as the prefix.');

        // Change the prefix setting
        client.db.set(message.guild.id, args[0], 'prefix');
        message.reply(`Set command prefix to \`${args[0]}\`.`);
    }
}