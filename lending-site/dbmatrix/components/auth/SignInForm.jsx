"use client";
import Icon from "@/public/images/contact/icon5.png";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Field from "../common/Field";
function SignInForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		reset();
		toast("Sign in completed!");
		console.log("Submited Form Data = ", formData);
	};

	return (
		<section className="sofax-section-padding2">
			<ToastContainer position="bottom-right" />
			<div className="container">
				<div className="sofax-form-field-box">
					<h2>Welcome back</h2>
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
							<div className="sofax-main-field sofax-subscription-field-inner">
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
										className="form-control"
									/>
								</Field>
							</div>
							<div className="sofax-form-box forgot-password">
								<input type="checkbox" id="css" />
								<label htmlFor="css">Remember me</label>
								<Link href="/">Forget password?</Link>
							</div>
							<button className="sofax-subcribe-btn2" type="submit">
								Create Account
							</button>
							<div className="login mt-24">
								<span>Don’t have an account?</span>
								<Link href="/sign-up">
									<h4>Sign up</h4>
								</Link>
							</div>
							<div className="login-with-google mt-24">
								<a target="_blank" href="https://www.google.com/">
									<Image src={Icon} alt="Icon" />
									<h5>Sign up with google</h5>
								</a>
							</div>
							<div className="form-bottom-text mt-24">
								<p>or, sign up with your email</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SignInForm;
