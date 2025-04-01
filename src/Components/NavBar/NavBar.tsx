import { Outlet, Link, useLocation } from "react-router-dom";
import React from "react";

export default function NavBar() {
	const location = useLocation();
	const isHomePage = location.pathname === "/" || location.pathname === "";

	const navLinks = [
		{ title: "projects", link: "projects" },
		{ title: "about", link: "about" },
		{ title: "contact", link: "contact" },
	];

	const handleScrollTo =
		(elementId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
			e.preventDefault();
			const element = document.getElementById(elementId);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		};

	return (
		<>
			<nav>
				<ul>
					{isHomePage ? (
						<>
							{navLinks.map((navLink, index) => (
								<li key={index}>
									<a
										href={`#${navLink.link}`}
										onClick={handleScrollTo(navLink.link)}>
										{navLink.title}
									</a>
								</li>
							))}
							<li>
								<Link to="/summary">TLDR</Link>
							</li>
						</>
					) : (
						<li>
							<Link to="/">Go Back Home</Link>
						</li>
					)}
				</ul>
			</nav>

			<Outlet />
		</>
	);
}
