import { MouseEventHandler } from "react";
import "./StandardButton.css";

interface ButtonInterface {
	onClick: MouseEventHandler<HTMLButtonElement>;
	children: string;
	className: string;
	ariaLabel: string;
	tabIndex: number;
}

export default function StandardButton({
	onClick,
	children,
	className,
	ariaLabel = "",
	tabIndex,
}: ButtonInterface) {
	return (
		<div className="standard-button-wrapper">
			<button
				className={`standard-button ${className || ""}`}
				type="button"
				onClick={onClick}
				aria-label={ariaLabel}
				tabIndex={tabIndex}>
				{children}
			</button>
		</div>
	);
}
