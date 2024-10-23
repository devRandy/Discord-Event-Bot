class Card {
    cardId;
    cardName;
    // cardFilepath;
    cardRarity;

    constructor(id, name, rarity) {
        this.cardId = id;
        this.cardName = name;
        // this.cardFilepath = path;
        this.cardRarity = rarity;
    }
}


module.exports = { Card};