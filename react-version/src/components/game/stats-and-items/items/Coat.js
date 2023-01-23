import React, { useContext } from "react";
import { CharacterContext } from "../../../context/CharContext";
import coatImg from "../../../../img/ponczo.png";
import grassImg from "../../../../img/trawa.png";

const Coat = () => {
	const [char, setChar] = useContext(CharacterContext);
	const { coat } = char.inventoryItems;
	return (
		<div className={coat ? "coat-container" : ""} id="coat-container">
			<div className={coat ? "coat-animation" : ""} id="coat-anim">
				<div className="item-description-left coat-description-left description-left">
					<h1>Ponczo</h1>
					<img src={coatImg} />
					<p>Żadna dzida ci nie straszna</p>
					<span>
						Otrzymujesz 1 mniej obrażeń w przypadku przegranej walki z potworem.
					</span>
					<div className="coat-price">
						<span>x2</span>
						<img src={grassImg} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Coat;
