import "./EducationSection.css";
import HIPrimaryLogotypeWhite from "../../Icons/HI_Primary_Logotype_White";
import SodertornUniversityLogo from "../../Icons/Sodertorn_University_Logo";
import KTHLogo from "../../Icons/KTH_logo_RGB_vit";

export default function EducationSection() {
	return (
		<section>
			<h2 className="education-section-title">EDUCATION</h2>
			<div className="education-section-svgs-wrapper">
				<HIPrimaryLogotypeWhite />
				<SodertornUniversityLogo />
				<KTHLogo />
			</div>
		</section>
	);
}
