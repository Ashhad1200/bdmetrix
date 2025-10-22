"use client";
import Field from "@/components/common/Field";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

function JobApplyForm() {
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
		<div className="sofax-field-box ml-70">
			<ToastContainer position="bottom-right" />
			<h3>Apply for this position</h3>
			<form onSubmit={handleSubmit(submitForm)}>
				<div className="sofax-main-field">
					<Field label="Your Name" error={errors.name}>
						<input
							{...register("name", { required: "Name is required." })}
							type="name"
							name="name"
							id="name"
						/>
					</Field>
				</div>
				<div className="sofax-main-field">
					<Field label="Enter Email " error={errors.email}>
						<input
							{...register("email", { required: "Email is required." })}
							type="email"
							name="email"
							id="email"
						/>
					</Field>
				</div>
				<div className="sofax-main-field">
					<label>Your Comment</label>
					<textarea name="textarea" placeholder="Write Your Comment"></textarea>
				</div>
				<div className="sofax-form-box">
					<input type="checkbox" id="css" />
					<label htmlFor="css">I agree to the mthemeus privacy policy*</label>
				</div>
				<button className="sofax-subcribe-btn2 mt-30" type="submit">
					Submit Now
				</button>
			</form>
		</div>
	);
}

export default JobApplyForm;
