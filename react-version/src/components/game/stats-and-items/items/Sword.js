import React, { useContext } from "react";
import { CharacterContext } from "../../../context/CharContext";
import stoneImg from "../../../../img/kamień.png";
import swordImg from "../../../../img/miecz.png";
import woodImg from "../../../../img/drewno.png";

const Sword = () => {
	const [char, setChar] = useContext(CharacterContext);
	const { sword } = char.inventoryItems;
	return (
		<div className={sword ? "sword-container" : ""} id="sword-container">
			<div className={sword ? "sword-animation" : ""} id="sword-anim">
				<div className="item-description-left sword-description-left description-left">
					<h1>Miecz</h1>
					<img src={swordImg} />
					<p>Siekaj wrogów jak ogóra</p>
					<span>Podczas walki z wrogiem zwyciężasz wyrzucając 3.</span>
					<div className="sword-price">
						<span>x2</span>
						<img src={stoneImg} />
						<span>x1</span>
						<img src={woodImg} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sword;
