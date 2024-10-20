const { Client, Collection, Events, GatewayIntentBits, REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('../auth.json');
const cron = require("node-cron");
const { CHANNELS } = require('./constants');
const { BotUtils } = require('./Utils');
const { AttachmentBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');


class BotClient extends Client {
    commandList;

    constructor() {
        super({ intents: [GatewayIntentBits.Guilds] });
        this.init();
    }

    init() {
        this.once(Events.ClientReady, readyClient => {
            console.log(`Ready! Logged in as ${readyClient.user.tag}`);
            // this.scheduleMessage("element.title", "element.readabledate");
            // this.sendImages();
        });
        this.login(token);
        this.setCommandList(BotUtils.getCommands());
        this.setCommands(this.commandList);
        this.setCommandEventListner();
    }

    setCommandList(commandList) {
        this.commandList = commandList
    }

    setCommands(commandList) {
        this.commands = new Collection();
        for (let command of commandList) {
            this.commands.set(command.data.name, command);
        }
    }

    setCommandEventListner() {
        //command interactions
        this.on(Events.InteractionCreate, interaction => {
            console.log(interaction);
        });

        this.on(Events.InteractionCreate, interaction => {
            if (!interaction.isChatInputCommand()) return;
            console.log(interaction);
        });

        this.on(Events.InteractionCreate, async interaction => {
            if (!interaction.isChatInputCommand()) return;

            const command = interaction.client.commands.get(interaction.commandName);

            if (!command) {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
                } else {
                    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
                }
            }
        });
    }

    scheduleMessage() {
        const channel = client.channels.cache.get(CHANNELS.bot_test);
        cron.schedule("0 8 * * 1", function () {
            console.log("running a task every monday at 8am");
        });
        cron.schedule("0 16 * * 1", function () {
            console.log("running a task every monday at 4pm");
        });
        // cron.schedule("*/10 * * * * *", function () {
        //     channel.send({
        //         content: '<@&1208516988285227068> gamer time!',
        //         allowedMentions: { roles: ['1208516988285227068'] },
        //     });
        // });
        cron.schedule("*/10 * * * * *", function () {
            
            console.log('Sending IMages');
            
        });
    }

    sendImages() {
        console.log("In Send Images");
        const channel = client.channels.cache.get(CHANNELS.bot_test);
        const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
    
        channel.send({ embeds: [exampleEmbed] });
    }

    async pushCommands() {
        const rest = new REST().setToken(token);
        const commands = [];
        for (let command of this.commandList) {
            commands.push(command.data.toJSON());
        }
        try {
            console.log(`Started refreshing ${commands.length} application (/) commands.`);
            // The put method is used to fully refresh all commands in the guild with the current set
            const data = await rest.put(
                Routes.applicationGuildCommands(clientId, guildId),
                { body: commands },
            );
            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {
            // And of course, make sure you catch and log any errors!
            console.error(error);
        }
    }
}

module.exports = {
    BotClient
}

