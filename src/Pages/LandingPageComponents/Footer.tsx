import React, { useState, useEffect } from "react";

function getSthlmTime() {
	const timeOptions: Intl.DateTimeFormatOptions = {
		timeZone: "Europe/Stockholm",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	};

	const formatter = new Intl.DateTimeFormat([], timeOptions);
	return formatter.format(new Date());
}

export default function Footer() {
	const [sthlmTime, setSthlmTime] = useState(getSthlmTime());

	useEffect(() => {
		if (typeof window !== "undefined") {
			const timer = setInterval(() => {
				setSthlmTime(() => getSthlmTime());
			}, 1000);

			return () => clearInterval(timer);
		}
	}, []);

	return (
		<footer>
			<div className="page-container">
				<section id="footerTop">
					<div id="footerMenu">
						<h3>Menu</h3>
						<hr />
						<ul>
							<li>
								<a href="#hero">Home</a>
							</li>
							<li>
								<a href="#projects">Projects</a>
							</li>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#testimonial">Testimonial</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</div>
					<div id="socialLinks">
						<h3>Socials</h3>
						<hr />
						<ul>
							<li>
								<a href="https://www.google.com/" target="_blank">
									Linkedin
								</a>
							</li>
							<li>
								<a href="https://www.google.com/" target="_blank">
									Github
								</a>
							</li>
							<li>
								<a href="https://www.google.com/" target="_blank">
									Instagram
								</a>
							</li>
						</ul>
					</div>
				</section>
				<section id="footerBottom">
					<div id="copyright">
						<p>
							<strong>
								&copy; {new Date().getFullYear()} Jod Wongphayak <br />
								All rights reserved
							</strong>
						</p>
					</div>
					<div id="localTime">
						<p>
							<strong>Local Time</strong>
						</p>
						<span>{sthlmTime}, STHLM</span>
					</div>
					<div id="backToTop">
						<a href="#hero">
							<button>&uarr;</button>
						</a>
					</div>
				</section>
			</div>
		</footer>
	);
}
