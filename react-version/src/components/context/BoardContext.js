import React, { createContext, useState } from "react";

const boardData = {
	arrowBtnActive: false,
	charSetOnBoard: false,
	btnId: null,
	btnData: "",
	prevRow: 1,
	prevColumn: 11,
	resourcePlayerStandsOn: null,
	biomPlayerStandsOn: "outland",
	oasisUsed: false,
	caveUsed: false,
};

export const BoardContext = createContext();

const Board = ({ children }) => {
	const [board, setBoard] = useState(boardData);

	return (
		<BoardContext.Provider value={[board, setBoard]}>
			{children}
		</BoardContext.Provider>
	);
};

export default Board;
