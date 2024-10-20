/**
 * Prototype for potential Node API, if it would be useful to split the logic out this way.
 */
const {cardList} = require('../card-list/card-list');

class GetCardsClient {

    list;

    constructor(){
        this.list = [...cardList];
    };

    getCardByName(name) {
        const n = name;
        for(let card of this.list) {
            if(n === card.cardName) {
                return card;
            }
        }
        return 'No card found';
    }

    getCardById(id) {
        const i = id;
        for(let card of this.list) {
            if(i === card.cardId) {
                return card;
            }
        }
        return 'No card found';
    }

    getCardPath(id) {
        return `./downloads/SV3pt5_EN_${id}.png`
    }
}