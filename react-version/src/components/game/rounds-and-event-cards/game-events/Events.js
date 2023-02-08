import React, { useContext, useEffect } from "react";
import { RoundsContext } from "../../../context/RoundsContext";
import "../../../../style/css/Events.css";
import * as images from "../../../../img/event-cards/";
import * as eventList from "../../functions/EventsFunctions/EventsList";
import { EventsContext } from "../../../context/EventsContext";
import { arrayShuffle } from "../../functions/EventsArrayShuffle";

const Events = () => {
	const [rounds, setRounds] = useContext(RoundsContext);
	const [event, setEvent] = useContext(EventsContext);

	if (rounds.round === 2 && !event.eventsArray) {
		arrayShuffle(event, setEvent);
	}
	console.log("runda", rounds.round);
	useEffect(() => {
		if (rounds.round % 2 === 1 && rounds.round > 2) {
			const a = [...event.eventsArray];
			a.shift();
			console.log("a", a);
			setEvent({
				...event,
				eventsArray: a,
				currentEvent: images[`event${event.eventsArray?.[0]}img`],
				currentEventNumber: event.eventsArray?.[0],
			});
		} else {
			setEvent({
				...event,
				currentEvent: event.currentEvent,
			});
		}
	}, [rounds.round]);
	return (
		<div className="event-cards-container">
			<div className="event-card-container">
				<div
					className="event-card-1"
					id="card1"
					style={{
						backgroundImage: `url(${event.currentEvent})`,
					}}
				></div>
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
