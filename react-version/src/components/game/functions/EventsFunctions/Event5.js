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
	if (rounds.round % 2 === 1) {
		setFight({
			...fight,
			gnomEvent: {
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
				setButtons({
					...buttons,
					useHexButton: false,
					endTurnButton: false,
				});
				setChar({
					...char,
					cantMove: true,
				});
				setFight({
					...fight,
					fightActive: true,
					monsterName: "Upiorognom",
				});
				setAnim({
					...anim,
					fight: true,
				});
			}, time);
		}
	} else {
		if (fight.gnomEvent.gnomActive) {
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
		}
	}
};

// make fight with UG, when stands on hex,
// when go onto the hex and make lose
// and win fight. Distingue day and night
// mechanincs after fight
// make assets that provide additional statistics
