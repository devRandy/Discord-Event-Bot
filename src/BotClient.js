const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('../auth.json');
const cron = require("node-cron");
const { CHANNELS } = require('./constants');

class BotClient extends Client {

    constructor() {
        super({ intents: [GatewayIntentBits.Guilds] });
        this.init();
    }

    getClient() {
        return this;
    }

    init() {
        this.commands = new Collection();
        this.once(Events.ClientReady, readyClient => {
            console.log(`Ready! Logged in as ${readyClient.user.tag}`);
            // this.scheduleMessage("element.title", "element.readabledate");
        });
        this.login(token);
        this.setCommands();
        this.setCommandEventListner();
    }

    setCommands() {
        const foldersPath = path.join(__dirname, 'commands');
        const commandFolders = fs.readdirSync(foldersPath);
        for (const folder of commandFolders) {
            const commandsPath = path.join(foldersPath, folder);
            const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const filePath = path.join(commandsPath, file);
                const command = require(filePath);
                // Set a new item in the Collection with the key as the command name and the value as the exported module
                if ('data' in command && 'execute' in command) {
                    this.commands.set(command.data.name, command);
                } else {
                    console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
                }
            }
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
        cron.schedule("*/10 * * * * *", function () {
            channel.send({
                content: '<@&1208516988285227068> gamer time!',
                allowedMentions: { roles: ['1208516988285227068'] },
            });
        });
    }
}

module.exports = {
    BotClient
}

