import React, { useState, useContext } from "react";
import "../../../style/css/RightContent.css";
import Rounds from "./Rounds";
import ItemList from "./ItemList";
import { BoardContext } from "../../context/BoardContext";
import { ButtonsContext } from "../../context/ButtonsContext";
import { CharacterContext } from "../../context/CharContext";
import { AnimationContext } from "../../context/AnimationContext";
import { biomesEffects } from "../functions/Biomes-Effects";
import { torchLosing } from "../functions/losingItems/TorchLosing";
import { buttonUseHex } from "../functions/ButtonUseHex";
import { FightContext } from "../../context/FightContext";

const RightContent = () => {
	const [buttons, setButtons] = useContext(ButtonsContext);
	const [board, setBoard] = useContext(BoardContext);
	const [char, setChar] = useContext(CharacterContext);
	const [anim, setAnim] = useContext(AnimationContext);
	const [fight, setFight] = useContext(FightContext);

	const handleUseHexButton = () => {
		buttonUseHex(
			buttons,
			setButtons,
			char,
			setChar,
			board,
			setBoard,
			anim,
			setAnim,
			fight,
			setFight
		);
	};

	const handleEndTurn = () => {
		const biomEffectData = biomesEffects(
			board.biomPlayerStandsOn,
			char,
			board.resourcePlayerStandsOn
		);
		const torchUpdate = torchLosing(board.biomPlayerStandsOn, char);
		let addEnergy;
		char.inventoryItems.shoes === 1 ? (addEnergy = 3) : (addEnergy = 2);

		setChar({
			...char,
			cantMove: false,
			energy: char.energy + addEnergy,
			starvation: char.starvation + biomEffectData.starvation,
			sanity: char.sanity + biomEffectData.sanity,
			temperature: char.temperature + biomEffectData.temperature,
			inventoryItems: {
				...char.inventoryItems,
				torch: torchUpdate,
			},
		});
		if (board.resourcePlayerStandsOn !== null) {
			setButtons({
				...buttons,
				useHexButton: true,
			});
		}
	};

	return (
		<div className="right-container">
			<h2 className="tura">Tura</h2>
			<div className="difficulties">
				<span className="easy-span">Łatwy</span>
				<span className="mid-span">Średni</span>
				<span className="hard-span">Trudny</span>
			</div>
			<Rounds />
			<div className="right-container-action-buttons">
				<button
					className={
						!buttons.useHexButton ? "use-spot" : "use-spot use-spot-active"
					}
					disabled={!buttons.useHexButton}
					onClick={handleUseHexButton}
				>
					Aktywuj pole
				</button>
				<button
					className="end-round"
					onClick={handleEndTurn}
					disabled={!buttons.endTurnButton}
				>
					Zakończ turę
				</button>
				<button className="instruction">Przewodnik</button>
			</div>

			<div className="event-cards-and-items-container">
				<div className="event-cards-container">
					<div className="event-card-container">
						<div className="" id="card1"></div>
						<div className="" id="card2"></div>
					</div>
					<div className="event-card-reverse">
						<div
							className="event-card-reverse-anim"
							id="event-card-reverse-anim"
						></div>
					</div>
				</div>
				<ItemList />
			</div>
		</div>
	);
};

export default RightContent;
