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
		<section id="banner-section" className="mgacademy_banner">
			<div className="container position-relative">
				
				<div className="row">
					
					<div className={typeof props.equalWidth !== "undefined" && props.equalWidth ? "col-sm-12 col-md-12 col-lg-6 col-xl-6" : "col-sm-12 col-md-12 col-lg-6 col-xl-7"}>
						<div className="banner-image">
							<img src={props.bannerImg?.mediaItemUrl} className="img-fluid" alt={props.bannerImg?.altText} />
						</div>
					</div>
					<div className={typeof props.equalWidth !== "undefined" && props.equalWidth ? "col-sm-12 col-md-12 col-lg-6 col-xl-6" : "col-sm-12 col-md-12 col-lg-6 col-xl-5"}>
						<div className="banner-content innerpage-banner">
							<h1 className="banner-heading">{props.title}</h1>							
							{props.text !== "" && <div className="banner-desc d-none d-sm-none d-md-none d-lg-block" dangerouslySetInnerHTML={{ __html: props.text }}></div>}
							{props.btn !== false && props.sendUrl !== null && props.sendUrl !== "" ? <Link className="btn btn-primary d-none d-sm-none d-md-none d-lg-inline-block" to={props.sendUrl}>{props.btnTxt || "Learn more"}</Link> : ""}
							{props.downloadBtn === true ? <button className="btn btn-primary" onClick={() => { sendemail() }}>Download e-guide</button> : ""}
							{props.downloadBtn2 === true ? <a className="btn btn-primary" href="#get-in-touch">Download e-guide</a> : ""}

							<div className="col-12 d-block d-sm-block d-md-block d-lg-none">
						<div className="banner-desc" dangerouslySetInnerHTML={{ __html: props.text }}></div>

						{props.btn !== false && props.sendUrl !== null && props.sendUrl !== "" ? <Link className="btn btn-primary" to={props.sendUrl}>{props.btnTxt || "Learn more"}</Link> : ""}
					</div>
						</div>

					</div>
					


				</div>
			</div>
		</section>
	)
}
export default topBanner