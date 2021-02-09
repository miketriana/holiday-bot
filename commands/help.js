module.exports = {
    name: 'help',
    description: 'lists all bot commands',
    execute: (client, message, args) => {
        const msg = '\`\`\`\n' +
        'help\t\t\t\t\t\t\t\t  lists all commands\n' +
        'today\t\t\t\t\t\t\t\t lists all holidays being celebrated today\n' +
        'month\t\t\t\t\t\t\t\t lists all holidays being celebrated this month\n' +
        'time <country>\t\t\t\t\t\ttells the current time of day\n' +
        'setchannel\t\t\t\t\t\t\tuses this channel for holiday announcements\n' +
        'setprefix <prefix>\t\t\t\t\tsets the prefix character used for commands\n' +
        'follow <countries>\t\t\t\t\tadds countries to the server\'s followed holidays\n' +
        'unfollow <countries>\t\t\t\t  removes countries from the server\'s followed holidays\n' +
        'followed\t\t\t\t\t\t\t  lists all countries followed by the server\n' +
        '\`\`\`';
        message.reply(msg);
    }
}