import "./LandingPage.css";
import tempJod from "../Icons/temp_jod.jpg";

export default function LandingPage() {
	return (
		<>
			<header className="landing-page-header-section">
				<p>@notJod</p>
				<p>jodwongphayak@gmail.com</p>
			</header>
			<section id="hero">
				<div className="page-container">
					<h1>jod wongphayak</h1>
					<div className="hero-text-and-img">
						<h2>Front end Developer & UX Designer</h2>
						<img src={tempJod} alt="image of jod" id="heroImg" />
					</div>
				</div>
			</section>
		</>
	);
}
