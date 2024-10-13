const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('commands')
		.setDescription('Lists all avalible commands!'),
	async execute(interaction) {
		await interaction.reply('test');
	},
};
