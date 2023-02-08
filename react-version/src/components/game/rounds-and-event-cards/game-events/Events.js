import React, { useContext } from "react";
import { RoundsContext } from "../../../context/RoundsContext";
import "../../../../style/css/Events.css";
import event1img from "../../../../img/event-cards/event1.png";
import event2img from "../../../../img/event-cards/event2.png";
import event3img from "../../../../img/event-cards/event3.png";
import event4img from "../../../../img/event-cards/event4.png";
import event5img from "../../../../img/event-cards/event5.png";
import event6img from "../../../../img/event-cards/event6.png";
import event7img from "../../../../img/event-cards/event7.png";
import event8img from "../../../../img/event-cards/event8.png";
import event9img from "../../../../img/event-cards/event9.png";
import event10img from "../../../../img/event-cards/event10.png";
import event11img from "../../../../img/event-cards/event11.png";
import event12img from "../../../../img/event-cards/event12.png";
import event13img from "../../../../img/event-cards/event13.png";
import event14img from "../../../../img/event-cards/event14.png";
import event15img from "../../../../img/event-cards/event15.png";
import event16img from "../../../../img/event-cards/event16.png";
import event17img from "../../../../img/event-cards/event17.png";
import event18img from "../../../../img/event-cards/event18.png";
import event19img from "../../../../img/event-cards/event19.png";
import event20img from "../../../../img/event-cards/event20.png";
import { EventsContext } from "../../../context/EventsContext";
import { arrayShuffle } from "../../functions/EventsArrayShuffle";

const Events = () => {
	const allEvents = [
		event1img,
		event2img,
		event3img,
		event4img,
		event5img,
		event6img,
		event7img,
		event8img,
		event9img,
		event10img,
		event11img,
		event12img,
		event13img,
		event14img,
		event15img,
		event16img,
		event17img,
		event18img,
		event19img,
		event20img,
	];

	const [rounds, setRounds] = useContext(RoundsContext);
	const [event, setEvent] = useContext(EventsContext);

	if (rounds.round === 2 && !event.eventsArray) {
		arrayShuffle(event, setEvent);
	}
	// console.log(event.eventsArray);
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
