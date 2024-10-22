module.exports = (sequelize, DataTypes) => {
	return sequelize.define('shop', {
		item_id: {
			type: DataTypes.INTEGER,
			unique: true,
		},
		item_name: {
			type: DataTypes.STRING,
			unique: true,
		},
		item_cost: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	}, {
		timestamps: false,
	});
};