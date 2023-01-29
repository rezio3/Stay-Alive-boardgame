import React, { createContext, useState } from "react";

const cantMoveAnimationData = false;

export const CantMovieAnimationContext = createContext();

const CantMoveAnimation = ({ children }) => {
	const [charAnim, setCharAnim] = useState(cantMoveAnimationData);
	return (
		<CantMovieAnimationContext.Provider value={[charAnim, setCharAnim]}>
			{children}
		</CantMovieAnimationContext.Provider>
	);
};

export default CantMoveAnimation;
