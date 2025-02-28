import "./LandingPage.css";
import Hero from "./LandingPageComponents/Hero";
import Projects from "./LandingPageComponents/Projects";
import About from "./LandingPageComponents/About";

export default function LandingPage() {
	return (
		<>
			<Hero />
			<Projects />
			<About />
		</>
	);
}
