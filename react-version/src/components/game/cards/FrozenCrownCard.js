import React, { useContext } from "react";
import frozenCrownImg from "../../../img/lodowa korona.png";
import "../../../style/css/FrozenCrownCard.css";
import { AnimationContext } from "../../context/AnimationContext";

const FrozenCrownCard = () => {
	const [anim, setAnim] = useContext(AnimationContext);
	return (
		<div
			className={anim.frozenCrown ? "frozenCrown-anim" : "null"}
			id="frozenCrown"
		>
			<h1>Lodowa Korona</h1>
			<img src={frozenCrownImg} className="src" />
			<p>Zamróź sobie mózg</p>
			<span>
				Nie tracisz psychiki w żadnym przypadku. Lodowa Korona roztapia się gdy
				skończysz ruch na pustyni lub w kraterze.
			</span>
		</div>
	);
};

export default FrozenCrownCard;
