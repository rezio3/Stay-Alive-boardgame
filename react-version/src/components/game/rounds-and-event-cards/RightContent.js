import React, { useState, useContext } from "react";
import "../../../style/css/RightContent.css";
import Rounds from "./Rounds";
import ItemList from "./ItemList";
import { BoardContext } from "../../context/BoardContext";

const RightContent = () => {
	const [buttons, setButtons] = useState({ useHexButton: true });
	const [board, setBoard] = useContext(BoardContext);

	// console.log(board.btnData.classList.contains("wood"));

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
				<button className="use-spot" disabled={!buttons.useHexButton}>
					Aktywuj pole
				</button>
				<button className="end-round">Zakończ turę</button>
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
