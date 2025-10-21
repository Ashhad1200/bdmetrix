"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Field from "../common/Field";
function ResetForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		reset();
		toast("Reset password completed!");
		console.log("Submited Form Data = ", formData);
	};
	return (
		<section className="sofax-section-padding2">
			<ToastContainer position="bottom-right" />
			<div className="container">
				<div className="sofax-form-field-box">
					<h2>Reset password</h2>
					<div className="sofax-field-box">
						<form onSubmit={handleSubmit(submitForm)}>
							<div className="sofax-main-field">
								<Field label="Email address" error={errors.email}>
									<input
										{...register("email", { required: "Email is required." })}
										type="email"
										name="email"
										id="email"
										placeholder="example@gmail.com"
									/>
								</Field>
							</div>
							<div className="sofax-main-field  sofax-subscription-field-inner">
								<Field label="Enter Password" error={errors.password}>
									<input
										{...register("password", {
											required: "Password is required.",
											minLength: {
												value: 8,
												message: "Your password must be at least 8 characters.",
											},
										})}
										type="password"
										name="password"
										id="password"
										placeholder="Enter password"
									/>
								</Field>
							</div>
							<button className="sofax-subcribe-btn2" type="submit">
								Send Reset Link
							</button>
							<div className="login reset-pswrd">
								<span>Remember password?</span>
								<Link href="/sign-in">
									<h4>Sign In Now</h4>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ResetForm;
