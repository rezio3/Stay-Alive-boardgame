import React, { useContext, useEffect } from "react";
import "../../../style/css/StatsNotifications.css";
import { StatsNotificationsContext } from "../../context/StatsNotificationsContext";
import { CharacterContext } from "../../context/CharContext";

const StatsNotifications = () => {
	const [statsNote, setStatsNote] = useContext(StatsNotificationsContext);
	const [char, setChar] = useContext(CharacterContext);

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

	let energyNote;
	let sign;
	const { energy, prevEnergy } = char;
	if (energy !== prevEnergy) {
		energyNote = Math.abs(energy - prevEnergy);
		energy > prevEnergy ? (sign = "+") : (sign = "-");
	}

	return (
		<div className="stats-notifications-container">
			<span className="stats-notifications-span">
				Energia {sign}
				{energyNote}
			</span>
		</div>
	);
};

export default StatsNotifications;
