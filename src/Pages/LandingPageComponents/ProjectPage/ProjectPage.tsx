import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
	ProjectsData,
	DescriptionItem,
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

	// Function to process description items and group list items
	const processDescriptionItems = (items: (DescriptionItem | string)[]) => {
		const processedItems: React.ReactNode[] = [];
		let currentListItems: React.ReactNode[] = [];
		let isProcessingList = false;

		items.forEach((item, index) => {
			// Handle string items
			if (typeof item === "string") {
				// If we were processing a list, finish it first
				if (isProcessingList && currentListItems.length > 0) {
					processedItems.push(
						<ul key={`list-${index}`}>{currentListItems}</ul>
					);
					currentListItems = [];
					isProcessingList = false;
				}

				processedItems.push(<p key={index}>{item}</p>);
				return;
			}

			// Handle DescriptionItem objects
			switch (item.type) {
				case "heading":
					// If we were processing a list, finish it first
					if (isProcessingList && currentListItems.length > 0) {
						processedItems.push(
							<ul key={`list-${index}`}>{currentListItems}</ul>
						);
						currentListItems = [];
						isProcessingList = false;
					}

					processedItems.push(
						<h2 key={index} className="description-heading">
							{item.content}
						</h2>
					);
					break;

				case "paragraph":
					// If we were processing a list, finish it first
					if (isProcessingList && currentListItems.length > 0) {
						processedItems.push(
							<ul key={`list-${index}`}>{currentListItems}</ul>
						);
						currentListItems = [];
						isProcessingList = false;
					}

					processedItems.push(
						<p key={index} className="description-paragraph">
							{item.content}
						</p>
					);
					break;

				case "list-item":
					isProcessingList = true;
					currentListItems.push(
						<li key={`list-item-${index}`} className="description-list-item">
							{item.content}
						</li>
					);
					break;

				case "sub-list-item":
					isProcessingList = true;
					currentListItems.push(
						<li
							key={`sub-list-item-${index}`}
							className="description-sub-list-item indented">
							{item.content}
						</li>
					);
					break;

				case "image":
					// If we were processing a list, finish it first
					if (isProcessingList && currentListItems.length > 0) {
						processedItems.push(
							<ul key={`list-${index}`}>{currentListItems}</ul>
						);
						currentListItems = [];
						isProcessingList = false;
					}

					if (item.imageUrl) {
						processedItems.push(
							<div key={index}>
								{renderImage(
									item.imageUrl,
									item.content,
									undefined,
									item.alignment
								)}
							</div>
						);
					}
					break;

				case "image-gallery":
					// If we were processing a list, finish it first
					if (isProcessingList && currentListItems.length > 0) {
						processedItems.push(
							<ul key={`list-${index}`}>{currentListItems}</ul>
						);
						currentListItems = [];
						isProcessingList = false;
					}

					if (item.images) {
						processedItems.push(
							<div key={index}>{renderGallery(item.images)}</div>
						);
					}
					break;

				default:
					// If we were processing a list, finish it first
					if (isProcessingList && currentListItems.length > 0) {
						processedItems.push(
							<ul key={`list-${index}`}>{currentListItems}</ul>
						);
						currentListItems = [];
						isProcessingList = false;
					}

					processedItems.push(<p key={index}>{item.content}</p>);
			}
		});

		// If we have any remaining list items, add them
		if (currentListItems.length > 0) {
			processedItems.push(<ul key="final-list">{currentListItems}</ul>);
		}

		return processedItems;
	};

	const renderDescription = () => {
		if (typeof project.description === "string") {
			return <p>{project.description}</p>;
		}

		if (Array.isArray(project.description)) {
			return (
				<div className="project-description">
					{processDescriptionItems(project.description)}
				</div>
			);
		}

		return <p>No description available.</p>;
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
					<a
						href={project.previewLink}
						target="_blank"
						rel="noopener noreferrer"
						className="external-link-button">
						Live URL
					</a>
				)}
				{project.githubLink && (
					<a
						href={project.githubLink}
						target="_blank"
						rel="noopener noreferrer"
						className="external-link-button">
						GitHub
					</a>
				)}
			</div>

			<div className="project-content">{renderDescription()}</div>

			{project.additionalImages && project.additionalImages.length > 0 && (
				<div className="additional-images-section">
					<h3>Project Gallery</h3>
					{renderGallery(project.additionalImages)}
				</div>
			)}

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
