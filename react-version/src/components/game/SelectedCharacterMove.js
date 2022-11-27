import React, { useContext } from "react";
import { BoardContext } from "../context/BoardContext";
import { CharacterContext } from "../context/CharContext";

const Character = () => {
	const [char, setChar] = useContext(CharacterContext);
	const [board] = useContext(BoardContext);
	const handleCharacterMove = () => {
		const destinationHex = document.getElementById(`${board.btnId}`);
		const characterLink = document.querySelector(`#selected-character`);
		characterLink.style.display = "block";
		destinationHex.appendChild(characterLink);
	};

	if (board.btnId !== null) {
		handleCharacterMove();
	}

	return (
		<div
			className={"character __" + char.selectedChar}
			id="selected-character"
		/>
	);
};

export default Character;
