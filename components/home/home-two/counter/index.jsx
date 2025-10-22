"use client";
import CountUp from "react-countup";
function Counter() {
	return (
		<section className="section sofax-section-padding2 dark-bg" id="fact">
			<div id="sofax-counter"></div>
			<div className="container">
				<div className="sofax-counter-wrap">
					<div className="sofax-counter-data">
						<h2>
							$<CountUp end={19} duration={3} redraw={true} enableScrollSpy />k
						</h2>
						<p>Total value locked</p>
					</div>
					<div className="sofax-counter-data">
						<h2>
							$<CountUp end={5} duration={3} redraw={true} enableScrollSpy />k
						</h2>
						<p>Total trading volume</p>
					</div>
					<div className="sofax-counter-data">
						<h2>
							<CountUp end={20} duration={3} redraw={true} enableScrollSpy />%
						</h2>
						<p>Lowest trade free</p>
					</div>
					<div className="sofax-counter-data">
						<h2>
							<CountUp end={100} duration={3} redraw={true} enableScrollSpy />%
						</h2>
						<p>Swap free cashback</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Counter;
