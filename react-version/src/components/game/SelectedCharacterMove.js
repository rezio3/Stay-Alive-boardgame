import React, { useContext } from "react";
import { BoardContext } from "../context/BoardContext";
import { CharacterContext } from "../context/CharContext";

const Character = () => {
	const [char, setChar] = useContext(CharacterContext);
	const [board, setBoard] = useContext(BoardContext);

	const characterMove = () => {
		const destinationHex = document.getElementById(`${board.btnId}`);
		// move character image onto clicked hex
		const characterLink = document.querySelector(`#selected-character`);
		characterLink.style.display = "block";
		destinationHex.appendChild(characterLink);
		console.log(`energy: ${char.energy}, prevEnergy: ${char.prevEnergy}`);

		setBoard({
			...board,
			prevBtnId: board.btnId,
		});
		setChar({
			...char,
			energy: char.energy - 1,
			prevEnergy: char.energy,
		});
	};

	if (
		board.btnId !== null &&
		char.energy > 0 &&
		board.prevBtnId !== board.btnId
	) {
		characterMove();
	}

	return (
		<div
			className={"character __" + char.selectedChar}
			id="selected-character"
		/>
	);
};

export default Character;
