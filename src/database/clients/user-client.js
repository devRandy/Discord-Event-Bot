const { Users, UserInventory } = require('../dbObjects')

/**
 * Client for Users and UserInvetory DB Tables
 */
class UserClient {
    user;
    userInv;

    constructor() {
        this.user = Users;
        this.userInv = UserInventory;
    }

    async addNewUser(userId) {
        const newUser = await this.user.findOne({
            where: { user_id: userId }
        });

        if (newUser) {
            throw new Error(`User with ${userId} already exsists in database`);

        } else {
            console.log(`User with ${userId} added to Users table.`)
            return this.user.create({ user_id: userId, balance: 5000 });
        }
    }

    async getUserById(userId) {
        const newUser = await this.user.findOne({
            where: { user_id: userId }
        });
        return newUser.toJSON();
    }

    async getAllUsers() {
        const userList = await this.user.findAll();
        if (userList) {
            //TODO: Return full user list
        }
    }

    async getUserInventory(userId) {
        const cardList = [];
        const i = await this.userInv.findAll({
            where: { user_id: userId }
        });

        if (!i) {
            console.log('User has empty inventory');
        } else if (i.length === 1) {
            cardList.push(i.toJSON());
        } else {
            for (let card of i) {
                cardList.push(card.toJSON());
            }
        }
        return cardList;
    }

    async decreaseUserFunds(userId, amount) {
        await this.user.increment({ balance: -amount }, { where: { user_id: userId } });
        console.log('Decreased user funds');
    }

    async increaseUserFunds(userId, amount) {
        await this.user.increment({ balance: amount }, { where: { user_id: userId } });
        console.log('Increased user funds');
    }

    async addCardToUser(userId, cardId) {
        const userCard = await this.userInv.findOne({ where: { user_id: userId, card_id: cardId } });

        if (userCard) {
            console.log(`Increase ${cardId} by 1`);
            return await this.userInv.increment({ amount: 1 }, { where: { user_id: userId, card_id: cardId } });
        } else {
            console.log(`Added ${cardId} to ${userId}`);
            return this.userInv.create({ user_id: userId, card_id: cardId, amount: 1 });
        }
    }

}

module.exports = {
    UserClient
}