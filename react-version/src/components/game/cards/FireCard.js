import React, { useContext } from "react";
import "../../../style/css/fireCard.css";
import redBullImg from "../../../img/czerwony_byk.png";
import sasuagesImg from "../../../img/kiełbaski.png";
import { AnimationContext } from "../../context/AnimationContext";

const FireCard = () => {
	const [anim, setAnim] = useContext(AnimationContext);
	return (
		<div
			className={anim.firePlaceCard ? "redbull-sasuages-anim" : ""}
			id="sasuage-and-redbull-roll"
		>
			<h1>Wybierz jedno:</h1>
			<h2>Czerwony Byk</h2>
			<img src={redBullImg} className="redbull-img" />
			<h2>Kiełbaski</h2>
			<img src={sasuagesImg} className="sasuages-img" />
		</div>
	);
};

export default FireCard;
