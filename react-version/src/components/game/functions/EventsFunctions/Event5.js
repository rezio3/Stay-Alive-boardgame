export const event5 = (
	char,
	setChar,
	rounds,
	setRounds,
	fight,
	setFight,
	buttons,
	setButtons,
	statsNote,
	setStatsNote
) => {
	// console.log("event5 - upiorognom");
	let time = rounds.round % 2 === 0 ? 500 : 1800;
	if (rounds.round % 2 === 1) {
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
				monsterName: "Wielkie Harpioperze",
			});
			setAnim({
				...anim,
				fight: true,
			});
		}, 1500);
	} else {
		setTimeout(() => {
			setButtons({
				...buttons,
				endTurnButton: true,
			});
		}, time);
	}
};
