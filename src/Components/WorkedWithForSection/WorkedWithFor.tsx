import React from "react";
import "./WorkedWithFor.css";
import Ion_Game_Design from "../../Icons/Ion_Game_Design";
import MediPrep_Logo from "../../Icons/MediPrep_Logo";
import Sodertorn_University_Logo from "../../Icons/Sodertorn_University_Logo";
import FsLogoSvg from "../../Icons/FsLogoSvg";

export default function WorkedWithFor() {
	return (
		<section>
			<div className="worked-with-for-title">
				<h2>Worked with / for</h2>
			</div>
			<div className="worked-with-for-svgs-wrapper">
				<Ion_Game_Design />
				<MediPrep_Logo />
				<FsLogoSvg />
				<Sodertorn_University_Logo />
			</div>
		</section>
	);
}
