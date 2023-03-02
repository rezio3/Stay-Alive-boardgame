export const addCrownAfterFight = (
	anim,
	setAnim,
	char,
	setChar,
	buttons,
	setButtons
) => {
	setTimeout(() => {
		setAnim({
			...anim,
			fight: false,
			frozenCrown: true,
		});
	}, 500);

	setTimeout(() => {
		setChar({
			...char,
			inventoryItems: {
				...char.inventoryItems,
				frozenCrown: 1,
			},
		});
		setAnim({
			...anim,
			fight: false,
			frozenCrown: false,
		});
		setButtons({
			...buttons,
			endTurnButton: true,
		});
	}, 2600);
};
