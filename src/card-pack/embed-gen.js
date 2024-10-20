const { AttachmentBuilder } = require('discord.js');

class EmbedGenerator {

    embeds;
    files;

    constructor(){
        this.embeds = [];
        this.files = [];
    }
    
    getEmbededBasePack() {
        const file = new AttachmentBuilder('./downloads/SV3pt5_EN_1.png');
		const file2 = new AttachmentBuilder('./downloads/SV3pt5_EN_2.png');
		const file3 = new AttachmentBuilder('./downloads/SV3pt5_EN_3.png');
		const file4 = new AttachmentBuilder('./downloads/SV3pt5_EN_4.png');
		const exampleEmbed = {
			title: 'Some title',
			url: 'https://discordjs.dev',
			image: {
				url: 'attachment://SV3pt5_EN_1.png',
			},

		};
        this.embeds.push(exampleEmbed);
        this.files.push(file);
        this.files.push(file2);
		const exampleEmbed2 = {
			title: 'Some title',
			url: 'https://discordjs.dev',
			image: {
				url: 'attachment://SV3pt5_EN_2.png',
			},
			
		};
        this.embeds.push(exampleEmbed2);
		const exampleEmbed3 = {
			title: 'Some title',
			url: 'https://discordjs.dev',
			image: {
				url: 'attachment://SV3pt5_EN_3.png',
			},
			
		};
		const exampleEmbed4 = {
			title: 'Some title',
			url: 'https://discordjs.dev',
			image: {
				url: 'attachment://SV3pt5_EN_4.png',
			},
			
		};
    }

}


module.exports = {
    EmbedGenerator
}