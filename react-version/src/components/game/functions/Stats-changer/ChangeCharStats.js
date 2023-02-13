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
				prevEnergy: char.energy,
				sanity: sanity,
				prevSanity: char.sanity,
				cantMove: true,
			});
			break;
		case "firePlace":
			console.log("fireplace used");
			setChar({
				...char,
				energy: energy,
				prevEnergy: char.energy,
				sanity: sanity,
				prevSanity: char.sanity,
				temperature: temp,
				prevTemperature: char.temperature,
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
				prevEnergy: char.energy,
				sanity: sanity,
				prevSanity: char.sanity,
				starvation: starvation,
				prevStarvation: char.starvation,
				temperature: temp,
				prevTemperature: char.temperature,
				cantMove: true,
			});
			break;
		case "fight":
			setChar({
				...char,
				energy: energy,
				prevEnergy: char.energy,
				life: life,
				prevLife: char.life,
			});
			break;
		case "move":
			setChar({
				...char,
				energy: energy,
				prevEnergy: char.energy,
			});
			break;
		case "endTurn":
			console.log("update stats after turn's end");
			setChar({
				...char,
				cantMove: false,
				energy: energy,
				prevEnergy: char.energy,
				starvation: starvation,
				prevStarvation: char.starvation,
				sanity: sanity,
				prevSanity: char.sanity,
				temperature: temp,
				prevTemperature: char.temperature,
				inventoryItems: {
					...char.inventoryItems,
					torch: torchUpdate,
					frozenCrown: frozenCrownUpdate,
				},
			});
			break;
		case "eatGrassButton":
			console.log("eat grass");
			setChar({
				...char,
				energy: energy,
				prevEnergy: char.energy,
				starvation: starvation,
				prevStarvation: char.starvation,
				inventoryResources: {
					...char.inventoryResources,
					grass: grass,
				},
			});
			break;
		case "eatFoodButton":
			console.log("eat food");
			setChar({
				...char,
				life: life,
				prevLife: char.life,
				starvation: starvation,
				prevStarvation: char.starvation,
				inventoryItems: {
					...char.inventoryItems,
					food: food,
				},
			});
			break;
		case "eatSasuagesOrRedbull":
			console.log("use fire card");
			setChar({
				...char,
				energy: energy,
				prevEnergy: char.energy,
				starvation: starvation,
				prevStarvation: char.starvation,
				inventoryItems: {
					...char.inventoryItems,
					fireCard: fireCard,
				},
			});
			break;
		case "pickUpResource":
			console.log("pick up resource");
			setChar({
				...char,
				energy: energy,
				prevEnergy: char.energy,
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
