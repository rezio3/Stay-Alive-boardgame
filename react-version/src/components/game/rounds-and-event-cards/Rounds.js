import React, { useContext } from "react";
import "../../../style/css/Rounds.css";
import { RoundsContext } from "../../context/RoundsContext";

const Rounds = () => {
	const [rounds, setRounds] = useContext(RoundsContext);
	return (
		<div className="rounds-container">
			<div className="sun-moon-icons-container">
				<div className="sun-icon" title="dzień"></div>
				<div className="moon-icon" title="noc"></div>
			</div>
			<table className="rounds-table">
				<tbody>
					<tr className="table-row-day">
						<td
							className={
								rounds.round === 1
									? "round-highlight round1 diff-easy"
									: "round1 diff-easy"
							}
						>
							<span>1</span>
						</td>
						<td
							className={
								rounds.round === 3
									? "round-highlight round3 diff-easy"
									: "round3 diff-easy"
							}
						>
							<span>3</span>
						</td>
						<td
							className={
								rounds.round === 5
									? "round-highlight round5 diff-easy"
									: "round5 diff-easy"
							}
						>
							<span>5</span>
						</td>
						<td
							className={
								rounds.round === 7
									? "round-highlight round7 diff-easy"
									: "round7 diff-easy"
							}
						>
							<span>7</span>
						</td>
						<td
							className={
								rounds.round === 9
									? "round-highlight round9 diff-mid"
									: "round9 diff-mid"
							}
						>
							<span>9</span>
						</td>
						<td
							className={
								rounds.round === 11
									? "round-highlight round11 diff-mid"
									: "round11 diff-mid"
							}
						>
							<span>11</span>
						</td>
						<td
							className={
								rounds.round === 13
									? "round-highlight round13 diff-mid"
									: "round13 diff-mid"
							}
						>
							<span>13</span>
						</td>
						<td
							className={
								rounds.round === 15
									? "round-highlight round15 diff-mid"
									: "round15 diff-mid"
							}
						>
							<span>15</span>
						</td>
						<td
							className={
								rounds.round === 17
									? "round-highlight round17 diff-hard"
									: "round17 diff-hard"
							}
						>
							<span>17</span>
						</td>
						<td
							className={
								rounds.round === 19
									? "round-highlight round19 diff-hard"
									: "round19 diff-hard"
							}
						>
							<span>19</span>
						</td>
						<td
							className={
								rounds.round === 21
									? "round-highlight round21 diff-hard"
									: "round21 diff-hard"
							}
						>
							<span>21</span>
						</td>
						<td
							className={
								rounds.round === 23
									? "round-highlight round23 diff-hard"
									: "round23 diff-hard"
							}
						>
							<span>23</span>
						</td>
					</tr>
					<tr className="table-row-night">
						<td
							className={
								rounds.round === 2
									? "round-highlight round2 diff-easy"
									: "round2 diff-easy"
							}
						>
							<span>2</span>
						</td>
						<td
							className={
								rounds.round === 4
									? "round-highlight round4 diff-easy"
									: "round4 diff-easy"
							}
						>
							<span>4</span>
						</td>
						<td
							className={
								rounds.round === 6
									? "round-highlight round6 diff-easy"
									: "round6 diff-easy"
							}
						>
							<span>6</span>
						</td>
						<td
							className={
								rounds.round === 8
									? "round-highlight round8 diff-easy"
									: "round8 diff-easy"
							}
						>
							<span>8</span>
						</td>
						<td
							className={
								rounds.round === 10
									? "round-highlight round10 diff-mid"
									: "round10 diff-mid"
							}
						>
							<span>10</span>
						</td>
						<td
							className={
								rounds.round === 12
									? "round-highlight round12 diff-mid"
									: "round12 diff-mid"
							}
						>
							<span>12</span>
						</td>
						<td
							className={
								rounds.round === 14
									? "round-highlight round14 diff-mid"
									: "round14 diff-mid"
							}
						>
							<span>14</span>
						</td>
						<td
							className={
								rounds.round === 16
									? "round-highlight round16 diff-mid"
									: "round16 diff-mid"
							}
						>
							<span>16</span>
						</td>
						<td
							className={
								rounds.round === 18
									? "round-highlight round18 diff-hard"
									: "round18 diff-hard"
							}
						>
							<span>18</span>
						</td>
						<td
							className={
								rounds.round === 20
									? "round-highlight round20 diff-hard"
									: "round20 diff-hard"
							}
						>
							<span>20</span>
						</td>
						<td
							className={
								rounds.round === 22
									? "round-highlight round22 diff-hard"
									: "round22 diff-hard"
							}
						>
							<span>22</span>
						</td>
						<td
							className={
								rounds.round === 24
									? "round-highlight round24 diff-hard"
									: "round24 diff-hard"
							}
						>
							<span>24</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Rounds;
