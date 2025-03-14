import React from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
	ProjectsData,
	DescriptionItem,
	ProjectDescription,
	ProjectImage,
} from "../../../Data/ProjectsData";
import "./ProjectPage.css";

const ProjectDetailsPage: React.FC = () => {
	const { projectSlug } = useParams<{ projectSlug: string }>();
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const project = ProjectsData.find(
		(p) => p.title.toLowerCase().replace(/\s+/g, "-") === projectSlug
	);

	if (!project) {
		return (
			<div className="project-not-found">
				<h2>Project Not Found</h2>
				<p>Sorry, the project you're looking for doesn't exist.</p>
				<Link to="/#projects">Back to Projects</Link>
			</div>
		);
	}

	// Image modal for larger view
	const ImageModal = ({
		url,
		onClose,
	}: {
		url: string;
		onClose: () => void;
	}) => (
		<div className="image-modal" onClick={onClose}>
			<div className="image-modal-content">
				<span className="close-button" onClick={onClose}>
					&times;
				</span>
				<img src={url} alt="Enlarged view" />
			</div>
		</div>
	);

	// Render a single image with optional caption
	const renderImage = (
		url: string,
		alt: string,
		caption?: string,
		alignment: string = "center"
	) => (
		<div className={`project-image-container align-${alignment}`}>
			<img
				src={url}
				alt={alt}
				className="project-content-image"
				onClick={() => setSelectedImage(url)}
			/>
			{caption && <p className="image-caption">{caption}</p>}
		</div>
	);

	// Render an image gallery
	const renderGallery = (images: ProjectImage[]) => (
		<div className="image-gallery">
			{images.map((image, idx) => (
				<div key={idx} className="gallery-item">
					<img
						src={image.url}
						alt={image.alt}
						onClick={() => setSelectedImage(image.url)}
					/>
					{image.caption && <p className="image-caption">{image.caption}</p>}
				</div>
			))}
		</div>
	);

	// Helper function to render structured description items
	const renderDescriptionItem = (item: DescriptionItem, index: number) => {
		switch (item.type) {
			case "heading":
				return (
					<h3 key={index} className="description-heading">
						{item.content}
					</h3>
				);
			case "paragraph":
				return (
					<p key={index} className="description-paragraph">
						{item.content}
					</p>
				);
			case "list-item":
				return (
					<li key={index} className="description-list-item">
						{item.content}
					</li>
				);
			case "sub-list-item":
				return (
					<li key={index} className="description-sub-list-item indented">
						{item.content}
					</li>
				);
			case "image":
				return item.imageUrl ? (
					<div key={index}>
						{renderImage(
							item.imageUrl,
							item.content,
							undefined,
							item.alignment
						)}
					</div>
				) : null;
			case "image-gallery":
				return item.images ? (
					<div key={index}>
						<h4 className="gallery-title">{item.content}</h4>
						{renderGallery(item.images)}
					</div>
				) : null;
			default:
				return <p key={index}>{item.content}</p>;
		}
	};

	// Render the description based on its type
	const renderDescription = () => {
		// If description is a string, simply render it as a paragraph
		if (typeof project.description === "string") {
			return <p>{project.description}</p>;
		}

		// If description is an array
		if (Array.isArray(project.description)) {
			// Check if it's an array of DescriptionItem objects
			if (
				project.description.length > 0 &&
				typeof project.description[0] === "object" &&
				"type" in project.description[0]
			) {
				// It's a structured description
				let inList = false;
				let listItems: JSX.Element[] = [];
				let elements: JSX.Element[] = [];

				// Process each item
				project.description.forEach((item: any, index: number) => {
					// Start or continue a list
					if (item.type === "list-item" || item.type === "sub-list-item") {
						if (!inList) {
							inList = true;
							listItems = [renderDescriptionItem(item, index)];
						} else {
							listItems.push(renderDescriptionItem(item, index));
						}
					}
					// If we're not in a list item, and we were previously in a list
					else if (inList) {
						// Add the completed list to our elements
						elements.push(
							<ul key={`list-${elements.length}`} className="description-list">
								{listItems}
							</ul>
						);
						// Reset list state
						inList = false;
						listItems = [];
						// Add the current non-list item
						elements.push(renderDescriptionItem(item, index));
					}
					// Just a regular non-list item
					else {
						elements.push(renderDescriptionItem(item, index));
					}
				});

				// If we ended with a list, add it to the elements
				if (inList) {
					elements.push(
						<ul key={`list-${elements.length}`} className="description-list">
							{listItems}
						</ul>
					);
				}

				return <div className="project-description">{elements}</div>;
			}
			// It's an array of strings
			else {
				return (
					<div className="project-description">
						{(project.description as string[]).map(
							(item: string, index: number) => (
								<p key={index}>{item}</p>
							)
						)}
					</div>
				);
			}
		}

		// Fallback if description is undefined or null
		return <p>No description available.</p>;
	};

	// Render additional images section (if using Option 1)
	const renderAdditionalImages = () => {
		if (!project.additionalImages || project.additionalImages.length === 0) {
			return null;
		}

		return (
			<div className="additional-images-section">
				<h3>Project Gallery</h3>
				<div className="image-gallery">
					{project.additionalImages.map((image, idx) => (
						<div key={idx} className="gallery-item">
							<img
								src={image.url}
								alt={image.alt}
								onClick={() => setSelectedImage(image.url)}
							/>
							{image.caption && (
								<p className="image-caption">{image.caption}</p>
							)}
						</div>
					))}
				</div>
			</div>
		);
	};

	return (
		<div className="project-details-page">
			<div className="project-header">
				<h1>{project.title}</h1>
				<p className="project-tags">{project.tag.join(" - ")}</p>
			</div>

			<div className="project-hero-image">
				<img
					src={project.image}
					alt={project.title}
					onClick={() => setSelectedImage(project.image)}
				/>
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

			<div className="project-content">{renderDescription()}</div>

			{/* Render additional images if using Option 1 approach */}
			{renderAdditionalImages()}

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

			{/* Image modal for enlarged view */}
			{selectedImage && (
				<ImageModal
					url={selectedImage}
					onClose={() => setSelectedImage(null)}
				/>
			)}
		</div>
	);
};

export default ProjectDetailsPage;
