import CalEmbed from "../../Components/CalEmbed/CalEmbed";
import { Link } from "react-router-dom";

export default function Hero() {
	return (
		<section id="hero">
			<div className="page-container">
				<h1>jod wongphayak</h1>
				<div className="hero-text-and-img">
					<h2>Front end Developer & UX Designer</h2>
					<img
						src="images/jod/temp_jod.jpg"
						alt="illustration of jod"
						id="heroImg"
					/>
				</div>
				<div className="looking-for-lia">
					<svg height="100" width="100" className="blinking">
						<circle cx="70" cy="50" r="10" />
						Sorry, your browser does not support inline SVG.
					</svg>
					<p>Currently looking for front end developer LIA/Internship : )</p>
				</div>
				<div className="hero-buttons-section">
					<CalEmbed />
					<Link className="tldr-button " to="/summary">
						TLDR;
					</Link>
				</div>
			</div>
		</section>
	);
}
