import jod from "../Icons/temp_jod.jpg";

interface Project {
	title: string;
	tag: string[];
	technologies: string[];
	image: string;
	previewLink: string;
	githubLink: string;
	description: string;
}

const project = (
	title: string,
	tag: string[],
	technologies: string[],
	image: string,
	previewLink: string,
	githubLink: string,
	description: string
): Project => {
	return {
		title,
		tag,
		technologies,
		image,
		previewLink,
		githubLink,
		description,
	};
};

export const ProjectsData: Project[] = [
	project(
		"V.0.1 Portfolio",
		["Web Development", "Web Design"],
		["JavaScript, TypeScript, React"],
		jod,
		"https://github.com/MaybeJod/v.0.1_portfolio",
		"google.com",
		"lorem10"
	),
	project(
		"playlist manager",
		["Web Development", "SEO"],
		["JavaScript, TypeScript, React"],
		"https://images.unsplash.com/photo-1730121108301-65fe6cefb48d?q=80&w=3263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://github.com/antxhan/playlist-manager",
		"google.com",
		"lorem11"
	),
	project(
		"e-store",
		["Web Development"],
		["JavaScript, TypeScript, React"],
		"https://images.unsplash.com/photo-1730121108301-65fe6cefb48d?q=80&w=3263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://github.com/MaybeJod/e-store",
		"google.com",
		"lorem12"
	),
];
