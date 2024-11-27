const { SlashCommandBuilder } = require('discord.js');
const { UserClient } = require('../../database/clients/user-client');
const { CardClient } = require('../../database/clients/card-client');


module.exports = {
	data: new SlashCommandBuilder()
	.setName('sellcard')
	.setDescription('Sell a card for a credit.')
	.addStringOption(option =>
		option.setName('cardname')
			.setDescription('The card to be sold for a credit. (Must be exact spelling)')
			.setRequired(true)),
	async execute(interaction) {
		const userId = interaction.user.id;
		const cardName = interaction.options.getString('cardname');
		const userClient = new UserClient();
		const cardClient = new CardClient();
		const user = await userClient.getUserById(userId);
		const card = await cardClient.getCardByName(cardName);

		//check if user owns card

		console.log(card.card_rarity);
		await interaction.reply(`${card.card_rarity}`);
	},
};