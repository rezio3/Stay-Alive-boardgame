import React, { useContext } from "react";
import { AnimationContext } from "../../context/AnimationContext";
import { FightContext } from "../../context/FightContext";
import UniversalFightCard from "./SpecificFights/UniversalFightCard";
const FightCards = () => {
	const [fight, setFight] = useContext(FightContext);
	const [anim, setAnim] = useContext(AnimationContext);
	return <>{anim.fight ? <UniversalFightCard /> : null}</>;
};

export default FightCards;
