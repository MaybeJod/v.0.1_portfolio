import React from "react";
import "./WorkedWithFor.css";
import IonGameDesign from "../../Icons/Ion_Game_Design";
import MediPrepLogo from "../../Icons/MediPrep_Logo";
import SodertornUniversityLogo from "../../Icons/Sodertorn_University_Logo";
import FsLogoSvg from "../../Icons/FsLogoSvg";

export default function WorkedWithFor() {
	return (
		<section className="worked-with-section-wrapper">
			<h2 className="worked-with-for-title">WORKED WITH/FOR</h2>
			<div className="worked-with-for-svgs-wrapper">
				<a href="https://iongamedesign.com/">
					<IonGameDesign />
				</a>
				<a href="https://flemingsbergscience.se/en/start_en/">
					<FsLogoSvg />
				</a>
				<a href="https://mediprep.se/">
					<MediPrepLogo />
				</a>
				<a href="https://www.sh.se/">
					<SodertornUniversityLogo />
				</a>
			</div>
		</section>
	);
}
