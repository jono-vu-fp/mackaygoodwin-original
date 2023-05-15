import * as React from "react"
import { Link } from "gatsby"

const FullText = (props) => (
  <section className={["fullTxtSection fullTxtSection2", props?.customClass].join(' ')}>
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 fullTxt" dangerouslySetInnerHTML={{__html: props.text}}></div>
        {props.subTxt !== "" && <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 fullSubTxt" dangerouslySetInnerHTML={{__html: props.subTxt}}></div>}
        <div className="pt-5">
        <Link className="bt-big" to={"https://outlook.office365.com/owa/calendar/MGAcademyonDemand@mackaygoodwin.com.au/bookings/"} target="_blank" role="button">Book Now</Link>
      </div>
      </div>
    </div>
  </section>
    
)

export default FullText
