import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/summary">Summary</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
}
