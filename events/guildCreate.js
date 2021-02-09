module.exports = (client, guild) => {
    const guildId = guild.id;
    console.log(`Joined new guild: ${guildId}`);
    // Add guild to settings database
    // and initialize default settings
    client.db.set(guildId, {
        'prefix': '~',
        'followedCountries': ['us']
    });
};