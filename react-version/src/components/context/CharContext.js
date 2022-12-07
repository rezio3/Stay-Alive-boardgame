import React, { createContext, useState } from "react";

const charSelected = {
	life: 0,
	energy: 0,
	starvation: 0,
	sanity: 0,
	temperature: 0,

	prevLife: 0,
	prevEnergy: 0,
	prevStarvation: 0,
	prevSanity: 0,
	prevTemperature: 0,

	selectedChar: null,
};

export const CharacterContext = createContext();

const Char = ({ children }) => {
	const [char, setChar] = useState(charSelected);
	return (
		<CharacterContext.Provider value={[char, setChar]}>
			{children}
		</CharacterContext.Provider>
	);
};

export default Char;
