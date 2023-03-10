import React, { useContext, useEffect, useState } from "react";
import { RoundsContext } from "../../../context/RoundsContext";
import "../../../../style/css/Events.css";
import * as images from "../../../../img/event-cards/";
import * as eventList from "../../functions/EventsFunctions/EventsList";
import { EventsContext } from "../../../context/EventsContext";
import { arrayShuffle } from "../../functions/EventsArrayShuffle";
import { CharacterContext } from "../../../context/CharContext";
import { BoardContext } from "../../../context/BoardContext";
import { ButtonsContext } from "../../../context/ButtonsContext";
import { FightContext } from "../../../context/FightContext";
import { AnimationContext } from "../../../context/AnimationContext";
import { StatsNotificationsContext } from "../../../context/StatsNotificationsContext";

const Events = () => {
	const [rounds, setRounds] = useContext(RoundsContext);
	const [event, setEvent] = useContext(EventsContext);
	const [char, setChar] = useContext(CharacterContext);
	const [board, setBoard] = useContext(BoardContext);
	const [buttons, setButtons] = useContext(ButtonsContext);
	const [fight, setFight] = useContext(FightContext);
	const [anim, setAnim] = useContext(AnimationContext);
	const [statsNote, setStatsNote] = useContext(StatsNotificationsContext);
	const [eventAnim, setEventAnim] = useState({ run: false, prevCard: "" });

	if (rounds.round === 2 && !event.eventsArray) {
		arrayShuffle(event, setEvent);
	}
	useEffect(() => {
		if (rounds.round % 2 === 1 && rounds.round > 2) {
			const a = [...event.eventsArray];
			a.shift();
			// console.log("a", a);
			setEvent({
				...event,
				eventsArray: a,
				currentEvent: images[`event${event.eventsArray?.[0]}img`],
				currentEventNumber: event.eventsArray?.[0],
			});
			setEventAnim({
				...eventAnim,
				run: true,
			});
			setButtons({
				...buttons,
				endTurnButton: false,
				useHexButton: false,
			});
		}
	}, [rounds.round]);

	useEffect(() => {
		if (event.currentEventNumber || event.currentEventNumber === 0) {
			const runEvent = eventList[`event${event.currentEventNumber}`];
			// console.log(event.currentEventNumber);
			// console.log("eventsArray: ", event.eventsArray);
			if (event.currentEventNumber !== event.prevEvent) {
				runEvent({
					rounds: rounds,
					char: char,
					setChar: setChar,
					board: board,
					buttons: buttons,
					setButtons: setButtons,
					anim: anim,
					setAnim: setAnim,
					fight: fight,
					setFight: setFight,
					statsNote: statsNote,
					setStatsNote: setStatsNote,
				});
			}
		}
	}, [event.currentEventNumber, rounds.round]);

	// console.log("eventsArray: ", event.eventsArray);
	// console.log("currentEvent: ", event.currentEvent);
	// console.log("currentEventNumber: ", event.currentEventNumber);

	useEffect(() => {
		if (eventAnim.run === true) {
			setEvent({
				...event,
				prevEvent: event.currentEventNumber,
			});
			console.log("wykonano animacje eventu");
			let turnButton = event.currentEventNumber === 2 ? false : true;
			// will be more event fights

			setTimeout(() => {
				setEventAnim({
					...eventAnim,
					run: false,
					revealedDeck: true,
					prevCard: event.currentEvent,
				});
				setButtons({
					...buttons,
					endTurnButton: turnButton,
				});
			}, 2000);
		}
	}, [eventAnim.run]);

	// console.log(eventAnim.run);
	// console.log(eventAnim.prevCard);
	// console.log(event.currentEvent);
	return (
		<div className="event-cards-container">
			<div className="event-card-container">
				<div
					className={eventAnim.revealedDeck ? "event-card-1" : null}
					id="card1"
					style={{
						backgroundImage: `url(${eventAnim.prevCard})`,
					}}
				></div>
				<div
					className={eventAnim.run ? "event-card-2-animation" : null}
					id="card2"
					style={{
						backgroundImage: `url(${event.currentEvent})`,
					}}
				></div>
			</div>
			<div className="event-card-reverse">
				<div
					className={
						eventAnim.run
							? "event-card-reverse-anim card-reverse-animation"
							: "event-card-reverse-anim"
					}
					id="event-card-reverse-anim"
				></div>
			</div>
		</div>
	);
};

export default Events;
