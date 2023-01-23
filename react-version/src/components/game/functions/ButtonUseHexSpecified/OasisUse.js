export const oasisUse = (board, setBoard, char, setChar) => {
	const { energy, starvation, sanity, temperature } = char;
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
};
