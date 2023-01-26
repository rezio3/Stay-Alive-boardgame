import { cantMoveAnimation } from "../CantMoveAnimation";

export const resourcesUse = (char, setChar, buttons, setButtons, board) => {
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
			let addItem = char.inventoryResources[board.resourcePlayerStandsOn] + 1;
			setChar({
				...char,
				energy: energy - 1,
				cantMove: true,
				inventoryResources: {
					...char.inventoryResources,
					[board.resourcePlayerStandsOn]: addItem,
				},
			});
		} else if (char.energy === 0) {
			const textValue = "Za mało energii na zebranie surowca";
			cantMoveAnimation(char, setChar, textValue);
		}
	}
};
