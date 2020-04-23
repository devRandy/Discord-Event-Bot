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

            case 'hh':
                var hhParams = args.splice(1);
                console.log('hh call:' + hhParams);
                parseHTML();
                filterHH(hhParams);
                specialsJson = specialsJson.filter(d => d.day == 1);
                console.log(specialsJson);
                specialsJson.forEach(function(special) {
                    bot.sendMessage({
                        //to: channelID,
                        to: "563555502387232768",    // bot-test channel
                        message:
                            "`Day:` " + special.day + " \n" +
                            "`Location:` " + special.location + " \n" +
                            "`Address:` " + special.address + " \n" +
                            "`Special:` " + special.special + " \n"
                    });
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

function parseHTML() {
    var day = 0;
    var req = new XMLHttpRequest();
    req.open('GET', 'https://www.charlotteagenda.com/46773/drink-specials-south-end-charlotte-nc/', false);
    req.send(null);
    var body = getBody(req.responseText);
    var lines = body.split('\n');
    for (var i = 0; i < lines.length; i++) {
        if (lines[i] == '<h1 style="text-align: center;">MONDAY</h1>') {
            day = 1;
            i++;
        }
        if (lines[i][1] == 'p') {
            if (day != 0) {
                var details = lines[i].match(/(?<=\>)(.*?)(?=\<)/g);
                handleUnicode(details);
                var tempJson = {
                    "day": day,
                    "location": details[2],
                    "address": details[5],
                    "special": details[6],
                };
                if (tempJson.location && tempJson.address != undefined) {
                    specialsJson.push(tempJson);
                }
            }
        } else {
            day++;
        }
    }
    // console.log(specialsJson);
}

function getBody(content) {
    var x = content.indexOf("<body");
    x = content.indexOf(">", x);
    var y = content.lastIndexOf("</body>");
    return content.slice(x + 1, y);
}

// function filterHH(hhParams) {
//     var filterDay;
//     switch(hhParams[0].toLowerCase() ) {
//         case 'monday':
//             filterDay = 1;
//         case 'tuesday':
//             filterDay = 2;
//         case 'wednesday':
//             filterDay = 3;
//         case 'thursday':
//             filterDay = 4;
//         case 'friday':
//             filterDay = 5;
//         case 'saturday':
//             filterDay = 6;
//         case 'sunday':
//             filterDay = 7;
//     }
// }

function handleUnicode(details) {
    removeHyphen(details);
    replaceAmpersand(details);
    replaceApostrophe(details);
}

function removeHyphen(details) {
    details.forEach(function(detail, index){
        if(detail.includes('&#8211;')){
            details[index] = detail.replace('&#8211;', '');
        }
    });
    return details;
}

function replaceAmpersand(details) {
    details.forEach(function(detail, index){
        if(detail.includes('&amp;')){
            details[index] = detail.replace('&amp;', '&');
        }
    });
    return details;
}

function replaceApostrophe(details) {
    details.forEach(function(detail, index){
        if(detail.includes('&#8217;')){
            details[index] = detail.replace('&#8217;', '\'');
        }
    });
    return details;
}