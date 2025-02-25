import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import LandingPage from "./Pages/LandingPage";
import SummaryPage from "./Pages/SummaryPage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/summary" element={<SummaryPage />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;
