export const changeCharStats = (
	char,
	setChar,
	life,
	energy,
	starvation,
	sanity,
	temp,
	flint,
	sejmitar
) => {
	console.log(flint);
	if (flint === undefined && sejmitar === undefined) {
		setChar({
			...char,
			life: life,
			energy: energy,
			starvation: starvation,
			sanity: sanity,
			temperature: temp,
		});
	} else if (flint !== undefined && sejmitar !== undefined) {
		setChar({
			...char,
			life: life,
			energy: energy,
			starvation: starvation,
			sanity: sanity,
			temperature: temp,
			inventoryResources: {
				...char.inventoryResources,
				flint: char.flint,
			},
		});
		setTimeout(() => {
			setChar({
				...char,
				life: life,
				energy: energy,
				starvation: starvation,
				sanity: sanity,
				temperature: temp,
				inventoryResources: {
					...char.inventoryResources,
					flint: flint,
				},
				inventoryItems: {
					...char.inventoryItems,
					sejmitar: sejmitar,
				},
			});
		}, 1900);
	}
};
