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
	charAnim,
	setCharAnim,
}) => {
	// console.log("event 3 - zamieć");
	setCharAnim(true);
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
		setButtons({
			...buttons,
			useHexButton: false,
		});
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
	}
};
