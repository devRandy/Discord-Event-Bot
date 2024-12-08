/**
 * Allows a user to join the Collect Em' All game.
 */

const { SlashCommandBuilder } = require('discord.js');
const { UserClient } = require('../../database/clients/user-client');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('joingame')
		.setDescription('Join the Collect Em All Discord game.'),
	async execute(interaction) {
		const userId = interaction.user.id;
		const userClient = new UserClient();
		userClient.addNewUser(userId).then(async () => {
			await interaction.reply(`You have joined the game! Your starting balance of funds is: 500`)
		}).catch(async (error) => {
			console.log(error);
			await interaction.reply(`You have already joined the game.`);
		});
	},
};
