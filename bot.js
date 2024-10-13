const { BotClient } = require('./src/BotClient');
const { ChatGptClient } = require('./src/ChatGptClient');

client = new BotClient();
openAiClient = new ChatGptClient();
openAiClient.testMessage();





