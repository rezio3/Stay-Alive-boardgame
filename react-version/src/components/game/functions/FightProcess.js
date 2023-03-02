import { changeCharStats } from "./Stats-changer/ChangeCharStats";

export const fightProcess = (fight, setFight, char, setChar) => {
	let frozenCrown = fight.monsterName === "Lodowy Golem" ? true : false;
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
			addFrozenCrownAfterFight: false,
			cubeRandomNumber: number,
		});
		changeCharStats({
			char: char,
			setChar: setChar,
			energy: char.energy - 1,
			life: char.life - 6,
			event: "fight",
		});
	} else {
		if (number >= swordModifierWin) {
			setFight({
				...fight,
				fightEnd: true,
				addFrozenCrownAfterFight: frozenCrown,
				cubeRandomNumber: number,
			});
			changeCharStats({
				char: char,
				setChar: setChar,
				energy: char.energy - 1,
				life: char.life,
				event: "fight",
			});
		} else {
			setFight({
				...fight,
				fightEnd: false,
				cubeRandomNumber: number,
			});
			changeCharStats({
				char: char,
				setChar: setChar,
				energy: char.energy - 1,
				life: char.life - 2,
				event: "fight",
			});
		}
	}
};
