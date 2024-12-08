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

module.exports = { Users, Cards, UserInventory };