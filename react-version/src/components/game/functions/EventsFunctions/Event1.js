export const event1 = ({ rounds, char, board }) => {
	console.log("event1 - złowroga ciemność");
	if (
		rounds.round % 2 === 1 &&
		board.biomPlayerStandsOn !== "crater" &&
		char.inventoryItems.torch === 0
	) {
	}
};
