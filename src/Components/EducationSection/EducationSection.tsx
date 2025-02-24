import "./EducationSection.css";
import HIPrimaryLogotypeWhite from "../../Icons/HI_Primary_Logotype_White";
import SodertornUniversityLogo from "../../Icons/Sodertorn_University_Logo";
import KTHLogo from "../../Icons/KTH_logo_RGB_vit";

export default function EducationSection() {
	return (
		<section className="education-section-wrapper">
			<h2 className="education-section-title">EDUCATION</h2>
			<div className="education-section-svgs-wrapper">
				<a href="https://hyperisland.com/en/">
					<HIPrimaryLogotypeWhite />
				</a>
				<a href="https://www.sh.se/">
					<SodertornUniversityLogo />
				</a>

				<a href="https://www.kth.se/">
					<KTHLogo />
				</a>
			</div>
		</section>
	);
}
