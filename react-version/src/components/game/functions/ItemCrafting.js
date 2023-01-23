export const itemCrafting = (e, char, setter) => {
	const { name } = e.target;
	const { wood, stone, grass, flint, lotos } = char.inventoryResources;
	console.log(name);
	switch (name) {
		case "axe":
			setter({
				...char,
				inventoryResources: {
					...char.inventoryResources,
					wood: wood - 1,
					stone: stone - 1,
				},
				inventoryItems: {
					...char.inventoryItems,
					[name]: 1,
				},
			});
			break;

		case "sword":
			setter({
				...char,
				inventoryResources: {
					...char.inventoryResources,
					wood: wood - 1,
					stone: stone - 2,
				},
				inventoryItems: {
					...char.inventoryItems,
					[name]: 1,
				},
			});
			break;
		case "shoes":
			setter({
				...char,
				inventoryResources: {
					...char.inventoryResources,
					grass: grass - 2,
				},
				inventoryItems: {
					...char.inventoryItems,
					[name]: 1,
				},
			});
			break;
		case "coat":
			setter({
				...char,
				inventoryResources: {
					...char.inventoryResources,
					grass: grass - 2,
				},
				inventoryItems: {
					...char.inventoryItems,
					[name]: 1,
				},
			});
			break;
		case "torch":
			setter({
				...char,
				inventoryResources: {
					...char.inventoryResources,
					flint: flint - 1,
					wood: wood - 1,
				},
				inventoryItems: {
					...char.inventoryItems,
					[name]: 1,
				},
			});
			break;
		case "food":
			setter({
				...char,
				inventoryResources: {
					...char.inventoryResources,
					flint: flint - 1,
					wood: wood - 1,
					lotos: lotos - 1,
				},
				inventoryItems: {
					...char.inventoryItems,
					[name]: 1,
				},
			});
	}
};
