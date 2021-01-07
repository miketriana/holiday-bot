module.exports = {
    name: 'settings',
    description: 'lists server settings',
    execute: (client, message, args) => {
        const settings = client.db.get(message.guild.id);
        let msg = '\`\`\`\n';
        Object.keys(settings).forEach(k => {
            msg = msg.concat(`${k}: ${settings[k]}\n`);
        });
        msg = msg.concat('\`\`\`');
        message.reply(msg);
    }
}