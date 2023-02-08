import React, { createContext, useState } from "react";
const eventsData = {
	eventsArray: null,
	currentEvent: null,
	currentEventNumber: null,
};
export const EventsContext = createContext();

const Events = ({ children }) => {
	const [event, setEvent] = useState(eventsData);
	return (
		<EventsContext.Provider value={[event, setEvent]}>
			{children}
		</EventsContext.Provider>
	);
};

export default Events;
