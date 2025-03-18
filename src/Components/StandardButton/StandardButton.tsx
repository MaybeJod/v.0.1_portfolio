import { MouseEventHandler, ButtonHTMLAttributes } from "react";
import "./StandardButton.css";

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
	onClick: MouseEventHandler<HTMLButtonElement>;
	children: string;
	className?: string;
	ariaLabel?: string;
	tabIndex?: number;
}

export default function StandardButton({
	onClick,
	children,
	className = "",
	ariaLabel = "",
	tabIndex = 0,
	...rest
}: ButtonInterface) {
	return (
		<div className="standard-button-wrapper">
			<button
				className={`standard-button ${className || ""}`}
				type="button"
				onClick={onClick}
				aria-label={ariaLabel}
				tabIndex={tabIndex}
				{...rest}>
				{children}
			</button>
		</div>
	);
}
