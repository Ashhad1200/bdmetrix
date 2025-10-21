import Thumb from "@/public/images/team/thumb1.png";
import Image from "next/image";
import SingleTeamProgressbar from "./SingleTeamProgressbar";
function SingleTeamDetails() {
	return (
		<section className="section sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="about-thumbv5 wow fadeInLeft">
							<Image src={Thumb} alt="Thumb" />
						</div>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content team-member-content">
							<h2>Jonathon Marics</h2>
							<p>
								Building a successful career takes time and effort. Stay persistent in pursuing your
								goals even in the face of challenges or setbacks. Work in your spare time can allow you
								to different aspects.
							</p>
						</div>
						<div className="team-member-details-wrap">
							<div className="team-member-details-data">
								<h4>Postion :</h4>
								<h4>Experience :</h4>
								<h4>Phone :</h4>
							</div>
							<div className="team-member-details-data">
								<h4>Founder & CEO</h4>
								<h4>11+ Years</h4>
								<h4>+123 768 5490</h4>
							</div>
						</div>
						<div className="member-social-contuct-wrap">
							<div className="member-social-contuct-data">
								<h4>Social Media :</h4>
							</div>
							<div className="member-social-contuct-icon">
								<div className="social-site sofax-social-icon blog-social-site">
									<ul>
										<li>
											<a target="_blank" href="https://www.twitter.com/">
												<svg
													width="17"
													height="18"
													viewBox="0 0 17 18"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M9.96447 7.24539L16.1975 0H14.7205L9.30833 6.29107L4.98567 0H0L6.5367 9.51321L0 17.1111H1.47711L7.19246 10.4675L11.7575 17.1111H16.7432L9.9641 7.24539H9.96447ZM7.94136 9.59702L7.27906 8.64972L2.00933 1.11194H4.27809L8.53082 7.19517L9.19312 8.14247L14.7212 16.0497H12.4524L7.94136 9.59739V9.59702Z"
														fill="white"
													/>
												</svg>
											</a>
										</li>
										<li>
											<a target="_blank" href="https://www.facebook.com/">
												<svg
													width="11"
													height="18"
													viewBox="0 0 11 18"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M9.88663 0.00357362L7.65153 0C5.14046 0 3.5177 1.65905 3.5177 4.22688V6.17575H1.27039C1.0762 6.17575 0.918945 6.33263 0.918945 6.52614V9.34984C0.918945 9.54335 1.07638 9.70005 1.27039 9.70005H3.5177V16.8251C3.5177 17.0187 3.67495 17.1754 3.86914 17.1754H6.80123C6.99543 17.1754 7.15268 17.0185 7.15268 16.8251V9.70005H9.7803C9.9745 9.70005 10.1318 9.54335 10.1318 9.34984L10.1328 6.52614C10.1328 6.43323 10.0957 6.34425 10.0299 6.27849C9.9641 6.21274 9.87444 6.17575 9.7812 6.17575H7.15268V4.52367C7.15268 3.72961 7.34257 3.3265 8.3806 3.3265L9.88627 3.32597C10.0803 3.32597 10.2375 3.16909 10.2375 2.97575V0.353788C10.2375 0.160634 10.0805 0.00393098 9.88663 0.00357362Z"
														fill="white"
													/>
												</svg>
											</a>
										</li>
										<li>
											<a target="_blank" href="https://www.instagram.com/">
												<svg
													width="18"
													height="17"
													viewBox="0 0 18 17"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M12.0429 0H5.94738C3.14244 0 0.867798 2.26664 0.867798 5.06173V11.1358C0.867798 13.9309 3.14244 16.1975 5.94738 16.1975H12.0429C14.8478 16.1975 17.1225 13.9309 17.1225 11.1358V5.06173C17.1225 2.26664 14.8478 0 12.0429 0ZM15.5986 11.1358C15.5986 13.0896 14.0036 14.679 12.0429 14.679H5.94738C3.98666 14.679 2.39167 13.0896 2.39167 11.1358V5.06173C2.39167 3.1079 3.98666 1.51852 5.94738 1.51852H12.0429C14.0036 1.51852 15.5986 3.1079 15.5986 5.06173V11.1358Z"
														fill="white"
													/>
													<path
														d="M9.00312 4.05713C6.75896 4.05713 4.93945 5.87024 4.93945 8.10651C4.93945 10.3428 6.75896 12.1559 9.00312 12.1559C11.2473 12.1559 13.0668 10.3428 13.0668 8.10651C13.0668 5.87024 11.2473 4.05713 9.00312 4.05713ZM9.00312 10.6374C7.60319 10.6374 6.46333 9.50153 6.46333 8.10651C6.46333 6.71049 7.60319 5.57565 9.00312 5.57565C10.4031 5.57565 11.5429 6.71049 11.5429 8.10651C11.5429 9.50153 10.4031 10.6374 9.00312 10.6374Z"
														fill="white"
													/>
													<path
														d="M13.3526 4.29821C13.6528 4.29821 13.8962 4.05602 13.8962 3.75726C13.8962 3.4585 13.6528 3.21631 13.3526 3.21631C13.0524 3.21631 12.809 3.4585 12.809 3.75726C12.809 4.05602 13.0524 4.29821 13.3526 4.29821Z"
														fill="white"
													/>
												</svg>
											</a>
										</li>
										<li>
											<a target="_blank" href="https://bd.linkedin.com/">
												<svg
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M15.8767 15.0112V15.0106H15.8805V9.49947C15.8805 6.8034 15.298 4.72656 12.135 4.72656C10.6145 4.72656 9.59409 5.55805 9.17751 6.34633H9.13353V4.97826H6.13452V15.0106H9.25731V10.0429C9.25731 8.73498 9.50612 7.47022 11.1316 7.47022C12.7332 7.47022 12.7571 8.96289 12.7571 10.1268V15.0112H15.8767Z"
														fill="white"
													/>
													<path
														d="M1.0498 4.99463H4.17636V15.0269H1.0498V4.99463Z"
														fill="white"
													/>
													<path
														d="M2.62102 0C1.62135 0 0.810181 0.808321 0.810181 1.80448C0.810181 2.80063 1.62135 3.62586 2.62102 3.62586C3.62069 3.62586 4.43186 2.80063 4.43186 1.80448C4.43123 0.808321 3.62006 0 2.62102 0V0Z"
														fill="white"
													/>
												</svg>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="sofax-member-experience">
					<div className="row">
						<div className="col-lg-6">
							<h3>My Experience</h3>
							<p>
								Bring survival strategies to the table to ensure active dominance. Moving on at the end
								of the day. A new normal that has evolved over the generations is a streamline on the
								runway heading to roward.
							</p>
							<p>
								When an unknown printer took a galley of type & scrambled it to create a type specimen
								book. It is not just five centuries of architecture.
							</p>
						</div>
						<div className="col-lg-6">
							<SingleTeamProgressbar />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SingleTeamDetails;
