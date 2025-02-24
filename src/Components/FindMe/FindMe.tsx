import "./FindMe.css";
import GithubSVG from "../../Icons/GithubSVG";
import LinkedinSvg from "../../Icons/LinkedinSvg";
import CodepenSVG from "../../Icons/CodepenSVG";

export default function FindMe() {
	return (
		<section className="find-me-section-wrapper">
			<h2 className="find-me-section-title">FIND ME</h2>
			<div className="find-me-section-content">
				<a href="https://github.com/MaybeJod">
					<GithubSVG />
				</a>
				<a href="https://www.linkedin.com/in/kiattisak-jod-wongphayak/">
					{" "}
					<LinkedinSvg />
				</a>
				<a href="https://codepen.io/NotJod">
					<CodepenSVG />
				</a>
			</div>
		</section>
	);
}
