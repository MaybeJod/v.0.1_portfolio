import "./LetsChat.css";
import CalEmbed from "../CalEmbed/CalEmbed";

export default function LetsChat() {
	function handleClick() {
		console.log("hello");
	}
	return (
		<section className="lets-connect-section-wrapper">
			<h2 className="lets-connect-title">LETS CONNECT</h2>
			<div className="lets-connect-section-content-wrapper">
				<p className="lets-connect-section-content-content">
					Have something you want to pick my brain about? Interested in a wacky
					project? Need something from my list of services?
				</p>
				<p className="lets-connect-section-content-content">
					Pick a 15 minute slot, give me a brief intro on what you're looking
					for, and let's chat.
				</p>
				<CalEmbed />
			</div>
		</section>
	);
}
