import Subscription from "./Subscription";

function HeroConent() {
	return (
		<div className="sofax-hero-content">
			<h1 className="slider-custom-anim-left" data-ani="slider-custom-anim-left" data-ani-delay="0.3s">
				Your all-in-one CRM platform built success
			</h1>
			<p>
				Transform your business with our intelligent CRM solutions. Drive sales, track leads, automate tasks,
				enhance service, boost efficiency – all in one place.
			</p>

			<Subscription />
		</div>
	);
}

export default HeroConent;
