"use client";
import Field from "@/components/common/Field";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		toast("Form Submited!");
		reset();
		console.log("Submite Form Data = ", formData);
	};
	return (
		<div className="form-content-box">
			<ToastContainer position="bottom-right" />
			<h3>Send us a message</h3>
			<form onSubmit={handleSubmit(submitForm)}>
				<div className="form-field-item">
					<Field label="Your Name" error={errors.name}>
						<input
							{...register("name", { required: "Name is required." })}
							type="name"
							name="name"
							id="name"
							className="field-item"
						/>
					</Field>
				</div>
				<div className="form-field-item">
					<Field label="Enter Email " error={errors.email}>
						<input
							{...register("email", { required: "Email is required." })}
							type="email"
							name="email"
							id="email"
							className="field-item"
						/>
					</Field>
				</div>
				<textarea
					className="button-text mb-24"
					name="textarea"
					placeholder="Write your message here..."
				></textarea>

				<button type="submit" className="submit-btn">
					Submit Now
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
