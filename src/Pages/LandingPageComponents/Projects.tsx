import { ProjectsData } from "../../Data/ProjectsData";

export default function Projects() {
	return (
		<section id="projects">
			<div className="page-container">
				<h2 className="projects-heading">Creations in progress</h2>
				<div className="grid-container">
					{ProjectsData.map((project, index) => (
						<article key={index} className="card">
							<a href={project.link}>
								<span className="project-number">00-{index + 1}</span>
								<img src={project.image} alt="project illustrations" />
								<hr />
								<p className="project-tags">{project.tag.join(" - ")}</p>
								<h1 className="project-title">{project.title}</h1>
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
