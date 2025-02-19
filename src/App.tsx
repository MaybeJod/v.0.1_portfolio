import React from "react";

import "./App.css";
import ContentSection from "./Components/ContentSection/ContentSection";
import { ProfileData } from "./Data/DataIndex";
import TitleSection from "./Components/TitleSection/TitleSection";
import WorkedWithFor from "./Components/WorkedWithForSection/WorkedWithFor";
import EducationSection from "./Components/EducationSection/EducationSection";
import LetsChat from "./Components/LetsChat/LetsChat";
import FindMe from "./Components/FindMe/FindMe";

function App() {
	return (
		<div className="App">
			<TitleSection
				title="Jod Wongphayak"
				summary="Stockholm-based Front end dev and UX designer. Currently focused on bridging design and code. Driven by curiosity, mixing analog and digital media to build digital experiences."
			/>
			{/* ... spread operator, it takes all the properties from an object and "spreads them as individual props" */}
			<ContentSection {...ProfileData.currently} />
			<ContentSection {...ProfileData.help} />
			<ContentSection {...ProfileData.past} />
			<ContentSection {...ProfileData.interests} />
			<WorkedWithFor />
			<EducationSection />
			<FindMe />
			<LetsChat />
		</div>
	);
}

export default App;
