import React, { createContext, useState } from "react";

const cantMoveAnimationData = false;

export const CantMoveAnimationContext = createContext();

const CantMoveAnimation = ({ children }) => {
	const [charAnim, setCharAnim] = useState(cantMoveAnimationData);
	return (
		<CantMoveAnimationContext.Provider value={[charAnim, setCharAnim]}>
			{children}
		</CantMoveAnimationContext.Provider>
	);
};

export default CantMoveAnimation;
