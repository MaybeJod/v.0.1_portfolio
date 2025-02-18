import GithubSVG from "../../Icons/GithubSVG";
import LinkedinSvg from "../../Icons/LinkedinSvg";
import CodepenSVG from "../../Icons/CodepenSVG";

export default function FindMe() {
	return (
		<section>
			<h2 className="find-me-section-title">FIND ME</h2>
			<div className="find-me-section-content">
				<GithubSVG />
				<LinkedinSvg />
				<CodepenSVG />
			</div>
		</section>
	);
}
