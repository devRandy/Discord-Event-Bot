const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'src/database/database.sqlite',
});

const Users = require('./models/users.js')(sequelize, Sequelize.DataTypes);
const UserInventory = require('./models/user-inventory.js')(sequelize, Sequelize.DataTypes);
const Cards = require('./models/card-model.js')(sequelize, Sequelize.DataTypes);

UserInventory.belongsTo(Cards, { foreignKey: 'card_id', as: 'card' });

// try {
//     Reflect.defineProperty(Users.prototype, 'addCard', {
//         value: async card => {
//             const userItem = await UserInventory.findOne({
//                 where: { user_id: this.user_id, card_id: card.id },
//             });
    
//             if (userItem) {
//                 userItem.amount += 1;
//                 return userItem.save();
//             }
    
//             return UserInventory.create({ user_id: this.user_id, card_id: card.id, amount: 1 });
//         },
//     });
    
//     Reflect.defineProperty(Users.prototype, 'getCards', {
//         value: () => {
//             return UserInventory.findAll({
//                 where: { user_id: this.user_id },
//                 include: ['card'],
//             });
//         },
//     });

//     Reflect.defineProperty(Cards.prototype, 'getCommonCards', {
//         value: () => {
//             return Cards.findAll({
//                 where: {card_rarity: 'Common' },
//             });
//         },
//     });



  

//     console.log('Succseful Database Sync');

// } catch (error) {
//     console.log(error)
// }



module.exports = { Users, Cards, UserInventory };