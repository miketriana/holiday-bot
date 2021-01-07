module.exports = {
    name: 'setchannel',
    description: 'sets the channel used for announcments to the current channel',
    execute: (client, message, args) => {
        // Check user permissions
        if (!message.member.permissions.has('MANAGE_CHANNELS')) {
            return message.reply('You must have permission to manage channels to use this command.');
        }
        
        // Change the channel setting
        client.db.set(message.guild.id, message.channel.id, 'announcementChannel');
        message.reply('This channel will be used for announcing holidays.');
    }
}