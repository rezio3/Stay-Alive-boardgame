import React from "react";
import Char from "./context/CharContext";
import Start from "./start-game-components/Start";

import "../style/css/App.css";

function App() {
	return (
		<Char>
			<div className="App">
				<Start />
			</div>
		</Char>
	);
}

export default App;
