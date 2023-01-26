export const fightProcess = (fight, setFight, char, setChar) => {
	const number = Math.ceil(Math.random() * 6);
	if (char.energy === 1 && number <= 3) {
		setFight({
			...fight,
			fightEnd: true,
			cubeRandomNumber: "",
		});
		setChar({
			...char,
			energy: char.energy - 1,
			life: char.life - 6,
		});
		setTimeout(() => {
			setFight({
				...fight,
				fightEnd: true,
				addFrozenCrownAfterFight: false,
				cubeRandomNumber: number,
			});
		}, 100);
	} else {
		if (number >= 4) {
			setFight({
				...fight,
				fightEnd: true,
				cubeRandomNumber: "",
			});
			setChar({
				...char,
				energy: char.energy - 1,
			});
			setTimeout(() => {
				setFight({
					...fight,
					fightEnd: true,
					addFrozenCrownAfterFight: true,
					cubeRandomNumber: number,
				});
			}, 100);
		} else {
			setFight({
				...fight,
				fightEnd: false,
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
					fightEnd: false,
					cubeRandomNumber: number,
				});
			}, 100);
		}
	}
};
