const { SlashCommandBuilder } = require('discord.js');
const { UserClient } = require('../../database/clients/user-client');
const { CardClient } = require('../../database/clients/card-client');
const { RARITY_GROUP } = require('../../card-pack/rarity');

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
		const card = await cardClient.getCardByName(cardName);
		try {
			let removeCard = await userClient.removeCardFromUser(userId, card.card_id);
			if(removeCard) {
				let reply;
				switch(String(card.card_rarity)) {
					case RARITY_GROUP.ultra: 
						await userClient.increaseUserFunds(userId, 120);
						reply = `You sold ${cardName} for 120 Credits.`;
						break;
					case RARITY_GROUP.super:
						await userClient.increaseUserFunds(userId, 80);
						reply = `You sold ${cardName} for 80 Credits.`;
						break;
					case RARITY_GROUP.rare:
						await userClient.increaseUserFunds(userId, 50);
						reply = `You sold ${cardName} for 50 Credits.`;
						break;
					case RARITY_GROUP.uncommon:
						await userClient.increaseUserFunds(userId, 20);
						reply = `You sold ${cardName} for 20 Credits.`;
						break;
					case RARITY_GROUP.common:
						await userClient.increaseUserFunds(userId, 10);
						reply = `You sold ${cardName} for 10 Credits.`;
						break;
				}
				await interaction.reply(reply);
			}
		} catch (exception) {
			console.log(exception);
			await interaction.reply(`There was an error trying to sell that card. Please check the spelling of the card name.`);
		}

	},
};