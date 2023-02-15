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
			console.log("wyłączono timeout");
			clearTimeout(turnOffStatsAnimation);
		};
	}, [statsNote]);
	let lifeNote;
	let energyNote;
	let starvationNote;
	let sanityNote;
	let temperatureNote;
	let lifeSign;
	let energySign;
	let starvationSign;
	let sanitySign;
	let temperatureSign;

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

	if (life !== prevLife) {
		lifeNote = checkStatsIfChanged(life, prevLife);
	} else if (life === prevLife) {
		lifeNote = false;
	}
	if (energy !== prevEnergy) {
		energyNote = checkStatsIfChanged(energy, prevEnergy);
	} else if (energy === prevEnergy) {
		energyNote = false;
	}
	if (starvation !== prevStarvation) {
		starvationNote = checkStatsIfChanged(starvation, prevStarvation);
	} else if (starvation === prevStarvation) {
		starvationNote = false;
	}
	if (sanity !== prevSanity) {
		sanityNote = checkStatsIfChanged(sanity, prevSanity);
	} else if (sanity === prevSanity) {
		sanityNote = false;
	}
	if (temperature !== prevTemperature) {
		temperatureNote = checkStatsIfChanged(temperature, prevTemperature);
	} else if (temperature === prevTemperature) {
		temperatureNote = false;
	}

	let lifeOn = true;
	if (life === prevLife) lifeOn = false;
	let energyOn = true;
	if (energy === prevEnergy || prevEnergy === 11) energyOn = false;
	let starvationOn = true;
	if (starvation === prevStarvation) starvationOn = false;
	let sanityOn = true;
	if (sanity === prevSanity) sanityOn = false;
	let temperatureOn = true;
	if (temperature === prevTemperature) temperatureOn = false;

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
