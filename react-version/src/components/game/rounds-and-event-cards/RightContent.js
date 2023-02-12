import React, { useContext, useEffect } from "react";
import "../../../style/css/RightContent.css";
import Rounds from "./Rounds";
import ItemList from "./ItemList";
import { BoardContext } from "../../context/BoardContext";
import { ButtonsContext } from "../../context/ButtonsContext";
import { CharacterContext } from "../../context/CharContext";
import { AnimationContext } from "../../context/AnimationContext";
import { biomesEffects } from "../functions/Biomes-Effects";
import { torchLosing } from "../functions/losingItems/TorchLosing";
import { frozenCrownLosing } from "../functions/losingItems/FrozenCrownLosing";
import { buttonUseHex } from "../functions/ButtonUseHex";
import { FightContext } from "../../context/FightContext";
import { RoundsContext } from "../../context/RoundsContext";
import { CantMovieAnimationContext } from "../../context/CantMoveAnimation";
import Events from "./game-events/Events";
import { difficulty } from "../functions/Difficulty";
import { StatsNotificationsContext } from "../../context/StatsNotificationsContext";
import { changeCharStats } from "../functions/Stats-changer/ChangeCharStats";

const RightContent = () => {
	const [buttons, setButtons] = useContext(ButtonsContext);
	const [board, setBoard] = useContext(BoardContext);
	const [char, setChar] = useContext(CharacterContext);
	const [anim, setAnim] = useContext(AnimationContext);
	const [fight, setFight] = useContext(FightContext);
	const [rounds, setRounds] = useContext(RoundsContext);
	const [charAnim, setCharAnim] = useContext(CantMovieAnimationContext);
	const [statsNote, setStatsNote] = useContext(StatsNotificationsContext);

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
			setFight,
			charAnim,
			setCharAnim
		);
	};

	const handleEndTurn = () => {
		setStatsNote({
			...statsNote,
			energy: false,
		});
		setTimeout(() => {
			setStatsNote({
				...statsNote,
				energy: true,
			});
		}, 50);

		const biomEffectData = biomesEffects(
			board.biomPlayerStandsOn,
			char,
			board.resourcePlayerStandsOn
		);
		const torchUpdate = torchLosing(board.biomPlayerStandsOn, char);
		const frozenCrownUpdate = frozenCrownLosing(board.biomPlayerStandsOn, char);

		let starvationReduce = char.starvation + biomEffectData.starvation;
		let sanityReduce = char.sanity + biomEffectData.sanity;
		// check if torch is true
		let sanityReduceTorch = 1;
		if (char.inventoryItems.torch) sanityReduceTorch = 0;
		// reduce starvation and sanity depending on the rounds
		rounds.round % 2 === 0
			? (starvationReduce -= 1)
			: (sanityReduce -= sanityReduceTorch);
		// fix sanity reducer if frozen crown is true
		if (char.inventoryItems.frozenCrown === 1) sanityReduce = char.sanity;
		// add energy depending on shoes
		let addEnergy;
		char.inventoryItems.shoes === 1 ? (addEnergy = 3) : (addEnergy = 2);

		changeCharStats({
			char: char,
			setChar: setChar,
			energy: char.energy + addEnergy,
			starvation: starvationReduce,
			sanity: sanityReduce,
			temp: char.temperature + biomEffectData.temperature,
			torchUpdate: torchUpdate,
			frozenCrownUpdate: frozenCrownUpdate,
			event: "endTurn",
		});
		if (board.resourcePlayerStandsOn !== null) {
			setButtons({
				...buttons,
				useHexButton: true,
			});
		}
		difficulty(rounds, setRounds);
	};
	useEffect(() => {
		const turnOffStatsAnimation = setTimeout(() => {
			setStatsNote({
				...statsNote,
				energy: false,
			});
		}, 850);
		return () => {
			console.log("wyłączono timeout");
			clearTimeout(turnOffStatsAnimation);
		};
	}, [statsNote.energy]);
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
				<Events />
				<ItemList />
			</div>
		</div>
	);
};

export default RightContent;
