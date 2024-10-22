const { RARITY_GROUP } = require("../card-pack/rarity");

/**
 * Prototype for potential Node API, if it would be useful to split the logic out this way.
 */
class GetCardsClient {

    list;

    constructor(){
        this.list = [new Card(1,"card one", RARITY_GROUP.common)];
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