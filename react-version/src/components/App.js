import React, { useState } from "react";
import Char from "./context/CharContext";
import Start from "./start-game-components/Start";
import Game from "./game/Game";
import "../style/css/App.css";
import Board from "./context/BoardContext";
import Buttons from "./context/ButtonsContext";
import Animation from "./context/AnimationContext";
import Fight from "./context/FightContext";
import Rounds from "./context/RoundsContext";
import CantMoveAnimation from "./context/CantMoveAnimation";

function App() {
	const [started, setStarted] = useState(false);

	const handleStartButton = () => {
		setStarted(true);
	};

	return (
		<Char>
			<Rounds>
				<Board>
					<Buttons>
						<Animation>
							<CantMoveAnimation>
								<Fight>
									<div className="App">
										{started ? <Game /> : <Start value={handleStartButton} />}
									</div>
								</Fight>
							</CantMoveAnimation>
						</Animation>
					</Buttons>
				</Board>
			</Rounds>
		</Char>
	);
}

export default App;
