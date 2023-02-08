import React, { useContext, useEffect } from "react";
import { RoundsContext } from "../../../context/RoundsContext";
import "../../../../style/css/Events.css";
import * as images from "../../../../img/event-cards/";
import { EventsContext } from "../../../context/EventsContext";
import { arrayShuffle } from "../../functions/EventsArrayShuffle";

const Events = () => {
	console.log(images.event1img);

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
			});
		}
	}, [rounds.round]);

	// console.log(event.eventsArray);
	// console.log(event.eventsArray.length);
	console.log(
		"`event${event.eventsArray?.[0]}image`",
		`event${event.eventsArray?.[0]}image`
	);

	return (
		<div className="event-cards-container">
			<div className="event-card-container">
				<div
					className="event-card-1"
					id="card1"
					style={{
						// array = [7, 19, 4, 8, 14, 17, 20, 2]
						// images.event7img
						// 								images.event7img
						// ? optional chaining
						// foo.bar.wat
						// foo.bar = undefined => {}
						// foo?.bar?.wat?.inner?.object => cannot read properites of underfined (reading wat)
						//
						backgroundImage: `url(${
							images[`event${event.eventsArray?.[0]}img`]
						})`,
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
