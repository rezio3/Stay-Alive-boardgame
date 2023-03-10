import React, { useContext, useEffect } from "react";
import "../../../style/css/StatsNotifications.css";
import { StatsNotificationsContext } from "../../context/StatsNotificationsContext";
import { CharacterContext } from "../../context/CharContext";
import { checkStatsIfChanged } from "../functions/Stats-changer/CheckStatsIfChanged.js";
const StatsNotifications = () => {
	const [statsNote, setStatsNote] = useContext(StatsNotificationsContext);
	const [char, setChar] = useContext(CharacterContext);

	useEffect(() => {
		const turnOffStatsAnimation = setTimeout(() => {
			setStatsNote({
				...statsNote,
				life: false,
				energy: false,
				starvation: false,
				sanity: false,
				temperature: false,
			});
		}, 850);
		return () => {
			// console.log("wyłączono timeout");
			clearTimeout(turnOffStatsAnimation);
		};
	}, [statsNote]);

	const {
		life,
		prevLife,
		energy,
		prevEnergy,
		starvation,
		prevStarvation,
		sanity,
		prevSanity,
		temperature,
		prevTemperature,
	} = char;

	let lifeNote =
		life !== prevLife ? checkStatsIfChanged(life, prevLife) : false;
	let energyNote =
		energy !== prevEnergy ? checkStatsIfChanged(energy, prevEnergy) : false;
	let starvationNote =
		starvation !== prevStarvation
			? checkStatsIfChanged(starvation, prevStarvation)
			: false;
	let sanityNote =
		sanity !== prevSanity ? checkStatsIfChanged(sanity, prevSanity) : false;
	let temperatureNote =
		temperature !== prevTemperature
			? checkStatsIfChanged(temperature, prevTemperature)
			: false;

	let lifeOn = life !== prevLife;
	let energyOn = true;
	if (energy === prevEnergy || prevEnergy === 11) energyOn = false;
	let starvationOn = starvation !== prevStarvation;
	let sanityOn = sanity !== prevSanity;
	let temperatureOn = temperature !== prevTemperature;

	return (
		<div className="stats-notifications-container">
			{statsNote.life && lifeOn ? (
				<span className="stats-notifications-span life">
					Życie {lifeNote.statSign}
					{lifeNote.statValue}
				</span>
			) : null}
			{statsNote.energy && energyOn ? (
				<span className="stats-notifications-span energy">
					Energia {energyNote.statSign}
					{energyNote.statValue}
				</span>
			) : null}

			{statsNote.starvation && starvationOn ? (
				<span className="stats-notifications-span starvation">
					Głód {starvationNote.statSign}
					{starvationNote.statValue}
				</span>
			) : null}
			{statsNote.sanity && sanityOn ? (
				<span className="stats-notifications-span sanity">
					Psychika {sanityNote.statSign}
					{sanityNote.statValue}
				</span>
			) : null}
			{statsNote.temperature && temperatureOn ? (
				<span className="stats-notifications-span temp">
					Temperatura {temperatureNote.statSign}
					{temperatureNote.statValue}
				</span>
			) : null}
		</div>
	);
};

export default StatsNotifications;
