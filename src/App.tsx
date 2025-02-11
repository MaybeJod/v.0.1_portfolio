import React from "react";

import "./App.css";
import ContentSection from "./Components/ContentSection/ContentSection";
import { ProfileData } from "./Data/DataIndex";
import TitleSection from "./Components/TitleSection/TitleSection";

function App() {
	return (
		<div className="App">
			<TitleSection title="Jod" summary="Hello world" />
			{/* ... spread operator, it takes all the properties from an object and "spreads them as individual props" */}
			<ContentSection {...ProfileData.currently} />
			<ContentSection {...ProfileData.help} />
			<ContentSection {...ProfileData.past} />
			<ContentSection {...ProfileData.interests} />
		</div>
	);
}

export default App;
