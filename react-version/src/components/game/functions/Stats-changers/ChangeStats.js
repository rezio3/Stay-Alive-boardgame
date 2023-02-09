export const changeStats = (
	char,
	setChar,
	life,
	energy,
	starvation,
	sanity,
	temp
) => {
	setChar({
		...char,
		life: life,
		energy: energy,
		starvation: starvation,
		sanity: sanity,
		temperature: temp,
	});
};
