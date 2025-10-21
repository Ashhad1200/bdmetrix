"use client";
import CountUp from "react-countup";
function Counter() {
	return (
		<section className="section sofax-section-padding2 dark-bg">
			<div id="sofax-counter"></div>
			<div className="container">
				<div className="sofax-counter-wrap position-ralatiove">
					<div className="sofax-counter-data  ">
						<h2>
							<CountUp className="sofax-counter" end={1} duration={3} redraw={true} enableScrollSpy />
							M+
						</h2>
						<p>Active Website</p>
					</div>
					<div className="border-right"></div>
					<div className="sofax-counter-data ">
						<h2>
							<CountUp className="sofax-counter" end={500} duration={3} redraw={true} enableScrollSpy />K
						</h2>
						<p>Worldwide Server</p>
					</div>
					<div className="border-right2"></div>
					<div className="sofax-counter-data ">
						<h2>
							<CountUp className="sofax-counter" end={50} duration={3} redraw={true} enableScrollSpy />+
						</h2>
						<p>Web Apps</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Counter;
