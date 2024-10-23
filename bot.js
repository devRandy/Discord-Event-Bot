const { BotClient } = require('./src/BotClient');
const { CardClient } = require('./src/database/clients/card-client');

// client = new BotClient();

client = new CardClient();

// client.getCardById(2);
client.getAllCardsByRarity('Common');

/**
 * Uncomment to publish new slash commands
 * Only needs to be once done when a new command is created.
 */
// client.pushCommands();