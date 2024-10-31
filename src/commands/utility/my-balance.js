const { SlashCommandBuilder } = require('discord.js');
const { UserClient } = require('../../database/clients/user-client');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('mybalance')
		.setDescription('Display your balance'),
	async execute(interaction) {
		const userId = interaction.user.id;
		const userClient = new UserClient();
		const balance = await userClient.getUserBalance(userId);
		await interaction.reply(`Your balance is $${balance}`);
	},
};