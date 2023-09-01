import * as React from "react"
import { Link } from "gatsby"

const Slide = (props) => (
	<div className="card mb-2 mr-2" key={props.keyloc}>
		<img className="card-img-top" src={props.data.smImage?.localFile?.childImageSharp?.resize?.src}
				alt={props.data.smImage?.altText} />
		<div className="card-body" style={{backgroundColor: props.slideColor}}>
			<h3 className="card-title">{props.data.smName || props.data.title}</h3>
			{props.data.smDesignation?<h4 className="card-subtitle">{props.data.smDesignation}</h4>:''}
			 
			<div className="card-text" dangerouslySetInnerHTML={{__html: props.data.smComment}}></div>
			{props.data.smLearnMoreUrl !== null && props.data.smLearnMoreUrl !== ""?<Link className="btn btn-primary" to={"/insights/" + props.data.smLearnMoreUrl+"/"}>Learn More</Link>:""}
		</div>
	</div>
)

export default Slide