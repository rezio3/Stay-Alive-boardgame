import React, { useContext, useEffect } from "react";
import { BoardContext } from "../context/BoardContext";
import { CharacterContext } from "../context/CharContext";
import { CantMoveAnimationContext } from "../context/CantMoveAnimation";
import { changeCharStats } from "./functions/Stats-changer/ChangeCharStats";
import { StatsNotificationsContext } from "../context/StatsNotificationsContext";

const Character = () => {
	const [char, setChar] = useContext(CharacterContext);
	const [board, setBoard] = useContext(BoardContext);
	const [charAnim, setCharAnim] = useContext(CantMoveAnimationContext);
	const [statsNote, setStatsNote] = useContext(StatsNotificationsContext);

	const characterMove = () => {
		changeCharStats({
			char: char,
			setChar: setChar,
			energy: char.energy - 1,
			statsNote: statsNote,
			setStatsNote: setStatsNote,
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
