const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'src/database/database.sqlite',
});

const CurrencyShop = require('./models/shop.js')(sequelize, Sequelize.DataTypes);
const CardData = require('./models/card-model.js')(sequelize, Sequelize.DataTypes);
require('./models/users.js')(sequelize, Sequelize.DataTypes);
require('./models/user-inventory.js')(sequelize, Sequelize.DataTypes);

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize.sync({ force }).then(async () => {
	const shop = [
		CurrencyShop.upsert({item_id: 1, item_name: 'Basic Pack', item_cost: 250 }),

		CardData.upsert({ card_name: 'Bulbasaur', card_id: 1, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Ivysaur', card_id: 2, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Venusaur EX', card_id: 3, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Charmander', card_id: 4, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Charmeleon', card_id: 5, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Charizard EX', card_id: 6, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Squirtle', card_id: 7, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Wartortle', card_id: 8, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Blastoise EX', card_id: 9, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Caterpie', card_id: 10, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Metapod', card_id: 11, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Butterfree', card_id: 12, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Weedle', card_id: 13, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Kakuna', card_id: 14, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Beedrill', card_id: 15, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Pidgey', card_id: 16, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Pidgeotto', card_id: 17, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Pidgeot', card_id: 18, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Rattata', card_id: 19, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Raticate', card_id: 20, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Spearow', card_id: 21, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Fearow', card_id: 22, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Ekans', card_id: 23, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Arbok EX', card_id: 24, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Pikachu', card_id: 25, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Raichu', card_id: 26, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Sandshrew', card_id: 27, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Sandslash', card_id: 28, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Nidoran', card_id: 29, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Nidorina', card_id: 30, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Nidoqueen', card_id: 31, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Nidoran', card_id: 32, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Nidorino', card_id: 33, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Nidoking', card_id: 34, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Clefairy', card_id: 35, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Clefable', card_id: 36, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Vulpix', card_id: 37, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Ninetales EX', card_id: 38, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Jigglypuff', card_id: 39, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Wigglytuff EX', card_id: 40, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Zubat', card_id: 41, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Golbat', card_id: 42, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Oddish', card_id: 43, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Gloom', card_id: 44, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Vileplume', card_id: 45, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Paras', card_id: 46, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Parasect', card_id: 47, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Venonat', card_id: 48, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Venomoth', card_id: 49, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Diglett', card_id: 50, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Dugtrio', card_id: 51, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Meowth', card_id: 52, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Persian', card_id: 53, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Psyduck', card_id: 54, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Golduck', card_id: 55, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Mankey', card_id: 56, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Primeape', card_id: 57, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Growlithe', card_id: 58, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Arcanine', card_id: 59, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Poliwag', card_id: 60, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Poliwhirl', card_id: 61, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Poliwrath', card_id: 62, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Abra', card_id: 63, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Kadabra', card_id: 64, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Alakazam EX', card_id: 65, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Machop', card_id: 66, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Machoke', card_id: 67, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Machamp', card_id: 68, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Bellsprout', card_id: 69, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Weepinbell', card_id: 70, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Victreebel', card_id: 71, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Tentacool', card_id: 72, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Tentacruel', card_id: 73, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Geodude', card_id: 74, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Graveler', card_id: 75, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Golem EX', card_id: 76, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Ponyta', card_id: 77, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Rapidash', card_id: 78, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Slowpoke', card_id: 79, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Slowbro', card_id: 80, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Magnemite', card_id: 81, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Magneton', card_id: 82, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Farfetchd', card_id: 83, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Doduo', card_id: 84, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Dodrio', card_id: 85, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Seel', card_id: 86, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Dewgong', card_id: 87, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Grimer', card_id: 88, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Muk', card_id: 89, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Shellder', card_id: 90, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Cloyster', card_id: 91, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Gastly', card_id: 92, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Haunter', card_id: 93, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Gengar', card_id: 94, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Onix', card_id: 95, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Drowzee', card_id: 96, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Hypno', card_id: 97, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Krabby', card_id: 98, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Kingler', card_id: 99, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Voltorb', card_id: 100, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Electrode', card_id: 101, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Exeggcute', card_id: 102, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Exeggutor', card_id: 103, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Cubone', card_id: 104, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Marowak', card_id: 105, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Hitmonlee', card_id: 106, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Hitmonchan', card_id: 107, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Lickitung', card_id: 108, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Koffing', card_id: 109, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Weezing', card_id: 110, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Rhyhorn', card_id: 111, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Rhydon', card_id: 112, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Chansey', card_id: 113, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Tangela', card_id: 114, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Kangaskhan EX', card_id: 115, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Horsea', card_id: 116, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Seadra', card_id: 117, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Goldeen', card_id: 118, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Seaking', card_id: 119, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Staryu', card_id: 120, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Starmie', card_id: 121, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Mr.Mime', card_id: 122, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Scyther', card_id: 123, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Jynx EX', card_id: 124, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Electabuzz', card_id: 125, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Magmar', card_id: 126, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Pinsir', card_id: 127, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Tauros', card_id: 128, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Magikarp', card_id: 129, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Gyarados', card_id: 130, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Lapras', card_id: 131, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Ditto', card_id: 132, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Eevee', card_id: 133, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Vaporeon', card_id: 134, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Jolteon', card_id: 135, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Flareon', card_id: 136, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Porygon', card_id: 137, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Omanyte', card_id: 138, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Omastar', card_id: 139, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Kabuto', card_id: 140, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Kabutops', card_id: 141, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Aerodactyl', card_id: 142, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Snorlax', card_id: 143, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Articuno', card_id: 144, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Zapdos EX', card_id: 145, card_rarity: 'Super'}),
        CardData.upsert({ card_name: 'Moltres', card_id: 146, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Dratini', card_id: 147, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Dragonair', card_id: 148, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Dragonite', card_id: 149, card_rarity: 'Super'}),
        CardData.upsert({ card_name: 'Mewtwo', card_id: 150, card_rarity: 'Rare'}),
        CardData.upsert({ card_name: 'Mew EX', card_id: 151, card_rarity: 'Super'}),
        CardData.upsert({ card_name: 'Dome Fossil', card_id: 152, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Helix Fossil', card_id: 153, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Old Amber', card_id: 154, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Big Air Balloon', card_id: 155, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Bills Transfer', card_id: 156, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Cycling Road', card_id: 157, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Daisys Help', card_id: 158, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Energy Sticker', card_id: 159, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Erikas Invitation', card_id: 160, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Giovannis Charisma', card_id: 161, card_rarity: 'Common'}),
        CardData.upsert({ card_name: 'Grabber', card_id: 162, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Leftovers', card_id: 163, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Protective Goggles', card_id: 164, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: 'Rigid Band', card_id: 165, card_rarity: 'Uncommon'}),
        CardData.upsert({ card_name: '(Illustrator) Bulbasaur', card_id: 166, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Ivysaur', card_id: 167, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Charmander', card_id: 168, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Charmeleon', card_id: 169, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Squirtle', card_id: 170, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Wartortle', card_id: 171, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Caterpie', card_id: 172, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Pikachu', card_id: 173, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Nidoking', card_id: 174, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Psyduck', card_id: 175, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Poliwhirl', card_id: 176, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Machoke', card_id: 177, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Tangela', card_id: 178, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Mr.Mime', card_id: 179, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Omanyte', card_id: 180, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Dragonair', card_id: 181, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Venusaur EX', card_id: 182, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Charizard es', card_id: 183, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Blastoise EX', card_id: 184, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Arbok EX', card_id: 185, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Ninetales EX', card_id: 186, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Wigglytuff EX', card_id: 187, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Alakazam EX', card_id: 188, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Golem EX', card_id: 189, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Kangaskhan EX', card_id: 190, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Jynx EX', card_id: 191, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Zapdos EX', card_id: 192, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Mew EX', card_id: 193, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Bills Transfer', card_id: 194, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Daisys Help', card_id: 195, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Erikas Invitation', card_id: 196, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Illustrator) Giovannis Charisma', card_id: 197, card_rarity: 'Super'}),
        CardData.upsert({ card_name: '(Partner) Venusaur EX', card_id: 198, card_rarity: 'Ultra'}),
        CardData.upsert({ card_name: '(Partner) Charizard EX', card_id: 199, card_rarity: 'Ultra'}),
        CardData.upsert({ card_name: '(Partner) Blastoise EX', card_id: 200, card_rarity: 'Ultra'}),
        CardData.upsert({ card_name: '(Partner) Alakazam EX', card_id: 201, card_rarity: 'Ultra'}),
        CardData.upsert({ card_name: '(Partner) Zapdos EX', card_id: 202, card_rarity: 'Ultra'}),
        CardData.upsert({ card_name: '(Partner) Erikas Invitation', card_id: 203, card_rarity: 'Ultra'}),
        CardData.upsert({ card_name: '(Partner) Giovannis Charisma', card_id: 204, card_rarity: 'Ultra'})
	];

	await Promise.all(shop);
	console.log('Database synced');

	sequelize.close();
}).catch(console.error);