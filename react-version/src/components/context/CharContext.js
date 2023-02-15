import React, { createContext, useState } from "react";

const player = {
	life: 0,
	energy: 0,
	starvation: 0,
	sanity: 0,
	temperature: 0,

	prevLife: 20,
	prevEnergy: 10,
	prevStarvation: 10,
	prevSanity: 10,
	prevTemperature: 5,

	selectedChar: null,

	cantMove: false,

	inventoryResources: {
		wood: 0,
		stone: 0,
		grass: 0,
		flint: 0,
		lotos: 0,
	},

	inventoryItems: {
		axe: 0,
		sword: 0,
		shoes: 0,
		coat: 0,
		torch: 0,
		food: 0,
		fireCard: 0,
		sejmitar: 0,
		frozenCrown: 0,
	},

	unlockedItems: {
		axeUnl: false,
		shoesUnl: false,
		swordUnl: false,
		foodUnl: false,
		torchUnl: false,
		coatUnl: false,
	},
};

export const CharacterContext = createContext();

const Char = ({ children }) => {
	const [char, setChar] = useState(player);
	return (
		<CharacterContext.Provider value={[char, setChar]}>
			{children}
		</CharacterContext.Provider>
	);
};

export default Char;
