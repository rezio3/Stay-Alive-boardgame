import { firePlaceUse } from "./ButtonUseHexSpecified/FirePlaceUse";
import { frozenCrownUse } from "./ButtonUseHexSpecified/FrozenCrownUse";
import { oasisUse } from "./ButtonUseHexSpecified/OasisUse";
import { resourcesUse } from "./ButtonUseHexSpecified/ResourcesUse";

export const buttonUseHex = (
	buttons,
	setButtons,
	char,
	setChar,
	board,
	setBoard,
	anim,
	setAnim,
	fight,
	setFight
) => {
	if (board.resourcePlayerStandsOn === "fire") {
		firePlaceUse(char, setChar, anim, setAnim, buttons, setButtons);
	} else if (board.resourcePlayerStandsOn === "oasis") {
		oasisUse(board, setBoard, char, setChar, buttons, setButtons);
	} else if (board.resourcePlayerStandsOn === "frozenCrown") {
		frozenCrownUse(
			fight,
			setFight,
			anim,
			setAnim,
			buttons,
			setButtons,
			char,
			setChar
		);
	} else if (
		board.resourcePlayerStandsOn === "wood" ||
		board.resourcePlayerStandsOn === "stone" ||
		board.resourcePlayerStandsOn === "lotos" ||
		board.resourcePlayerStandsOn === "flint" ||
		board.resourcePlayerStandsOn === "grass"
	) {
		resourcesUse(char, setChar, buttons, setButtons, board);
	}
};
