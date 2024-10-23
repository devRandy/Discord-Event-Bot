const { Cards } = require('../dbObjects')
const { Card } = require('../../card-pack/card-interface');

class CardClient {
    c;

    constructor(){
        this.c = Cards;
    }

    async getCardById(cardId) {
        let card  = await this.c.findOne({ where: { card_id: cardId } });
        card = card.toJSON();
        console.log(card.card_id);
        // return new Card(c)
    }

    async getAllCardsByRarity(rarity){
        const cardList = [];
        let cards = await this.c.findAll({ where: { card_rarity: rarity } });
        for(let card of cards) {
            cardList.push(card.toJSON());
        }

        return cardList;
    }

}


module.exports = {
    CardClient
}


