import { cantMoveAnimation } from "../CantMoveAnimation";

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
		setChar({
			...char,
			energy: 10,
		});
		setBoard({
			...board,
			caveUsed: true,
		});
	} else {
		const textValue = "Jaskinia została już raz użyta";
		cantMoveAnimation(charAnim, setCharAnim, textValue);
	}
};
