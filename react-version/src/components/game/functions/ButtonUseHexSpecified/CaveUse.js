import { cantMoveAnimation } from "../CantMoveAnimation";
import { changeCharStats } from "../Stats-changer/ChangeCharStats";

export const caveUse = (
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
	if (!board.caveUsed) {
		changeCharStats({
			char: char,
			setChar: setChar,
			energy: 10,
			sanity: char.sanity + 1,
			statsNote: statsNote,
			setStatsNote: setStatsNote,
			event: "cave",
		});
		setBoard({
			...board,
			caveUsed: true,
		});
		setButtons({
			...buttons,
			useHexButton: false,
		});
	} else {
		const textValue = "Jaskinia została już raz użyta";
		cantMoveAnimation(charAnim, setCharAnim, textValue);
	}
};
