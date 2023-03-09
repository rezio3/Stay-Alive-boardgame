import { changeCharStats } from "../Stats-changer/ChangeCharStats";

export const event1 = ({ rounds, char, setChar, board }) => {
	console.log("event1 - złowroga ciemność");
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
		setTimeout(() => {
			changeCharStats({
				char: char,
				setChar: setChar,
				sanity: char.sanity - sanitySubstractor,
				event: "eventCard",
			});
		}, 1800);
	}
};
