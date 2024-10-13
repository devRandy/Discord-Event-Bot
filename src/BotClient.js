const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('../auth.json');
const cron = require("node-cron");
const { CHANNELS } = require('./constants');
const { BotUtils } = require('./Utils');

class BotClient extends Client {

    constructor() {
        super({ intents: [GatewayIntentBits.Guilds] });
        this.init();
    }

    getClient() {
        return this;
    }

    init() {
        this.once(Events.ClientReady, readyClient => {
            console.log(`Ready! Logged in as ${readyClient.user.tag}`);
            // this.scheduleMessage("element.title", "element.readabledate");
        });
        this.login(token);
        this.setCommands();
        this.setCommandEventListner();
    }

    setCommands() {
        this.commands = new Collection();
        const commandList = BotUtils.getCommands();
        for(let command of commandList) {
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

