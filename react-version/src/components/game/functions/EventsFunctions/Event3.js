import { changeCharStats } from "../Stats-changer/ChangeCharStats";

export const event3 = ({
	char,
	setChar,
	board,
	rounds,
	statsNote,
	setStatsNote,
	buttons,
	setButtons,
}) => {
	// console.log("event 3 - zamieć");
	const { resourcePlayerStandsOn, biomPlayerStandsOn } = board;
	let time = rounds.round % 2 === 0 ? 500 : 1800;
	if (
		resourcePlayerStandsOn !== "tent" &&
		resourcePlayerStandsOn !== "cave" &&
		biomPlayerStandsOn !== "desert" &&
		biomPlayerStandsOn !== "crater"
	) {
		let temperatureSubstractor;
		switch (rounds.difficulty) {
			case "easy":
				temperatureSubstractor = 1;
				break;
			case "medium":
				temperatureSubstractor = 2;
				break;
			case "hard":
				temperatureSubstractor = 3;
				break;
			default:
				temperatureSubstractor = 1;
		}

		setTimeout(() => {
			changeCharStats({
				char: char,
				setChar: setChar,
				temp: char.temperature - temperatureSubstractor,
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
		setTimeout(() => {
			setButtons({
				...buttons,
				endTurnButton: true,
			});
		}, time);
	}
};
