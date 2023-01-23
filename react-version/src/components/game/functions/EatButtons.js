export const eatButtons = (e, char, setter) => {
	if (e.target.name === "eat1grass") {
		setter({
			...char,
			energy: char.energy + 2,
			inventoryResources: {
				...char.inventoryResources,
				grass: char.inventoryResources.grass - 1,
			},
		});
	} else if (e.target.name === "eat2grass") {
		setter({
			...char,
			energy: char.energy + 4,
			starvation: char.starvation + 1,
			inventoryResources: {
				...char.inventoryResources,
				grass: char.inventoryResources.grass - 2,
			},
		});
	} else if (e.target.name === "eatfood") {
		setter({
			...char,
			life: char.life + 5,
			starvation: char.starvation + 2,
			inventoryItems: {
				...char.inventoryItems,
				food: 0,
			},
		});
	} else if (e.target.name === "redbull") {
		setter({
			...char,
			energy: char.energy + 8,
			inventoryItems: {
				...char.inventoryItems,
				fireCard: char.inventoryItems.fireCard - 1,
			},
		});
	} else if (e.target.name === "sasuages") {
		setter({
			...char,
			starvation: char.starvation + 4,
			inventoryItems: {
				...char.inventoryItems,
				fireCard: char.inventoryItems.fireCard - 1,
			},
		});
	}
};
