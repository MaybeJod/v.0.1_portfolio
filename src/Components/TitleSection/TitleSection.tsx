import "./TitleSection.css";
import JodLogo from "../../Icons/JodLogo";
import StandardButton from "../StandardButton/StandardButton";
import tempJod from "../../Icons/temp_jod.jpg";

export default function TitleSection({
	title,
	summary,
}: {
	title: string;
	summary: string;
}) {
	function handleClick() {
		console.log("hello");
	}

	return (
		<header>
			<div className="title-section-svg-container">
				<div className="title-section-svg-wrapper">
					<JodLogo className="title-section-svg" />
					<img
						src={tempJod}
						alt="illustration of jod"
						className="title-section-img"
					/>
				</div>
			</div>
			<div className="title-section-content">
				<h1 className="title-section-title">{title}</h1>
				<p className="title-section-body-text">{summary}</p>
				<StandardButton
					className="title-section-buttons"
					children="Let's chat"
					ariaLabel="Title section button"
					onClick={handleClick}
					tabIndex={0}
				/>
			</div>
		</header>
	);
}
