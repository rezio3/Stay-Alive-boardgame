import React, { useContext } from "react";
import { CharacterContext } from "../../../context/CharContext";
import shoesImg from "../../../../img/lacie.png";
import grassImg from "../../../../img/trawa.png";

const Shoes = () => {
	const [char, setChar] = useContext(CharacterContext);
	const { shoes } = char.inventoryItems;
	return (
		<div className={shoes ? "shoes-container" : ""} id="shoes-container">
			<div className={shoes ? "shoes-animation" : ""} id="shoes-anim">
				<div className="item-description-left shoes-description-left description-left">
					<h1>Lacie</h1>
					<img src={shoesImg} />
					<p>Nie uraź stopy o kamień</p>
					<span>Na koniec tury odzyskujesz 3 punkty energii zamiast 2.</span>
					<div className="shoes-price">
						<span>x2</span>
						<img src={grassImg} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shoes;
