import * as React from "react"
import { Link } from "gatsby"

const Slide = (props) => (
	<div className="card mb-2 mr-2" key={props.keyloc}>
		<img className="card-img-top" src={props.data.image11?.localFile?.childImageSharp?.resize?.src}
				alt={props.data.image11?.altText} />
		<div className="card-body" style={{backgroundColor: props.slideColor}}>
			<h3 className="card-title">{props.data.name11 || props.data.title}</h3>
			{props.data.designation?<h4 className="card-subtitle">{props.data.designation11}</h4>:''}
			 
			<div className="card-text" dangerouslySetInnerHTML={{__html: props.data.comment11}}></div>
			{props.data?.url11?<Link className="btn btn-primary" to={"/insights/" + props.data.url11+"/"}>Learn More</Link>:props.data.url11 !== null && props.data.url11 !== ""?<Link className="btn btn-primary" to={"/insights/" + props.data.url11+"/"}>Learn More</Link>:""}
		</div>
	</div>
)

export default Slide