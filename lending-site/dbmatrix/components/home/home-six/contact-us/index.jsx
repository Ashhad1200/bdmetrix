import Location from "@/public/images/v4/location-marker.png";
import Mail from "@/public/images/v4/mail.png";
import Phone from "@/public/images/v4/phone.png";
import Shape13 from "@/public/images/v4/shape13.png";
import Shape14 from "@/public/images/v4/shape14.png";
import Image from "next/image";
import ContactForm from "./ContactForm";

function ContactUs() {
	return (
		<section className="section sofax-section-padding dark-bg position-ralatiove">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="form-content-wrap">
							<div className="sofax-default-content light-color">
								<div className="tg-heading-subheading animation-style3">
									<h2>Contact us now for marketing your brand</h2>
								</div>
								<p>
									Increase brand awareness, drive traffic and generate leads or sales through
									strategic use of social media channels. If you have any questions, please do not
									hesitate to contact us directly.
								</p>
							</div>
							<div className="extra-mt">
								<div className="sofax-iconbox-wrap2 light-color">
									<div className="sofax-iconbox-icon2">
										<Image src={Mail} alt="Mail" />
									</div>
									<div className="sofax-iconbox-data2">
										<h5 className="mb-10">Send us an email</h5>
										<a href="mailto:name@email.com">example@gmail.com</a>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2 light-color">
									<div className="sofax-iconbox-icon2">
										<Image src={Location} alt="Location" />
									</div>
									<div className="sofax-iconbox-data2">
										<h5 className="mb-10">Our location</h5>
										<p>Eighth Avenum, New York</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2 light-color">
									<div className="sofax-iconbox-icon2">
										<Image src={Phone} alt="Phone" />
									</div>
									<div className="sofax-iconbox-data2">
										<h5 className="mb-10">Give us a call</h5>
										<a href="tel:123">(123) 456-7890</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<ContactForm />
					</div>
				</div>
				<div className="sofax-form-shape">
					<Image src={Shape13} alt="shape" />
				</div>
				<div className="sofax-form-shape">
					<Image src={Shape14} alt="Shape" />
				</div>
			</div>
		</section>
	);
}

export default ContactUs;
