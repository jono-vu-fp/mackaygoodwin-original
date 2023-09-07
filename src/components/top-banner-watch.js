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
		<section id="banner-section" className="liq_banner coming_banner">
			<div className="container position-relative">
				<div className="row">
					<div className={typeof props.equalWidth !== "undefined" && props.equalWidth ? "col-sm-12 col-md-12 col-lg-6 col-xl-6" : "col-sm-12 col-md-12 col-lg-6 col-xl-5"}>
						<div className="banner-content innerpage-banner">
							<h1 className="banner-heading">Watch on Demand</h1>
							 {/*<Link className="btn btn-primary" to="https://mackaygoodwin.com.au/insights/your-window-into-the-ato/">Want to watch in person? Secure your sea</Link>*/}
							 
						</div>
					</div>
					<div className={typeof props.equalWidth !== "undefined" && props.equalWidth ? "col-sm-12 col-md-12 col-lg-6 col-xl-6" : "col-sm-12 col-md-12 col-lg-6 col-xl-5"}>
						<div className="banner-image">
							<img src={props.bannerImg?.localFile?.childImageSharp?.resize?.src} className="img-fluid" alt={props.bannerImg?.altText} />
						</div>
					</div>
					
				</div>
			</div>
		</section>
	)
}
export default topBanner