import { useState, useEffect } from "react";

export default function Contact() {
	const [currentTime, setCurrentTime] = useState(getCurrentTime());

	function getCurrentTime() {
		const date = new Date();
		const localeString = date.toLocaleTimeString();
		return localeString;
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
					<span>can i have a job?</span>
				</button>
				<p className="read">
					Read <span id="currentTime">{currentTime}</span>
				</p>
			</div>
		</section>
	);
}
