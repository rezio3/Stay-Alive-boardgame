import React, { useState } from "react";
import Char from "./context/CharContext";
import Start from "./start-game-components/Start";
import Game from "./game/Game";
import "../style/css/App.css";
import Board from "./context/BoardContext";
import Buttons from "./context/ButtonsContext";
import Animation from "./context/AnimationContext";
import Fight from "./context/FightContext";

function App() {
	const [started, setStarted] = useState(false);

	const handleStartButton = () => {
		setStarted(true);
	};

	return (
		<Char>
			<Board>
				<Buttons>
					<Animation>
						<Fight>
							<div className="App">
								{started ? <Game /> : <Start value={handleStartButton} />}
							</div>
						</Fight>
					</Animation>
				</Buttons>
			</Board>
		</Char>
	);
}

export default App;
