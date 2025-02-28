import React, { useState, useEffect } from "react";
import { testimonials } from "../../Data/TestimonialsData";

export default function Testimonial() {
	const [slideIndex, setSlideIndex] = useState(1);

	// Function to handle slide navigation
	const showSlide = (n: number) => {
		let newIndex = n;

		// Handle edge cases
		if (newIndex > testimonials.length) newIndex = 1;
		if (newIndex < 1) newIndex = testimonials.length;

		setSlideIndex(newIndex);
	};

	// Navigate to previous or next slide
	const changeSlide = (n: number) => {
		showSlide(slideIndex + n);
	};

	// Initialize with first slide
	useEffect(() => {
		showSlide(1);
	}, []);
	return (
		<section id="testimonial">
			<div className="page-container">
				<div className="testimonial-start">
					<h2>don't take my word for it</h2>
					<div id="testimonialHeading">
						<p id="testimonial-left">(testimonials)</p>
						<p id="testimonial-right">
							Here's what my clients say about our collaboration. Their
							satisfaction and meeting expectations are my top priorities,
							ensuring the best experience possible.
						</p>
					</div>
				</div>
				<hr />
				<div className="slideshow-container">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="slides"
							style={{ display: slideIndex === index + 1 ? "grid" : "none" }}>
							<div className="slideshow-left">
								<div className="slide-header">
									<h3>"{testimonial.statement}"</h3>
									<p className="client-name">{testimonial.clientName}</p>
									<p className="client-company">{testimonial.clientCompany}</p>
									<div className="project-tag">
										{testimonial.projectTag.map((tag, tagIndex) => (
											<React.Fragment key={tagIndex}>
												<span>{tag}</span>
												{tagIndex < testimonial.projectTag.length - 1 && " - "}
											</React.Fragment>
										))}
									</div>
								</div>
								<div className="slide-controller">
									<p className="slide-number">
										[{index + 1} / {testimonials.length}]
									</p>
									<div className="slide-button-container">
										<button
											className="slide-buttons prevBtn"
											onClick={() => changeSlide(-1)}>
											prev
										</button>
										<button
											className="slide-buttons nextBtn"
											onClick={() => changeSlide(1)}>
											next
										</button>
									</div>
								</div>
							</div>
							<img
								src={testimonial.img}
								alt="client illustration"
								className="slide-img"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
