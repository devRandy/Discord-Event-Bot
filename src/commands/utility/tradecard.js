const { SlashCommandBuilder } = require('discord.js');
const { UserClient } = require('../../database/clients/user-client');
const { CardClient } = require('../../database/clients/card-client');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tradecard')
		.setDescription('Trade a card to a user.')
		.addStringOption(option =>
			option.setName('cardname')
				.setDescription('The card to be traded. (Must be exact spelling)')
				.setRequired(true))
		.addUserOption(option =>
			option.setName('username')
				.setDescription('The user to trade the card to.')
				.setRequired(true)),
	async execute(interaction) {
		const userId = interaction.user.id;
		const cardName = interaction.options.getString('cardname');
		const target = interaction.options.getUser('username');
		if (userId === target.id) {
			await interaction.reply(`You cannot trade a card to yourself.`);
			return;
		}
		const userClient = new UserClient();
		const cardClient = new CardClient();
		const checkUser = await userClient.getUserById(target.id);
		if (!checkUser) {
			await interaction.reply(`${target.toString()} is not currently registed to play, ask them to use /joingame`);
			return;
		}
		const cardId = await cardClient.getCardByName(cardName);
		if (cardId) {
			const removeCardResult = await userClient.removeCardFromUser(userId, cardId.card_id);
			const addCardResult = await userClient.addCardToUser(target.id, cardId.card_id);
			if (removeCardResult && addCardResult) {
				await interaction.reply(`You are trading ${cardName} to ${target.toStirng()}`);
				await interaction.followUp(`${target.toString()} you recived a card!`);
			} else {
				await interaction.reply(`There seems to have been some kind of issue, please ask C-boi or Randizzle for help.`);
			}
		} else {
			await interaction.reply(`You don't currently own that card, did you spell the name right ya dingus?`);
		}

	},
};