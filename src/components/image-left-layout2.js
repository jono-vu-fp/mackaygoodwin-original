import * as React from "react"
import { Link } from "gatsby"

const ImageLeftLayout = (props) => {
  const [showModal, setModal] = React.useState(false);
  return (
  <div className={'vcfo_section '+props.addClass}>
    <div className="container">
      <div class="vcfo_left"><img src={props.img.mediaItemUrl} alt="" /></div>
      <div class="vcfo_right">
        <h4>{props.title}</h4>
        <div className="ill_txt" dangerouslySetInnerHTML={{__html: props.text }} />
        {props.btnLink !== null && props.btnLink !== "" ? <Link className="btn btn-primary me-5" to={props.btnLink}>{props.btnTxt}</Link> : ""}
            {typeof props.btnClick !== "undefined" && props.btnClick !== null && props.btnClick !== "" ? <button className="btn btn-primary me-5" onClick={props.btnClick}>{props.btnTxt}</button> : ""}
        <button type="button" onClick={()=>setModal(true)} data-toggle="modal" data-target="#myModal">{props.videolabel}</button>
      </div>
    </div>
    <div id="myModal" role="dialog" className={showModal?'in show modal fade':'modal fade'}>
      <div className="model_inner">
      <div className="popup_dialog">
      <div className="modal-content">
      <button type="button" className="close" data-dismiss="modal" onClick={()=>setModal(false)}>&times;</button>
      <div className="popup_body">
      <div className="video_ratio">
      <div dangerouslySetInnerHTML={{__html: props.video }} />
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
  </div>
)
}

export default ImageLeftLayout
