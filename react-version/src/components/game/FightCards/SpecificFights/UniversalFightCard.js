import React, { useContext } from "react";
import "../../../../style/css/UniversalFightCard.css";
import { FightContext } from "../../../context/FightContext";
import { CharacterContext } from "../../../context/CharContext";
import swordsImg from "../../../../img/swords.png";
import cubesImg from "../../../../img/cubes.png";
import { fightProcess } from "../../functions/FightProcess.js";
import { AnimationContext } from "../../../context/AnimationContext";
import { ButtonsContext } from "../../../context/ButtonsContext";

const UniversalFightCard = () => {
	const [fight, setFight] = useContext(FightContext);
	const [char, setChar] = useContext(CharacterContext);
	const [anim, setAnim] = useContext(AnimationContext);
	const [buttons, setButtons] = useContext(ButtonsContext);

	const handleCubes = () => {
		fightProcess(fight, setFight, char, setChar);
	};
	const handleEndFightButton = () => {
		setFight({
			...fight,
			fightActive: false,
			cubeRandomNumber: "",
			fightWin: false,
		});

		setTimeout(() => {
			setAnim({
				...anim,
				fight: false,
				frozenCrown: true,
			});
		}, 500);

		setTimeout(() => {
			setChar({
				...char,
				inventoryItems: {
					...char.inventoryItems,
					frozenCrown: 1,
				},
			});
			setAnim({
				...anim,
				fight: false,
				frozenCrown: false,
			});
			setButtons({
				...buttons,
				endTurnButton: true,
			});
		}, 2600);
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
			<img src={swordsImg} className="swords" />
			<h2>Walcz!</h2>
			<p id="when-do-i-win-fight">
				Wygrywasz wyrzucając 4,5 lub 6 (z mieczem 3)
			</p>
			<div className="cube-container">
				<button
					className={fight.fightWin ? "cubes" : "cubes-active cubes"}
					onClick={handleCubes}
					disabled={fight.fightWin}
				>
					<img src={cubesImg} />
				</button>
				<div className="cube-result">{fight.cubeRandomNumber}</div>
			</div>
			<div className="fight-sum-span">
				<p>
					{(() => {
						if (fight.cubeRandomNumber === "") {
							return null;
						} else if (fight.cubeRandomNumber <= 3) {
							return "Porażka, spróbuje ponownie";
						} else if (fight.cubeRandomNumber >= 4) {
							return "Zwycięstwo!";
						}
					})()}
				</p>
				<span>
					{(() => {
						if (fight.cubeRandomNumber === "") {
							return null;
						} else if (fight.cubeRandomNumber <= 3) {
							return "energia -1 / życie -2";
						} else if (fight.cubeRandomNumber >= 4) {
							return "energia -1";
						}
					})()}
				</span>
			</div>
			<div className="use-sejmitar-btn-container">
				<button className="use-sejmitar-btn">Użyj Sejmitaru</button>
			</div>
			<button
				className={
					fight.fightWin
						? "end-loose-fight-active end-loose-fight"
						: "end-loose-fight"
				}
				disabled={fight.fightWin ? false : true}
				onClick={handleEndFightButton}
			>
				Zakończ
			</button>
		</div>
	);
};
export default UniversalFightCard;