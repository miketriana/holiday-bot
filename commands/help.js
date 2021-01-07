module.exports = {
    name: 'help',
    description: 'lists all bot commands',
    execute: (client, message, args) => {
        const msg = '\`\`\`\n' +
        'help - lists all commands\n' +
        'today - lists all holidays being celebrated today\n' +
        'month - lists all holidays being celebrated this month\n' +
        'setchannel - changes the channel used for announcements to the current channel\n' +
        'setprefix <prefix> - changes the prefix character used for commands\n' +
        '\`\`\`';
        message.reply(msg);
    }
}