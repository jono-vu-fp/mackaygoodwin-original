import * as React from "react"
import { Link } from "gatsby"
import $ from "jquery"
const showContactForm = () => {
    $('#br_popup').addClass('show');
}
const Slide = (props) => (

	<div className="card mb-2 mr-2" key={props.keyloc}>
		<img className="card-img-top" src={props.data.image?.localFile?.childImageSharp?.resize?.src}
				alt={props.data.image?.altText} />
		<div className="card-body" style={{backgroundColor: props.slideColor}}>
			<h3 className="card-title">{props.data.name || props.data.title}</h3>
			{props.data.designation?<h4 className="card-subtitle">{props.data.designation}</h4>:''}
			 
			<div className="card-text" dangerouslySetInnerHTML={{__html: props.data.comment}}></div>
			<button className="btn btn-primary" onClick={()=>showContactForm()}>
                Learn More
              </button>

			 
		</div>
	</div>
)

export default Slide