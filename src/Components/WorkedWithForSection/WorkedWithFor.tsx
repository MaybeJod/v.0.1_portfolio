import React from "react";
import "./WorkedWithFor.css";
import IonGameDesign from "../../Icons/Ion_Game_Design";
import MediPrepLogo from "../../Icons/MediPrep_Logo";
import SodertornUniversityLogo from "../../Icons/Sodertorn_University_Logo";
import FsLogoSvg from "../../Icons/FsLogoSvg";

export default function WorkedWithFor() {
	return (
		<section>
			<h2 className="worked-with-for-title">WORKED WITH/FOR</h2>
			<div className="worked-with-for-svgs-wrapper">
				<IonGameDesign />
				<MediPrepLogo />
				<FsLogoSvg />
				<SodertornUniversityLogo />
			</div>
		</section>
	);
}
