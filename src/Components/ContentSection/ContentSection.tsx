import React from "react";
import "./ContentSection.css";

type TextSegment = {
	text: string;
	link?: string;
};

type ListItem = {
	segments: TextSegment[];
};

type SectionProps = {
	id: string;
	title: string;
	items: ListItem[];
};

export default function ContentSection({ id, title, items }: SectionProps) {
	return (
		<section className="content-section-wrapper" id={id}>
			<h2 className="section-title">{title}</h2>
			<ul className="section-content-ul">
				{items.map((item, index) => (
					<li key={index}>
						{item.segments.map((segment, segmentIndex) => (
							<React.Fragment key={segmentIndex}>
								{segment.link ? (
									<a
										href={segment.link}
										className="section-content-link-a"
										target="_blank"
										rel="noopener noreferrer">
										{segment.text}
									</a>
								) : (
									<span className="section-content-link-span">
										{segment.text}
									</span>
								)}
							</React.Fragment>
						))}
					</li>
				))}
			</ul>
		</section>
	);
}
