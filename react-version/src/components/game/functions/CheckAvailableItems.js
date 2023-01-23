export const checkAvailableItems = (data, setter) => {
	let axe = false;
	let sword = false;
	let shoes = false;
	let coat = false;
	let torch = false;
	let food = false;
	const { wood, stone, flint, grass, lotos } = data.inventoryResources;
	// axe checking
	if (wood >= 1 && stone >= 1) {
		axe = true;
	} else {
		axe = false;
	}
	// sword checking
	if (wood >= 1 && stone >= 2) {
		sword = true;
	} else {
		sword = false;
	}
	// shoes and coat checking
	if (grass >= 2) {
		shoes = true;
		coat = true;
	} else {
		shoes = false;
		coat = false;
	}
	// torch checking
	if (flint >= 1 && wood >= 1) {
		torch = true;
	} else {
		torch = false;
	}
	// food checking
	if (lotos >= 1 && wood >= 1 && flint >= 1) {
		food = true;
	} else {
		food = false;
	}
	setter({
		...data,
		unlockedItems: {
			axeUnl: axe,
			shoesUnl: shoes,
			swordUnl: sword,
			foodUnl: food,
			torchUnl: torch,
			coatUnl: coat,
		},
	});
};
