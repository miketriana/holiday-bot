module.exports = {
    name: 'setchannel',
    description: 'sets the channel used for announcments to the current channel',
    execute: (client, message, args) => {
        // Check user permissions

        // Change the channel setting
        client.db.set(message.guild.id, message.channel.id, 'announcementChannel');
        message.reply('This channel will be used for announcing holidays.');
    }
}