const { RARITY_GROUP } = require('./rarity')

/**
 * Generates packs of cards
 */
class PackGen {
    cards;

    constructor(){
        this.cards = [];
    };

    generateBasePack() {
        for(let x  = 0; x < 4; x++) {
            console.log(this.rollRarityGroup());
        }
    }

    rollRarityGroup() {
        const roll = Math.floor(Math.random() * 10) + 1;
        switch(roll) {
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
    PackGen
}


const pack = new PackGen();

pack.generateBasePack();