import { cantMoveAnimation } from "../CantMoveAnimation";

export const frozenCrownUse = (
	fight,
	setFight,
	anim,
	setAnim,
	buttons,
	setButtons,
	char,
	setChar
) => {
	if (char.energy > 0) {
		if (!char.inventoryItems.frozenCrown) {
			setFight({
				...fight,
				fightActive: true,
			});
			setAnim({
				...anim,
				fight: true,
			});
			setButtons({
				...buttons,
				useHexButton: false,
				endTurnButton: false,
			});
			setChar({
				...char,
				cantMove: true,
			});
		} else {
			const textValue = "Masz już lodową koronę!";
			console.log(textValue);
			cantMoveAnimation(char, setChar, textValue);
		}
	} else {
		const textValue = "Nie masz energii na walkę z lodowym golemem";
		cantMoveAnimation(char, setChar, textValue);
	}
};
