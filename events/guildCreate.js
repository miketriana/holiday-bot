module.exports = (client, guild) => {
    const guildId = guild.id;
    console.log(`Joined new guild: ${guildId}`);
    // Add guild to settings database
    client.db.set(guildId, {
        'prefix': '~'
    });
};