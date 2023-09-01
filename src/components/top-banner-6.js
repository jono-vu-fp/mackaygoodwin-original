import * as React from "react"
import { Link } from "gatsby"


const topBanner = (props) => {
	const sendemail = () => {
		//creating an invisible element
		var element = document.createElement('a');
		element.setAttribute('href', "/ebook.pdf");
		element.setAttribute('download', "ebook");

		// Above code is equivalent to
		// <a href="path of file" download="file name">

		document.body.appendChild(element);

		//onClick property
		element.click();

		document.body.removeChild(element);
	}
	return (
		<section id="banner-section" className="liq_banner">
			<div className="container position-relative">
				<div className="row">
				<div className={typeof props.equalWidth !== "undefined" && props.equalWidth ? "col-sm-12 col-md-12 col-lg-7 col-xl-7" : "col-sm-12 col-md-12 col-lg-4 col-xl-3"}>
						<div className="banner-image">
							<img src={props.bannerImg?.mediaItemUrl} className="img-fluid" alt={props.bannerImg?.altText} />
						</div>
					</div>

					<div className={typeof props.equalWidth !== "undefined" && props.equalWidth ? "col-sm-12 col-md-12 col-lg-5 col-xl-6" : "col-sm-12 col-md-12 col-lg-6 col-xl-7"}>
						<div className="banner-content innerpage-banner">
							<h1 className="banner-heading">{props.title}</h1>
							<h2 className="banner-subheading">{props.subtitle}</h2>
							<div class="banner-desc d-none d-sm-none d-md-none d-lg-block">{props.text}</div>
							 <div>
                  <a href={"mailto:" + props.email} className="pb-2 px-4 d-inline-block"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                  <a href={"tel:" + props.phone} className="pb-2 px-right d-inline-block"><i className="fa fa-phone" aria-hidden="true"></i></a>
                  <a href={props.linkedin} className="pb-2 d-inline-block"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                </div>
						</div>
					</div>
					
					
				</div>
			</div>
		</section>
	)
}
export default topBanner