import { useState, useEffect } from "react";
import CalEmbed from "../../Components/CalEmbed/CalEmbed";

export default function Contact() {
	const [currentTime, setCurrentTime] = useState(getCurrentTime());

	function getCurrentTime() {
		const date = new Date();
		const localeString = date.toLocaleTimeString();
		const timeArray = localeString.split(":");
		return `${timeArray[0]}:${timeArray[1]}`;
	}

	useEffect(() => {
		// Set up interval to update time every second
		const timer = setInterval(() => {
			setCurrentTime(getCurrentTime());
		}, 1000);

		// Clean up interval when component unmounts
		return () => {
			clearInterval(timer);
		};
	}, []); // Empty dependency array means this runs once on mount

	return (
		<section id="contact">
			<div className="page-container">
				<h2 className="contact-heading">Let's build some banger stuff</h2>
				<button className="cta-button">
					{/* <span>can i have a job?</span> */}

					<a href="mailto:jodwongphayak@gmail.com">can i have a job?</a>
				</button>
				<p className="read">
					Read <span id="currentTime">{currentTime}</span>
				</p>
				<CalEmbed />
			</div>
		</section>
	);
}
