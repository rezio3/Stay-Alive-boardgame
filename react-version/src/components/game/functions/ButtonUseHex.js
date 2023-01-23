export const buttonUseHex = (
	buttons,
	setButtons,
	char,
	setChar,
	board,
	anim,
	setAnim
) => {
	if (board.resourcePlayerStandsOn === "fire") {
		if (char.inventoryResources.flint > 0) {
			let fireRoll = Math.floor(Math.random() * 5);
			let addTemperature = char.temperature < 5 ? 1 : 0;
			if (char.inventoryItems.sejmitar === 0 && fireRoll === 0) {
				setChar({
					...char,
					energy: char.energy + 3,
					sanity: char.sanity + 1,
					temperature: char.temperature + addTemperature,
					cantMove: true,
					inventoryResources: {
						...char.inventoryResources,
						flint: char.inventoryResources.flint - 1,
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
						energy: char.energy + 3,
						sanity: char.sanity + 1,
						temperature: char.temperature + addTemperature,
						cantMove: true,
						inventoryResources: {
							...char.inventoryResources,
							flint: char.inventoryResources.flint - 1,
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
					energy: char.energy + 3,
					sanity: char.sanity + 1,
					temperature: char.temperature + addTemperature,
					cantMove: true,
					inventoryResources: {
						...char.inventoryResources,
						flint: char.inventoryResources.flint - 1,
					},
				});

				setTimeout(() => {
					setAnim({
						...anim,
						firePlaceCard: false,
					});
					setChar({
						...char,
						energy: char.energy + 3,
						sanity: char.sanity + 1,
						temperature: char.temperature + addTemperature,
						cantMove: true,
						inventoryResources: {
							...char.inventoryResources,
							flint: char.inventoryResources.flint - 1,
						},
						inventoryItems: {
							...char.inventoryItems,
							fireCard: char.inventoryItems.fireCard + 1,
						},
					});
				}, 2800);
				setButtons({
					useHexButton: false,
				});
			}
		} else if (char.inventoryResources.flint === 0) {
			console.log("Nie masz krzesiwa!");
			setChar({
				...char,
				cantMoveAnimation: true,
			});
		}
	} else if (char.inventoryItems.axe === 1) {
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
	} else if (char.inventoryItems.axe === 0) {
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
};
