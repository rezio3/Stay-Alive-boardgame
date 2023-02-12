import React, { useContext, useEffect } from "react";
import "../../../style/css/StatsNotifications.css";
import { StatsNotificationsContext } from "../../context/StatsNotificationsContext";

const StatsNotifications = () => {
	const [statsNote, setStatsNote] = useContext(StatsNotificationsContext);

	useEffect(() => {
		const turnOffStatsAnimation = setTimeout(() => {
			setStatsNote({
				...statsNote,
				energy: false,
			});
		}, 850);
		return () => {
			console.log("wyłączono timeout");
			clearTimeout(turnOffStatsAnimation);
		};
	}, [statsNote.energy]);
	return (
		<div className="stats-notifications-container">
			<span className="stats-notifications-span">Energia -1</span>
		</div>
	);
};

export default StatsNotifications;
