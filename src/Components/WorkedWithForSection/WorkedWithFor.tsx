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
				<a
					href="https://iongamedesign.com/"
					aria-label="read more about Ion game design">
					<IonGameDesign />
				</a>
				<a
					href="https://flemingsbergscience.se/en/start_en/"
					aria-label="read more about Flemingsberg science">
					<FsLogoSvg />
				</a>
				<a href="https://mediprep.se/" aria-label="read more about Mediprep">
					<MediPrepLogo />
				</a>
				<a
					href="https://www.sh.se/"
					aria-label="read more about Sodertorn university">
					<SodertornUniversityLogo />
				</a>
			</div>
		</section>
	);
}
