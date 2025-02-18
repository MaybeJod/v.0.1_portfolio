import "./TitleSection.css";
import JodLogo from "../../Icons/JodLogo";

export default function TitleSection({
	title,
	summary,
}: {
	title: string;
	summary: string;
}) {
	return (
		<header>
			<JodLogo />
			<div className="title-section-content">
				<h1 className="title-section-title">{title}</h1>
				<p className="title-section-body-text">{summary}</p>
				<button>lets chat</button>
			</div>
		</header>
	);
}
