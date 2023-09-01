import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-5"
import Events from "../components/events/events2"
import GetInTouch from "../components/get-in-touch3"

const breadCrumbs = [
  { link: "/", title: "Home" },
  { title: "MG Academy" },
]

const MgAcademyPage = ({ data }) => {
  const [showModal, setModal] = React.useState(false);
  const [ytUrl, setYtUrl] = React.useState('');
  const [vdUrl, setVdUrl] = React.useState('');
    const [showModal2, setModal2] = React.useState(false);
  const setVideoUrl = (url,tp) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    if(tp){
      setVdUrl(url);
      setYtUrl('');
    }
    else{
      setVdUrl('');
      setYtUrl((match&&match[7].length==11)? match[7] : false);
    }
    setModal(true);
  }
  return (<div className="service insights">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.news.title}
        subtitle={''}
        text={data.wpPage.news.description}
        bannerImg={data.wpPage.news.image}
        btn={false}
        breadCrumbs={breadCrumbs}
      />
      {/*<Events
        title={''}
        data={data.allWpEvent.nodes}
        btn={false}
        setVideoUrl={setVideoUrl}
      />*/}

       <div class="container">
          <div className="buttons_section">
                <Link to={"#ondemand"}>On Demand </Link>
                <Link to={"#mediamoments"}>Media Moments</Link> <Link to={"#events"}>Events</Link> <Link  to={"#resources"}>Resources</Link> 
                <Link to={"#incubator-program"}>Incubator Program</Link>
          </div>
       </div>

       <section id="ondemand" class="wva_section about_section history_section identifix_sec2 event_incubator mg_acnew4 ond_sec">
       <div class="container">    
       <div  className="row">    
        <div className="wva_left">
              <img class="img-fluid" src={data.wpPage.news.ondemandImage.mediaItemUrl} alt="data.wpPage.news.ondemandImage.altText"/>          
          </div>
          <div className="wva_right">
           <h3>{data.wpPage.news.ondemandTitle}</h3>
              <div dangerouslySetInnerHTML={{__html: data.wpPage.news.ondemandDescription }} />
               <Link className="btn btn-primary" to={data.wpPage.news.ondemandLink}>Book Now</Link>
          </div> 
           </div>         
       </div>
    </section>

        

       <div id="mediamoments" className="wva_section fd_section dca_section mg_acnew1">
        <div className="container">
          <div  className="row">
              <div className="wva_left  col-sm-12 col-md-12 col-lg-6 col-xl-5">
                <img src={data.wpPage.news.mgacImage.mediaItemUrl} alt={data.wpPage.news.mgacImage.altText} />
              </div>
              <div className="wva_right  col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <h3>{data.wpPage.news.mgacTitle}</h3>
                <div dangerouslySetInnerHTML={{ __html: data.wpPage.news.mgacDescription }}></div>
              <Link className="btn btn-primary" to={data.wpPage.news.mgacLink}>Learn More</Link>
              </div>
          </div>
         </div>
      </div>

      <section id="events" class="wva_section about_section history_section identifix_sec2 event_incubator mg_acnew2">
       <div class="container">  
        <div  className="row">      
          <div className="wva_left">
               <img class="img-fluid" src={data.wpPage.news.mgacImage2.mediaItemUrl} alt="data.wpPage.news.mgacImage2.altText"/>            
            </div>
            <div className="wva_right">
              <h3>{data.wpPage.news.mgacTitle2}</h3>
              <div dangerouslySetInnerHTML={{__html: data.wpPage.news.mgacDescription2 }} />
               <Link className="btn btn-primary" to={data.wpPage.news.mgacLink2}>Learn More</Link>
            </div>  
          </div>        
       </div>
    </section>

    <div id="resources" className="wva_section fd_section dca_section mg_acnew1 mg_acnew3">
        <div className="container">
          <div  className="row">
              <div className="wva_left  col-sm-12 col-md-12 col-lg-6 col-xl-5">
                <img src={data.wpPage.news.mgacImage3.mediaItemUrl} alt={data.wpPage.news.mgacImage3.altText} />
              </div>
              <div className="wva_right  col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <h3>{data.wpPage.news.mgacTitle3}</h3>
                <div dangerouslySetInnerHTML={{ __html: data.wpPage.news.mgacDescription3 }}></div>
              <Link className="btn btn-primary" to={data.wpPage.news.mgacLink3}>Learn More</Link>
              </div>
          </div>
         </div>
      </div>



      <section id="incubator-program" class="wva_section about_section history_section identifix_sec2 event_incubator mg_acnew4">
       <div class="container">    
       <div  className="row">    
        <div className="wva_left">
             <img class="img-fluid" src={data.wpPage.news.incubatorProgramImage.mediaItemUrl} alt="data.wpPage.news.incubatorProgramImage.altText"/>            
          </div>
          <div className="wva_right">
            <h3>{data.wpPage.news.incubatorProgramTitle}</h3>
            <div dangerouslySetInnerHTML={{__html: data.wpPage.news.incubatorProgramDescription }} />
              <button class="event_button" type="button" onClick={()=>setModal2(true)} data-toggle="modal" data-target="#myModal2">Learn More</button>
          </div> 
           </div>         
       </div>
    </section>


     
    <div className="home">
      <GetInTouch
        title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
        text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
      />
      </div>
    </Layout>
    <div id="myModal2" role="dialog" className={showModal2?'in show modal fade':'modal fade'} onClick={()=>setModal2(false)}>
    <div class="model_inner">
     <div class="popup_dialog">
         <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" onClick={()=>setModal2(false)}>&times;</button>
         <div className="popup_body">
         <div className="form_pp">
                 <div id="wufoo-w1f3tm5u0u9na2v" class="incepro_popup"><iframe title="Embedded Wufoo Form" id="wufooFormw1f3tm5u0u9na2v" className="wufoo-form-container" height="1651" allowtransparency="true" frameborder="0" scrolling="no" src="https://australiandebtsolvers.wufoo.com/embed/w1f3tm5u0u9na2v/def/embedKey=w1f3tm5u0u9na2v868469&amp;entsource=wordpress&amp;referrer=http%3Awuslashwuslashlocalhostwuslashcitiportwuslashwp-adminwuslashpost.php%3Fpost%3D256%26action%3Dedit"><a href="https://australiandebtsolvers.wufoo.com/forms/w1f3tm5u0u9na2v/" title="html form">Fill out my Wufoo form!</a></iframe></div></div>
         </div>
         
       </div>

     </div></div>
   </div>
    <div id="myModal" role="dialog" className={showModal?'in show modal fade':'modal fade'}>
      <div className="model_inner">
        <div className="popup_dialog">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal" onClick={()=>setModal(false)}>&times;</button>
            <div className="popup_body">
              <div className="video_ratio">
              {vdUrl?<video key={vdUrl} width="100%" controls><source src={vdUrl} type="video/mp4" />Your browser does not support the video tag.</video>:<iframe key={ytUrl} className="embed-responsive-item" src={'https://www.youtube.com/embed/'+ytUrl+'?autoplay=1&amp;amp;modestbranding=1&amp;amp;showinfo=0'} id="video" allowscriptaccess="always"></iframe>}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export const query = graphql`
  {
    wpPage(title: {eq: "MG Academy"}) {
      news {
        image {
          altText
          mediaItemUrl
        }
        title
        description
        incubatorProgramTitle
        incubatorProgramImage{
          mediaItemUrl
          altText
        }
        mgacTitle
        mgacDescription
        mgacLink
        mgacImage{
          mediaItemUrl
          altText
        }
        mgacTitle2
        mgacDescription2
        mgacLink2
        mgacImage2{
          mediaItemUrl
          altText
        }
        ondemandLink
        ondemandTitle
        ondemandDescription
        ondemandImage {
          altText
          mediaItemUrl
        }
         mgacTitle3
        mgacDescription3
        mgacLink3
        mgacImage3{
          mediaItemUrl
          altText
        }
        incubatorProgramDescription
        incubatorProgramFormCode
      }
      metaFields {
        metaDescription
        metaTitle
      }
    }
    allWp {
      nodes {
        themeGeneralSettings {
          themeGeneralSettings {
            copyrightText
            expertAdviceLink
            expertAdviceTitle
            fieldGroupName
            getInTouchDescription
            getInTouchTitle
            speakExpertLink
            speakExpertTitle
          }
        }
      }
    }
    allWpEvent(sort: {order: DESC, fields: date}) {
      nodes {
        title
        excerpt
        content
        slug
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
        
        eventsOption {
        shortDescription
          eventDate
          buttonLabel
          registerUrl
          eventStatus
          video{
            mediaItemUrl
          }
        	recordingUrl {
            url
          }
        }
      }
    }
  }
`

export default MgAcademyPage
