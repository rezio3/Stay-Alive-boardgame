import { cantMoveAnimation } from "../CantMoveAnimation";
import { changeCharStats } from "../Stats-changer/ChangeCharStats";

export const oasisUse = (
	board,
	setBoard,
	char,
	setChar,
	buttons,
	setButtons,
	charAnim,
	setCharAnim,
	statsNote,
	setStatsNote
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
		changeCharStats({
			char: char,
			setChar: setChar,
			energy: energy + 3,
			sanity: sanity + 1,
			starvation: starvation + 1,
			temp: temperature + temp,
			statsNote: statsNote,
			setStatsNote: setStatsNote,
			event: "oasis",
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
