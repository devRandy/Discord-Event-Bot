module.exports = (sequelize, DataTypes) => {
	return sequelize.define('cards', {
		card_name: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		card_id: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false,
		},
        card_rarity: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}, {
		timestamps: false,
	});
};