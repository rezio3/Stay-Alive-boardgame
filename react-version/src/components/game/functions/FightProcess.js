export const fightProcess = (fight, setFight, char, setChar) => {
	const number = Math.ceil(Math.random() * 6);
	if (number >= 4) {
		setFight({
			...fight,
			fightWin: true,
			cubeRandomNumber: "",
		});
		setChar({
			...char,
			energy: char.energy - 1,
		});
		setTimeout(() => {
			setFight({
				...fight,
				fightWin: true,
				cubeRandomNumber: number,
			});
		}, 100);
	} else {
		setFight({
			...fight,
			fightWin: false,
			cubeRandomNumber: "",
		});
		setChar({
			...char,
			energy: char.energy - 1,
			life: char.life - 2,
		});
		setTimeout(() => {
			setFight({
				...fight,
				fightWin: false,
				cubeRandomNumber: number,
			});
		}, 100);
	}
};
