import React, { useContext } from "react";
import "../../style/css/Game.css";
import Copyright from "./Copyright";
import BoardRows from "./buttons/BoardRows";
import LeftContent from "./stats-and-items/LeftContent";
import RightContent from "./rounds-and-event-cards/RightContent";
import { BoardContext } from "../context/BoardContext";
import { CharacterContext } from "../context/CharContext";
import Cards from "./cards/Cards";
import FightCards from "./FightCards/FightCards";
import StatsNotifications from "./notifications/StatsNotifications";
import { StatsNotificationsContext } from "../context/StatsNotificationsContext";

const Game = () => {
	const [board, setBoard] = useContext(BoardContext);
	const [char, setChar] = useContext(CharacterContext);
	const [statsNote, setStatsNote] = useContext(StatsNotificationsContext);

	const handleArrowButton = (e) => {
		setBoard({
			...board,
			btnId: 11,
			btnData: e.target,
			charSetOnBoard: true,
			arrowBtnActive: true,
		});

		setChar({
			...char,
			life: 20,
			energy: 11,
			starvation: 10,
			sanity: 10,
			temperature: 5,
			prevLife: char.life,
			prevEnergy: 11,
			prevStarvation: char.starvation,
			prevSanity: char.sanity,
			prevTemperature: char.temperature,
		});
	};

	let boardRowsArray = ["row1-container"];

	for (let i = 2; i <= 16; i++) {
		if (i % 2 === 1) {
			boardRowsArray.push("odd-row-container");
		} else if (i % 2 === 0) {
			boardRowsArray.push("even-row-container");
		}
	}

	return (
		<div className="game">
			{statsNote.energy ||
			statsNote.life ||
			statsNote.starvation ||
			statsNote.sanity ||
			statsNote.temperature ? (
				<StatsNotifications />
			) : null}
			<LeftContent />
			{board.charSetOnBoard ? null : (
				<div className="click-start-hex">
					<h2>Umieść bohatera na planszy by rozpocząć grę</h2>
				</div>
			)}
			<div className="middle-container">
				<Cards />
				<FightCards />
				<div className="game-board" id="game-board">
					{board.darkBoardBg ? <div className="dark-board-bg"></div> : null}
					{board.charSetOnBoard ? null : <div className="board-bg"></div>}
					<div className="field-rows">
						{boardRowsArray.map((e, index) => (
							<BoardRows
								className={e}
								id={index + 1}
								key={index + 1}
								dataArrowBtnHandler={handleArrowButton}
							/>
						))}
					</div>
				</div>
				<Copyright />
			</div>
			<RightContent />
		</div>
	);
};

export default Game;

// popover - do pop-upów
// popper.js

// CO DO ZROBIENIA
// za drugim razem przy zamieci event zabiera temperature ale pokazuje że zabiera psychike. Problem w notyfikacjach
// useHexButton po wylosowaniu każdego eventu
