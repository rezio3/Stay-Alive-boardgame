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
	torchUpdate,
	frozenCrownUpdate,
	event,
}) => {
	switch (event) {
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
			break;
		case "oasis":
			console.log("oasis used");
			setChar({
				...char,
				energy: energy,
				sanity: sanity,
				starvation: starvation,
				temperature: temp,
				cantMove: true,
			});
			break;
		case "fight":
			setChar({
				...char,
				energy: energy,
				life: life,
			});
			break;
		case "move":
			setChar({
				...char,
				energy: energy,
			});
			break;
		case "endTurn":
			setChar({
				...char,
				cantMove: false,
				energy: energy,
				starvation: starvation,
				sanity: sanity,
				temperature: temp,
				inventoryItems: {
					...char.inventoryItems,
					torch: torchUpdate,
					frozenCrown: frozenCrownUpdate,
				},
			});
			break;
	}
};
