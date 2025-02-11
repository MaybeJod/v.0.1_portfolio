import React from "react";

import "./App.css";
import ContentSection from "./Components/ContentSection/ContentSection";
import { ProfileData } from "./Data/DataIndex";

function App() {
	return (
		<div className="App">
			<ContentSection {...ProfileData.currently} />
			<ContentSection {...ProfileData.help} />
			<ContentSection {...ProfileData.past} />
			<ContentSection {...ProfileData.interests} />
		</div>
	);
}

export default App;
