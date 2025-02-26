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
    { name: "Mew", number: 151, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png", color: "#FFD166" },
    { name: "Chikorita", number: 152, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png", color: "#78C850" },
    { name: "Bayleef", number: 153, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/153.png", color: "#78C850" },
    { name: "Meganium", number: 154, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/154.png", color: "#78C850" },
    { name: "Cyndaquil", number: 155, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png", color: "#F08030" },
    { name: "Quilava", number: 156, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/156.png", color: "#F08030" },
    { name: "Typhlosion", number: 157, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png", color: "#F08030" },
    { name: "Totodile", number: 158, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png", color: "#6890F0" },
    { name: "Croconaw", number: 159, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/159.png", color: "#6890F0" },
    { name: "Feraligatr", number: 160, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/160.png", color: "#6890F0" },
    { name: "Sentret", number: 161, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/161.png", color: "#A8A878" },
    { name: "Furret", number: 162, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/162.png", color: "#A8A878" },
    { name: "Hoothoot", number: 163, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/163.png", color: "#A890F0" },
    { name: "Noctowl", number: 164, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/164.png", color: "#A890F0" },
    { name: "Ledyba", number: 165, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/165.png", color: "#A8B820" },
    { name: "Ledian", number: 166, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/166.png", color: "#A8B820" },
    { name: "Spinarak", number: 167, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/167.png", color: "#A8B820" },
    { name: "Ariados", number: 168, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/168.png", color: "#A8B820" },
    { name: "Crobat", number: 169, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/169.png", color: "#A890F0" },
    { name: "Chinchou", number: 170, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/170.png", color: "#6890F0" },
    { name: "Lanturn", number: 171, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/171.png", color: "#6890F0" },
    { name: "Pichu", number: 172, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png", color: "#E0E0E0" },
    { name: "Cleffa", number: 173, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/173.png", color: "#FFD166" },
    { name: "Igglybuff", number: 174, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/174.png", color: "#FFD166" },
    { name: "Togepi", number: 175, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png", color: "#FFD166" },
    { name: "Togetic", number: 176, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/176.png", color: "#FFD166" },
    { name: "Natu", number: 177, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/177.png", color: "#A890F0" },
    { name: "Xatu", number: 178, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/178.png", color: "#A890F0" },
    { name: "Mareep", number: 179, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/179.png", color: "#FFD166" },
    { name: "Flaaffy", number: 180, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/180.png", color: "#FFD166" },
    { name: "Ampharos", number: 181, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/181.png", color: "#FFD166" },
    { name: "Bellossom", number: 182, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/182.png", color: "#FFD166" },
    { name: "Marill", number: 183, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/183.png", color: "#FFD166" },
    { name: "Azumarill", number: 184, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/184.png", color: "#FFD166" },
    { name: "Sudowoodo", number: 185, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/185.png", color: "#A890F0" },
    { name: "Politoed", number: 186, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/186.png", color: "#FFD166" },
    { name: "Hoppip", number: 187, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/187.png", color: "#FFD166" },
    { name: "Skiploom", number: 188, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/188.png", color: "#FFD166" },
    { name: "Jumpluff", number: 189, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/189.png", color: "#FFD166" },
    { name: "Aipom", number: 190, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/190.png", color: "#FFD166" },
    { name: "Sunkern", number: 191, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/191.png", color: "#FFD166" },
    { name: "Sunflora", number: 192, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/192.png", color: "#FFD166" },
    { name: "Yanma", number: 193, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/193.png", color: "#FFD166" },
    { name: "Wooper", number: 194, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/194.png", color: "#A890F0" },
    { name: "Quagsire", number: 195, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/195.png", color: "#A890F0" },
    { name: "Espeon", number: 196, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png", color: "#FFD166" },
    { name: "Umbreon", number: 197, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png", color: "#A890F0" },
    { name: "Murkrow", number: 198, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/198.png", color: "#A890F0" },
    { name: "Slowking", number: 199, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/199.png", color: "#FFD166" },
    { name: "Misdreavus", number: 200, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/200.png", color: "#A890F0" },
    { name: "Unown", number: 201, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/201.png", color: "#E0E0E0" },
{ name: "Wobbuffet", number: 202, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/202.png", color: "#77C4E3" },
{ name: "Girafarig", number: 203, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/203.png", color: "#FFD166" },
{ name: "Pineco", number: 204, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/204.png", color: "#A7DB8D" },
{ name: "Forretress", number: 205, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/205.png", color: "#E0E0E0" },
{ name: "Dunsparce", number: 206, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/206.png", color: "#FFD166" },
{ name: "Gligar", number: 207, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/207.png", color: "#A7DB8D" },
{ name: "Steelix", number: 208, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/208.png", color: "#E0E0E0" },
{ name: "Snubbull", number: 209, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/209.png", color: "#FFB6C1" },
{ name: "Granbull", number: 210, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/210.png", color: "#FFB6C1" },
{ name: "Qwilfish", number: 211, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/211.png", color: "#77C4E3" },
{ name: "Scizor", number: 212, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/212.png", color: "#FF5733" },
{ name: "Shuckle", number: 213, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/213.png", color: "#FFD166" },
{ name: "Heracross", number: 214, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/214.png", color: "#A7DB8D" },
{ name: "Sneasel", number: 215, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/215.png", color: "#E0E0E0" },
{ name: "Teddiursa", number: 216, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/216.png", color: "#FFD166" },
{ name: "Ursaring", number: 217, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/217.png", color: "#FFD166" },
{ name: "Slugma", number: 218, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/218.png", color: "#FF5733" },
{ name: "Magcargo", number: 219, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/219.png", color: "#FF5733" },
{ name: "Swinub", number: 220, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/220.png", color: "#A7DB8D" },
{ name: "Piloswine", number: 221, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/221.png", color: "#A7DB8D" },
{ name: "Corsola", number: 222, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/222.png", color: "#FFB6C1" },
{ name: "Remoraid", number: 223, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/223.png", color: "#77C4E3" },
{ name: "Octillery", number: 224, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/224.png", color: "#FF5733" },
{ name: "Delibird", number: 225, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/225.png", color: "#FFB6C1" },
{ name: "Mantine", number: 226, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/226.png", color: "#77C4E3" },
{ name: "Skarmory", number: 227, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/227.png", color: "#E0E0E0" },
{ name: "Houndour", number: 228, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/228.png", color: "#FF5733" },
{ name: "Houndoom", number: 229, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/229.png", color: "#FF5733" },
{ name: "Kingdra", number: 230, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/230.png", color: "#77C4E3" },
{ name: "Phanpy", number: 231, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/231.png", color: "#FFD166" },
{ name: "Donphan", number: 232, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/232.png", color: "#FFD166" },
{ name: "Porygon2", number: 233, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/233.png", color: "#E0E0E0" },
{ name: "Stantler", number: 234, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/234.png", color: "#FFD166" },
{ name: "Smeargle", number: 235, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/235.png", color: "#E0E0E0" },
{ name: "Tyrogue", number: 236, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/236.png", color: "#FF5733" },
{ name: "Hitmontop", number: 237, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/237.png", color: "#FF5733" },
{ name: "Smoochum", number: 238, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/238.png", color: "#FFB6C1" },
{ name: "Elekid", number: 239, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/239.png", color: "#FFD166" },
{ name: "Magby", number: 240, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/240.png", color: "#FF5733" },
{ name: "Miltank", number: 241, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/241.png", color: "#FFD166" },
{ name: "Blissey", number: 242, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/242.png", color: "#FFB6C1" },
{ name: "Raikou", number: 243, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/243.png", color: "#FFD166" },
{ name: "Entei", number: 244, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png", color: "#FF5733" },
{ name: "Suicune", number: 245, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/245.png", color: "#77C4E3" },
{ name: "Larvitar", number: 246, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/246.png", color: "#A7DB8D" },
{ name: "Pupitar", number: 247, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/247.png", color: "#A7DB8D" },
{ name: "Tyranitar", number: 248, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/248.png", color: "#A7DB8D" },
{ name: "Lugia", number: 249, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png", color: "#77C4E3" },
{ name: "Ho-Oh", number: 250, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/250.png", color: "#FFD166" },
{ name: "Celebi", number: 251, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/251.png", color: "#A7DB8D" },
{ name: "Treecko", number: 252, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png", color: "#A7DB8D" },
{ name: "Grovyle", number: 253, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/253.png", color: "#A7DB8D" },
{ name: "Sceptile", number: 254, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png", color: "#A7DB8D" },
{ name: "Torchic", number: 255, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png", color: "#FF5733" },
{ name: "Combusken", number: 256, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/256.png", color: "#FF5733" },
{ name: "Blaziken", number: 257, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/257.png", color: "#FF5733" },
{ name: "Mudkip", number: 258, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png", color: "#77C4E3" },
{ name: "Marshtomp", number: 259, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/259.png", color: "#77C4E3" },
{ name: "Swampert", number: 260, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/260.png", color: "#77C4E3" },
{ name: "Poochyena", number: 261, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/261.png", color: "#A7DB8D" },
{ name: "Mightyena", number: 262, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/262.png", color: "#A7DB8D" },
{ name: "Zigzagoon", number: 263, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/263.png", color: "#FFD166" },
{ name: "Linoone", number: 264, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/264.png", color: "#FFD166" },
{ name: "Wurmple", number: 265, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/265.png", color: "#FF5733" },
{ name: "Silcoon", number: 266, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/266.png", color: "#E0E0E0" },
{ name: "Beautifly", number: 267, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/267.png", color: "#FFB6C1" },
{ name: "Cascoon", number: 268, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/268.png", color: "#E0E0E0" },
{ name: "Dustox", number: 269, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/269.png", color: "#A7DB8D" },
{ name: "Lotad", number: 270, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/270.png", color: "#77C4E3" },
{ name: "Lombre", number: 271, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/271.png", color: "#77C4E3" },
{ name: "Ludicolo", number: 272, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/272.png", color: "#77C4E3" },
{ name: "Seedot", number: 273, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/273.png", color: "#A7DB8D" },
{ name: "Nuzleaf", number: 274, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/274.png", color: "#A7DB8D" },
{ name: "Shiftry", number: 275, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/275.png", color: "#A7DB8D" },
{ name: "Taillow", number: 276, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/276.png", color: "#77C4E3" },
{ name: "Swellow", number: 277, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/277.png", color: "#77C4E3" },
{ name: "Wingull", number: 278, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/278.png", color: "#77C4E3" },
{ name: "Pelipper", number: 279, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/279.png", color: "#77C4E3" },
{ name: "Ralts", number: 280, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/280.png", color: "#FFB6C1" },
{ name: "Kirlia", number: 281, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/281.png", color: "#FFB6C1" },
{ name: "Gardevoir", number: 282, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png", color: "#FFB6C1" },
{ name: "Surskit", number: 283, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/283.png", color: "#77C4E3" },
{ name: "Masquerain", number: 284, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/284.png", color: "#77C4E3" },
{ name: "Shroomish", number: 285, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/285.png", color: "#A7DB8D" },
{ name: "Breloom", number: 286, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/286.png", color: "#A7DB8D" },
{ name: "Slakoth", number: 287, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/287.png", color: "#FFD166" },
{ name: "Vigoroth", number: 288, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/288.png", color: "#FFD166" },
{ name: "Slaking", number: 289, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/289.png", color: "#FFD166" },
{ name: "Nincada", number: 290, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/290.png", color: "#E0E0E0" },
{ name: "Ninjask", number: 291, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/291.png", color: "#FFD166" },
{ name: "Shedinja", number: 292, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/292.png", color: "#E0E0E0" },
{ name: "Whismur", number: 293, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/293.png", color: "#FFB6C1" },
{ name: "Loudred", number: 294, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/294.png", color: "#FFB6C1" },
{ name: "Exploud", number: 295, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/295.png", color: "#FFB6C1" },
{ name: "Makuhita", number: 296, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/296.png", color: "#FFD166" },
{ name: "Hariyama", number: 297, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/297.png", color: "#FFD166" },
{ name: "Azurill", number: 298, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/298.png", color: "#77C4E3" },
{ name: "Nosepass", number: 299, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/299.png", color: "#E0E0E0" },




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