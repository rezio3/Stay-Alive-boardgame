export const torchLosing = (biom, char) => {
	if (char.inventoryItems.torch === 1) {
		if (biom === "northrend") {
			return 0;
		} else {
			return 1;
		}
	} else {
		return 0;
	}
};
