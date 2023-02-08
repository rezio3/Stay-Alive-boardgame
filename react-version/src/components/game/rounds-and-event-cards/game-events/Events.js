import React, { useContext } from "react";
import { RoundsContext } from "../../../context/RoundsContext";
import "../../../../style/css/Events.css";
import event1 from "../../../../img/event-cards/event1.png";
import event2 from "../../../../img/event-cards/event2.png";
import event3 from "../../../../img/event-cards/event3.png";
import event4 from "../../../../img/event-cards/event4.png";
import event5 from "../../../../img/event-cards/event5.png";
import event6 from "../../../../img/event-cards/event6.png";
import event7 from "../../../../img/event-cards/event7.png";
import event8 from "../../../../img/event-cards/event8.png";
import event9 from "../../../../img/event-cards/event9.png";
import event10 from "../../../../img/event-cards/event10.png";
import event11 from "../../../../img/event-cards/event11.png";
import event12 from "../../../../img/event-cards/event12.png";
import event13 from "../../../../img/event-cards/event13.png";
import event14 from "../../../../img/event-cards/event14.png";
import event15 from "../../../../img/event-cards/event15.png";
import event16 from "../../../../img/event-cards/event16.png";
import event17 from "../../../../img/event-cards/event17.png";
import event18 from "../../../../img/event-cards/event18.png";
import event19 from "../../../../img/event-cards/event19.png";
import event20 from "../../../../img/event-cards/event20.png";
import { EventsContext } from "../../../context/EventsContext";
import { arrayShuffle } from "../../functions/EventsArrayShuffle";

const Events = () => {
	const allEvents = [
		event1,
		event2,
		event3,
		event4,
		event5,
		event6,
		event7,
		event8,
		event9,
		event10,
		event11,
		event12,
		event13,
		event14,
		event15,
		event16,
		event17,
		event18,
		event19,
		event20,
	];

	const [rounds, setRounds] = useContext(RoundsContext);
	const [event, setEvent] = useContext(EventsContext);

	if (rounds.round === 2 && !event.eventsArray) {
		arrayShuffle(event, setEvent);
	}
	console.log(event.eventsArray);
	return (
		<div className="event-cards-container">
			<div className="event-card-container">
				<div
					className="event-card-1"
					id="card1"
					style={{
						backgroundImage: `url(${event1})`,
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
