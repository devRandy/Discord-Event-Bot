const { AttachmentBuilder } = require('discord.js');
const { PackGenerator } = require('./pack-gen');

class EmbedGenerator {

    embeds;
    files;
    packGen;
    fields;
    cardIDs

    constructor() {
        this.embeds = [];
        this.files = [];
        this.fields = [];
        this.cardIDs = [];
        this.packGen = new PackGenerator();
    }

    async getEmbededBasePack() {
        const cards = await this.packGen.generateBasePack();

        let count = 1;
        for (let card of cards) {
            const file = new AttachmentBuilder(`./downloads/SV3pt5_EN_${card.card_id}.png`);
            const field = {
                name: `Card #${count}`,
                value: `${card.card_name} ${card.card_id}/204`,
                inline: true
            }
            this.fields.push(field);
            this.files.push(file);
            this.cardIDs.push(card.card_id);
            count++;
        }

        const embedTemmplate = {
            color: 0xFF0000,
            title: 'Opened Base Pack',
            description: 'You opened a base pack - see which cards you drew!',
            fields: this.fields,
            // image: {
            // 	url: 'attachment://SV3pt5_EN_1.png',
            // },

        };

        this.embeds.push(embedTemmplate);
        return { embeds: this.embeds, files: this.files, ids: this.cardIDs };
    }

}


module.exports = {
    EmbedGenerator
}