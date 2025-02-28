import "./LandingPage.css";
import Hero from "./LandingPageComponents/Hero";
import Projects from "./LandingPageComponents/Projects";
import About from "./LandingPageComponents/About";
import Testimonial from "./LandingPageComponents/Testimonial";
import Contact from "./LandingPageComponents/Contact";
import Footer from "./LandingPageComponents/Footer";

export default function LandingPage() {
	return (
		<>
			<Hero />
			<Projects />
			<About />
			<Testimonial />
			<Contact />
			<Footer />
		</>
	);
}
