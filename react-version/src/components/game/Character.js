import React, { useContext, useEffect } from "react";
import { BoardContext } from "../context/BoardContext";
import { CharacterContext } from "../context/CharContext";

const Character = () => {
	const [char, setChar] = useContext(CharacterContext);
	const [board, setBoard] = useContext(BoardContext);

	const characterMove = () => {
		setChar({
			...char,
			energy: char.energy - 1,
			prevEnergy: char.energy,
		});
	};
	useEffect(() => {
		if (board.btnId !== null && board.prevBtnId !== board.btnId) {
			characterMove();
		}
	}, [board.btnId]);

	if (char.cantMove) {
		setTimeout(() => {
			setChar({
				...char,
				cantMove: false,
			});
		}, 500);
	}

	return (
		<div
			className={
				"character __" +
				char.selectedChar +
				(char.cantMove ? " character-animation" : " ")
			}
			id="selected-character"
			style={board.charSetOnBoard && { display: "block" }}
		/>
	);
};

export default Character;
