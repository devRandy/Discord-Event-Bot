const { SlashCommandBuilder } = require('discord.js');
const { EmbedGenerator } = require('../../card-pack/embed-gen');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('buypack')
		.setDescription('Buys a basic pack of cards.'),
	async execute(interaction) {
		//TODO: Check to see if users has correct amount of credits to purchase

		const gen = new EmbedGenerator();
		gen.getEmbededBasePack();
		
		await interaction.reply({embeds: [...gen.embeds], files: [...gen.files] });
	},
};
