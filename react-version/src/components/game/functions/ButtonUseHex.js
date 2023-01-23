export const buttonUseHex = (
	buttons,
	setButtons,
	char,
	setChar,
	board,
	setBoard,
	anim,
	setAnim
) => {
	const { energy, starvation, sanity, temperature } = char;
	const { flint } = char.inventoryResources;
	const { axe, sejmitar, fireCard } = char.inventoryItems;
	// FIREPLACE
	if (board.resourcePlayerStandsOn === "fire") {
		if (flint > 0) {
			let fireRoll = Math.floor(Math.random() * 5);
			let addTemperature = temperature < 5 ? 1 : 0;
			if (sejmitar === 0 && fireRoll === 0) {
				setChar({
					...char,
					energy: energy + 3,
					sanity: sanity + 1,
					temperature: temperature + addTemperature,
					cantMove: true,
					inventoryResources: {
						...char.inventoryResources,
						flint: flint - 1,
					},
				});
				setAnim({
					...anim,
					sejmitar: true,
				});
				setTimeout(() => {
					setAnim({
						...anim,
						sejmitar: false,
					});
					setChar({
						...char,
						energy: energy + 3,
						sanity: sanity + 1,
						temperature: temperature + addTemperature,
						cantMove: true,
						inventoryResources: {
							...char.inventoryResources,
							flint: flint - 1,
						},
						inventoryItems: {
							...char.inventoryItems,
							sejmitar: 1,
						},
					});
				}, 1900);
			} else {
				setAnim({
					...anim,
					firePlaceCard: true,
				});

				setChar({
					...char,
					energy: energy + 3,
					sanity: sanity + 1,
					temperature: temperature + addTemperature,
					cantMove: true,
					inventoryResources: {
						...char.inventoryResources,
						flint: flint - 1,
					},
				});

				setTimeout(() => {
					setAnim({
						...anim,
						firePlaceCard: false,
					});
					setChar({
						...char,
						energy: energy + 3,
						sanity: sanity + 1,
						temperature: temperature + addTemperature,
						cantMove: true,
						inventoryResources: {
							...char.inventoryResources,
							flint: flint - 1,
						},
						inventoryItems: {
							...char.inventoryItems,
							fireCard: fireCard + 1,
						},
					});
				}, 2800);
				setButtons({
					useHexButton: false,
				});
			}
		} else if (flint === 0) {
			console.log("Nie masz krzesiwa!");
			setChar({
				...char,
				cantMoveAnimation: true,
			});
		}
		// OASIS
	} else if (board.resourcePlayerStandsOn === "oasis") {
		if (board.oasisUsed === false) {
			let temp;
			if (temperature > 5) {
				temp = -1;
			} else if (temperature < 5) {
				temp = 1;
			} else {
				temp = 0;
			}
			setChar({
				...char,
				energy: energy + 3,
				sanity: sanity + 1,
				starvation: starvation + 1,
				temperature: temperature + temp,
			});
			setBoard({
				...board,
				oasisUsed: true,
			});
		} else if (board.oasisUsed === true) {
			console.log("Oaza została już raz użyta");
			setChar({
				...char,
				cantMoveAnimation: true,
			});
		}
		// RESOURCE FIELD
	} else if (
		board.resourcePlayerStandsOn === "wood" ||
		board.resourcePlayerStandsOn === "stone" ||
		board.resourcePlayerStandsOn === "lotos" ||
		board.resourcePlayerStandsOn === "flint" ||
		board.resourcePlayerStandsOn === "grass"
	) {
		if (axe === 1) {
			setButtons({
				...buttons,
				useHexButton: false,
			});
			let addItem = char.inventoryResources[board.resourcePlayerStandsOn] + 1;
			setChar({
				...char,
				cantMove: true,
				inventoryResources: {
					...char.inventoryResources,
					[board.resourcePlayerStandsOn]: addItem,
				},
			});
		} else if (axe === 0) {
			if (char.energy > 0) {
				setButtons({
					...buttons,
					useHexButton: false,
				});
				let addItem = char.inventoryResources[board.resourcePlayerStandsOn] + 1;
				setChar({
					...char,
					energy: char.energy - 1,
					cantMove: true,
					inventoryResources: {
						...char.inventoryResources,
						[board.resourcePlayerStandsOn]: addItem,
					},
				});
			} else if (char.energy === 0) {
				console.log("za mało energii na zebranie surowca");
				setChar({
					...char,
					cantMoveAnimation: true,
				});
			}
		}
	}
};
