import React, { createContext, useState } from "react";

const charSelected = {
	selectedChar: "",
};

export const CharaterContext = createContext();

const Char = ({ children }) => {
	const [char, setChar] = useState(charSelected);
	return (
		<CharaterContext.Provider value={[char, setChar]}>
			{children}
		</CharaterContext.Provider>
	);
};

export default Char;
