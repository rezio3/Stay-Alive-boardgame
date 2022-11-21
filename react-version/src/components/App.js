import React, { useState } from "react";
import Char from "./context/CharContext";
import Start from "./start-game-components/Start";
import Game from "./game/Game";
import "../style/css/App.css";
import Board from "./context/BoardContext";

function App() {
	const [started, setStarted] = useState(false);

	const handleStartButton = () => {
		setStarted(true);
	};

	return (
		<Char>
			<Board>
				<div className="App">
					{started ? <Game /> : <Start value={handleStartButton} />}
				</div>
			</Board>
		</Char>
	);
}

export default App;
