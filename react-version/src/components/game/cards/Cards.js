import React, { useContext } from "react";
import { AnimationContext } from "../../context/AnimationContext";
import FireCard from "./FireCard";
import FrozenCrownCard from "./FrozenCrownCard";
import SejmitarCard from "./SejmitarCard";

const Cards = () => {
	const [anim, setAnim] = useContext(AnimationContext);
	return (
		<>
			{anim.firePlaceCard ? <FireCard /> : null}
			{anim.sejmitar ? <SejmitarCard /> : null}
			{anim.frozenCrown ? <FrozenCrownCard /> : null}
		</>
	);
};

export default Cards;
