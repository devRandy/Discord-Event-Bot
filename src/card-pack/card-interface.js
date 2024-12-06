class Card {
    cardId;
    cardName;
    cardRarity;

    constructor(id, name, rarity) {
        this.cardId = id;
        this.cardName = name;
        this.cardRarity = rarity;
    }
}

module.exports = { Card};