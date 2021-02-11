# Celebrate!
HolidayBot is a Discord chat bot that wishes people happy holidays! Invite HolidayBot to your server, tell it which countries' holidays your server celebrates, and give it a channel to announce in. The bot will post automatic announcements each morning in the respective time zone to alert the server of any holidays being celebrated.

The bot currently supports only six countries, but more worldwide support is planned in the future.

[Click here](https://discord.com/api/oauth2/authorize?client_id=788961423057092618&permissions=199680&scope=bot) to invite the bot to your server.

### Commands
| Command | Description |
| ------------ | ------------- |
| help | Lists all commands. |
| today | Lists all holidays being celebrated today in countries followed by the server. |
| month | Lists all holidays being celebrated this month in countries followed by the server. |
| time \<country\> | Tells the current time of day in the given country. |
| setchannel | Tells the bot to use the current channel for holiday announcements. |
| setprefix \<prefix\> | Sets the prefix character used for commands. '~' by default. |
| follow \<countries\> | Adds the given countries to the server's followed holidays. See list below. |
| unfollow \<countries\> | Removes the given countries from the server's followed holidays. See list below. |
| followed | Lists all countries followed by the server. |

Currently supported countries include:
* `au` (Australia)
* `br` (Brazil)
* `ca` (Canada)
* `nz` (New Zealand)
* `uk` (United Kingdom)
* `us` (United States)