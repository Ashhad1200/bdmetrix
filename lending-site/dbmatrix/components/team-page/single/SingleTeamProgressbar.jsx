"use client";
import ProgressBar from "@ramonak/react-progress-bar";
function SingleTeamProgressbar() {
	return (
		<div className="sofax-member-skill-wrap">
			<h3>Skills :</h3>
			<div className="sofax-member-bar">
				<div className="sofax-member-info">
					<h5>Web Design</h5>
				</div>
				<ProgressBar
					completed={87}
					transitionDuration="3s"
					animateOnRender={true}
					bgColor="#E5ABF3"
					height="12px"
					className="sofax-progressbar"
				/>
			</div>

			<div className="sofax-member-bar">
				<div className="sofax-member-info">
					<h5>Digital Marketing</h5>
				</div>
				<ProgressBar
					completed={90}
					transitionDuration="3s"
					animateOnRender={true}
					bgColor="#E5ABF3"
					height="12px"
					className="sofax-progressbar"
				/>
			</div>

			<div className="sofax-member-bar">
				<div className="sofax-member-info">
					<h5>Web Development</h5>
				</div>
				<ProgressBar
					completed={60}
					transitionDuration="3s"
					animateOnRender={true}
					bgColor="#E5ABF3"
					height="12px"
					className="sofax-progressbar"
				/>
			</div>
		</div>
	);
}

export default SingleTeamProgressbar;
