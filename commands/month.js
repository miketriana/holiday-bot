const holidays = require('../utils/holidays');

module.exports = {
    name: 'month',
    description: 'lists all holidays being celebrated this month',
    execute: async (client, message, args) => {

        message.reply('The following holidays are being celebrated this month:\n');

        // Australia
        const timeAU = holidays.getDate('au');
        let msgAU = `🇦🇺 It is ${timeAU.format('MMMM D')} in Sydney, Australia. `;
        const holidaysAU = holidays.getThisMonth('au');
        if (holidaysAU.length === 0) {
            msgAU = msgAU.concat('No holidays are being celebrated there this month. 😢\n');
        }
        else {
            msgAU = msgAU.concat('Australia celebrates the following holidays this month:\n');
            holidaysAU.forEach(h => {
                msgAU = msgAU.concat(`${timeAU.format('MMMM')} ${h.day}: ${h.name}\n`);
            })
        }
        message.channel.send(msgAU);

        // Brazil
        const timeBR = holidays.getDate('br');
        let msgBR = `🇧🇷 It is ${timeBR.format('MMMM D')} in São Paulo, Brazil. `;
        const holidaysBR = holidays.getThisMonth('br');
        if (holidaysBR.length === 0) {
            msgBR = msgBR.concat('No holidays are being celebrated there this month. 😢\n');
        }
        else {
            msgBR = msgBR.concat('Brazil celebrates the following holidays this month:\n');
            holidaysBR.forEach(h => {
                msgBR = msgBR.concat(`${timeBR.format('MMMM')} ${h.day}: ${h.name}\n`);
            })
        }
        message.channel.send(msgBR);

        // Canada
        const timeCA = holidays.getDate('ca');
        let msgCA = `🇨🇦 It is ${timeCA.format('MMMM D')} in Toronto, Canada. `;
        const holidaysCA = holidays.getThisMonth('ca');
        if (holidaysCA.length === 0) {
            msgCA = msgCA.concat('No holidays are being celebrated there this month. 😢\n');
        }
        else {
            msgCA = msgCA.concat('Canada celebrates the following holidays this month:\n');
            holidaysCA.forEach(h => {
                msgCA = msgCA.concat(`${timeCA.format('MMMM')} ${h.day}: ${h.name}\n`);
            })
        }
        message.channel.send(msgCA);

        // New Zealand
        const timeNZ = holidays.getDate('nz');
        let msgNZ = `🇳🇿 It is ${timeNZ.format('MMMM D')} in Auckland, New Zealand. `;
        const holidaysNZ = holidays.getThisMonth('nz');
        if (holidaysNZ.length === 0) {
            msgNZ = msgNZ.concat('No holidays are being celebrated there this month. 😢\n');
        }
        else {
            msgNZ = msgNZ.concat('New Zealand celebrates the following holidays this month:\n');
            holidaysNZ.forEach(h => {
                msgNZ = msgNZ.concat(`${timeNZ.format('MMMM')} ${h.day}: ${h.name}\n`);
            })
        }
        message.channel.send(msgNZ);

        // United Kingdom
        const timeGB = holidays.getDate('gb');
        let msgGB = `🇬🇧 It is ${timeGB.format('MMMM D')} in London, England. `;
        const holidaysGB = holidays.getThisMonth('gb');
        if (holidaysGB.length === 0) {
            msgGB = msgGB.concat('No holidays are being celebrated there this month. 😢\n');
        }
        else {
            msgGB = msgGB.concat('The United Kingdom celebrates the following holidays this month:\n');
            holidaysGB.forEach(h => {
                msgGB = msgGB.concat(`${timeGB.format('MMMM')} ${h.day}: ${h.name}\n`);
            })
        }
        message.channel.send(msgGB);

        // United States
        const timeUS = holidays.getDate('us');
        let msgUS = `🇺🇸 It is ${timeUS.format('MMMM D')} in New York, NY. `;
        const holidaysUS = holidays.getThisMonth('us');
        if (holidaysUS.length === 0) {
            msgUS = msgUS.concat('No holidays are being celebrated there this month. 😢\n');
        }
        else {
            msgUS = msgUS.concat('The United States celebrates the following holidays this month:\n');
            holidaysUS.forEach(h => {
                msgUS = msgUS.concat(`${timeUS.format('MMMM')} ${h.day}: ${h.name}\n`);
            })
        }
        message.channel.send(msgUS);
    }
}