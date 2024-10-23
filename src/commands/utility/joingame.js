/**
 * Allows a user to join the Collect Em' All game.
 */


const { SlashCommandBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('joingame')
		.setDescription('Join the Collect Em All Discord game'),
	async execute(interaction) {
		
		await interaction.reply();
	},
};
