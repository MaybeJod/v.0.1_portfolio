import { currentlySection } from "./Currently";
import { helpSection } from "./iCanHelpWith";
import { pastSection } from "./PastSection";
import { interestsSection } from "./InterestsSection";

export const ProfileData = {
	currently: currentlySection,
	help: helpSection,
	past: pastSection,
	interests: interestsSection,
};

export type Section = typeof currentlySection;
