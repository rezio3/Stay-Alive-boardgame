import React, { useContext } from "react";
import sejmitarImg from "../../../img/sejmitar.png";
import ogniskoImg from "../../../img/ognisko.png";
import "../../../style/css/SejmitarCard.css";
import { AnimationContext } from "../../context/AnimationContext";

const SejmitarCard = () => {
	const [anim, setAnim] = useContext(AnimationContext);
	return (
		<div
			className={anim.sejmitar === true ? "sejmitar-anim" : ""}
			id="sejmitar"
		>
			<h1>Samonaprowadzający ognisty sejmitar zagłady</h1>
			<img src={sejmitarImg} alt="sejmitar" class="src" />
			<p>Badź niezwyciężony! Ale tylko raz...</p>
			<span>
				Pojawia się ognisty duszek i daje ci samonaprowadzający ognisty sejmitar
				zagłady. Od razu powala jednego potwora i psuje się nieodwracalnie.
				Podczasz ataku nie tracisz energii.
			</span>
			<div className="sejmitar-price">
				<img src={ogniskoImg} />
			</div>
		</div>
	);
};

export default SejmitarCard;
