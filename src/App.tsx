import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import LandingPage from "./Pages/LandingPage";
import SummaryPage from "./Pages/SummaryPage";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function App() {
	return (
		<div className="App">
			<HashRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/summary" element={<SummaryPage />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</Layout>
			</HashRouter>
		</div>
	);
}

export default App;
