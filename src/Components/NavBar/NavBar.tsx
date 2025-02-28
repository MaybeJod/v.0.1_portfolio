import { Outlet, Link, useLocation } from "react-router-dom";

export default function NavBar() {
	const location = useLocation();
	const isHomePage = location.pathname === "/";

	return (
		<>
			<nav className="landing-page-header-section">
				<p>@notJod</p>
				<ul>
					<li>
						{isHomePage ? (
							<Link to="/summary">Summary</Link>
						) : (
							<Link to="/">Go Back Home</Link>
						)}
					</li>
				</ul>
				<p>jodwongphayak@gmail.com</p>
			</nav>

			<Outlet />
		</>
	);
}
