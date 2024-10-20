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
        this.files.push(file);
        this.files.push(file2);
        this.files.push(file3);
        this.files.push(file4);
		const exampleEmbed = {
            color: 0xFF0000,
			title: 'Opend Base Pack',
			url: 'http://google.com',
            description: 'You opened a base pack - see which cards you drew!',
            fields: [
                {
                    name: 'Card 1',
                    value: 'Name',
                    inline: true
                },
                {
                    name: 'Card 2',
                    value: 'Name',
                    inline: true
                },
                {
                    name: 'Card 3',
                    value: 'Name',
                    inline: true
                },
                {
                    name: 'Card 4',
                    value: 'Name',
                    inline: true
                },
            ],
			image: {
				url: 'attachment://SV3pt5_EN_1.png',
			},

		};
		const exampleEmbed2 = {
			title: 'Some title',
			url: 'http://google.com',
            fields: [
                {
                    name: 'Card 2',
                    value: 'Name',
                },
            ],
			image: {
				url: 'attachment://SV3pt5_EN_2.png',
			},
			
		};
		const exampleEmbed3 = {
			title: 'Some title',
			url: 'http://google.com',
			image: {
				url: 'attachment://SV3pt5_EN_3.png',
			},
			
		};
		const exampleEmbed4 = {
			title: 'Some title',
			url: 'http://google.com',
			image: {
				url: 'attachment://SV3pt5_EN_4.png',
			},
			
		};
        this.embeds.push(exampleEmbed);
        this.embeds.push(exampleEmbed2);
        this.embeds.push(exampleEmbed3);
        this.embeds.push(exampleEmbed4);
    }

}


module.exports = {
    EmbedGenerator
}