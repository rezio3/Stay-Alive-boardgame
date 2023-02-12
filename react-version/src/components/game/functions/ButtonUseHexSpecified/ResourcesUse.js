import { cantMoveAnimation } from "../CantMoveAnimation";
import { changeCharStats } from "../Stats-changer/ChangeCharStats";
export const resourcesUse = (
	char,
	setChar,
	buttons,
	setButtons,
	board,
	charAnim,
	setCharAnim,
	statsNote,
	setStatsNote
) => {
	const { energy } = char;
	const { axe } = char.inventoryItems;
	if (axe === 1) {
		setButtons({
			...buttons,
			useHexButton: false,
		});
		let addItem = char.inventoryResources[board.resourcePlayerStandsOn] + 1;
		setChar({
			...char,
			cantMove: true,
			inventoryResources: {
				...char.inventoryResources,
				[board.resourcePlayerStandsOn]: addItem,
			},
		});
	} else if (axe === 0) {
		if (char.energy > 0) {
			setButtons({
				...buttons,
				useHexButton: false,
			});
			// let addItem = char.inventoryResources[board.resourcePlayerStandsOn] + 1;
			changeCharStats({
				char: char,
				setChar: setChar,
				energy: energy - 1,
				resourcePlayerStandsOn: board.resourcePlayerStandsOn,
				// [board.resourcePlayerStandsOn]: addItem,
				statsNote: statsNote,
				setStatsNote: setStatsNote,
				event: "pickUpResource",
			});
			// setChar({
			// 	...char,
			// 	energy: energy - 1,
			// 	prevEnergy: char.energy,
			// 	cantMove: true,
			// 	inventoryResources: {
			// 		...char.inventoryResources,
			// 		[board.resourcePlayerStandsOn]: addItem,
			// 	},
			// });
		} else if (char.energy === 0) {
			const textValue = "Za mało energii na zebranie surowca";
			cantMoveAnimation(charAnim, setCharAnim, textValue);
		}
	}
};
