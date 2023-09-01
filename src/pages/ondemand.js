import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-5"  
import FullText from "../components/full-text2"

const Ondemand = ({ data }) => {
  let whyMG = [];
  data.wpPage.ondemandPageOptions.qS?.map((d) => {
    return whyMG.push({ title: d.question2, description: d.answer2 });
  })
  const breadCrumbs = [
    { link: "/", title: "Home" },
    { link: "#", title: "Services" },
    { title: "OnDemand" },
  ]
  // const formDetailContext = React.createContext(null);
  const [fromDetails, setFormDetails] = React.useState(0);
  const [fromDetails2, setFormDetails2] = React.useState(0);
  const value = { fromDetails, setFormDetails };
  const value2 = { fromDetails2, setFormDetails2 };
  return (<div className="service insights ond_banner ondpage">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.ondemandPageOptions.bannerTitle}
        subtitle={data.wpPage.ondemandPageOptions.bannerSubtitle}
        text={data.wpPage.ondemandPageOptions.bannerDesc}
        bannerImg={data.wpPage.ondemandPageOptions.bannerImage}
        sendUrl={data.wpPage.ondemandPageOptions.sendUrl}
        breadCrumbs={breadCrumbs}
      />
       
      
     <section className="wva_section fd_section mg_acnew1 ondpage_se1">
       <div class="container">    
       <div  className="row">    
         <div className="wva_left  col-sm-12 col-md-12 col-lg-6 col-xl-5">
              <img class="img-fluid" src={data.wpPage.ondemandPageOptions.brImage.mediaItemUrl} alt="data.wpPage.ondemandPageOptions.brImage.altText"/>          
          </div>
          <div className="wva_right  col-sm-12 col-md-12 col-lg-6 col-xl-6">
           <h3>{data.wpPage.ondemandPageOptions.brTitle}</h3>
              <div dangerouslySetInnerHTML={{__html: data.wpPage.ondemandPageOptions.brDescription }} />
               <Link className="btn btn-primary" to={data.wpPage.ondemandPageOptions.brLink}>Book Now</Link>
          </div> 
           </div>         
       </div> 

       </section> 

        <section class="wva_section about_section history_section identifix_sec2 event_incubator mg_acnew2 ondpage_se2">
       <div class="container">  
        <div  className="row">      
          <div className="wva_left">
               <img class="img-fluid" src={data.wpPage.ondemandPageOptions.inImage.mediaItemUrl} alt="data.wpPage.ondemandPageOptions.inImage.altText"/>             
            </div>
            <div className="wva_right">
              <h3>{data.wpPage.ondemandPageOptions.inTitle}</h3>
              <div dangerouslySetInnerHTML={{__html: data.wpPage.ondemandPageOptions.inDescription }} />
               <Link className="btn btn-primary" to={data.wpPage.ondemandPageOptions.inLink}>Book Now</Link>
            </div>  
          </div>        
       </div>
    </section>

    <section className="wva_section fd_section mg_acnew1 ondpage_se1">
        <div className="container">
          <div  className="row">
              <div className="wva_left  col-sm-12 col-md-12 col-lg-6 col-xl-5">
                <img class="img-fluid" src={data.wpPage.ondemandPageOptions.insImage.mediaItemUrl} alt="data.wpPage.ondemandPageOptions.insImage.altText"/>      
              </div>
              <div className="wva_right  col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <h3>{data.wpPage.ondemandPageOptions.insTitle}</h3>
              <div dangerouslySetInnerHTML={{__html: data.wpPage.ondemandPageOptions.insDescription }} />
               <Link className="btn btn-primary" to={data.wpPage.ondemandPageOptions.insLink}>Book Now</Link>
           </div>
          </div>
         </div>
      </section>

       <section class="wva_section about_section history_section identifix_sec2 event_incubator mg_acnew2">
       <div class="container">  
        <div  className="row">      
          <div className="wva_left">
               <img class="img-fluid" src={data.wpPage.ondemandPageOptions.ecImage.mediaItemUrl} alt="data.wpPage.ondemandPageOptions.ecImage.altText"/>             
            </div>
            <div className="wva_right">
              <h3>{data.wpPage.ondemandPageOptions.ecTitle}</h3>
              <div dangerouslySetInnerHTML={{__html: data.wpPage.ondemandPageOptions.ecDescription }} />
               <Link className="btn btn-primary" to={data.wpPage.ondemandPageOptions.ecLink}>Book Now</Link>
            </div>  
          </div>        
       </div>
    </section>

      {/*<div class="ca_main ca_main2">
      {data.wpPage.ondemandPageOptions.qS?.map((d,key) => {
          return <div className="ca_sec"><div className="container"><h2>{d.question2}</h2><div className="ca_txt" dangerouslySetInnerHTML={{ __html: d.answer2 }}></div><Link className="btn btn-primary" to={"https://outlook.office365.com/owa/calendar/MGAcademyonDemand@mackaygoodwin.com.au/bookings/"} target="_blank">Book Now</Link></div></div>
      })}
      </div>*/}


      
      

    

      
    
    </Layout>
  </div>)
}

export const query = graphql`
  {
    wpPage(title: {eq: "OnDemand"}) {
      ondemandPageOptions {

        bannerDesc
        bannerImage {
          altText
          mediaItemUrl
        }

        brLink
        brTitle
        brDescription
        brImage {
          altText
          mediaItemUrl
        }

        inLink
        inTitle
        inDescription
        inImage {
          altText
          mediaItemUrl
        }

        insLink
        insTitle
        insDescription
        insImage {
          altText
          mediaItemUrl
        }

        ecLink
        ecTitle
        ecDescription
        ecImage {
          altText
          mediaItemUrl
        }
        
        bannerSubtitle
        bannerTitle
        fieldGroupName
       
        sendUrl 
      
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
            gitImage{
              mediaItemUrl
              altText
            }
            speakExpertLink
            speakExpertTitle
          }
        }
      }
    }
  }
`

export default Ondemand
