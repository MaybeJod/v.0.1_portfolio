import jod from "../Icons/temp_jod.jpg";

interface Project {
	title: string;
	tag: string[];
	image: string;
	link: string;
	description: string;
}

const project = (
	title: string,
	tag: string[],
	image: string,
	link: string,
	description: string
): Project => {
	return { title, tag, image, link, description };
};

export const ProjectsData: Project[] = [
	project(
		"V.0 Portfolio",
		["Web Development", "Web Design"],
		jod,
		"https://github.com/MaybeJod/v.0_portfolio",
		"lorem10"
	),
	project(
		"E-store",
		["Web Development", "SEO"],
		"https://images.unsplash.com/photo-1730121108301-65fe6cefb48d?q=80&w=3263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://github.com/MaybeJod/e-store",
		"lorem11"
	),
	project(
		"Weather app",
		["Web Development"],
		"https://images.unsplash.com/photo-1730121108301-65fe6cefb48d?q=80&w=3263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://github.com/MaybeJod/ODIN-weather-app",
		"lorem12"
	),
];
