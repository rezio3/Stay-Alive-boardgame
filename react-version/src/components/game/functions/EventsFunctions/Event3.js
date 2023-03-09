import { changeCharStats } from "../Stats-changer/ChangeCharStats";

export const event3 = ({ char, setChar, board, rounds }) => {
	const { resourcePlayerStandsOn, biomPlayerStandsOn } = board;
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
				temperature: char.temperature - temperatureSubstractor,
				event: "eventCard",
			});
		}, 1800);
	}
};
