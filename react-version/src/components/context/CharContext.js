import React, { createContext, useState } from "react";

const charSelected = {
	life: 20,
	energy: 10,
	starvation: 10,
	sanity: 10,
	temperature: 5,

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
