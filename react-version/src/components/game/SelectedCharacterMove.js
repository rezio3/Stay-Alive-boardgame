import React, { useContext } from "react";
import { BoardContext } from "../context/BoardContext";
import { CharacterContext } from "../context/CharContext";

const Character = () => {
	const [char, setChar] = useContext(CharacterContext);
	const [board] = useContext(BoardContext);

	const handleCharacterDistance = () => {
		const destinationHex = document.getElementById(`${board.btnId}`);
		// approve movement if distance is correct (maximum one hex)
		let previousHex;
		let xPreviousHexDistance;
		let yPreviousHexDistance;
		let xCheckCharDistance;
		let yCheckCharDistance;
		let finalDistance;

		const xDestinationHexDistance = destinationHex.offsetLeft;
		const yDestinationHexDistance = destinationHex.offsetTop;
		if (board.prevBtnId !== null) {
			previousHex = document.getElementById(`${board.prevBtnId}`);
			xPreviousHexDistance = previousHex.offsetLeft;
			yPreviousHexDistance = previousHex.offsetTop;
			xCheckCharDistance = xPreviousHexDistance - xDestinationHexDistance;
			yCheckCharDistance = yPreviousHexDistance - yDestinationHexDistance;
			finalDistance = Math.sqrt(
				Math.pow(xCheckCharDistance, 2) + Math.pow(yCheckCharDistance, 2)
			);
		}
		if (board.prevBtnId === null || finalDistance < 60) {
			characterMove(destinationHex);
		} else {
			console.log("ZA DALEKO!!!");
		}
	};

	const characterMove = (destinationHex) => {
		// move character image onto clicked hex
		const characterLink = document.querySelector(`#selected-character`);
		characterLink.style.display = "block";
		destinationHex.appendChild(characterLink);
	};

	if (board.btnId !== null && char.energy > 0) {
		console.log(char.energy);
		handleCharacterDistance();
	}

	return (
		<div
			className={"character __" + char.selectedChar}
			id="selected-character"
		/>
	);
};

export default Character;
