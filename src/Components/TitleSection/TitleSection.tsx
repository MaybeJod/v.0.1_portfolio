import "./TitleSection.css";
import JodLogo from "../../Icons/JodLogo";
import CalEmbed from "../CalEmbed/CalEmbed";

export default function TitleSection({
	title,
	summary,
}: {
	title: string;
	summary: string;
}) {
	return (
		<header className="title-section">
			<div className="title-section-svg-container">
				<div className="title-section-svg-wrapper">
					<JodLogo className="title-section-svg" />
					<img
						src="images/jod/temp_jod.jpg"
						alt="illustration of jod"
						className="title-section-img"
					/>
				</div>
			</div>
			<div className="title-section-content">
				<h1 className="title-section-title">{title}</h1>
				<p className="title-section-body-text">{summary}</p>
				<CalEmbed />
			</div>
		</header>
	);
}
