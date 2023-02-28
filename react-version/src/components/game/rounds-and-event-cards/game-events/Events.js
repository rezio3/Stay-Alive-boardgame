import React, { useContext, useEffect, useState } from "react";
import { RoundsContext } from "../../../context/RoundsContext";
import "../../../../style/css/Events.css";
import * as images from "../../../../img/event-cards/";
import * as eventList from "../../functions/EventsFunctions/EventsList";
import { EventsContext } from "../../../context/EventsContext";
import { arrayShuffle } from "../../functions/EventsArrayShuffle";
import { CharacterContext } from "../../../context/CharContext";
import { BoardContext } from "../../../context/BoardContext";

const Events = () => {
	const [rounds, setRounds] = useContext(RoundsContext);
	const [event, setEvent] = useContext(EventsContext);
	const [char, setChar] = useContext(CharacterContext);
	const [board, setBoard] = useContext(BoardContext);
	const [eventAnim, setEventAnim] = useState(false);

	if (rounds.round === 2 && !event.eventsArray) {
		arrayShuffle(event, setEvent);
	}
	useEffect(() => {
		if (rounds.round % 2 === 1 && rounds.round > 2) {
			const a = [...event.eventsArray];
			a.shift();
			// console.log("a", a);
			setEvent({
				...event,
				eventsArray: a,
				currentEvent: images[`event${event.eventsArray?.[0]}img`],
				currentEventNumber: event.eventsArray?.[0],
			});
			setEventAnim(true);
		}
	}, [rounds.round]);

	useEffect(() => {
		if (event.currentEventNumber || event.currentEventNumber === 0) {
			const runEvent = eventList[`event${event.currentEventNumber}`];
			// const runEvent = eventList.event1;
			console.log(event.currentEventNumber);
			console.log("eventsArray: ", event.eventsArray);
			runEvent({
				rounds: rounds,
				char: char,
				setChar: setChar,
				board: board,
			});
		}
	}, [event.currentEventNumber, rounds.round]);

	// console.log("eventsArray: ", event.eventsArray);
	// console.log("currentEvent: ", event.currentEvent);
	// console.log("currentEventNumber: ", event.currentEventNumber);

	useEffect(() => {
		if (eventAnim === true) {
			console.log("wykonano animacje eventu");
			setTimeout(() => {
				setEventAnim(false);
			}, 2000);
		}
	}, [eventAnim]);

	console.log(eventAnim);
	return (
		<div className="event-cards-container">
			<div className="event-card-container">
				<div
					className={eventAnim ? "event-card-1" : null} //najpierw tylko card-1, przy animacji event-card-1
					id="card1"
					style={{
						backgroundImage: `url(${event.currentEvent})`,
					}}
				></div>
				<div
					className={eventAnim ? "event-card-2-animation" : null}
					id="card2"
					style={{
						backgroundImage: `url(${event.currentEvent})`,
					}}
				></div>
			</div>
			<div className="event-card-reverse">
				<div
					className={
						eventAnim
							? "event-card-reverse-anim card-reverse-animation"
							: "event-card-reverse-anim"
					}
					id="event-card-reverse-anim"
				></div>
			</div>
		</div>
	);
};

export default Events;
