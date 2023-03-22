import React, { createContext, useState } from "react";

const fightData = {
	fightActive: false,
	monsterName: "",
	cubeRandomNumber: "",
	addFrozenCrownAfterFight: null,
	fightEnd: false,
	gnomEvent: {
		gnomActive: false,
		gnomDefeated: false,
	},
};

export const FightContext = createContext();

const Fight = ({ children }) => {
	const [fight, setFight] = useState(fightData);
	return (
		<FightContext.Provider value={[fight, setFight]}>
			{children}
		</FightContext.Provider>
	);
};

export default Fight;
