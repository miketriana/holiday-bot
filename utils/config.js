require('dotenv').config();

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const HOLIDAY_API_KEY = process.env.HOLIDAY_API_KEY;
const GENERAL_CHANNEL_ID = process.env.GENERAL_CHANNEL_ID;

module.exports = {
    DISCORD_BOT_TOKEN,
    HOLIDAY_API_KEY,
    GENERAL_CHANNEL_ID
}