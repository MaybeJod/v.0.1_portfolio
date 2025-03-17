import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import StandardButton from "../StandardButton/StandardButton";

export default function CalEmbed() {
	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: "15min" });
			cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
		})();
	}, []);

	return (
		<StandardButton
			onClick={() => {}}
			className={`lets-connect-section-button`}
			ariaLabel="Schedule a meeting"
			tabIndex={0}
			data-cal-namespace="15min"
			data-cal-link="notjod/15min"
			data-cal-config='{"layout":"month_view"}'>
			Let's chat
		</StandardButton>
	);
}
