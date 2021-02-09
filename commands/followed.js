const follow = require("./follow");

module.exports = {
    name: 'followed',
    description: 'lists all countries followed by the server',
    execute: (client, message, args) => {
        const followed = client.db.get(message.guild.id, 'followedCountries');

        if(!followed || followed.length === 0) return message.reply(`This server doesn't seem to celebrate any holidays. Use \`${client.db.get(message.guild.id, 'prefix')}follow\` to add a country!`);
        return message.reply(`This server celebrates holidays from the following countries: \`${followed.join(' ')}\``);
    }
}