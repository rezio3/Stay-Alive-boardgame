import React, { useContext } from "react";
import woodImg from "../../../../img/drewno.png";
import flintImg from "../../../../img/krzesiwo.png";
import lotosImg from "../../../../img/lotos.png";
import { CharacterContext } from "../../../context/CharContext";
import foodImg from "../../../../img/leczo.png";

const Food = () => {
	const [char, setChar] = useContext(CharacterContext);
	const { food } = char.inventoryItems;
	return (
		<div className={food ? "food-container" : ""} id="food-container">
			<div className={food ? "food-animation" : ""} id="food-anim">
				<div className="item-description-left food-description-left description-left">
					<h1>Leczo</h1>
					<img src={foodImg} alt="leczo" className="src" />
					<p>Leczy</p>
					<span>Leczo przywraca ci 5 punktów zdrowia i 2 punkty głodu.</span>
					<div className="food-price">
						<span>x1</span>
						<img src={woodImg} />
						<span>x1</span>
						<img src={flintImg} />
						<span>x1</span>
						<img src={lotosImg} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Food;
