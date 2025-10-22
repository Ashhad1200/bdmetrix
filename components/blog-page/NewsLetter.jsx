"use client";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Field from "../common/Field";
function NewsLetter() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		toast("Subscription Completed!");
		reset();
		console.log("Submited Form Data = ", formData);
	};
	return (
		<div className="sofax-subscription-field-blog-inner-footer light-color">
			<ToastContainer position="bottom-right" containerId={"newsletter"} />
			<h4>Subscribe to our newsletter</h4>
			<div className="sofax-subscription-field-inner-button">
				<form onSubmit={handleSubmit(submitForm)}>
					<Field error={errors.email}>
						<input
							{...register("email", { required: "Email is required." })}
							type="email"
							name="email"
							id="email"
							placeholder="Enter your email address"
						/>
					</Field>
					<button type="submit" className="sofax-subcribe-btn2 subscription-btn-hover">
						Subscribe now
					</button>
				</form>
			</div>
		</div>
	);
}

export default NewsLetter;
