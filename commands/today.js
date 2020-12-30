const holidays = require('../utils/holidays');

module.exports = {
    name: 'today',
    description: 'lists all holidays being celebrated today',
    execute: async (client, message, args) => {

        message.reply('The following holidays are being celebrated today:\n');

        // Australia
        const timeAU = holidays.getDate('au');
        let msgAU = `🇦🇺 It is ${timeAU.format('MMMM D')} in Sydney, Australia. `;
        const holidaysAU = holidays.getToday('au');
        if (holidaysAU.length === 0) {
            msgAU = msgAU.concat('No holidays are being celebrated there today. 😢\n');
        }
        else {
            msgAU = msgAU.concat('Australia is celebrating the following holidays:\n');
            holidaysAU.forEach(h => {
                msgAU = msgAU.concat(`${h}\n`);
            })
        }
        message.channel.send(msgAU);

        // Brazil
        const timeBR = holidays.getDate('br');
        let msgBR = `🇧🇷 It is ${timeBR.format('MMMM D')} in São Paulo, Brazil. `;
        const holidaysBR = holidays.getToday('br');
        if (holidaysBR.length === 0) {
            msgBR = msgBR.concat('No holidays are being celebrated there today. 😢\n');
        }
        else {
            msgBR = msgBR.concat('Brazil is celebrating the following holidays:\n');
            holidaysBR.forEach(h => {
                msgBR = msgBR.concat(`${h}\n`);
            })
        }
        message.channel.send(msgBR);

        // Canada
        const timeCA = holidays.getDate('ca');
        let msgCA = `🇨🇦 It is ${timeCA.format('MMMM D')} in Toronto, Canada. `;
        const holidaysCA = holidays.getToday('ca');
        if (holidaysCA.length === 0) {
            msgCA = msgCA.concat('No holidays are being celebrated there today. 😢\n');
        }
        else {
            msgCA = msgCA.concat('Canada is celebrating the following holidays:\n');
            holidaysCA.forEach(h => {
                msgCA = msgCA.concat(`${h}\n`);
            })
        }
        message.channel.send(msgCA);

        // New Zealand
        const timeNZ = holidays.getDate('nz');
        let msgNZ = `🇳🇿 It is ${timeNZ.format('MMMM D')} in Auckland, New Zealand. `;
        const holidaysNZ = holidays.getToday('nz');
        if (holidaysNZ.length === 0) {
            msgNZ = msgNZ.concat('No holidays are being celebrated there today. 😢\n');
        }
        else {
            msgNZ = msgNZ.concat('New Zealand is celebrating the following holidays:\n');
            holidaysNZ.forEach(h => {
                msgNZ = msgNZ.concat(`${h}\n`);
            })
        }
        message.channel.send(msgNZ);

        // United Kingdom
        const timeGB = holidays.getDate('gb');
        let msgGB = `🇬🇧 It is ${timeGB.format('MMMM D')} in London, England. `;
        const holidaysGB = holidays.getToday('gb');
        if (holidaysGB.length === 0) {
            msgGB = msgGB.concat('No holidays are being celebrated there today. 😢\n');
        }
        else {
            msgGB = msgGB.concat('The United Kingdom is celebrating the following holidays:\n');
            holidaysGB.forEach(h => {
                msgGB = msgGB.concat(`${h}\n`);
            })
        }
        message.channel.send(msgGB);

        // United States
        const timeUS = holidays.getDate('us');
        let msgUS = `🇺🇸 It is ${timeUS.format('MMMM D')} in New York, NY. `;
        const holidaysUS = holidays.getToday('us');
        if (holidaysUS.length === 0) {
            msgUS = msgUS.concat('No holidays are being celebrated there today. 😢\n');
        }
        else {
            msgUS = msgUS.concat('The United States is celebrating the following holidays:\n');
            holidaysUS.forEach(h => {
                msgUS = msgUS.concat(`${h}\n`);
            })
        }
        message.channel.send(msgUS);
    }
}