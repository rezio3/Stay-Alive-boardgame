import React, { createContext, useState } from "react";

const animationData = {
	wood: false,
	stone: false,
	grass: false,
	flint: false,
	lotos: false,
};

export const AnimationContext = createContext();

const Animation = ({ children }) => {
	const [anim, setAnim] = useState(animationData);
	return (
		<AnimationContext.Provider value={[anim, setAnim]}>
			{children}
		</AnimationContext.Provider>
	);
};

export default Animation;
