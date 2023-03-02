import React, { useContext, useEffect } from "react";
import "../../../../style/css/UniversalFightCard.css";
import { FightContext } from "../../../context/FightContext";
import { CharacterContext } from "../../../context/CharContext";
import swordsImg from "../../../../img/swords.png";
import cubesImg from "../../../../img/cubes.png";
import { fightProcess } from "../../functions/FightProcess.js";
import { AnimationContext } from "../../../context/AnimationContext";
import { ButtonsContext } from "../../../context/ButtonsContext";
import { BoardContext } from "../../../context/BoardContext";
import { addCrownAfterFight } from "./AddCrownAfterFight";

const UniversalFightCard = () => {
	const [fight, setFight] = useContext(FightContext);
	const [char, setChar] = useContext(CharacterContext);
	const [anim, setAnim] = useContext(AnimationContext);
	const [buttons, setButtons] = useContext(ButtonsContext);
	const [board, setBoard] = useContext(BoardContext);

	const { sejmitar } = char.inventoryItems;

	const handleCubes = () => {
		fightProcess(fight, setFight, char, setChar);
	};
	const handleEndFightButton = () => {
		if (fight.addFrozenCrownAfterFight) {
			setFight({
				...fight,
				fightActive: false,
				cubeRandomNumber: "",
				fightEnd: false,
				addFrozenCrownAfterFight: false,
				monsterName: "",
			});
			addCrownAfterFight(anim, setAnim, char, setChar, buttons, setButtons);
		} else {
			setFight({
				...fight,
				fightActive: false,
				cubeRandomNumber: "",
				fightEnd: false,
				addFrozenCrownAfterFight: false,
				monsterName: "",
			});
			setButtons({
				...buttons,
				endTurnButton: true,
				useHexButton: true,
			});
		}
	};
	const { fightActive } = fight;
	useEffect(() => {
		setBoard({
			...board,
			darkBoardBg: !board.darkBoardBg,
		});
	}, [fightActive]);

	let swordModifierDefeat;
	let swordModifierWin;
	const { sword } = char.inventoryItems;
	if (sword) {
		swordModifierDefeat = 2;
		swordModifierWin = 3;
	} else if (!sword) {
		swordModifierDefeat = 3;
		swordModifierWin = 4;
	}

	const handleUseSejmitar = () => {
		setFight({
			...fight,
			fightActive: false,
			cubeRandomNumber: "",
			fightEnd: false,
			addFrozenCrownAfterFight: false,
			monsterName: "",
		});
		setChar({
			...char,
			inventoryItems: {
				...char.inventoryItems,
				sejmitar: 0,
			},
		});
	};
	return (
		<div
			className={
				fight.fightActive
					? "fight-animation-in monster-fight-card"
					: "fight-animation-out monster-fight-card"
			}
			style={anim.fight === true ? { display: "flex" } : null}
		>
			<h1 className="monster-name">{fight.monsterName}</h1>
			<img src={swordsImg} className="swords" alt="swords" />
			<h2>Walcz!</h2>
			<p id="when-do-i-win-fight">
				Wygrywasz wyrzucając 4,5 lub 6 (z mieczem 3)
			</p>
			<div className="cube-container">
				<button
					className={fight.fightEnd ? "cubes" : "cubes-active cubes"}
					disabled={fight.fightEnd}
					onClick={handleCubes}
				>
					<img src={cubesImg} alt="cubes" />
				</button>
				<div className="cube-result">{fight.cubeRandomNumber}</div>
			</div>
			<div className="fight-sum-span">
				<p>
					{(() => {
						if (
							char.energy === 0 &&
							fight.cubeRandomNumber <= swordModifierDefeat
						) {
							return "Przegrałeś walkę padając z wyczerpania";
						} else {
							if (fight.cubeRandomNumber === "") {
								return null;
							} else if (fight.cubeRandomNumber <= swordModifierDefeat) {
								return "Porażka, spróbuje ponownie";
							} else if (fight.cubeRandomNumber >= swordModifierWin) {
								return "Zwycięstwo!";
							}
						}
					})()}
				</p>
				<span>
					{(() => {
						if (
							char.energy === 0 &&
							fight.cubeRandomNumber <= swordModifierDefeat
						) {
							return "życie -6 / energia -1";
						} else {
							if (fight.cubeRandomNumber === "") {
								return null;
							} else if (fight.cubeRandomNumber <= swordModifierDefeat) {
								return "energia -1 / życie -2";
							} else if (fight.cubeRandomNumber >= swordModifierWin) {
								return "energia -1";
							}
						}
					})()}
				</span>
			</div>
			{sejmitar ? (
				<div className="use-sejmitar-btn-container">
					<button className="use-sejmitar-btn" onClick={handleUseSejmitar}>
						Użyj Sejmitaru
					</button>
				</div>
			) : null}
			<button
				className={
					fight.fightEnd
						? "end-loose-fight-active end-loose-fight"
						: "end-loose-fight"
				}
				disabled={fight.fightEnd ? false : true}
				onClick={handleEndFightButton}
			>
				Zakończ
			</button>
		</div>
	);
};
export default UniversalFightCard;
