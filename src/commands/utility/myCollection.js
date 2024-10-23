const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mycollection')
		.setDescription('Gets your collection of cards as a list'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};