module.exports = {
    name: 'setprefix',
    description: 'sets the prefix character used for commands',
    execute: (client, message, args) => {
        //Check user permissions

        // Change the prefix setting
        client.db.set(message.guild.id, args[0], 'prefix');
        message.reply(`Set command prefix to \`${args[0]}\`.`);
    }
}