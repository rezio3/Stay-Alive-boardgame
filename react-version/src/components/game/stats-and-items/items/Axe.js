import React, { useContext } from "react";
import { CharacterContext } from "../../../context/CharContext";
import axeImg from "../../../../img/siekiera.png";
import stoneImg from "../../../../img/kamień.png";
import woodImg from "../../../../img/drewno.png";

const Axe = () => {
	const [char, setChar] = useContext(CharacterContext);

	const { axe } = char.inventoryItems;
	return (
		<div className={axe ? "axe-container" : ""} id="axe-container">
			<div className={axe ? "axe-animation" : ""} id="axe-anim">
				<div className="item-description-left axe-description-left description-left">
					<h1>Siekiera</h1>
					<img src={axeImg} alt="siekiera" className="src" />
					<p>Zostań prawdziwym rębajłą</p>
					<span>Nie tracisz energii podczas pozyskiwania surowców</span>
					<div className="axe-price">
						<span>x1</span>
						<img src={stoneImg} />
						<span>x1</span>
						<img src={woodImg} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Axe;
