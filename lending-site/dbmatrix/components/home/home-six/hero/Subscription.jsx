"use client";
import Field from "@/components/common/Field";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

function Subscription() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		toast("Please! Check Email.");
		reset();
		console.log("Submite Form Data = ", formData);
	};
	return (
		<div className="sofax-subscription-fieldv6 extra-mt blog-details-subscribe-btn wow fadeInUpX">
			<ToastContainer position="bottom-right" containerId={"heroToast"} />
			<form onSubmit={handleSubmit(submitForm)}>
				<Field error={errors.email}>
					<input
						{...register("email", { required: "Email is required." })}
						type="email"
						name="email"
						id="email"
					/>
				</Field>
				<button id="sofax-subscription-btn" type="submit">
					Start a 14 days free trail
				</button>
			</form>
			<p>Full access, no credit card required.</p>
		</div>
	);
}

export default Subscription;
