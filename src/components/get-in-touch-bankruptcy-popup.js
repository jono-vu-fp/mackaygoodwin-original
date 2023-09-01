import * as React from "react"
import GetInTouchForm from "./get-in-touch-form-backruptcy-popup";
import $ from "jquery"

const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const GetInTouch = (props) => {
  React.useEffect(() => {
    
    if(localStorage.getItem('pp_show') != 'yes'){
      const myTimeout = setTimeout(myGreeting, 2500);
    }
    function myGreeting() {
      document.getElementById('br_popup').classList.add('show');
      localStorage.setItem('pp_show', 'yes');
    }

    return () => {

    };
  });
  return (
  <div className="br_popup" id="br_popup">
    <div className="brpp_outer"></div>
    <div className="brp_inner">
      <div className="brpp_close" onClick={() => {document.getElementById('br_popup').classList.remove('show')}}>x</div>
      <div className="brp_right">
        <img src={props.image?.mediaItemUrl} alt={props.image?.altText} />
      </div>
      <div className="brp_left">
        <h2>{props.title}</h2>
        <div className="brp_desc" dangerouslySetInnerHTML={{__html:props.text}}></div>
        <GetInTouchForm />
      </div>
    </div>
  </div>
  )
}
export default GetInTouch
