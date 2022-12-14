import React, { createContext, useState } from "react";

const boardData = {
	arrowBtnActive: false,
	charSetOnBoard: false,
	btnId: null,
	// btnData: null,
	prevRow: 1,
	prevColumn: 11,
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
