import * as React from "react"
import { Link } from "gatsby"
import dateFormat, { masks } from "dateformat";

const EventsList = (props) => {
  const dateFormatChange = (d) => {
    const t = d.split(" ");
    const t1 = t[0].split("/").reverse().join("/")
    return t1+" "+t[1];
  }
  const checkVideo = () =>{
    if(props.data.title=='Your window into the ATO' || props.data.title=='Insights into the ATO'){
      if ('hbspt' in window) {
          window.hbspt.forms.create({
          region: "na1",
          portalId: "40112486",
          formId: "29ea506b-20aa-4f51-8998-937429b204a9",
          target: "#formContainer"
        });
      }
      props.setShowVid(false);
    }
    else{
      props.setShowVid(true);
    }
    props.setVideoUrl(props.data.eventsOption?.recordingUrl?.url?props.data.eventsOption?.recordingUrl?.url:props.data.eventsOption.video?.mediaItemUrl,props.data.eventsOption?.recordingUrl?.url?0:1);
  }

  React.useEffect(() => {
    //hubspot
    let scriptEle = document.createElement("script");
    scriptEle.setAttribute("src", '//js.hsforms.net/forms/embed/v2.js');
    scriptEle.setAttribute("type", "text/javascript");
    document.body.appendChild(scriptEle);
    scriptEle.addEventListener("load", () => {
      console.log("File loaded")
    });
    window.addEventListener('message', event => {
      console.log(event.data)
       if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
           console.log("Form Submitted! Event data: ${event.data}");
           props.setShowVid(true);
       }
    });


    return () => {
    }
   }, [])
  
  return(

  <div className="top-bor py-5">
    <div className="col-lg-12 my-3">
      <div className="row">
        <div className="col-lg-3 my-3">
          <img className="img-fluid" style={{ objectFit: "cover" }} src={props.data?.featuredImage?.node?.localFile?.childImageSharp?.resize?.src} alt={props.data?.featuredImage?.node?.altText} />
        </div>
        <div className="col-lg-8 my-3">
          <h4 className="px-4 mb-4">{props.data.title} </h4>
          <span className="px-4">{dateFormat(dateFormatChange(props.data.eventsOption?.eventDate), 'mmmm dS, yyyy, h:MM TT')}</span>
          {props.data.eventsOption?.shortDescription !=null?<div className="py-4 px-4" dangerouslySetInnerHTML={{ __html: props.data.eventsOption?.shortDescription }}></div>:<div className="py-4 px-4" dangerouslySetInnerHTML={{ __html: props.data.excerpt }}></div>}
          {/* <p className="pt-4 px-4">{props.data.excerpt}</p> */}
          {props.data.eventsOption?.eventStatus != 'enablevideoaccess' ?
            props.data.eventsOption?.registerUrl ? <a className="bt-big px-4 mx-4" href={props.data.eventsOption?.registerUrl}>{props.data.eventsOption?.buttonLabel} <i className="fa fa-chevron-right" aria-hidden="true"></i></a> : null
            :
            <a className="bt-big px-4 mx-4" href="javascript:void(0)" onClick={()=>checkVideo()}>{props.data.eventsOption?.buttonLabel} <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
            // <Link className="bt-big px-4 mx-4" to={props.data.eventsOption?.recordingUrl?.url}>{props.data.eventsOption?.buttonLabel} <i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
          }
          <Link className="ps-4 pe-4 px-4" to={"/insights/" + props.data.slug + "/"}>Read More <i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
        </div>
      </div>
    </div>
  </div>
  )
}
export default EventsList
