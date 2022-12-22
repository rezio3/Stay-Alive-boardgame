import React from "react";
import "../../../style/css/Rounds.css";

const Rounds = () => {
	return (
		<div className="rounds-container">
			<div className="sun-moon-icons-container">
				<div className="sun-icon" title="dzień"></div>
				<div className="moon-icon" title="noc"></div>
			</div>
			<table className="rounds-table">
				<tbody>
					<tr className="table-row-day">
						<td className="round1 diff-easy">
							<span>1</span>
						</td>
						<td className="round3 diff-easy">
							<span>3</span>
						</td>
						<td className="round5 diff-easy">
							<span>5</span>
						</td>
						<td className="round7 diff-easy">
							<span>7</span>
						</td>
						<td className="round9 diff-mid">
							<span>9</span>
						</td>
						<td className="round11 diff-mid">
							<span>11</span>
						</td>
						<td className="round13 diff-mid">
							<span>13</span>
						</td>
						<td className="round15 diff-mid">
							<span>15</span>
						</td>
						<td className="round17 diff-hard">
							<span>17</span>
						</td>
						<td className="round19 diff-hard">
							<span>19</span>
						</td>
						<td className="round21 diff-hard">
							<span>21</span>
						</td>
						<td className="round23 diff-hard">
							<span>23</span>
						</td>
					</tr>
					<tr className="table-row-night">
						<td className="round2 diff-easy">
							<span>2</span>
						</td>
						<td className="round4 diff-easy">
							<span>4</span>
						</td>
						<td className="round6 diff-easy">
							<span>6</span>
						</td>
						<td className="round8 diff-easy">
							<span>8</span>
						</td>
						<td className="round10 diff-mid">
							<span>10</span>
						</td>
						<td className="round12 diff-mid">
							<span>12</span>
						</td>
						<td className="round14 diff-mid">
							<span>14</span>
						</td>
						<td className="round16 diff-mid">
							<span>16</span>
						</td>
						<td className="round18 diff-hard">
							<span>18</span>
						</td>
						<td className="round20 diff-hard">
							<span>20</span>
						</td>
						<td className="round22 diff-hard">
							<span>22</span>
						</td>
						<td className="round24 diff-hard">
							<span>24</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Rounds;
