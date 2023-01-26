import React, { useContext } from "react";
import sejmitarImg from "../../../../img/sejmitar.png";
import ogniskoImg from "../../../../img/ognisko.png";
import { CharacterContext } from "../../../context/CharContext";

const Sejmitar = () => {
	const [char, setChar] = useContext(CharacterContext);
	return (
		<div
			className={char.inventoryItems.sejmitar === 1 ? "sejmitar-container" : ""}
			id="sejmitar-container"
		>
			<div
				className={
					char.inventoryItems.sejmitar === 1 ? "sejmitar-animation" : ""
				}
				id="sejmitar-anim"
			>
				<div className="item-description-left sejmitar-description-left description-left">
					<h1>Samonaprowadzający ognisty sejmitar zagłady</h1>
					<img src={sejmitarImg} alt="sejmitar" className="src" />
					<p>Badź niezwyciężony! Ale tylko raz...</p>
					<span>
						Pojawia się ognisty duszek i daje ci samonaprowadzający ognisty
						sejmitar zagłady. Od razu powala jednego potwora i psuje się
						nieodwracalnie. Podczasz ataku nie tracisz energii.
					</span>
					<div className="sejmitar-price">
						<img src={ogniskoImg} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sejmitar;
