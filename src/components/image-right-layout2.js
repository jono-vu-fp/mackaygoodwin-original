import * as React from "react"
import { Link } from "gatsby"

const CurveLeft = (props) => (

  <div className={'vcfo_section '+props.addClass}>
    <div className="container">
      <div class="vcfo_left"><img src={props.img.localFile?.childImageSharp?.resize?.src} alt={props.img.altText} /></div>
      <div class="vcfo_right">
        <h3>{props.title}</h3>
        <div className="ill_txt" dangerouslySetInnerHTML={{__html: props.text }} />
        {props.btnLink !== null && props.btnLink !== "" ? <Link className="btn btn-primary me-5" to={props.btnLink}>{props.btnTxt}</Link> : ""}
            {typeof props.btnClick !== "undefined" && props.btnClick !== null && props.btnClick !== "" ? <button className="btn btn-primary me-5" onClick={props.btnClick}>{props.btnTxt}</button> : ""}
        
      </div>
    </div>
  </div>
)

export default CurveLeft
