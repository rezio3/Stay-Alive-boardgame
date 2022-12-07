import React, { useContext } from "react";
import { CharacterContext } from "../../../context/CharContext";

const Sanity = () => {
	const [char, setChar] = useContext(CharacterContext);

	const sanityChange = () => {
		const sanityBar = document.querySelector(`.sanity-bar`);
		const sanityValue = document.querySelector(`.sanity-value`);
		// setTimeout(function () {
		// 	const sanityChangeSpan = document.querySelector(`.sanity-notification`);
		// 	sanityChangeSpan.style.display = `flex`;
		// 	if (prevSanity > sanity) {
		// 		sanityChangeSpan.innerHTML = `<p>Psychika -${prevSanity - sanity}`;
		// 	} else if (prevSanity < sanity) {
		// 		sanityChangeSpan.innerHTML = `<p>Psychika +${sanity - prevSanity}`;
		// 	}
		// 	setTimeout(function () {
		// 		sanityChangeSpan.style.display = `none`;
		// 	}, 800);
		// 	prevSanity = sanity;
		// }, 100);

		sanityBar.style.height = char.sanity * 10 + "%";
		sanityValue.innerHTML = `${char.sanity}/10`;
	};

	if (char.prevSanity !== char.sanity) sanityChange();

	return (
		<div className="sanity stat-bar">
			<div className="sanity-bar"></div>
			<span className="sanity-value"></span>
		</div>
	);
};

export default Sanity;
