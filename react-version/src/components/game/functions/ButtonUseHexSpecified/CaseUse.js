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
	setChar({
		...char,
		energy: 10,
	});
	setBoard({
		...board,
		caveUsed: true,
	});
};
