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
  return (<div className="service insights ond_banner">
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
      <FullText
        text={data.wpPage.ondemandPageOptions.pageTagline}
      />
      
      <div class="ca_main ca_main2">
      {data.wpPage.ondemandPageOptions.qS?.map((d,key) => {
          return <div className="ca_sec"><div className="container"><h2>{d.question2}</h2><div className="ca_txt" dangerouslySetInnerHTML={{ __html: d.answer2 }}></div><Link className="btn btn-primary" to={"https://outlook.office365.com/owa/calendar/MGAcademyonDemand@mackaygoodwin.com.au/bookings/"} target="_blank">Book Now</Link></div></div>
      })}
      </div>


      
      

    

      
    
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
        
        bannerSubtitle
        bannerTitle
        fieldGroupName
        pageTagline
        qS {
          answer2
          question2
        }
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
