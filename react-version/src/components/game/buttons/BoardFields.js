import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContext";
import { CharacterContext } from "../../context/CharContext";
import Character from "../Character";
import { checkDistance } from "../functions/Character-movement";
import { ButtonsContext } from "../../context/ButtonsContext";
import { cantMoveAnimation } from "../functions/CantMoveAnimation";
import { CantMovieAnimationContext } from "../../context/CantMoveAnimation";
import { buttonsUseHexHighlighted } from "../functions/ButtonUseHexSpecified/ButtonUseHexHighlighted";
import { FightContext } from "../../context/FightContext";
import { AnimationContext } from "../../context/AnimationContext";

const BoardFields = (props) => {
	const [board, setBoard] = useContext(BoardContext);
	const [char, setChar] = useContext(CharacterContext);
	const [buttons, setButtons] = useContext(ButtonsContext);
	const [charAnim, setCharAnim] = useContext(CantMovieAnimationContext);
	const [fight, setFight] = useContext(FightContext);
	const [anim, setAnim] = useContext(AnimationContext);

	const handleFieldClick = (e) => {
		if (fight.gnomEvent.gnomActive && board.resourcePlayerStandsOn === "cave") {
			setButtons({
				...buttons,
				useHexButton: false,
				endTurnButton: false,
			});
			setChar({
				...char,
				cantMove: true,
			});
			setTimeout(() => {
				setFight({
					...fight,
					fightActive: true,
					monsterName: "Upiorognom",
				});
				setAnim({
					...anim,
					fight: true,
				});
			}, 500);
		}
		const moveApproved = checkDistance(e, board, char);
		if (moveApproved.approved) {
			buttonsUseHexHighlighted(e, buttons, setButtons, board, setBoard);
		} else {
			cantMoveAnimation(charAnim, setCharAnim, moveApproved.textValue);
		}
	};

	return (
		<button
			row={props.row}
			column={props.column}
			type="button"
			className={`${
				props.id === 11
					? `btn11 btn-line1 arrow-button ${
							board.arrowBtnActive ? null : "animation"
					  }`
					: props.className
			}`}
			id={props.id}
			value={props.value}
			title={props.title}
			onClick={
				props.id === 11 && board.charSetOnBoard === false
					? props.dataArrowBtnHandler
					: handleFieldClick
			}
		>
			{Number(board.btnId) === props.id ? <Character /> : null}
		</button>
	);
};

export default BoardFields;
