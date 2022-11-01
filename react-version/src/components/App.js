import React, { useState } from "react";
import Char from "./context/CharContext";
import Start from "./start-game-components/Start";
import Game from "./game/Game";
import "../style/css/App.css";

function App() {
	const [started, setStarted] = useState(false);
	console.log(started);

	const handleStartButton = () => {
		setStarted(true);
	};

	return (
		<Char>
			<div className="App">
				{started ? <Game /> : <Start value={handleStartButton} />}
			</div>
		</Char>
	);
}

export default App;
