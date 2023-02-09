import { cantMoveAnimation } from "../CantMoveAnimation";
import { changeStats } from "../Stats-changers/ChangeStats.js";

export const caveUse = (
	board,
	setBoard,
	char,
	setChar,
	buttons,
	setButtons,
	charAnim,
	setCharAnim
) => {
	if (!board.caveUsed) {
		changeStats(
			char,
			setChar,
			char.life,
			10,
			char.starvation,
			char.sanity + 1,
			char.temperature
		);
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
