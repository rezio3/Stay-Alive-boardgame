import React, { createContext, useState } from "react";

const roundsData = {
	round: 1,
	difficulty: easy,
};

export const RoundsContext = createContext();

const Rounds = ({ children }) => {
	const [rounds, setRounds] = useState(roundsData);
	return (
		<RoundsContext.Provider value={[rounds, setRounds]}>
			{children}
		</RoundsContext.Provider>
	);
};

export default Rounds;
