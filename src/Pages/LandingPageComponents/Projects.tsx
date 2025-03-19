import React from "react";
import { Link } from "react-router-dom";
import { ProjectsData } from "../../Data/ProjectsData";

const Projects: React.FC = () => {
	return (
		<section id="projects">
			<div className="page-container">
				<h2 className="projects-heading">Creations in progress</h2>
				<div className="grid-container">
					{ProjectsData.map((project, index) => (
						<article key={index} className="card">
							<Link
								to={`/project/${project.title
									.toLowerCase()
									.replace(/\s+/g, "-")}`}>
								<span className="project-number">00-{index + 1}</span>
								<img src={project.image} alt="project illustrations" />
								<hr />
								<p className="project-tags">{project.tag.join(" - ")}</p>
								<h1 className="project-title">{project.title}</h1>
							</Link>
						</article>
					))}
				</div>
				<a
					href="https://github.com/MaybeJod"
					className="more-project-link"
					target="_blank">
					More projects on github
				</a>
			</div>
		</section>
	);
};

export default Projects;
