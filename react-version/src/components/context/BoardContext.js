import React, { createContext, useContext, useState } from "react";
import { CharaterContext } from "./CharContext";
import char1 from "../../img/char2.png";
import char2 from "../../img/char3.png";
import char3 from "../../img/char4.png";
import char4 from "../../img/char5.png";
import char5 from "../../img/char6.png";

const boardData = {
	btnId: null,
};

export const BoardContext = createContext();

const Board = ({ children }) => {
	const [board, setBoard] = useState(boardData);
	const [char] = useContext(CharaterContext);
	const charArray = [char1, char2, char3, char4, char5];

	const handleCharacterMove = () => {
		const destinationHex = document.getElementById(`${board.btnId}`);
		const characterLink = document.querySelector(`.character`);
		characterLink.style.display = "block";
		if (char.selectedChar !== null) {
			characterLink.style.backgroundImage = `url("${
				charArray[char.selectedChar]
			}")`;
		}
		// potrzebuje podstawić postać wybraną w menu na planszę.
		// pobiera na górze wszystkie zdjęcia i przypisuje im zmienne
		// char1, char2 itd.
		// w powyższej linijce chce dodać style liniowo i podmienić domyślną postać
		// korzystając ze zmiennej. Musze to zrobić na podstawie stanu z contextu CharContext.
		// można pięcioma if'ami ale po co jak można krócej. Tylko jak...
		destinationHex.appendChild(characterLink);
	};

	if (board.btnId !== null) {
		handleCharacterMove();
	}

	return (
		<BoardContext.Provider value={[board, setBoard]}>
			{children}
		</BoardContext.Provider>
	);
};

export default Board;
