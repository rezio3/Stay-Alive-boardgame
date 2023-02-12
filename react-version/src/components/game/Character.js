import React, { useContext, useEffect } from "react";
import { BoardContext } from "../context/BoardContext";
import { CharacterContext } from "../context/CharContext";
import { CantMovieAnimationContext } from "../context/CantMoveAnimation";
import { changeCharStats } from "./functions/Stats-changer/ChangeCharStats";

const Character = () => {
	const [char, setChar] = useContext(CharacterContext);
	const [board, setBoard] = useContext(BoardContext);
	const [charAnim, setCharAnim] = useContext(CantMovieAnimationContext);

	const characterMove = () => {
		changeCharStats({
			char: char,
			setChar: setChar,
			energy: char.energy - 1,
			event: "move",
		});
	};
	useEffect(() => {
		if (board.btnId !== null && board.prevBtnId !== board.btnId) {
			characterMove();
		}
	}, [board.btnId]);

	if (charAnim) {
		setTimeout(() => {
			setCharAnim(false);
		}, 500);
	}

	return (
		<div
			className={
				"character __" +
				char.selectedChar +
				(charAnim ? " character-animation" : " ")
			}
			id="selected-character"
			style={board.charSetOnBoard && { display: "block" }}
		/>
	);
};

export default Character;
