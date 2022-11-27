import React, { createContext, useContext, useState } from "react";

const boardData = {
	btnId: null,
	prevBtnId: null,
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
