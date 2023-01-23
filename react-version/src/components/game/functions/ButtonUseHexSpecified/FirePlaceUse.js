export const firePlaceUse = (
	char,
	setChar,
	anim,
	setAnim,
	buttons,
	setButtons
) => {
	const { energy, sanity, temperature } = char;
	const { flint } = char.inventoryResources;
	const { sejmitar, fireCard } = char.inventoryItems;
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
				...buttons,
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
};
