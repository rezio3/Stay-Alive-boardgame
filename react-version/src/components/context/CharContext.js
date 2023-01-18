import React, { createContext, useState } from "react";

const player = {
	life: 0,
	energy: null,
	starvation: 0,
	sanity: 0,
	temperature: 0,

	prevLife: 0,
	prevEnergy: 0,
	prevStarvation: 0,
	prevSanity: 0,
	prevTemperature: 0,

	selectedChar: null,
	cantMove: false,

	inventory: {
		wood: 0,
		stone: 0,
		grass: 0,
		flint: 0,
		lotos: 0,
		axe: 0,
		sword: 0,
		shoes: 0,
		coat: 0,
		torch: 0,
		food: 0,
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
