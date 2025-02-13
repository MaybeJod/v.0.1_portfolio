import React from "react";
import HI_Primary_Logotype_White from "../../Icons/HI_Primary_Logotype_White";
import Sodertorn_University_Logo from "../../Icons/Sodertorn_University_Logo";
import KTH_logo_RGB_vit from "../../Icons/KTH_logo_RGB_vit";

export default function EducationSection() {
	return (
		<section>
			<h2 className="education-section-title">Education</h2>
			<div className="education-section-svgs-wrapper">
				<HI_Primary_Logotype_White />
				<Sodertorn_University_Logo />
				<KTH_logo_RGB_vit />
			</div>
		</section>
	);
}
