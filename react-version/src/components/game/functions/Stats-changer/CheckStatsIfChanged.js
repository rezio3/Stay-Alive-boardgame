export const checkStatsIfChanged = (stat, prevStat) => {
	return {
		statValue: Math.abs(stat - prevStat),
		statSign: stat > prevStat ? "+" : "-",
	};
};
