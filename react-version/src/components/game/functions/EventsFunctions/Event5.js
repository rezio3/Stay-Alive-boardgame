import { changeCharStats } from "../Stats-changer/ChangeCharStats";

export const event5 = ({
	char,
	setChar,
	rounds,
	setRounds,
	anim,
	setAnim,
	fight,
	setFight,
	buttons,
	setButtons,
	statsNote,
	setStatsNote,
	event,
	setEvent,
	board,
}) => {
	// console.log("event5 - upiorognom");
	let time = rounds.round % 2 === 0 ? 500 : 1800;
	if (rounds.round % 2 === 1) {
		let sanitySubstractor;
		switch (rounds.difficulty) {
			case "easy":
				sanitySubstractor = -1;
				break;
			case "medium":
				sanitySubstractor = -2;
				break;
			case "hard":
				sanitySubstractor = -3;
				break;
			default:
				sanitySubstractor = -1;
		}

		setEvent({
			...event,
			gnomEvent: {
				...event.gnomEvent,
				gnomActive: true,
			},
		});
		setTimeout(() => {
			changeCharStats({
				char: char,
				setChar: setChar,
				sanity: char.sanity + sanitySubstractor,
				statsNote: statsNote,
				setStatsNote: setStatsNote,
				event: "eventCard",
			});
			setButtons({
				...buttons,
				endTurnButton: true,
			});
		}, time);

		if (board.resourcePlayerStandsOn === "cave") {
			setButtons({
				...buttons,
				useHexButton: false,
				endTurnButton: false,
			});
			setChar({
				...char,
				cantMove: true,
			});
			setTimeout(() => {
				setFight({
					...fight,
					fightActive: true,
					monsterName: "Upiorognom",
				});
				setAnim({
					...anim,
					fight: true,
				});
			}, 1500);
		}
	} else {
		setTimeout(() => {
			setButtons({
				...buttons,
				endTurnButton: true,
			});
		}, time);
	}
};
