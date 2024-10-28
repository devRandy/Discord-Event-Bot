const { SlashCommandBuilder } = require('discord.js');
const { EmbedGenerator } = require('../../card-pack/embed-gen');
const { UserClient } = require('../../database/clients/user-client');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('buypack')
		.setDescription('Buy a basic pack of cards.'),
	async execute(interaction) {
		const userId = interaction.user.id;
		const userClient = new UserClient();
		try {
			const user = await userClient.getUserById(userId);
			if(user.balance) {
				const gen = new EmbedGenerator();
				const pack = await gen.getEmbededBasePack();
				userClient.decreaseUserFunds(userId, 250);
				await interaction.reply({embeds: [...pack.embeds], files: [...pack.files] });
				for(let id of pack.ids) {
					await userClient.addCardToUser(userId, id);
				}

			} else {
				await interaction.reply(`Not enough funds. Your current balance is $${user.balance}, and you need $250`);
			}
		} catch (error) {
			console.log(error);
		}
	},
};
