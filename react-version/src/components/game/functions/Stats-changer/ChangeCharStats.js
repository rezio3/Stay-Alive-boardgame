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
			setStatsNote({
				...statsNote,
				energy: false,
				sanity: false,
			});
			setTimeout(() => {
				setStatsNote({
					...statsNote,
					energy: true,
					sanity: true,
				});
			}, 50);

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
			setStatsNote({
				...statsNote,
				energy: false,
				sanity: false,
				temperature: false,
			});
			setTimeout(() => {
				setStatsNote({
					...statsNote,
					energy: true,
					sanity: true,
					temperature: true,
				});
			}, 50);

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
			setStatsNote({
				...statsNote,
				energy: false,
				starvation: false,
				sanity: false,
				temperature: false,
			});
			setTimeout(() => {
				setStatsNote({
					...statsNote,
					energy: true,
					starvation: true,
					sanity: true,
					temperature: true,
				});
			}, 50);

			break;
		case "fight":
			setChar({
				...char,
				energy: energy,
				prevEnergy: char.energy,
				life: life,
				prevLife: char.life,
			});
			setStatsNote({
				...statsNote,
				life: false,
				energy: false,
			});
			setTimeout(() => {
				setStatsNote({
					...statsNote,
					life: true,
					energy: true,
				});
			}, 50);

			break;
		case "move":
			setChar({
				...char,
				energy: energy,
				prevEnergy: char.energy,
			});
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

			break;
		case "endTurn":
			// console.log("update stats after turn's end");
			setChar({
				...char,
				cantMove: false,
				prevLife: char.life,
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

			setStatsNote({
				...statsNote,
				life: false,
				energy: false,
				starvation: false,
				sanity: false,
				temperature: false,
			});
			setTimeout(() => {
				setStatsNote({
					...statsNote,
					life: true,
					energy: true,
					starvation: true,
					sanity: true,
					temperature: true,
				});
			}, 50);

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
			setStatsNote({
				...statsNote,
				energy: false,
				starvation: false,
			});
			setTimeout(() => {
				setStatsNote({
					...statsNote,
					energy: true,
					starvation: true,
				});
			}, 50);

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
			setStatsNote({
				...statsNote,
				life: false,
				starvation: false,
			});
			setTimeout(() => {
				setStatsNote({
					...statsNote,
					life: true,
					starvation: true,
				});
			}, 50);

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
			setStatsNote({
				...statsNote,
				energy: false,
				starvation: false,
			});
			setTimeout(() => {
				setStatsNote({
					...statsNote,
					energy: true,
					starvation: true,
				});
			}, 50);

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
			break;
		case "eventCard":
			setChar({
				...char,
				sanity: sanity,
			});
	}
};
