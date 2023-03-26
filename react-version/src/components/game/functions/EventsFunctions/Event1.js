import { changeCharStats } from "../Stats-changer/ChangeCharStats";

export const event1 = ({
	rounds,
	char,
	setChar,
	board,
	statsNote,
	setStatsNote,
	buttons,
	setButtons,
}) => {
	// console.log("event1 - złowroga ciemność");
	let time = rounds.round % 2 === 0 ? 500 : 1800;
	if (
		rounds.round % 2 === 1 &&
		board.biomPlayerStandsOn !== "crater" &&
		char.inventoryItems.torch === 0 &&
		char.inventoryItems.frozenCrown === 0
	) {
		let sanitySubstractor;
		switch (rounds.difficulty) {
			case "easy":
				sanitySubstractor = 1;
				break;
			case "medium":
				sanitySubstractor = 2;
				break;
			case "hard":
				sanitySubstractor = 3;
				break;
			default:
				sanitySubstractor = 1;
		}
		setButtons({
			...buttons,
			useHexButton: false,
		});
		setTimeout(() => {
			changeCharStats({
				char: char,
				setChar: setChar,
				sanity: char.sanity - sanitySubstractor,
				statsNote: statsNote,
				setStatsNote: setStatsNote,
				event: "eventCard",
			});
			setButtons({
				...buttons,
				endTurnButton: true,
			});
		}, time);
	} else {
		setButtons({
			...buttons,
			useHexButton: false,
		});
		setTimeout(() => {
			setButtons({
				...buttons,
				endTurnButton: true,
			});
		}, time);
	}
};
