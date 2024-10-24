module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user_inventory', {
		user_id: DataTypes.STRING,
		card_id: DataTypes.INTEGER,
		amount: {
			type: DataTypes.INTEGER,
			allowNull: false,
			'default': 0,
		},
	}, {
		timestamps: false,
	});
};