import { cantMoveAnimation } from "../CantMoveAnimation";

export const oasisUse = (
	board,
	setBoard,
	char,
	setChar,
	buttons,
	setButtons,
	charAnim,
	setCharAnim
) => {
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
			cantMove: true,
		});
		setBoard({
			...board,
			oasisUsed: true,
		});
		setButtons({
			...buttons,
			useHexButton: false,
		});
	} else if (board.oasisUsed === true) {
		const textValue = "Oaza została już raz użyta";
		cantMoveAnimation(charAnim, setCharAnim, textValue);
	}
};
