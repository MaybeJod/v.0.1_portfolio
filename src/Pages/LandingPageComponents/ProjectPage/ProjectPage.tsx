import React from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectsData } from "../../../Data/ProjectsData";

const ProjectDetailsPage: React.FC = () => {
	// get the project slug from the URL parameters
	const { projectSlug } = useParams<{ projectSlug: string }>();

	// find the project that matches the slug
	const project = ProjectsData.find(
		(p) => p.title.toLowerCase().replace(/\s+/g, "-") === projectSlug
	);

	// handle case where project is not found
	if (!project) {
		return (
			<div className="project-not-found">
				<h2>Project Not Found</h2>
				<p>Sorry, the project you're looking for doesn't exist.</p>
				<Link to="/#projects">Back to Projects</Link>
			</div>
		);
	}

	return (
		<div className="project-details-page">
			<div className="project-header">
				<h1>{project.title}</h1>
				<p className="project-tags">{project.tag.join(" - ")}</p>
			</div>

			<div className="project-image">
				<img src={project.image} alt={project.title} />
			</div>

			<div className="project-content">
				<p>{project.description || "test test desc here"}</p>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
					minus.
				</p>
			</div>

			{project.link && (
				<div className="project-links">
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="external-link-button">
						Visit Live Project
					</a>
				</div>
			)}

			<div className="back-link">
				<Link to="/#projects">← Back to All Projects</Link>
			</div>
		</div>
	);
};

export default ProjectDetailsPage;
