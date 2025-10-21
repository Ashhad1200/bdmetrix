import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import FadeInUp from "../animation/FadeInUp";
import Field from "../common/Field";
function NotifyForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		console.log("Submited Form Data = ", formData);
		reset();
		toast("Thanks, for subscription!");
	};

	return (
		<FadeInUp>
			<ToastContainer position="bottom-right" />
			<div className="sofax-countdown-content sofax-section-title center max-width-large">
				<h2>Something great is coming soon!</h2>
			</div>
			<div className="sofax-subscription-field extra-mt blog-details-subscribe-btn">
				<form onSubmit={handleSubmit(submitForm)}>
					<Field error={errors.email}>
						<input
							{...register("email", { required: "Email is required." })}
							type="email"
							name="email"
							id="email"
							placeholder="Enter your email"
						/>
					</Field>
					<button id="sofax-subscription-btn" data-text="Start a 14 days free trail" type="submit">
						Get Notified
					</button>
				</form>
			</div>
			<div className="sofax-countdown-bottom-text">
				<p>We do not share your information with any third party & no spam</p>
			</div>
		</FadeInUp>
	);
}

export default NotifyForm;
