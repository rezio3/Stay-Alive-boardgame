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

	if (char.cantMoveAnimation) {
		setTimeout(() => {
			setChar({
				...char,
				cantMoveAnimation: false,
			});
		}, 500);
	}

	return (
		<div
			className={
				"character __" +
				char.selectedChar +
				(char.cantMoveAnimation ? " character-animation" : " ")
			}
			id="selected-character"
			style={board.charSetOnBoard && { display: "block" }}
		/>
	);
};

export default Character;
