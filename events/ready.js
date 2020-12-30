const holidays = require('../utils/holidays');

module.exports = async (client) => {
    console.log('HolidayBot is online.');
    console.log(`Celebrating in ${client.guilds.cache.size} servers.`);
    await holidays.fetch();
    // Do the following every minute after being started
    setInterval(async () => {
        holidays.announce(client);
    }, 60000);
};