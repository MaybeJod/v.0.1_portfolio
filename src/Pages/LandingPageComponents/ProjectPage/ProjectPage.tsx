import React from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectsData } from "../../../Data/ProjectsData";
import "./ProjectPage.css";

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

			<div className="project-links-container">
				{project.previewLink && (
					<div className="project-links">
						<a
							href={project.previewLink}
							target="_blank"
							rel="noopener noreferrer"
							className="external-link-button">
							View Live
						</a>
					</div>
				)}

				{project.githubLink && (
					<div className="project-links">
						<a
							href={project.githubLink}
							target="_blank"
							rel="noopener noreferrer"
							className="external-link-button">
							GitHub
						</a>
					</div>
				)}
			</div>

			<div className="project-content">
				<p>
					{project.description || "A detailed description of this project."}
				</p>

				<p>
					This project showcases my skills in creating interactive and visually
					appealing web applications. I focused on building a responsive
					interface that works well on all devices while maintaining performance
					and accessibility.
				</p>

				<p>
					During development, I overcame several challenges including [describe
					specific challenges] and learned valuable lessons about [specific
					learning outcomes or technologies].
				</p>
			</div>

			<div className="technologies">
				<h3>Technologies Used</h3>
				<div className="tech-list">
					{project.technologies.map((tech, index) => (
						<span key={index} className="tech-item">
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectDetailsPage;
