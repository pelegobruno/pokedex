const pokemons = [
    { name: "Bulbasaur", number: 1, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", color: "#A8D9A0" },
    { name: "Ivysaur", number: 2, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png", color: "#A8D9A0" },
    { name: "Venusaur", number: 3, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png", color: "#A8D9A0" },
    { name: "Charmander", number: 4, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png", color: "#FBCB8E" },
    { name: "Charmeleon", number: 5, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png", color: "#FBCB8E" },
    { name: "Charizard", number: 6, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png", color: "#FBCB8E" },
    { name: "Squirtle", number: 7, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png", color: "#A6C1E9" },
    { name: "Wartortle", number: 8, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png", color: "#A6C1E9" },
    { name: "Blastoise", number: 9, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png", color: "#A6C1E9" },
    { name: "Caterpie", number: 10, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png", color: "#BCE67A" },
    { name: "Metapod", number: 11, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png", color: "#BCE67A" },
    { name: "Butterfree", number: 12, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png", color: "#BCE67A" },
    { name: "Weedle", number: 13, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png", color: "#FFD166" },
    { name: "Kakuna", number: 14, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png", color: "#FFD166" },
    { name: "Beedrill", number: 15, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png", color: "#FFD166" },
    { name: "Pidgey", number: 16, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png", color: "#E0E0E0" },
    { name: "Pidgeotto", number: 17, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png", color: "#E0E0E0" },
    { name: "Pidgeot", number: 18, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png", color: "#E0E0E0" },
    { name: "Rattata", number: 19, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png", color: "#C4C4C4" },
    { name: "Raticate", number: 20, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png", color: "#C4C4C4" },
    { name: "Spearow", number: 21, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png", color: "#E0E0E0" },
    { name: "Fearow", number: 22, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png", color: "#E0E0E0" },
    { name: "Ekans", number: 23, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png", color: "#C4C4C4" },
    { name: "Arbok", number: 24, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png", color: "#C4C4C4" },
    { name: "Pikachu", number: 25, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", color: "#FFD166" },
    { name: "Raichu", number: 26, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png", color: "#FFD166" },
    { name: "Sandshrew", number: 27, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png", color: "#E0E0E0" },
    { name: "Sandslash", number: 28, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png", color: "#E0E0E0" },
    { name: "Nidoran♀", number: 29, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png", color: "#FFB3B3" },
    { name: "Nidorina", number: 30, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png", color: "#FFB3B3" },
    { name: "Nidoqueen", number: 31, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png", color: "#FFB3B3" },
    { name: "Nidoran♂", number: 32, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png", color: "#B3D9FF" },
    { name: "Nidorino", number: 33, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png", color: "#B3D9FF" },
    { name: "Nidoking", number: 34, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png", color: "#B3D9FF" },
    { name: "Clefairy", number: 35, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png", color: "#FFB3B3" },
    { name: "Clefable", number: 36, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png", color: "#FFB3B3" },
    { name: "Vulpix", number: 37, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png", color: "#FFB3B3" },
    { name: "Ninetales", number: 38, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png", color: "#FFB3B3" },
    { name: "Jigglypuff", number: 39, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png", color: "#FFB3B3" },
    { name: "Wigglytuff", number: 40, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png", color: "#FFB3B3" },
    { name: "Zubat", number: 41, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png", color: "#C4C4C4" },
    { name: "Golbat", number: 42, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png", color: "#C4C4C4" },
    { name: "Oddish", number: 43, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png", color: "#BCE67A" },
    { name: "Gloom", number: 44, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png", color: "#BCE67A" },
    { name: "Vileplume", number: 45, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png", color: "#BCE67A" },
    { name: "Paras", number: 46, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png", color: "#FFD166" },
    { name: "Parasect", number: 47, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png", color: "#FFD166" },
    { name: "Venonat", number: 48, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png", color: "#FFD166" },
    { name: "Venomoth", number: 49, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png", color: "#FFD166" },
    { name: "Diglett", number: 50, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png", color: "#E0E0E0" },
    { name: "Dugtrio", number: 51, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png", color: "#E0E0E0" },
    { name: "Meowth", number: 52, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png", color: "#FFD166" },
    { name: "Persian", number: 53, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png", color: "#FFD166" },
    { name: "Psyduck", number: 54, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png", color: "#A6C1E9" },
    { name: "Golduck", number: 55, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png", color: "#A6C1E9" },
    { name: "Mankey", number: 56, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png", color: "#FFB3B3" },
    { name: "Primeape", number: 57, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png", color: "#FFB3B3" },
    { name: "Growlithe", number: 58, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png", color: "#FFB3B3" },
    { name: "Arcanine", number: 59, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png", color: "#FFB3B3" },
    { name: "Poliwag", number: 60, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png", color: "#A6C1E9" },
    { name: "Poliwhirl", number: 61, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png", color: "#A6C1E9" },
    { name: "Poliwrath", number: 62, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png", color: "#A6C1E9" },
    { name: "Abra", number: 63, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png", color: "#FFD166" },
    { name: "Kadabra", number: 64, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png", color: "#FFD166" },
    { name: "Alakazam", number: 65, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png", color: "#FFD166" },
    { name: "Machop", number: 66, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png", color: "#FFB3B3" },
    { name: "Machoke", number: 67, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png", color: "#FFB3B3" },
    { name: "Machamp", number: 68, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png", color: "#FFB3B3" },
    { name: "Bellsprout", number: 69, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png", color: "#BCE67A" },
    { name: "Weepinbell", number: 70, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png", color: "#BCE67A" },
    { name: "Victreebel", number: 71, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png", color: "#BCE67A" },
    { name: "Tentacool", number: 72, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png", color: "#A6C1E9" },
    { name: "Tentacruel", number: 73, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png", color: "#A6C1E9" },
    { name: "Geodude", number: 74, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png", color: "#E0E0E0" },
    { name: "Graveler", number: 75, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png", color: "#E0E0E0" },
    { name: "Golem", number: 76, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png", color: "#E0E0E0" },
    { name: "Ponyta", number: 77, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png", color: "#FFB3B3" },
    { name: "Rapidash", number: 78, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png", color: "#FFB3B3" },
    { name: "Slowpoke", number: 79, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png", color: "#A6C1E9" },
    { name: "Slowbro", number: 80, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png", color: "#A6C1E9" },
    { name: "Magnemite", number: 81, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png", color: "#E0E0E0" },
    { name: "Magneton", number: 82, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png", color: "#E0E0E0" },
    { name: "Farfetch'd", number: 83, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png", color: "#E0E0E0" },
    { name: "Doduo", number: 84, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png", color: "#FFD166" },
    { name: "Dodrio", number: 85, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png", color: "#FFD166" },
    { name: "Seel", number: 86, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png", color: "#A6C1E9" },
    { name: "Dewgong", number: 87, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png", color: "#A6C1E9" },
    { name: "Grimer", number: 88, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png", color: "#C4C4C4" },
    { name: "Muk", number: 89, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png", color: "#C4C4C4" },
    { name: "Shellder", number: 90, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png", color: "#A6C1E9" },
    { name: "Cloyster", number: 91, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png", color: "#A6C1E9" },
    { name: "Gastly", number: 92, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png", color: "#C4C4C4" },
    { name: "Haunter", number: 93, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png", color: "#C4C4C4" },
    { name: "Gengar", number: 94, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png", color: "#C4C4C4" },
    { name: "Onix", number: 95, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png", color: "#E0E0E0" },
    { name: "Drowzee", number: 96, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png", color: "#FFD166" },
    { name: "Hypno", number: 97, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png", color: "#FFD166" },
    { name: "Krabby", number: 98, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png", color: "#A6C1E9" },
    { name: "Kingler", number: 99, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png", color: "#A6C1E9" },
    { name: "Voltorb", number: 100, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png", color: "#E0E0E0" },
    { name: "Electrode", number: 101, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png", color: "#E0E0E0" },
    { name: "Exeggcute", number: 102, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png", color: "#BCE67A" },
    { name: "Exeggutor", number: 103, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png", color: "#BCE67A" },
    { name: "Cubone", number: 104, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png", color: "#E0E0E0" },
    { name: "Marowak", number: 105, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png", color: "#E0E0E0" },
    { name: "Hitmonlee", number: 106, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png", color: "#FFB3B3" },
    { name: "Hitmonchan", number: 107, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png", color: "#FFB3B3" },
    { name: "Lickitung", number: 108, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png", color: "#FFD166" },
    { name: "Koffing", number: 109, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png", color: "#C4C4C4" },
    { name: "Weezing", number: 110, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png", color: "#C4C4C4" },
    { name: "Rhyhorn", number: 111, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png", color: "#E0E0E0" },
    { name: "Rhydon", number: 112, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png", color: "#E0E0E0" },
    { name: "Chansey", number: 113, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png", color: "#FFB3B3" },
    { name: "Tangela", number: 114, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png", color: "#BCE67A" },
    { name: "Kangaskhan", number: 115, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png", color: "#FFD166" },
    { name: "Horsea", number: 116, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png", color: "#A6C1E9" },
    { name: "Seadra", number: 117, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png", color: "#A6C1E9" },
    { name: "Goldeen", number: 118, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png", color: "#A6C1E9" },
    { name: "Seaking", number: 119, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png", color: "#A6C1E9" },
    { name: "Staryu", number: 120, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png", color: "#A6C1E9" },
    { name: "Starmie", number: 121, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png", color: "#A6C1E9" },
    { name: "Mr. Mime", number: 122, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png", color: "#FFD166" },
    { name: "Scyther", number: 123, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png", color: "#E0E0E0" },
    { name: "Jynx", number: 124, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png", color: "#FFB3B3" },
    { name: "Electabuzz", number: 125, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png", color: "#E0E0E0" },
    { name: "Magmar", number: 126, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png", color: "#FFB3B3" },
    { name: "Pinsir", number: 127, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png", color: "#E0E0E0" },
    { name: "Tauros", number: 128, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png", color: "#E0E0E0" },
    { name: "Magikarp", number: 129, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png", color: "#A6C1E9" },
    { name: "Gyarados", number: 130, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png", color: "#A6C1E9" },
    { name: "Lapras", number: 131, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png", color: "#A6C1E9" },
    { name: "Ditto", number: 132, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png", color: "#FFD166" },
    { name: "Eevee", number: 133, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png", color: "#FFD166" },
    { name: "Vaporeon", number: 134, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png", color: "#A6C1E9" },
    { name: "Jolteon", number: 135, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png", color: "#E0E0E0" },
    { name: "Flareon", number: 136, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png", color: "#FFB3B3" },
    { name: "Porygon", number: 137, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png", color: "#E0E0E0" },
    { name: "Omanyte", number: 138, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png", color: "#A6C1E9" },
    { name: "Omastar", number: 139, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png", color: "#A6C1E9" },
    { name: "Kabuto", number: 140, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png", color: "#A6C1E9" },
    { name: "Kabutops", number: 141, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png", color: "#A6C1E9" },
    { name: "Aerodactyl", number: 142, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png", color: "#E0E0E0" },
    { name: "Snorlax", number: 143, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png", color: "#FFD166" },
    { name: "Articuno", number: 144, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png", color: "#A6C1E9" },
    { name: "Zapdos", number: 145, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png", color: "#E0E0E0" },
    { name: "Moltres", number: 146, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png", color: "#FFB3B3" },
    { name: "Dratini", number: 147, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png", color: "#A6C1E9" },
    { name: "Dragonair", number: 148, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png", color: "#A6C1E9" },
    { name: "Dragonite", number: 149, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png", color: "#A6C1E9" },
    { name: "Mewtwo", number: 150, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png", color: "#E0E0E0" },
    { name: "Mew", number: 151, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png", color: "#FFD166" }
];

let currentIndex = 0;
const pokedex = document.getElementById('pokedex');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function renderPokemon(index) {
    pokedex.innerHTML = "";

    const pokemon = pokemons[index];
    const card = document.createElement('div');
    card.className = 'card';
    card.style.background = `linear-gradient(180deg, ${pokemon.color} 0%, rgba(255, 255, 255, 0.5) 100%)`;
    card.style.position = 'relative'; // Adicionado para posicionar o número corretamente
    card.innerHTML = `
        <span class="card-number">${pokemon.number.toString().padStart(3, '0')}</span>
        <img class="pokemon-image" src="${pokemon.image}" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
    `;

    pokedex.appendChild(card);
}

// Função de pesquisa por nome ou número
searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim(); // Remove espaços extras
    let foundIndex = -1;

    if (!isNaN(query)) {
        // Se a entrada for um número, busca pelo número do Pokémon
        foundIndex = pokemons.findIndex(pokemon => pokemon.number === parseInt(query));
    } else {
        // Caso contrário, busca pelo nome (insensível a maiúsculas/minúsculas)
        foundIndex = pokemons.findIndex(pokemon =>
            pokemon.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    if (foundIndex !== -1) {
        currentIndex = foundIndex;
        renderPokemon(currentIndex);
    } else {
        alert("Pokémon não encontrado!");
    }
});

// Permite pressionar "Enter" para pesquisar
searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});

// Botão "Anterior"
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderPokemon(currentIndex);
    }
});

// Botão "Próximo"
nextBtn.addEventListener("click", () => {
    if (currentIndex < pokemons.length - 1) {
        currentIndex++;
        renderPokemon(currentIndex);
    }
});

// Renderiza o primeiro Pokémon ao carregar
renderPokemon(currentIndex);