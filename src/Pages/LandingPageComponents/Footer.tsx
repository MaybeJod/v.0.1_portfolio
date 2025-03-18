import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

	const handleScrollTo =
		(elementId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
			e.preventDefault();
			const element = document.getElementById(elementId);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		};

	return (
		<footer>
			<div className="page-container">
				<section id="footerTop">
					<div id="footerMenu">
						<h3>Menu</h3>
						<hr />
						<ul>
							<li>
								<a href="#hero" onClick={handleScrollTo("hero")}>
									Home
								</a>
							</li>
							<li>
								<a href="#projects" onClick={handleScrollTo("projects")}>
									Projects
								</a>
							</li>
							<li>
								<a href="#about" onClick={handleScrollTo("about")}>
									About
								</a>
							</li>
							<li>
								<a href="#testimonial" onClick={handleScrollTo("testimonial")}>
									Testimonial
								</a>
							</li>
							<li>
								<a href="#contact" onClick={handleScrollTo("contact")}>
									Contact
								</a>
							</li>
							<li>
								<Link to="/summary">Summary</Link>
							</li>
						</ul>
					</div>
					<div id="socialLinks">
						<h3>Socials</h3>
						<hr />
						<ul>
							<li>
								<a href="https://www.google.com/">Linkedin</a>
							</li>
							<li>
								<a href="https://www.google.com/">Github</a>
							</li>
							<li>
								<a href="https://www.google.com/">Instagram</a>
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
						<a href="#hero" onClick={handleScrollTo("hero")}>
							<button>&uarr;</button>
						</a>
					</div>
				</section>
			</div>
		</footer>
	);
}
