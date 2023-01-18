import React, { createContext, useState } from "react";

const buttonsData = {
	useHexButton: false,
};

export const ButtonsContext = createContext();

const Buttons = ({ children }) => {
	const [buttons, setButtons] = useState(buttonsData);
	return (
		<ButtonsContext.Provider value={[buttons, setButtons]}>
			{children}
		</ButtonsContext.Provider>
	);
};

export default Buttons;
