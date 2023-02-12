import { cantMoveAnimation } from "../CantMoveAnimation";
import { changeCharStats } from "../Stats-changer/ChangeCharStats";

export const firePlaceUse = (
	char,
	setChar,
	anim,
	setAnim,
	buttons,
	setButtons,
	charAnim,
	setCharAnim
) => {
	const { energy, sanity, temperature, starvation, life } = char;
	const { flint } = char.inventoryResources;
	const { sejmitar, fireCard } = char.inventoryItems;
	if (flint > 0) {
		let fireRoll = Math.floor(Math.random() * 5);
		let addTemperature = temperature < 5 ? 1 : 0;
		if (sejmitar === 0 && fireRoll === 0) {
			changeCharStats({
				char: char,
				setChar: setChar,
				energy: energy + 3,
				sanity: sanity + 1,
				temp: temperature + addTemperature,
				flint: flint - 1,
				sejmitar: 0,
				fireCard: fireCard,
				event: "firePlace",
			});
			setAnim({
				...anim,
				sejmitar: true,
			});
			setButtons({
				...buttons,
				useHexButton: false,
				endTurnButton: false,
			});

			setTimeout(() => {
				setAnim({
					...anim,
					sejmitar: false,
				});
				changeCharStats({
					char: char,
					setChar: setChar,
					energy: energy + 3,
					sanity: sanity + 1,
					temp: temperature + addTemperature,
					flint: flint - 1,
					sejmitar: 1,
					fireCard: fireCard,
					event: "firePlace",
				});
				setButtons({
					...buttons,
					useHexButton: false,
					endTurnButton: true,
				});
			}, 1900);
		} else {
			setAnim({
				...anim,
				firePlaceCard: true,
			});
			changeCharStats({
				char: char,
				setChar: setChar,
				energy: energy + 3,
				sanity: sanity + 1,
				temp: temperature + addTemperature,
				flint: flint - 1,
				sejmitar: sejmitar,
				fireCard: fireCard,
				event: "firePlace",
			});
			setButtons({
				...buttons,
				useHexButton: false,
				endTurnButton: false,
			});

			setTimeout(() => {
				setAnim({
					...anim,
					firePlaceCard: false,
				});
				changeCharStats({
					char: char,
					setChar: setChar,
					energy: energy + 3,
					sanity: sanity + 1,
					temp: temperature + addTemperature,
					flint: flint - 1,
					sejmitar: sejmitar,
					fireCard: fireCard + 1,
					event: "firePlace",
				});
				setButtons({
					...buttons,
					useHexButton: false,
					endTurnButton: true,
				});
			}, 2800);
		}
	} else if (flint === 0) {
		const textValue = "Nie masz krzesiwa";
		cantMoveAnimation(charAnim, setCharAnim, textValue);
	}
};
