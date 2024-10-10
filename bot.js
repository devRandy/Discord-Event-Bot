var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var specialsJson = [];

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');

    // console.log(bot.users);
});

// const server = bot.guilds.get(message.guild.id).id;


bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        switch (cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
                break;

            case 'event':
                args = args.splice(1);
                var eventDetails = args.join(' ');
                eventDetails = eventDetails.split(';', 4);
                console.log(eventDetails.length);
                if (eventDetails.length == 4) {
                    console.log('events call: ' + args);
                    bot.sendMessage({
                        to: "555224847991439362", // events channel
                        // to: "563555502387232768",    // bot-test channel
                        message:
                            "`Event Name:` " + eventDetails[0] + " \n" +
                            "`Date and Time:` " + eventDetails[1] + " \n" +
                            "`Address:` " + eventDetails[2] + " \n" +
                            "`Description:` " + eventDetails[3] + " \n" +
                            "`Brought to you By:` " + user + " \n"
                    });
                } else {
                    bot.sendMessage({
                        to: channelID,
                        message: "Example: \n !event [Event Title] ; [Date and Time] ; [Address/Location] ; [Event Description]"
                    });
                }
                break;

            case 'help':
                console.log('help call');
                bot.sendMessage({
                    to: channelID,
                    message: "Example: \n !event [Event Title] ; [Date and Time] ; [Address/Location] ; [Event Description]"
                });
                break;
            default:
                bot.sendMessage({
                    to: channelID,
                    message: "Example: \n !event [Event Title] ; [Date and Time] ; [Address/Location] ; [Event Description]"
                });
        }
    }
});

bot.on('guildMemberAdd', (guildMember) => {
    guildMember.addRole(guildMember.guild.roles.find(
        role => role.name === "Friends"));
})

