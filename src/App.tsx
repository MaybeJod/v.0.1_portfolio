import React from "react";

import "./App.css";
import ContentSection from "./Components/ContentSection/ContentSection";

function App() {
	const profileData = {
		sections: [
			{
				id: "currently",
				title: "CURRENTLY",
				items: [
					{
						segments: [
							{ text: "Head of Design @ " },
							{ text: "Home", link: "google.com" },
						],
					},
					{
						segments: [{ text: "Client work @ jod design" }],
					},
					{
						segments: [{ text: "Trying to survive" }],
					},
					{
						segments: [
							{
								text: "The playlist manager",
								link: "-playlist-manager.netlify.app",
							},
						],
					},
				],
			},
			{
				id: "iCanHelpWith",
				title: "I CAN HELP WITH",
				items: [
					{
						segments: [
							{ text: "Head of Design @ " },
							{ text: "Home", link: "google.com" },
						],
					},
					{
						segments: [{ text: "Client work @ jod design" }],
					},
					{
						segments: [{ text: "Trying to survive" }],
					},
					{
						segments: [
							{
								text: "The playlist manager",
								link: "-playlist-manager.netlify.app",
							},
						],
					},
				],
			},
			{
				id: "past",
				title: "PAST",
				items: [
					{
						segments: [
							{ text: "Head of Design @ " },
							{ text: "Home", link: "google.com" },
						],
					},
					{
						segments: [{ text: "Client work @ jod design" }],
					},
					{
						segments: [{ text: "Trying to survive" }],
					},
					{
						segments: [
							{
								text: "The playlist manager",
								link: "-playlist-manager.netlify.app",
							},
						],
					},
				],
			},
			{
				id: "currentInterests",
				title: "CURRENT INTERESTS",
				items: [
					{
						segments: [
							{ text: "Head of Design @ " },
							{ text: "Home", link: "google.com" },
						],
					},
					{
						segments: [{ text: "Client work @ jod design" }],
					},
					{
						segments: [{ text: "Trying to survive" }],
					},
					{
						segments: [
							{
								text: "The playlist manager",
								link: "-playlist-manager.netlify.app",
							},
						],
					},
				],
			},
		],
	};

	return (
		<div className="App">
			<ContentSection sections={profileData.sections} />
		</div>
	);
}

export default App;
