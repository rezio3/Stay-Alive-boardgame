export const difficulty = (rounds, setRounds) => {
	if (rounds.round >= 16) {
		setRounds({
			...rounds,
			round: rounds.round + 1,
			difficulty: "hard",
		});
	} else if (rounds.round >= 8) {
		setRounds({
			...rounds,
			round: rounds.round + 1,

			difficulty: "medium",
		});
	} else {
		setRounds({
			...rounds,
			round: rounds.round + 1,
			difficulty: "easy",
		});
	}
};
