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
		// lifeNote = Math.abs(life - prevLife);
		// life > prevLife ? (lifeSign = "+") : (lifeSign = "-");
		// lifeNote = checkStatsIfChanged(life, prevLife);
		lifeNote = checkStatsIfChanged(life, prevLife);
	} else if (life === prevLife) {
		lifeNote = false;
	}
	console.log(lifeNote);

	if (energy !== prevEnergy) {
		energyNote = Math.abs(energy - prevEnergy);
		energy > prevEnergy ? (energySign = "+") : (energySign = "-");
	} else if (energy === prevEnergy) {
		energyNote = false;
	}
	if (starvation !== prevStarvation) {
		starvationNote = Math.abs(starvation - prevStarvation);
		starvation > prevStarvation
			? (starvationSign = "+")
			: (starvationSign = "-");
	} else if (starvation === prevStarvation) {
		starvationNote = false;
	}
	if (sanity !== prevSanity) {
		sanityNote = Math.abs(sanity - prevSanity);
		sanity > prevSanity ? (sanitySign = "+") : (sanitySign = "-");
	} else if (sanity === prevSanity) {
		sanityNote = false;
	}
	if (temperature !== prevTemperature) {
		temperatureNote = Math.abs(temperature - prevTemperature);
		temperature > prevTemperature
			? (temperatureSign = "+")
			: (temperatureSign = "-");
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
					Życie {lifeNote.lifeSign}
					{lifeNote.lifeValue}
				</span>
			) : null}
			{statsNote.energy && energyOn ? (
				<span className="stats-notifications-span energy">
					Energia {energySign}
					{energyNote}
				</span>
			) : null}

			{statsNote.starvation && starvationOn ? (
				<span className="stats-notifications-span starvation">
					Głód {starvationSign}
					{starvationNote}
				</span>
			) : null}
			{statsNote.sanity && sanityOn ? (
				<span className="stats-notifications-span sanity">
					Psychika {sanitySign}
					{sanityNote}
				</span>
			) : null}
			{statsNote.temperature && temperatureOn ? (
				<span className="stats-notifications-span temp">
					Temperatura {temperatureSign}
					{temperatureNote}
				</span>
			) : null}
		</div>
	);
};

export default StatsNotifications;
