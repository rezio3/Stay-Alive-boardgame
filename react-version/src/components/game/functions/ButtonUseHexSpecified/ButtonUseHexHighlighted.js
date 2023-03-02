export const buttonsUseHexHighlighted = (
	e,
	buttons,
	setButtons,
	board,
	setBoard
) => {
	const biom = e.target.title;
	const { classList } = e.target;
	if (
		classList.contains("wood") ||
		classList.contains("stone") ||
		classList.contains("grass") ||
		classList.contains("flint") ||
		classList.contains("lotos") ||
		classList.contains("fire") ||
		classList.contains("oasis") ||
		classList.contains("frozenCrown") ||
		classList.contains("cave")
	) {
		setButtons({ ...buttons, useHexButton: true });
		let source;
		if (classList.contains("wood")) source = "wood";
		if (classList.contains("stone")) source = "stone";
		if (classList.contains("grass")) source = "grass";
		if (classList.contains("flint")) source = "flint";
		if (classList.contains("lotos")) source = "lotos";
		if (classList.contains("fire")) source = "fire";
		if (classList.contains("oasis")) source = "oasis";
		if (classList.contains("frozenCrown")) source = "frozenCrown";
		if (classList.contains("cave")) source = "cave";
		setBoard({
			...board,
			btnId: e.target.id,
			btnData: e.target,
			prevRow: e.target.getAttribute("row"),
			prevColumn: e.target.getAttribute("column"),
			resourcePlayerStandsOn: source,
			biomPlayerStandsOn: biom,
		});
	} else {
		setButtons({ ...buttons, useHexButton: false });
		setBoard({
			...board,
			btnId: e.target.id,
			btnData: e.target,
			prevRow: e.target.getAttribute("row"),
			prevColumn: e.target.getAttribute("column"),
			resourcePlayerStandsOn: null,
			biomPlayerStandsOn: biom,
		});
	}
};
