const axios = require('axios');
const moment = require('moment-timezone');
const config = require('./config');

// Keep track of all the holidays happening this year for the following countries
const holidays = {
    au: [],
    br: [],
    ca: [],
    nz: [],
    gb: [],
    us: []
};

// Fetch holiday data from calendarific.com
const fetch = async () => {
    console.log('Fetching holidays...');
    const countries = ['au', 'br', 'ca', 'nz', 'gb', 'us'];
    for (let i = 0; i < countries.length; i++) {
        await fetchCountry(countries[i]);
    }
}

const fetchCountry = async (c) => {
    const list = [];
    const year = getDate(c).format('YYYY');
    const res = await axios.get(`https://calendarific.com/api/v2/holidays?&api_key=${config.HOLIDAY_API_KEY}&country=${c}&year=${year}`);
    if(res.data.meta.code === 200) {
        res.data.response.holidays.forEach(h => {
            const holiday = {
                name: h.name,
                month: h.date.datetime.month,
                day: h.date.datetime.day
            }
            // Prevent duplicates, because this API has them for some reason
            const exists = list.some(v => {
                return JSON.stringify(v) === JSON.stringify(holiday);
            });
            if(!exists) {
                list.push(holiday);
            }
        });
    }
    else {
        console.error(`Error fetching holidays for ${c}.`);
    }
    holidays[c] = list;
}

const getDate = (country) => {
    switch (country) {
        case 'au':
            return moment.tz('Australia/Sydney');
        case 'br':
            return moment.tz('America/Sao_Paulo');
        case 'ca':
            return moment.tz('America/Toronto');
        case 'nz':
            return moment.tz('Pacific/Auckland');
        case 'gb':
            return moment.tz('Europe/London');
        case 'us':
            return moment.tz('America/New_York');
        default:
            return moment.tz('America/New_York');
    }
}

// Get holidays being celebrated today by the given country's time
// Returns a list of NAMES of holidays
const getToday = (country) => {
    // Get the current date for this country
    const time = getDate(country);
    const month = time.format('M');
    const day = time.format('D');

    // Find all holidays being celebrated on that date in this country
    return holidays[country].filter(h => {
        if (h.month === Number(month) && h.day === Number(day)) return h.name;
    }).map(h => h.name);
}

// Get holidays being celebrated this month by the given country's time
// Returns a list of OBJECTS for each holiday
const getThisMonth = (country) => {
    // Get the current date for this country
    const time = getDate(country);
    const month = time.format('M');

    // Find all holidays being celebrated on that month in this country
    const list = [];
    holidays[country].forEach(h => {
        if (h.month === Number(month)) {
            list.push(h);
        }
    })
    return list;
}

const announce = async (client) => {
    // Get local times
    console.log('----------')
    const timeAU = getDate('au');
    console.log('AU time: ', timeAU.format('HH:mm'));
    const timeBR = getDate('br');
    console.log('BR time: ', timeBR.format('HH:mm'));
    const timeCA = getDate('ca');
    console.log('CA time: ', timeCA.format('HH:mm'));
    const timeNZ = getDate('nz');
    console.log('NZ time: ', timeNZ.format('HH:mm'));
    const timeGB = getDate('gb');
    console.log('GB time: ', timeGB.format('HH:mm'));
    const timeUS = getDate('us');
    console.log('US time: ', timeUS.format('HH:mm'));
    
    //00:00 AU
    if (timeAU.format('HH:mm') === '00:00') {
        // Announce AU holidays
        let msg = '🇦🇺 Good morning Australia! Today is:\n';
        const today = getToday('au');
        today.forEach(h => {
            msg = msg.concat(`${h}\n`);
        })
        if (today.length > 0) {
            announceCountry(client, 'au', msg);
        }
    }
    //00:00 BR
    if (timeBR.format('HH:mm') === '00:00') {
        // Announce BR holidays
        let msg = '🇧🇷 Good morning Brazil! Today is:\n';
        const today = getToday('br');
        today.forEach(h => {
            msg = msg.concat(`${h}\n`);
        })
        if (today.length > 0) {
            announceCountry(client, 'br', msg);
        }
    }
    //00:00 CA
    if (timeCA.format('HH:mm') === '00:00') {
        // Announce CA holidays
        let msg = '🇨🇦 Good morning Canada! Today is:\n';
        const today = getToday('ca');
        today.forEach(h => {
            msg = msg.concat(`${h}\n`);
        })
        if (today.length > 0) {
            announceCountry(client, 'ca', msg);
        }
    }
    //00:00 NZ
    if (timeNZ.format('HH:mm') === '00:00') {
        // Announce NZ holidays
        let msg = '🇳🇿 Good morning New Zealand! Today is:\n';
        const today = getToday('nz');
        today.forEach(h => {
            msg = msg.concat(`${h}\n`);
        })
        if (today.length > 0) {
            announceCountry(client, 'nz', msg);
        }
    }
    //00:00 GB / UTC+0
    if (timeGB.format('HH:mm') === '00:00') {
        // Refresh holiday list
        await fetch();
        // Announce UK holidays
        let msg = '🇬🇧 Good morning United Kingdom! Today is:\n';
        const today = getToday('gb');
        today.forEach(h => {
            msg = msg.concat(`${h}\n`);
        })
        if (today.length > 0) {
            announceCountry(client, 'gb', msg);
        }
    }
    //00:00 US
    if (timeUS.format('HH:mm') === '00:00') {
        // Announce US holidays
        let msg = '🇺🇸 Good morning United States! Today is:\n';
        const today = getToday('us');
        today.forEach(h => {
            msg = msg.concat(`${h}\n`);
        })
        if (today.length > 0) {
            announceCountry(client, 'us', msg);
        }
    }
}

const announceCountry = (client, c, msg) => {
    // Make announcement in every guild
    client.guilds.cache.forEach(g => {
        // Check if announcement channel is set
        if (client.db.has(g.id, 'announcementChannel')) {
            // Make the announcement in the proper channel
            client.channels.cache.get(client.db.get(g.id, 'announcementChannel')).send(msg);
        }
    })
}

module.exports = {
    fetch,
    getDate,
    getToday,
    getThisMonth,
    announce
}