"use client";
import image1 from "@/public/images/about/image1.png";
import image2 from "@/public/images/about/image2.png";
import image3 from "@/public/images/about/image3.png";
import image4 from "@/public/images/about/image4.png";
import image5 from "@/public/images/about/image5.png";
import image6 from "@/public/images/about/image6.png";
import image7 from "@/public/images/about/image7.png";
import image8 from "@/public/images/about/image8.png";
import Thumb from "@/public/images/career/thumb1.png";
import mixitup from "mixitup";
import Image from "next/image";
import { useEffect } from "react";

const teamMembers = [
	{
		id: crypto.randomUUID(),
		name: "Jonathon Marics",
		title: "Founder & CEO",
		image: image1,
	},
	{
		id: crypto.randomUUID(),
		name: "Sellimers Terrony",
		title: "Marketing expert",
		image: image5,
	},
	{
		id: crypto.randomUUID(),
		name: "Helmioll Vesters",
		title: "Chief financial officer",
		image: image2,
	},
	{
		id: crypto.randomUUID(),
		name: "Elimerson Sanvry",
		title: "Chief executive officer",
		image: image6,
	},
	{
		id: crypto.randomUUID(),
		name: "Willemor Smilty",
		title: "Chief Strategy Officer",
		image: image3,
	},
	{
		id: crypto.randomUUID(),
		name: "Ferroliam Centrl",
		title: "Creative director",
		image: image7,
	},
	{
		id: crypto.randomUUID(),
		name: "Amillen Canver",
		title: "Director of HR",
		image: image4,
	},
	{
		id: crypto.randomUUID(),
		name: "Jovenners Willom",
		title: "Market researcher",
		image: image8,
	},
];

function Career() {
	useEffect(() => {
		mixitup(".sofax-portfolio-column", {
			selectors: {
				target: ".mix",
			},
			animation: {
				duration: 500,
			},
		});
	}, []);

	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="sofax-section-title">
					<div className="row">
						<div className="col-xl-6 col-lg-8">
							<h2>Build your career with us for success</h2>
						</div>
						<div className="col-xl-6 col-lg-4 d-flex justify-content-end align-items-center">
							<div className="sofax-aboutus-content-text ">
								<p>
									Start your journey with our company and strengthen to your career, now join us with
									our company.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="sofax-career-thumb ">
					<Image src={Thumb} alt="Thumb" />
				</div>
				<div className="sofax-section-title center max-width-large">
					<h2>Curently open positions</h2>
					<div className="sofax-portfolio-menu extra-mt">
						<ul className="option-set clear-both controls">
							<li className="mixitup-control mixitup-control-active" data-filter="*">
								All
							</li>
							<li className="mixitup-control" data-filter=".development">
								Marketing
							</li>
							<li className="mixitup-control" data-filter=".consultancy">
								Web Design
							</li>
							<li className="mixitup-control" data-filter=".security">
								Development
							</li>
						</ul>
					</div>
				</div>
				<div className="sofax-portfolio-column row">
					<div className="collection-grid-item mix col-md-6  business consultancy">
						<div className="sofax-career-content-wrapper ">
							<div className="sofax-career-content-autohre-wrap">
								<div className="sofax-career-content-data">
									<h4>UI/UX & Product Designer</h4>
									<p>Full Time</p>
								</div>
								<div className="sofax-career-content-icon">
									<a href="single-career.html">
										<svg
											width="16"
											height="14"
											viewBox="0 0 16 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.42855 1.60733C3.48356 0.978554 4.03788 0.513422 4.66666 0.568433L14.3272 1.41362C14.956 1.46863 15.4211 2.02296 15.3661 2.65174L14.5209 12.3123C14.4659 12.9411 13.9116 13.4062 13.2828 13.3512C12.654 13.2962 12.1889 12.7419 12.2439 12.1131L12.8486 5.20113L2.70552 13.7122C2.22201 14.1179 1.50114 14.0549 1.09543 13.5713C0.68971 13.0878 0.752778 12.367 1.23629 11.9613L11.3794 3.45017L4.46745 2.84545C3.83867 2.79044 3.37354 2.23612 3.42855 1.60733Z"
												fill="white"
											/>
										</svg>
									</a>
								</div>
							</div>
							<div className="sofax-career-content-text">
								<p>
									Product design encompasses both UI/UX design but it also a involves a broader
									understanding of the entire product.
								</p>
							</div>
							<div className="sofax-career-content-icon-text-wrapper2">
								<div className="sofax-career-content-icon-text-wrap">
									<div className="sofax-career-content-icon2">
										<svg
											width="18"
											height="21"
											viewBox="0 0 18 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.05991 2.86033C6.34032 -0.420076 11.6589 -0.420077 14.9393 2.86033C18.2197 6.14073 18.2197 11.4593 14.9393 14.7397L8.99961 20.6794L3.05991 14.7397C-0.220492 11.4593 -0.220492 6.14073 3.05991 2.86033ZM8.99961 11.2C10.3251 11.2 11.3996 10.1255 11.3996 8.80002C11.3996 7.47454 10.3251 6.40002 8.99961 6.40002C7.67413 6.40002 6.59961 7.47454 6.59961 8.80002C6.59961 10.1255 7.67413 11.2 8.99961 11.2Z"
												fill="#111827"
											/>
										</svg>
									</div>
									<div className="sofax-career-content-text2">
										<h6>London, UK</h6>
									</div>
								</div>
								<div className="sofax-career-content-icon-text-wrap">
									<div className="sofax-career-content-icon2">
										<svg
											width="20"
											height="16"
											viewBox="0 0 20 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.79844 0.800049C1.47295 0.800049 0.398438 1.87457 0.398438 3.20005V8.00005C0.398438 9.32553 1.47295 10.4 2.79844 10.4L2.79844 3.20005H14.7984C14.7984 1.87457 13.7239 0.800049 12.3984 0.800049H2.79844Z"
												fill="#111827"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.19844 8.00005C5.19844 6.67457 6.27295 5.60005 7.59844 5.60005H17.1984C18.5239 5.60005 19.5984 6.67457 19.5984 8.00005V12.8C19.5984 14.1255 18.5239 15.2 17.1984 15.2H7.59844C6.27295 15.2 5.19844 14.1255 5.19844 12.8V8.00005ZM12.3984 12.8C13.7239 12.8 14.7984 11.7255 14.7984 10.4C14.7984 9.07457 13.7239 8.00005 12.3984 8.00005C11.073 8.00005 9.99844 9.07457 9.99844 10.4C9.99844 11.7255 11.073 12.8 12.3984 12.8Z"
												fill="#111827"
											/>
										</svg>
									</div>
									<div className="sofax-career-content-text2">
										<h6>$23k-35K</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="collection-grid-item mix col-md-6  development">
						<div className="sofax-career-content-wrapper ">
							<div className="sofax-career-content-autohre-wrap">
								<div className="sofax-career-content-data">
									<h4>Social Media Marketing</h4>
									<p>Remote</p>
								</div>
								<div className="sofax-career-content-icon">
									<a href="single-career.html">
										<svg
											width="16"
											height="14"
											viewBox="0 0 16 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.42855 1.60733C3.48356 0.978554 4.03788 0.513422 4.66666 0.568433L14.3272 1.41362C14.956 1.46863 15.4211 2.02296 15.3661 2.65174L14.5209 12.3123C14.4659 12.9411 13.9116 13.4062 13.2828 13.3512C12.654 13.2962 12.1889 12.7419 12.2439 12.1131L12.8486 5.20113L2.70552 13.7122C2.22201 14.1179 1.50114 14.0549 1.09543 13.5713C0.68971 13.0878 0.752778 12.367 1.23629 11.9613L11.3794 3.45017L4.46745 2.84545C3.83867 2.79044 3.37354 2.23612 3.42855 1.60733Z"
												fill="white"
											/>
										</svg>
									</a>
								</div>
							</div>
							<div className="sofax-career-content-text">
								<p>
									It involves creating and sharing to content on social media networks to achieve
									marketing and branding goals.
								</p>
							</div>
							<div className="sofax-career-content-icon-text-wrapper2">
								<div className="sofax-career-content-icon-text-wrap">
									<div className="sofax-career-content-icon2">
										<svg
											width="18"
											height="21"
											viewBox="0 0 18 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.05991 2.86033C6.34032 -0.420076 11.6589 -0.420077 14.9393 2.86033C18.2197 6.14073 18.2197 11.4593 14.9393 14.7397L8.99961 20.6794L3.05991 14.7397C-0.220492 11.4593 -0.220492 6.14073 3.05991 2.86033ZM8.99961 11.2C10.3251 11.2 11.3996 10.1255 11.3996 8.80002C11.3996 7.47454 10.3251 6.40002 8.99961 6.40002C7.67413 6.40002 6.59961 7.47454 6.59961 8.80002C6.59961 10.1255 7.67413 11.2 8.99961 11.2Z"
												fill="#111827"
											/>
										</svg>
									</div>
									<div className="sofax-career-content-text2">
										<h6>United State</h6>
									</div>
								</div>
								<div className="sofax-career-content-icon-text-wrap">
									<div className="sofax-career-content-icon2">
										<svg
											width="20"
											height="16"
											viewBox="0 0 20 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.79844 0.800049C1.47295 0.800049 0.398438 1.87457 0.398438 3.20005V8.00005C0.398438 9.32553 1.47295 10.4 2.79844 10.4L2.79844 3.20005H14.7984C14.7984 1.87457 13.7239 0.800049 12.3984 0.800049H2.79844Z"
												fill="#111827"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.19844 8.00005C5.19844 6.67457 6.27295 5.60005 7.59844 5.60005H17.1984C18.5239 5.60005 19.5984 6.67457 19.5984 8.00005V12.8C19.5984 14.1255 18.5239 15.2 17.1984 15.2H7.59844C6.27295 15.2 5.19844 14.1255 5.19844 12.8V8.00005ZM12.3984 12.8C13.7239 12.8 14.7984 11.7255 14.7984 10.4C14.7984 9.07457 13.7239 8.00005 12.3984 8.00005C11.073 8.00005 9.99844 9.07457 9.99844 10.4C9.99844 11.7255 11.073 12.8 12.3984 12.8Z"
												fill="#111827"
											/>
										</svg>
									</div>
									<div className="sofax-career-content-text2">
										<h6>$45k-55K</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="collection-grid-item mix col-md-6  Security business consultancy">
						<div className="sofax-career-content-wrapper ">
							<div className="sofax-career-content-autohre-wrap">
								<div className="sofax-career-content-data">
									<h4>Web Developer</h4>
									<p>Remote</p>
								</div>
								<div className="sofax-career-content-icon">
									<a href="single-career.html">
										<svg
											width="16"
											height="14"
											viewBox="0 0 16 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.42855 1.60733C3.48356 0.978554 4.03788 0.513422 4.66666 0.568433L14.3272 1.41362C14.956 1.46863 15.4211 2.02296 15.3661 2.65174L14.5209 12.3123C14.4659 12.9411 13.9116 13.4062 13.2828 13.3512C12.654 13.2962 12.1889 12.7419 12.2439 12.1131L12.8486 5.20113L2.70552 13.7122C2.22201 14.1179 1.50114 14.0549 1.09543 13.5713C0.68971 13.0878 0.752778 12.367 1.23629 11.9613L11.3794 3.45017L4.46745 2.84545C3.83867 2.79044 3.37354 2.23612 3.42855 1.60733Z"
												fill="white"
											/>
										</svg>
									</a>
								</div>
							</div>
							<div className="sofax-career-content-text">
								<p>
									Encompasses a rang of task including web design fornt end development back end
									development & server management.
								</p>
							</div>
							<div className="sofax-career-content-icon-text-wrapper2">
								<div className="sofax-career-content-icon-text-wrap">
									<div className="sofax-career-content-icon2">
										<svg
											width="18"
											height="21"
											viewBox="0 0 18 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.05991 2.86033C6.34032 -0.420076 11.6589 -0.420077 14.9393 2.86033C18.2197 6.14073 18.2197 11.4593 14.9393 14.7397L8.99961 20.6794L3.05991 14.7397C-0.220492 11.4593 -0.220492 6.14073 3.05991 2.86033ZM8.99961 11.2C10.3251 11.2 11.3996 10.1255 11.3996 8.80002C11.3996 7.47454 10.3251 6.40002 8.99961 6.40002C7.67413 6.40002 6.59961 7.47454 6.59961 8.80002C6.59961 10.1255 7.67413 11.2 8.99961 11.2Z"
												fill="#111827"
											/>
										</svg>
									</div>
									<div className="sofax-career-content-text2">
										<h6>New Work</h6>
									</div>
								</div>
								<div className="sofax-career-content-icon-text-wrap">
									<div className="sofax-career-content-icon2">
										<svg
											width="20"
											height="16"
											viewBox="0 0 20 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.79844 0.800049C1.47295 0.800049 0.398438 1.87457 0.398438 3.20005V8.00005C0.398438 9.32553 1.47295 10.4 2.79844 10.4L2.79844 3.20005H14.7984C14.7984 1.87457 13.7239 0.800049 12.3984 0.800049H2.79844Z"
												fill="#111827"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.19844 8.00005C5.19844 6.67457 6.27295 5.60005 7.59844 5.60005H17.1984C18.5239 5.60005 19.5984 6.67457 19.5984 8.00005V12.8C19.5984 14.1255 18.5239 15.2 17.1984 15.2H7.59844C6.27295 15.2 5.19844 14.1255 5.19844 12.8V8.00005ZM12.3984 12.8C13.7239 12.8 14.7984 11.7255 14.7984 10.4C14.7984 9.07457 13.7239 8.00005 12.3984 8.00005C11.073 8.00005 9.99844 9.07457 9.99844 10.4C9.99844 11.7255 11.073 12.8 12.3984 12.8Z"
												fill="#111827"
											/>
										</svg>
									</div>
									<div className="sofax-career-content-text2">
										<h6>$45k-55K</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="collection-grid-item mix col-md-6  consultancy">
						<div className="sofax-career-content-wrapper ">
							<div className="sofax-career-content-autohre-wrap">
								<div className="sofax-career-content-data">
									<h4>Graphic Designer</h4>
									<p>Full Time</p>
								</div>
								<div className="sofax-career-content-icon">
									<a href="single-career.html">
										<svg
											width="16"
											height="14"
											viewBox="0 0 16 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.42855 1.60733C3.48356 0.978554 4.03788 0.513422 4.66666 0.568433L14.3272 1.41362C14.956 1.46863 15.4211 2.02296 15.3661 2.65174L14.5209 12.3123C14.4659 12.9411 13.9116 13.4062 13.2828 13.3512C12.654 13.2962 12.1889 12.7419 12.2439 12.1131L12.8486 5.20113L2.70552 13.7122C2.22201 14.1179 1.50114 14.0549 1.09543 13.5713C0.68971 13.0878 0.752778 12.367 1.23629 11.9613L11.3794 3.45017L4.46745 2.84545C3.83867 2.79044 3.37354 2.23612 3.42855 1.60733Z"
												fill="white"
											/>
										</svg>
									</a>
								</div>
							</div>
							<div className="sofax-career-content-text">
								<p>
									Graphic designers combine art technology to the message through images & the layout
									of web screens & Printed.
								</p>
							</div>
							<div className="sofax-career-content-icon-text-wrapper2">
								<div className="sofax-career-content-icon-text-wrap">
									<div className="sofax-career-content-icon2">
										<svg
											width="18"
											height="21"
											viewBox="0 0 18 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.05991 2.86033C6.34032 -0.420076 11.6589 -0.420077 14.9393 2.86033C18.2197 6.14073 18.2197 11.4593 14.9393 14.7397L8.99961 20.6794L3.05991 14.7397C-0.220492 11.4593 -0.220492 6.14073 3.05991 2.86033ZM8.99961 11.2C10.3251 11.2 11.3996 10.1255 11.3996 8.80002C11.3996 7.47454 10.3251 6.40002 8.99961 6.40002C7.67413 6.40002 6.59961 7.47454 6.59961 8.80002C6.59961 10.1255 7.67413 11.2 8.99961 11.2Z"
												fill="#111827"
											/>
										</svg>
									</div>
									<div className="sofax-career-content-text2">
										<h6>New Work</h6>
									</div>
								</div>
								<div className="sofax-career-content-icon-text-wrap">
									<div className="sofax-career-content-icon2">
										<svg
											width="20"
											height="16"
											viewBox="0 0 20 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.79844 0.800049C1.47295 0.800049 0.398438 1.87457 0.398438 3.20005V8.00005C0.398438 9.32553 1.47295 10.4 2.79844 10.4L2.79844 3.20005H14.7984C14.7984 1.87457 13.7239 0.800049 12.3984 0.800049H2.79844Z"
												fill="#111827"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.19844 8.00005C5.19844 6.67457 6.27295 5.60005 7.59844 5.60005H17.1984C18.5239 5.60005 19.5984 6.67457 19.5984 8.00005V12.8C19.5984 14.1255 18.5239 15.2 17.1984 15.2H7.59844C6.27295 15.2 5.19844 14.1255 5.19844 12.8V8.00005ZM12.3984 12.8C13.7239 12.8 14.7984 11.7255 14.7984 10.4C14.7984 9.07457 13.7239 8.00005 12.3984 8.00005C11.073 8.00005 9.99844 9.07457 9.99844 10.4C9.99844 11.7255 11.073 12.8 12.3984 12.8Z"
												fill="#111827"
											/>
										</svg>
									</div>
									<div className="sofax-career-content-text2">
										<h6>$25k-35K</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="collection-grid-item mix col-md-6  development security">
						<div className="sofax-career-content-wrapper ">
							<div className="sofax-career-content-autohre-wrap">
								<div className="sofax-career-content-data">
									<h4>VP of Growth Marketing</h4>
									<p>Full Time</p>
								</div>
								<div className="sofax-career-content-icon">
									<a href="single-career.html">
										<svg
											width="16"
											height="14"
											viewBox="0 0 16 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.42855 1.60733C3.48356 0.978554 4.03788 0.513422 4.66666 0.568433L14.3272 1.41362C14.956 1.46863 15.4211 2.02296 15.3661 2.65174L14.5209 12.3123C14.4659 12.9411 13.9116 13.4062 13.2828 13.3512C12.654 13.2962 12.1889 12.7419 12.2439 12.1131L12.8486 5.20113L2.70552 13.7122C2.22201 14.1179 1.50114 14.0549 1.09543 13.5713C0.68971 13.0878 0.752778 12.367 1.23629 11.9613L11.3794 3.45017L4.46745 2.84545C3.83867 2.79044 3.37354 2.23612 3.42855 1.60733Z"
												fill="white"
											/>
										</svg>
									</a>
								</div>
							</div>
							<div className="sofax-career-content-text">
								<p>
									Marketing often works closely with other departments such as product development
									sales & analytics implement.
								</p>
							</div>
							<div className="sofax-career-content-icon-text-wrapper2">
								<div className="sofax-career-content-icon-text-wrap">
									<div className="sofax-career-content-icon2">
										<svg
											width="18"
											height="21"
											viewBox="0 0 18 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.05991 2.86033C6.34032 -0.420076 11.6589 -0.420077 14.9393 2.86033C18.2197 6.14073 18.2197 11.4593 14.9393 14.7397L8.99961 20.6794L3.05991 14.7397C-0.220492 11.4593 -0.220492 6.14073 3.05991 2.86033ZM8.99961 11.2C10.3251 11.2 11.3996 10.1255 11.3996 8.80002C11.3996 7.47454 10.3251 6.40002 8.99961 6.40002C7.67413 6.40002 6.59961 7.47454 6.59961 8.80002C6.59961 10.1255 7.67413 11.2 8.99961 11.2Z"
												fill="#111827"
											/>
										</svg>
									</div>
									<div className="sofax-career-content-text2">
										<h6>London, UK</h6>
									</div>
								</div>
								<div className="sofax-career-content-icon-text-wrap">
									<div className="sofax-career-content-icon2">
										<svg
											width="20"
											height="16"
											viewBox="0 0 20 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.79844 0.800049C1.47295 0.800049 0.398438 1.87457 0.398438 3.20005V8.00005C0.398438 9.32553 1.47295 10.4 2.79844 10.4L2.79844 3.20005H14.7984C14.7984 1.87457 13.7239 0.800049 12.3984 0.800049H2.79844Z"
												fill="#111827"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.19844 8.00005C5.19844 6.67457 6.27295 5.60005 7.59844 5.60005H17.1984C18.5239 5.60005 19.5984 6.67457 19.5984 8.00005V12.8C19.5984 14.1255 18.5239 15.2 17.1984 15.2H7.59844C6.27295 15.2 5.19844 14.1255 5.19844 12.8V8.00005ZM12.3984 12.8C13.7239 12.8 14.7984 11.7255 14.7984 10.4C14.7984 9.07457 13.7239 8.00005 12.3984 8.00005C11.073 8.00005 9.99844 9.07457 9.99844 10.4C9.99844 11.7255 11.073 12.8 12.3984 12.8Z"
												fill="#111827"
											/>
										</svg>
									</div>
									<div className="sofax-career-content-text2">
										<h6>$30k-40K</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="collection-grid-item mix col-md-6  development security">
						<div className="sofax-career-content-wrapper ">
							<div className="sofax-career-content-autohre-wrap">
								<div className="sofax-career-content-data">
									<h4>Lead of Product Design</h4>
									<p>Remote</p>
								</div>
								<div className="sofax-career-content-icon">
									<a href="single-career.html">
										<svg
											width="16"
											height="14"
											viewBox="0 0 16 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.42855 1.60733C3.48356 0.978554 4.03788 0.513422 4.66666 0.568433L14.3272 1.41362C14.956 1.46863 15.4211 2.02296 15.3661 2.65174L14.5209 12.3123C14.4659 12.9411 13.9116 13.4062 13.2828 13.3512C12.654 13.2962 12.1889 12.7419 12.2439 12.1131L12.8486 5.20113L2.70552 13.7122C2.22201 14.1179 1.50114 14.0549 1.09543 13.5713C0.68971 13.0878 0.752778 12.367 1.23629 11.9613L11.3794 3.45017L4.46745 2.84545C3.83867 2.79044 3.37354 2.23612 3.42855 1.60733Z"
												fill="white"
											/>
										</svg>
									</a>
								</div>
							</div>
							<div className="sofax-career-content-text">
								<p>
									Encompasses a rang of task including web design fornt end development back end
									development & server management.
								</p>
							</div>
							<div className="sofax-career-content-icon-text-wrapper2">
								<div className="sofax-career-content-icon-text-wrap">
									<div className="sofax-career-content-icon2">
										<svg
											width="18"
											height="21"
											viewBox="0 0 18 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.05991 2.86033C6.34032 -0.420076 11.6589 -0.420077 14.9393 2.86033C18.2197 6.14073 18.2197 11.4593 14.9393 14.7397L8.99961 20.6794L3.05991 14.7397C-0.220492 11.4593 -0.220492 6.14073 3.05991 2.86033ZM8.99961 11.2C10.3251 11.2 11.3996 10.1255 11.3996 8.80002C11.3996 7.47454 10.3251 6.40002 8.99961 6.40002C7.67413 6.40002 6.59961 7.47454 6.59961 8.80002C6.59961 10.1255 7.67413 11.2 8.99961 11.2Z"
												fill="#111827"
											/>
										</svg>
									</div>
									<div className="sofax-career-content-text2">
										<h6>United State</h6>
									</div>
								</div>
								<div className="sofax-career-content-icon-text-wrap">
									<div className="sofax-career-content-icon2">
										<svg
											width="20"
											height="16"
											viewBox="0 0 20 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.79844 0.800049C1.47295 0.800049 0.398438 1.87457 0.398438 3.20005V8.00005C0.398438 9.32553 1.47295 10.4 2.79844 10.4L2.79844 3.20005H14.7984C14.7984 1.87457 13.7239 0.800049 12.3984 0.800049H2.79844Z"
												fill="#111827"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.19844 8.00005C5.19844 6.67457 6.27295 5.60005 7.59844 5.60005H17.1984C18.5239 5.60005 19.5984 6.67457 19.5984 8.00005V12.8C19.5984 14.1255 18.5239 15.2 17.1984 15.2H7.59844C6.27295 15.2 5.19844 14.1255 5.19844 12.8V8.00005ZM12.3984 12.8C13.7239 12.8 14.7984 11.7255 14.7984 10.4C14.7984 9.07457 13.7239 8.00005 12.3984 8.00005C11.073 8.00005 9.99844 9.07457 9.99844 10.4C9.99844 11.7255 11.073 12.8 12.3984 12.8Z"
												fill="#111827"
											/>
										</svg>
									</div>
									<div className="sofax-career-content-text2">
										<h6>$30k-40K</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Career;
