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
        const roll = Math.floor(Math.random() * 20) + 1;
        switch (roll) {
            case 20:
            case 19:
                return RARITY_GROUP.ultra;
            case 18:
            case 17:        
            case 16:
                return RARITY_GROUP.super;
            case 15:
            case 14:
            case 13:
            case 12:
            case 11:
                return RARITY_GROUP.rare;
            case 10:
            case 9:
            case 8:
            case 7:
                return RARITY_GROUP.uncommon;
            case 6:
            case 5:
            case 4:
            case 3:
            case 2:
            case 1:
            default:
                return RARITY_GROUP.common;
        }
    }
}

module.exports = {
    PackGenerator
}
