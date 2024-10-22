module.exports = (sequelize, DataTypes) => {
	return sequelize.define('cards', {
		card_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		card_id: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			primaryKey: true,
		},
        card_rarity: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}, {
		timestamps: false,
	});
};