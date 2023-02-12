import { changeCharStats } from "./Stats-changer/ChangeCharStats";

export const eatButtons = (e, char, setChar) => {
	if (e.target.name === "eat1grass") {
		changeCharStats({
			char: char,
			setChar: setChar,
			energy: char.energy + 2,
			starvation: char.starvation,
			grass: char.inventoryResources.grass - 1,
			event: "eatGrassButton",
		});
	} else if (e.target.name === "eat2grass") {
		changeCharStats({
			char: char,
			setChar: setChar,
			energy: char.energy + 4,
			starvation: char.starvation + 1,
			grass: char.inventoryResources.grass - 2,
			event: "eatGrassButton",
		});
	} else if (e.target.name === "eatfood") {
		changeCharStats({
			char: char,
			setChar: setChar,
			life: char.life + 5,
			starvation: char.starvation + 2,
			food: 0,
			event: "eatFoodButton",
		});
	} else if (e.target.name === "redbull") {
		changeCharStats({
			char: char,
			setChar: setChar,
			energy: char.energy + 8,
			starvation: char.starvation,
			fireCard: char.inventoryItems.fireCard - 1,
			event: "eatSasuagesOrRedbull",
		});
	} else if (e.target.name === "sasuages") {
		changeCharStats({
			char: char,
			setChar: setChar,
			energy: char.energy,
			starvation: char.starvation + 4,
			fireCard: char.inventoryItems.fireCard - 1,
			event: "eatSasuagesOrRedbull",
		});
	}
};
