import React, { createContext, useState } from "react";
const notifications = {
	life: false,
	energy: false,
	starvation: false,
	sanity: false,
	temperature: false,
	energyText: "",
};
export const StatsNotificationsContext = createContext();

const StatsNotificationsFoo = ({ children }) => {
	const [statsNote, setStatsNote] = useState(notifications);
	return (
		<StatsNotificationsContext.Provider value={[statsNote, setStatsNote]}>
			{children}
		</StatsNotificationsContext.Provider>
	);
};

export default StatsNotificationsFoo;
