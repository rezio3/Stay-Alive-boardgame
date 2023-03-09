export const event3 = ({ char, setChar, board }) => {
	const { resourcePlayerStandsOn, biomPlayerStandsOn } = board;
	if (
		resourcePlayerStandsOn !== "tent" &&
		resourcePlayerStandsOn !== "cave" &&
		biomPlayerStandsOn !== "desert" &&
		biomPlayerStandsOn !== "crater"
	) {
		setTimeout(() => {
			changeCharStats({
				char: char,
				setChar: setChar,
				sanity: char.sanity - sanitySubstractor,
				event: "eventCard",
			});
		}, 1800);
	}
};
