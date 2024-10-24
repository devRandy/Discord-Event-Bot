const { Cards } = require('../dbObjects')

/**
 * Client for Cards DB Table
 */
class CardClient {
    c;

    constructor() {
        this.c = Cards;
    }

    async getCardById(cardId) {
        let card = await this.c.findOne({ where: { card_id: cardId } });
        card = card.toJSON();
        console.log(card.card_id);
        return card;
    }

    async getAllCardsByRarity(rarity) {
        const cardList = [];
        let cards = await this.c.findAll({ where: { card_rarity: rarity } });
        for (let card of cards) {
            cardList.push(card.toJSON());
        }

        return cardList;
    }

}

module.exports = {
    CardClient
}


