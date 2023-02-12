import { changeCharStats } from "./Stats-changer/ChangeCharStats";

export const fightProcess = (fight, setFight, char, setChar) => {
	const number = Math.ceil(Math.random() * 6);
	let swordModifierDefeat;
	let swordModifierWin;
	const { sword } = char.inventoryItems;
	if (sword) {
		swordModifierDefeat = 2;
		swordModifierWin = 3;
	} else if (!sword) {
		swordModifierDefeat = 3;
		swordModifierWin = 4;
	}
	if (char.energy === 1 && number <= swordModifierDefeat) {
		setFight({
			...fight,
			fightEnd: true,
			cubeRandomNumber: "",
		});
		changeCharStats({
			char: char,
			setChar: setChar,
			energy: char.energy - 1,
			life: char.life - 6,
			event: "fight",
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
		if (number >= swordModifierWin) {
			setFight({
				...fight,
				fightEnd: true,
				cubeRandomNumber: "",
			});
			changeCharStats({
				char: char,
				setChar: setChar,
				energy: char.energy - 1,
				life: char.life,
				event: "fight",
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
			changeCharStats({
				char: char,
				setChar: setChar,
				energy: char.energy - 1,
				life: char.life - 2,
				event: "fight",
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
