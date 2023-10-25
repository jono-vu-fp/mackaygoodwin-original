import * as React from "react"
import { Link } from "gatsby"
import GetInTouchForm from "./get-in-touch-form4";

import ActiveCampaignRefferal from "../components/activecampaign-referral"

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

		<section id="banner-section">
			<div className="container position-relative">
				{typeof props.breadCrumbs !== "undefined" ? <nav aria-label="breadcrumb" className="breadcrumbs">
					<ol className="breadcrumb">
						{props.breadCrumbs.map((bc, key) => (bc.link ? <li className="breadcrumb-item" key={key}><Link to={bc.link}>{bc.title}</Link></li> : <li className="breadcrumb-item active" aria-current="page" key={key}>{bc.title}</li>))}
					</ol>
				</nav> : ""}
				<div className="row">

					 
 
					<div className={typeof props.equalWidth !== "undefined" && props.equalWidth ? "col-sm-12 col-md-12 col-lg-6 col-xl-6" : "col-sm-12 col-md-12 col-lg-6 col-xl-6"}>

					<div className="banner-content innerpage-banner">
							{/*<h1 className="banner-heading">{props.title}</h1>
							<h2 className="banner-subheading">{props.subtitle}</h2>*/}
						
						<h1 className="banner-heading" dangerouslySetInnerHTML={{ __html: props.title }}/>
					  
					<h2 className="banner-subheading" dangerouslySetInnerHTML={{ __html: props.subtitle }}/>
					{props.bannerContent?
					<div className="banner-content1" dangerouslySetInnerHTML={{ __html: props.bannerContent }}/>:''}
						 
					
							 <GetInTouchForm />

							 
						</div>

						
					</div>
					<div className={typeof props.equalWidth !== "undefined" && props.equalWidth ? "col-sm-12 col-md-12 col-lg-6 col-xl-6" : "col-sm-12 col-md-12 col-lg-6 col-xl-6"}>
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