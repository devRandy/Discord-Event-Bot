const { RARITY_GROUP } = require('./rarity');
const { CardClient } = require('../database/clients/card-client');

/**
 * Generates packs of cards
 */
class PackGenerator {
    cards;
    cardClient;

    constructor() {
        this.cards = [];
        this.cardClient = new CardClient();
    };

    async generateBasePack() {
        const cards = [];

        for (let x = 0; x < 4; x++) {
            const card = await this.getRandomCardFromRarity(this.rollRarityGroup());
            cards.push(card);
        }
        return cards;
    }

    async getRandomCardFromRarity(rarity) {

        const cardList = await this.cardClient.getAllCardsByRarity(rarity);
        const roll = Math.floor(Math.random() * cardList.length) + 1;
        return cardList[roll - 1];
    }

    rollRarityGroup() {
        const roll = Math.floor(Math.random() * 10) + 1;
        switch (roll) {
            case 10:
                return RARITY_GROUP.ultra;
            case 9:
                return RARITY_GROUP.super;
            case 8:
            case 7:
                return RARITY_GROUP.rare;
            case 6:
            case 5:
                return RARITY_GROUP.uncommon;
            default:
                return RARITY_GROUP.common;
        }
    }
}

module.exports = {
    PackGenerator
}
