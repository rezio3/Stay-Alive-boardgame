export const frozenCrownLosing = (biom, char) => {
	if (
		char.inventoryItems.frozenCrown === 1 &&
		(biom === "desert" || biom === "crater")
	) {
		return 0;
	} else if (char.inventoryItems.frozenCrown === 1) {
		return 1;
	} else {
		return 0;
	}
};
