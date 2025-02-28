import tempJod from "../Icons/temp_jod.jpg";

interface Testimonial {
	clientName: string;
	clientCompany: string;
	statement: string;
	projectTag: string[];
	img: string;
}

const testimonial = (
	clientName: string,
	clientCompany: string,
	statement: string,
	projectTag: string[],
	img: string
): Testimonial => {
	return { clientName, clientCompany, statement, projectTag, img };
};

export const testimonials: Testimonial[] = [
	testimonial(
		"NotJod",
		"A cool company",
		"Jod is phenomenal. An absolute pleasure to work with!",
		["web dev", "web design", "seo"],
		tempJod
	),
	testimonial(
		"DefinitelyNotJod",
		"Company Name",
		"Beyond standards, Jod grasped our vision and brought it to life brilliantly.",
		["web dev", "web design"],
		tempJod
	),
];
