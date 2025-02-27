import React, { ReactNode } from "react";
import "./Layout.css";
import NavBar from "../NavBar/NavBar";
// import Footer from './Footer';

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="layout">
			<NavBar />

			<main className="main-content">{children}</main>
			{/* <Footer /> */}
		</div>
	);
};

export default Layout;
