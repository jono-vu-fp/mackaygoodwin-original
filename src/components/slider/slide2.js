import * as React from "react"
import { Link } from "gatsby"

const Slide = (props) => (
	<div className="card mb-2 mr-2" key={props.keyloc}>
		<img className="card-img-top" src={props.data.image?.localFile?.childImageSharp?.resize?.src}
				alt={props.data.image?.altText} />
		<div className="card-body" style={{backgroundColor: props.slideColor}}>
			<h3 className="card-title">{props.data.name || props.data.title}</h3>
			{props.data.designation?<h4 className="card-subtitle">{props.data.designation}</h4>:''}
			 
			<div className="card-text" dangerouslySetInnerHTML={{__html: props.data.comment}}></div>
			{props.data?.learnMoreUrl?<Link className="btn btn-primary" to={"/insights/" + props.data.learnMoreUrl+"/"}>Learn More</Link>:props.data.url !== null && props.data.url !== ""?<Link className="btn btn-primary" to={"/insights/" + props.data.url+"/"}>Learn More</Link>:""}
		</div>
	</div>
)

export default Slide