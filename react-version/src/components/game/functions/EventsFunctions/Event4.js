import { changeCharStats } from "../Stats-changer/ChangeCharStats";

export const event4 = ({ char, setChar, rounds, statsNote, setStatsNote }) => {
	// console.log("event4 - trujące powietrze");
	let lifeSubstractor;
	switch (rounds.difficulty) {
		case "easy":
			lifeSubstractor = 2;
			break;
		case "medium":
			lifeSubstractor = 3;
			break;
		case "hard":
			lifeSubstractor = 4;
			break;
		default:
			lifeSubstractor = 2;
	}
	setTimeout(() => {
		changeCharStats({
			char: char,
			setChar: setChar,
			life: char.life - lifeSubstractor,
			statsNote: statsNote,
			setStatsNote: setStatsNote,
			event: "eventCard",
		});
	}, 1800);
};
