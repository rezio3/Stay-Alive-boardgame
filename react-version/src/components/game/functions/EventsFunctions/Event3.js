export const event3 = ({ char, setChar, board }) => {
	const { resourcePlayerStandsOn, biomPlayerStandsOn } = board;
	if (
		resourcePlayerStandsOn !== tent &&
		resourcePlayerStandsOn !== cave &&
		biomPlayerStandsOn !== desert &&
		biomPlayerStandsOn !== crater
	) {
	}
};
