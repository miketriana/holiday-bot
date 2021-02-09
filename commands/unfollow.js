module.exports = {
    name: 'unfollow',
    description: 'removes countries from the server\'s followed holidays',
    execute: (client, message, args) => {
        // Check user permissions
        if (!message.member.permissions.has('MANAGE_CHANNELS')) {
            return message.reply('You must have permission to manage channels to use this command.');
        }

        // Handle missing args
        if (args.length === 0) return message.reply('Please specify one or more countries: \`au br ca nz uk us\`');

        // Handle unrecognized country
        let invalid = false;
        args.forEach(country => {
            if (!['au', 'br', 'ca', 'nz', 'uk', 'us'].includes(country)) {
                message.reply(`"${country}" is not a supported country. Please choose one of the following: \`au br ca nz uk us\``);
                invalid = true;
            }
        })
        if (invalid) return;

        // Remove countries from followed list
        let followed = client.db.get(message.guild.id, 'followedCountries');
        args.forEach(country => {
            if (followed && followed.includes(country)) client.db.remove(message.guild.id, country, 'followedCountries');
        });

        return message.reply('Successfully removed countries from followed holidays.');
    }
}