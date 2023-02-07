import React, { useContext } from "react";
import { RoundsContext } from "../../../context/RoundsContext";
import "../../../../style/css/Events.css";
const Events = () => {
	const [rounds, setRounds] = useContext(RoundsContext);
	let eventArrayCount;
	let i;
	if (rounds.round === 2) {
		for (eventArrayCount = [], i = 0; i < 20; ++i) {
			eventArrayCount[i] = i;
		}
		shuffle(eventArrayCount);
		function shuffle(array) {
			let tmp,
				current,
				top = array.length;
			if (top)
				while (--top) {
					current = Math.floor(Math.random() * (top + 1));
					// console.log("Current: " + current);
					// console.log("");
					tmp = array[current];
					// console.log("tmp: " + tmp);
					// console.log("");
					array[current] = array[top];
					array[top] = tmp;
				}
			eventArrayCount = array;
		}
		console.log(eventArrayCount);
	}
	return (
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
	);
};

export default Events;
