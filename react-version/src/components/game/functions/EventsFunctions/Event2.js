export const event2 = ({
	rounds,
	char,
	setChar,
	buttons,
	setButtons,
	anim,
	setAnim,
	fight,
	setFight,
}) => {
	console.log("event2 function");
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
	}
};
