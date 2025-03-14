export interface ProjectImage {
	url: string;
	alt: string;
	caption?: string;
}

export interface DescriptionItem {
	type:
		| "heading"
		| "paragraph"
		| "list-item"
		| "sub-list-item"
		| "image"
		| "image-gallery";
	content: string;
	imageUrl?: string;
	images?: ProjectImage[];
	alignment?: "left" | "center" | "right";
}

// Support both structured descriptions and backwards compatibility
export type ProjectDescription = DescriptionItem[] | string | string[];

interface Project {
	title: string;
	tag: string[];
	technologies: string[];
	image: string;
	additionalImages?: ProjectImage[];
	previewLink: string;
	githubLink: string;
	description: ProjectDescription;
}

// Helper function to create description items
const createDescription = (
	items: (
		| {
				type: "heading" | "paragraph" | "list-item" | "sub-list-item";
				content: string;
		  }
		| {
				type: "image" | "image-gallery";
				content: string;
				images: ProjectImage[]; // Allow images array for galleries
		  }
	)[]
): DescriptionItem[] => {
	return items;
};

export const ProjectsData: Project[] = [
	// Project 1: Simple string description (for backwards compatibility)
	{
		title: "V.0.1 Portfolio",
		tag: ["Web Development", "Web Design"],
		technologies: ["JavaScript", "TypeScript", "React"],
		image: "/images/jod/temp_jod.jpg",
		previewLink: "https://github.com/MaybeJod/v.0.1_portfolio",
		githubLink: "google.com",
		description: "lorem10",
	},

	// Project 2: Structured description for playlist manager
	{
		title: "playlist manager",
		tag: ["Web Development", "SEO"],
		technologies: ["JavaScript", "React", "CSS"],
		image: "images/projectImg/PlaylistManagerIndex.jpeg",
		previewLink: "https://the-playlist-manager.netlify.app/",
		githubLink: "https://github.com/antxhan/playlist-manager",
		description: createDescription([
			{ type: "heading", content: "Description" },
			{
				type: "paragraph",
				content:
					"This project involves building a React web application that integrates with the Spotify API, allowing users to seamlessly manage their playlists and explore music. The primary goal is to provide an interactive, user-friendly interface that enhances the music experience by integrating playlist management, discovery, and playback into one seamless app.",
			},
			{ type: "heading", content: "Features" },
			{
				type: "list-item",
				content: "Authentication: Log in with Spotify to access user data.",
			},
			{
				type: "list-item",
				content:
					"Routing: Implemented using React Router for smooth navigation.",
			},
			{
				type: "list-item",
				content:
					"Spotify Data Integration: Fetch playlists, tracks, and recommendations directly from Spotify.",
			},
			{ type: "list-item", content: "Playlist Management:" },
			{ type: "sub-list-item", content: "Create, edit, and delete playlists." },
			{
				type: "sub-list-item",
				content: "Add favorite tracks when creating a playlist.",
			},
			{ type: "list-item", content: "Music Playback" },
			{
				type: "sub-list-item",
				content: "Play and pause music using the Spotify Web Playback SDK.",
			},
			{
				type: "sub-list-item",
				content: "Keyboard shortcuts: Space to play/pause, M to mute/unmute.",
			},
			{
				type: "list-item",
				content:
					"Search Functionality: Find Spotify playlists based on keywords.",
			},
			{
				type: "list-item",
				content:
					"Personalized Recommendations: Get suggested playlists based on favorite genres.",
			},
			{
				type: "image-gallery",
				content: "Snapshots of the project (click to enlarge)",
				images: [
					{
						url: "images/projectImg/PlaylistManagerIndex.jpeg",
						alt: "home",
						caption: "Login",
					},
					{
						url: "images/projectImg/PlaylistManagerPlaylistGrid.jpeg",
						alt: "User playlists",
						caption: "Users playlists",
					},
					{
						url: "/images/projectImg/PlaylistManagerMyPlaylist.jpeg",
						alt: "Inside user playlists",
						caption: "inside users playlists",
					},
					{
						url: "/images/projectImg/PlaylistManagerForYou.jpeg",
						alt: "Personalized Recommendations",
						caption: "Personalized Recommendations",
					},
				],
			},
		]),
	},

	// Project 3: Using string array (for backwards compatibility)
	{
		title: "e-store",
		tag: ["Web Development", "SEO"],
		technologies: ["JavaScript", "TypeScript", "React"],
		image:
			"https://images.unsplash.com/photo-1730121108301-65fe6cefb48d?q=80&w=3263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		previewLink: "https://maybejod.github.io/e-store/",
		githubLink: "https://github.com/MaybeJod/e-store",
		description: ["lorem 12", "lorem 21"],
	},
];
