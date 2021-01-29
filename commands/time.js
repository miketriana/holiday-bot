const { getDate } = require('../utils/holidays');

module.exports = {
    name: 'time',
    description: 'tells the current time of day',
    execute: (client, message, args) => {
        switch (args[0]) {
            case 'au':
                const timeAU = getDate('au');
                return message.reply(`It is ${timeAU.format('h:mm a, MMM D')} in Sydney, Australia. 🇦🇺`);
            case 'br':
                const timeBR = getDate('br');
                return message.reply(`It is ${timeBR.format('h:mm a, MMM D')} in São Paulo, Brazil. 🇧🇷`);
            case 'ca':
                const timeCA = getDate('ca');
                return message.reply(`It is ${timeCA.format('h:mm a, MMM D')} in Toronto, Canada. 🇨🇦`);
            case 'nz':
                const timeNZ = getDate('nz');
                return message.reply(`It is ${timeNZ.format('h:mm a, MMM D')} in Auckland, New Zealand. 🇳🇿`);
            case 'uk':
                const timeGB = getDate('gb');
                return message.reply(`It is ${timeGB.format('h:mm a, MMM D')} in London, England. 🇬🇧`);
            case 'us':
                const timeUS = getDate('us');
                return message.reply(`It is ${timeUS.format('h:mm a, MMM D')} in New York, NY. 🇺🇸`);
            default:
                return message.reply('Please specify a country: \`au br ca nz uk us\`');
        }
    }
}