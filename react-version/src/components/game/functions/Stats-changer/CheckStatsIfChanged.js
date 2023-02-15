export const checkStatsIfChanged = (stat, prevStat) => {
	return {
		lifeValue: Math.abs(stat - prevStat),
		lifeSign: stat > prevStat ? "+" : "-",
	};
};
