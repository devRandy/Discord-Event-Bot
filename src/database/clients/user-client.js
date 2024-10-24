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
            return this.user.create({ user_id: userId, balance: 500 });
        }

    }

    async getUserById(userId) {

        const newUser = await this.user.findOne({
            where: { user_id: userId }
        });

        return newUser.toJSON();

    }

    async getUserInventory(userId) {
        const i = this.userInv.findAll({
            where: { user_id: userId }
        });

        if (!i) {
            return `You don't have any cards, dingus!`;
        } else {
            console.log('some cards');
        }
    }

}


module.exports = {
    UserClient
}