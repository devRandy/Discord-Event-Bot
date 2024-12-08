const { SlashCommandBuilder, codeBlock } = require('discord.js');
const { UserClient } = require('../../database/clients/user-client');
const { CardClient } = require('../../database/clients/card-client');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('mycollection')
		.setDescription('Gets your collection of cards as a list'),
	async execute(interaction) {
		const userId = interaction.user.id;
		const userClient = new UserClient();
		const cardClient = new CardClient();
		const cardList = await userClient.getUserInventory(userId);
		const cardStrings = [];
		for (card of cardList) {
			const c = await cardClient.getCardById(card.card_id);
			const cString = `\nName: ${c.card_name} ${card.card_id}/204 Total Owned: ${card.amount}`;
			cardStrings.push(cString);
		}
		await interaction.reply(codeBlock('js', cardStrings.sort()));
	},
};