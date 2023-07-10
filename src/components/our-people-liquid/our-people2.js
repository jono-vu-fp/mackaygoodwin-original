import * as React from "react"
import PeopleList from "./list2"

const OurPeople = (props) => (
  <section className="asdasd news-articles" id="people">
    <div className="container">
      <div className="row">
        { props.title != "" ? <h2 className="my-3">{props.title}</h2> : ""}
        <div className="col-md-9 col-sm-12 fullTxt">
          {props.text}
        </div>
      </div>
    </div>
    <PeopleList data={props.data} />
  </section> 
)

export default OurPeople
