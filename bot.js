const { BotClient } = require('./src/BotClient');

client = new BotClient();

/**
 * Uncomment to publish new slash commands
 * Only needs to be once done when a new command is created.
 */
client.pushCommands();