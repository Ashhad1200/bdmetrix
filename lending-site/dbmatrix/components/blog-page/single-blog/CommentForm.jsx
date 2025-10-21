"use client";
import Field from "@/components/common/Field";
import { useForm } from "react-hook-form";
import FadeInUp from "../../animation/FadeInUp";

function CommentForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		console.log("Submite Form Data = ", formData);
	};
	return (
		<div className="sofax-field-box">
			<h3>Leave a comments:</h3>
			<form onSubmit={handleSubmit(submitForm)}>
				<div className="row">
					<div className="col-lg-6">
						<div className="sofax-main-field blog-details-subscribe-btn">
							<Field error={errors.name}>
								<input
									{...register("name", { required: "Name is required." })}
									type="text"
									name="name"
									id="name"
									placeholder="Your Name"
								/>
							</Field>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="sofax-main-field blog-details-subscribe-btn">
							<Field error={errors.email}>
								<input
									{...register("email", { required: "Email is required." })}
									type="email"
									name="email"
									id="email"
									placeholder="Email Address*"
								/>
							</Field>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="sofax-main-field">
							<label>Your Comment</label>
							<textarea name="textarea" placeholder="Write us your comment"></textarea>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="sofax-form-box">
							<input type="checkbox" id="css" />
							<label htmlFor="css">
								Save my name, email, & website in this browser for the next time I comment.
							</label>
						</div>
					</div>
					<div className="col-lg-12">
						<FadeInUp>
							<button id="sofax-submit-btn" className="mt-30" type="button">
								Post Comment
							</button>
						</FadeInUp>
					</div>
				</div>
			</form>
		</div>
	);
}

export default CommentForm;
