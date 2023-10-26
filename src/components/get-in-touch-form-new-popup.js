import * as React from "react"
import GetInTouchForm from "./get-in-touch-form-backruptcy-popup";
import $ from "jquery"

const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const GetInTouchGlobalForm = (props) => {
  return (
  <div className="br_popup" id="brhead_popup">
    <div className="brpp_outer"></div>
    <div className="brp_inner">
      <div className="brpp_close" onClick={() => {document.getElementById('brhead_popup').classList.remove('show')}}>x</div>
      
      <div className="brp_left">
        <h2>Get in touch</h2>
        <div className="brp_desc">
          Speak to one of our experts now for a free consultation. 
Enter your details below or call 1300 750 599.
        </div>
        <GetInTouchForm />
      </div>
    </div>
  </div>
  )
}
export default GetInTouchGlobalForm
