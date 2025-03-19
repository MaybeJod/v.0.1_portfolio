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
				content:
					"The application requires you to be whitelisted to log in, contact me (please) to get a live demo.",
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

	// Project 3: e-store
	{
		title: "Jasmiz e-store",
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
				type: "heading",
				content: "Snapshots of the project (click to enlarge)",
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

	// Project 1: ION GAME DESIGN HF
	{
		title: "High Frontier Mobile game UX Design",
		tag: ["Game Dev", "UX", "User Research", "Figma", "Prototyping"],
		technologies: ["UX", "UI", "Figma", "Unity"],
		image: "/images/projectImg/hf4all/hfCover.jpg",
		previewLink:
			"https://iongamedesign.com/pages/high-frontier-4-all-digital-version",
		githubLink: "",
		description: createDescription([
			{ type: "heading", content: "Description" },
			{
				type: "paragraph",
				content:
					"In this practical thesis project, the focus has been on the user interface (UI) for High Frontier, an upcoming mobile game developed by ION Game Design. The goal of this project was to create an intuitive and user-friendly interface through user research and adherence to industry standards and guidelines rooted in User Experience (UX)",
			},
			{
				type: "paragraph",
				content:
					"This work contributed to the early-stage development of the High Frontier mobile game, setting the groundwork for further refinement and playtesting, ensuring an engaging digital adaptation of the original board game.",
			},
			// { type: "heading", content: "Features" },
			{
				type: "list-item",
				content:
					"Designed an intuitive and user-friendly UI for the mobile game High Frontier by conducting user research with 191 survey responses, ensuring alignment with industry UX standards and enhancing player engagement.",
			},
			{
				type: "list-item",
				content:
					"Developed interactive prototypes through iterative testing and redesigned key interface elements based on usability feedback, improving clarity and accessibility for both new and experienced players.",
			},
			{
				type: "list-item",
				content:
					"Balanced complexity and accessibility by creating UI standards that retained the depth of the original board game while making the mobile version approachable, reducing onboarding friction for new users.",
			},
			{
				type: "list-item",
				content:
					"Conducted competitor analysis by reviewing industry-leading mobile strategy games, extracting best practices, and implementing a standardized design system that streamlined UI consistency across game screens.",
			},
			{
				type: "list-item",
				content:
					"Created a scalable design framework in Figma, using responsive grid layouts and adaptive UI components, ensuring a seamless cross-device experience on various screen sizes.",
			},
			{
				type: "list-item",
				content:
					"Collaborated with a multidisciplinary team of developers, artists, and game designers, integrating UI principles with gameplay mechanics to support a cohesive user experience.",
			},
			{
				type: "list-item",
				content:
					"Enhanced mobile usability by applying Apple and Google’s UI guidelines, optimizing button placement, text readability, and interaction patterns, leading to a more intuitive touch-based navigation system.",
			},
			{
				type: "list-item",
				content:
					"Designed and iterated on the main game menus, including the start menu, single-player navigation, and patent marketplace, ensuring a logical and engaging player flow.",
			},
			{
				type: "list-item",
				content:
					"Pioneered a usability-driven approach that established a UI/UX foundation for the game’s continued development, setting a benchmark for future iterations and user testing.",
			},
			{
				type: "heading",
				content:
					"Snapshots of the project, text is in swedish (click to enlarge)",
			},
			{
				type: "image-gallery",
				content: "Snapshots of the project (click to enlarge)",
				images: [
					{
						url: "/images/projectImg/hf4all/hf4all1.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all2.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all3.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all4.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all5.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all6.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all7.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all8.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all9.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all10.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all11.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all12.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all13.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all14.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all15.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all16.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all17.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all18.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all19.jpg",
						alt: "",
						caption: "",
					},
					{
						url: "/images/projectImg/hf4all/hf4all20.jpg",
						alt: "",
						caption: "",
					},
				],
			},
		]),
	},
];
