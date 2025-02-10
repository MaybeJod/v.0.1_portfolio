import React from "react";
type TextSegment = {
	text: string;
	link?: string;
};

type ListItem = {
	segments: TextSegment[];
};

type Section = {
	id: string;
	title: string;
	items: ListItem[];
};

type ProfileSectionsProps = {
	sections: Section[];
};

export default function ContentSection({ sections }: ProfileSectionsProps) {
	return (
		<section className={`content-section-wrapper`}>
			{sections.map((section) => (
				<div key={section.id}>
					<h2 className="section-title">{section.title}</h2>
					<ul className="section-content-ul">
						{section.items.map((item, index) => (
							<li key={index}>
								{item.segments.map((segment, segmentIndex) => (
									<React.Fragment key={segmentIndex}>
										{segment.link ? (
											<a
												href={segment.link}
												className="section-content-link"
												target="_blank"
												rel="noopener noreferrer">
												{segment.text}
											</a>
										) : (
											<span className="section-content-link">
												{segment.text}
											</span>
										)}
									</React.Fragment>
								))}
							</li>
						))}
					</ul>
				</div>
			))}
		</section>
	);
}
