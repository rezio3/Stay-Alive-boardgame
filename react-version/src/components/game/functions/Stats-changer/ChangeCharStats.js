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
	grass,
	food,
	statsNote,
	setStatsNote,
	resourcePlayerStandsOn,
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
		case "eatGrassButton":
			setChar({
				...char,
				energy: energy,
				starvation: starvation,
				inventoryResources: {
					...char.inventoryResources,
					grass: grass,
				},
			});
			break;
		case "eatFoodButton":
			setChar({
				...char,
				life: life,
				starvation: starvation,
				inventoryItems: {
					...char.inventoryItems,
					food: food,
				},
			});
			break;
		case "eatSasuagesOrRedbull":
			setChar({
				...char,
				energy: energy,
				starvation: starvation,
				inventoryItems: {
					...char.inventoryItems,
					fireCard: fireCard,
				},
			});
			break;
		case "pickUpResource":
			console.log("????????????????????????????");
			setChar({
				...char,
				energy: energy,
				cantMove: true,
				inventoryResources: {
					...char.inventoryResources,
					[resourcePlayerStandsOn]:
						char.inventoryResources[resourcePlayerStandsOn] + 1,
				},
			});
			break;
	}
	setStatsNote({
		...statsNote,
		energy: false,
	});
	setTimeout(() => {
		setStatsNote({
			...statsNote,
			energy: true,
		});
	}, 50);
};
