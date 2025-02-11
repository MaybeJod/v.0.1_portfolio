import React from "react";
import Square from "../../Icons/Square";
import "./TitleSection.css";

export default function TitleSection({
	title,
	summary,
}: {
	title: string;
	summary: string;
}) {
	return (
		<header>
			<Square />
			<div className="title-section-content">
				<h1 className="title-section-title">{title}</h1>
				<p className="title-section-body-text">{summary}</p>
				<button>lets chat</button>
			</div>
			<p></p>
		</header>
	);
}
