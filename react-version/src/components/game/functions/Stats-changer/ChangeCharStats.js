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
	hexUsed,
}) => {
	switch (hexUsed) {
		case "cave":
			console.log("cave used");
			setChar({
				...char,
				energy: energy,
				sanity: sanity,
			});
			break;
	}
	// if (flint === undefined && sejmitar === undefined) {
	// 	setChar({
	// 		...char,
	// 		life: life,
	// 		energy: energy,
	// 		starvation: starvation,
	// 		sanity: sanity,
	// 		temperature: temp,
	// 	});
	// } else if (flint !== undefined && sejmitar !== undefined) {
	// 	setChar({
	// 		...char,
	// 		life: life,
	// 		energy: energy,
	// 		starvation: starvation,
	// 		sanity: sanity,
	// 		temperature: temp,
	// 		inventoryResources: {
	// 			...char.inventoryResources,
	// 			flint: char.flint,
	// 		},
	// 	});
	// 	setTimeout(() => {
	// 		setChar({
	// 			...char,
	// 			life: life,
	// 			energy: energy,
	// 			starvation: starvation,
	// 			sanity: sanity,
	// 			temperature: temp,
	// 			inventoryResources: {
	// 				...char.inventoryResources,
	// 				flint: flint,
	// 			},
	// 			inventoryItems: {
	// 				...char.inventoryItems,
	// 				sejmitar: sejmitar,
	// 			},
	// 		});
	// 	}, 1900);
	// }
};
