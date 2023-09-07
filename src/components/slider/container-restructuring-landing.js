import * as React from "react"
import Slider from "react-slick";
import Slide from "./slide";
const settings = {
	arrows: false,
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	dots: true,
	responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
};

const Container = (props) => (
	<section id="testimonials" class="bib_section">
		<div className="container">
			<div className="row">
				<div className="col">
					<h2>We've helped businesses just like yours.</h2>
					{typeof props.subtitle !== "undefined" && props.subtitle !== "" ? <p className="subtitle">{props.subtitle}</p> : ""}
				</div>
			</div>
			<div className="row">
				<Slider {...settings} className="testimonial-slider" key={Math.random()}>
					 {/*{props.data.map((d, key) => {
					 	return <Slide
					 		data={d}
					 		keyloc={key}
					 		slideColor={props.slideColor}
					 	/>
					  })}*/}

				<div class="card mb-2 mr-2">
					<img class="card-img-top" src="https://cms.mackaygoodwin.com.au/wp-content/uploads/2021/07/GettyImages-617766704-scaled.jpg" alt=""/>
					<div class="card-body">
						<h3 class="card-title">Security Company Case Study</h3>
						<p class="card-text">An 85% reduction in debt gets company through a major trading and cash flow problem. An electronic security company in Brisbane with clients ranging from small boutiques to international mega-corporations within Australia was experiencing difficulty with their cash flow, so Mackay Goodwin stepped in to help.</p>
					 
					</div>
				 </div>
				 <div class="card mb-2 mr-2">
					<img class="card-img-top" src="https://cms.mackaygoodwin.com.au/wp-content/uploads/2021/07/GettyImages-617766704-scaled.jpg" alt=""/>
					<div class="card-body">
						<h3 class="card-title">Security Company Case Study</h3>
						<p class="card-text">An 85% reduction in debt gets company through a major trading and cash flow problem. An electronic security company in Brisbane with clients ranging from small boutiques to international mega-corporations within Australia was experiencing difficulty with their cash flow, so Mackay Goodwin stepped in to help.</p>
					 
					</div>
				 </div>
				 <div class="card mb-2 mr-2">
					<img class="card-img-top" src="https://cms.mackaygoodwin.com.au/wp-content/uploads/2021/07/GettyImages-617766704-scaled.jpg" alt=""/>
					<div class="card-body">
						<h3 class="card-title">Security Company Case Study</h3>
						<p class="card-text">An 85% reduction in debt gets company through a major trading and cash flow problem. An electronic security company in Brisbane with clients ranging from small boutiques to international mega-corporations within Australia was experiencing difficulty with their cash flow, so Mackay Goodwin stepped in to help.</p>
					 
					</div>
				 </div>

				</Slider>
			</div>
		</div>
	</section>
)

export default Container