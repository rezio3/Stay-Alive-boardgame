export const changeCharStats = ({
	char,
	setChar,
	life,
	energy,
	starvation,
	sanity,
	temp,
	flint,
	sejmitar,
	fireCard,
	hexUsed,
}) => {
	switch (hexUsed) {
		case "cave":
			console.log("cave used");
			setChar({
				...char,
				energy: energy,
				sanity: sanity,
				cantMove: true,
			});
			break;
		case "firePlace":
			console.log("fireplace used");
			setChar({
				...char,
				energy: energy,
				sanity: sanity,
				temperature: temp,
				cantMove: true,
				inventoryResources: {
					...char.inventoryResources,
					flint: flint,
				},
				inventoryItems: {
					...char.inventoryItems,
					sejmitar: sejmitar,
					fireCard: fireCard,
				},
			});
	}
};
