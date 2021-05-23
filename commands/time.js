const moment = require('moment-timezone');

module.exports = {
    name: 'time',
    description: 'tells the current time of day',
    execute: (client, message, args) => {
        let msg = '';

        switch (args[0]) {
            case 'au':
                msg = msg.concat('⌚ **Time in Australia:** 🇦🇺\n');
                msg = msg.concat(`AWST (Western Australia): ${moment.tz('Australia/Perth').format('h:mm a, MMM D')}\n`);
                msg = msg.concat(`ACST (Northern Territory): ${moment.tz('Australia/Darwin').format('h:mm a, MMM D')}\n`);
                msg = msg.concat(`ACST / ACDT ☀ (South Australia): ${moment.tz('Australia/Adelaide').format('h:mm a, MMM D')}\n`);
                msg = msg.concat(`AEST (Queensland): ${moment.tz('Australia/Brisbane').format('h:mm a, MMM D')}\n`);
                msg = msg.concat(`AEST / AEDT ☀ (NSW): ${moment.tz('Australia/Sydney').format('h:mm a, MMM D')}`);
                break;
            case 'br':
                msg = msg.concat('⌚ **Time in Brazil:** 🇧🇷\n');
                msg = msg.concat(`ACT (Acre): ${moment.tz('America/Rio_Branco').format('h:mm a, MMM D')}\n`);
                msg = msg.concat(`AMT (Amazon): ${moment.tz('America/Manaus').format('h:mm a, MMM D')}\n`);
                msg = msg.concat(`BRT (Brasília): ${moment.tz('America/Sao_Paulo').format('h:mm a, MMM D')}\n`);
                msg = msg.concat(`FNT (Fernando de Noronha): ${moment.tz('America/Noronha').format('h:mm a, MMM D')}`);
                break;
            case 'ca':
                msg = msg.concat('⌚ **Time in Canada:** 🇨🇦\n');
                msg = msg.concat(`PST / PDT ☀ (Pacific): ${moment.tz('America/Vancouver').format('h:mm a, MMM D')}\n`);
                msg = msg.concat(`MST / MDT ☀ (Mountain): ${moment.tz('America/Edmonton').format('h:mm a, MMM D')}\n`);
                msg = msg.concat(`CST / CDT ☀ (Central): ${moment.tz('America/Winnipeg').format('h:mm a, MMM D')}\n`);
                msg = msg.concat(`EST / EDT ☀ (Eastern): ${moment.tz('America/Toronto').format('h:mm a, MMM D')}\n`);
                msg = msg.concat(`AST / ADT ☀ (Atlantic): ${moment.tz('America/Halifax').format('h:mm a, MMM D')}\n`);
                msg = msg.concat(`NST / NDT ☀ (Newfoundland): ${moment.tz('America/St_Johns').format('h:mm a, MMM D')}`);
                break;
            case 'nz':
                msg = msg.concat('⌚ **Time in New Zealand:** 🇳🇿\n');
                msg = msg.concat(`NZST / NZDT ☀: ${moment.tz('Pacific/Auckland').format('h:mm a, MMM D')}\n`);
                msg = msg.concat(`CHAST / CHADT ☀ (Chatham Islands) : ${moment.tz('Pacific/Chatham').format('h:mm a, MMM D')}`);
                break;
            case 'uk':
                msg = msg.concat('⌚ **Time in The United Kingdom:** 🇬🇧\n');
                msg = msg.concat(`GMT / BST ☀ (London): ${moment.tz('Europe/London').format('h:mm a, MMM D')}`);
                break;
            case 'us':
                msg = msg.concat('⌚ **Time in The United States:** 🇺🇸\n');
                msg = msg.concat(`PST / PDT ☀ (Pacific): ${moment.tz('America/Los_Angeles').format('h:mm a, MMM D')}\n`);
                msg = msg.concat(`MST / MDT ☀ (Mountain): ${moment.tz('America/Denver').format('h:mm a, MMM D')}\n`);
                msg = msg.concat(`CST / CDT ☀ (Central): ${moment.tz('America/Chicago').format('h:mm a, MMM D')}\n`);
                msg = msg.concat(`EST / EDT ☀ (Eastern): ${moment.tz('America/New_York').format('h:mm a, MMM D')}`);
                break;
            default:
                msg = 'Please specify a country: \`au br ca nz uk us\`';
        }

        return message.reply(msg);
    }
}