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
		tag: ["Web Dev", "React", "API", "Accessibility"],
		technologies: ["JavaScript", "React", "CSS"],
		image: "images/projectImg/PlaylistManagerIndex.jpeg",
		previewLink: "https://the-playlist-manager.netlify.app/",
		githubLink: "https://github.com/antxhan/playlist-manager",
		description: createDescription([
			{ type: "heading", content: "Description" },
			{
				type: "paragraph",
				content:
					"This group project involves building a React web application that integrates with the Spotify API, allowing users to seamlessly manage their playlists and explore music. The primary goal is to provide an interactive, user-friendly interface that enhances the music experience by integrating playlist management, discovery, and playback into one seamless app.",
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
				type: "heading",
				content: "Snapshots of the project (click to enlarge)",
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
		tag: ["Web Dev", "Web Design", "API", "Webpack"],
		technologies: ["JavaScript", "HTML", "CSS", "API", "Local Storage"],
		image: "/images/projectImg/jasmizImg/jasmizIndex.jpg",
		previewLink: "https://maybejod.github.io/e-store/",
		githubLink: "https://github.com/MaybeJod/e-store",
		description: createDescription([
			{ type: "heading", content: "Description" },
			{
				type: "paragraph",
				content:
					"The Brief: A small business is seeking to establish a simple, responsive, user-friendly e-commerce website to facilitate the online sale of a curated selection of products. The primary goal is to create a clean and intuitive platform where customers can easily browse through the available products, filter by category, and complete their purchases without difficulty.",
			},
			{ type: "heading", content: "Features" },
			{
				type: "list-item",
				content:
					"Product Listing: A dedicated page will showcase the business's product offerings. Each product listing will provide the product title, a description, the price, and an accompanying image. The products are returned from the Fake Store API.",
			},
			{
				type: "list-item",
				content:
					"Filters: Customers will be able to filter products by categories such as clothing and accessories, which is also returned from the Fake Store API",
			},
			{
				type: "list-item",
				content:
					"Shopping Cart: A shopping cart where users can add selected items, review the contents of their cart, and view the total cost of their purchases. The site will automatically calculate the total price of the items in the cart",
			},
			{
				type: "list-item",
				content:
					"Checkout: A simple and intuitive form will be provided for customers to submit their purchases. While this version will not be integrated with real payment systems, it will serve as a placeholder to demonstrate the flow of the checkout process",
			},
			{
				type: "image-gallery",
				content: "Snapshots of the project (click to enlarge)",
				images: [
					{
						url: "/images/projectImg/jasmizImg/jasmizIndex.jpg",
						alt: "home",
						caption: "Landing page",
					},
					{
						url: "/images/projectImg/jasmizImg/JasmizCategory.jpeg",
						alt: "Item grid of womens clothes",
						caption: "Item grid of womens clothes",
					},
					{
						url: "/images/projectImg/jasmizImg/JasmizCart.jpeg",
						alt: "Checkout",
						caption: "Checkout page",
					},
				],
			},
		]),
	},
];
