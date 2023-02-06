export const biomesEffects = (biom, char, resource) => {
	let temp;
	if (char.temperature > 5) {
		temp = -1;
	} else if (char.temperature < 5) {
		temp = 1;
	} else {
		temp = 0;
	}

	switch (biom) {
		case "outland":
			return { starvation: 0, sanity: 0, temperature: temp };
		case "jungle":
			return { starvation: 0, sanity: 0, temperature: temp };
		case "desert":
			if (resource === "oasis") {
				return { starvation: 0, sanity: 0, temperature: 0 };
			} else {
				return { starvation: -1, sanity: 0, temperature: 1 };
			}
		case "northrend":
			return { starvation: 0, sanity: -1, temperature: -1 };
		case "crater":
			return { starvation: 0, sanity: -1, temperature: 1 };
		case "fjord":
			return { starvation: 0, sanity: 0, temperature: 0 };
		default:
			return { starvation: 0, sanity: 0, temperature: 0 };
	}
};
