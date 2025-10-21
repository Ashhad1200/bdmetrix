"use client";
import Field from "@/components/common/Field";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import FadeInUp from "../../../animation/FadeInUp";
function HeroContent() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		toast("Demo notification!");
		reset();
		console.log("Submite Form Data = ", formData);
	};
	return (
		<div className="sofax-hero-content hero-v8">
			<ToastContainer position="bottom-right" />
			<h1 className="slider-custom-anim-left" data-ani="slider-custom-anim-left" data-ani-delay="0.3s">
				Organized cloud and web hosting for your business
			</h1>
			<p>
				Single server dedicated to one business or website. Full control, high performance enhanced security.
				Expensive to a requires significant and technical expertise.
			</p>
			<FadeInUp className="sofax-subscription-fieldv6 extra-mt blog-details-subscribe-btn">
				<form onSubmit={handleSubmit(submitForm)}>
					<Field error={errors.email}>
						<input
							{...register("email", { required: "Email is required." })}
							type="email"
							name="email"
							id="email"
							placeholder="Enter Your Email"
						/>
					</Field>
					<button id="sofax-subscription-btn" type="submit">
						Start a 14 days free trail
					</button>
				</form>
			</FadeInUp>
		</div>
	);
}

export default HeroContent;
