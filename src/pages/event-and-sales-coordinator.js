import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-4"

import FullText from "../components/full-text"
import ReciveryPlan from "../components/recovery-plan"
import News from "../components/news/list"
import GetInTouchPPForm from "../components/get-in-touch-bankruptcy-popup"
import GetInTouch3 from "../components/get-in-touch3"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import $ from "jquery" 

const SingleCareers = ({ data }) => { 
  return (<div className="service consult-business liquidation voluntary_administration bankruptcy doc_1 safe_harbour media_moment careers single_career inoven">
    <Layout> 
      <Seo title={data.wpPage?.metaFields?.metaTitle} description={data.wpPage?.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage?.eventCareer?.singcare3BannerTitleev}
        subtitle={''}
        text={data.wpPage?.eventCareer?.singcare3BannerDescev}
        bannerImg={data.wpPage?.eventCareer?.singcare3BannerImageev}
        equalWidth={true}
      />


       <div className="sing_sec2">
        <div className="container">
             <h2>{data.wpPage?.eventCareer.singcare3AboutTitleev}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage?.eventCareer.singcare3AboutDescriptionev }}></div>
            
        </div>
      </div>  

       <div className="weva_section sing_sec3 sec_new1">
        <div className="container">
             <h2>{data.wpPage?.eventCareer.singcare3CcoTitleev}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage?.eventCareer.singcare3OppDescriptionev }}></div>
            
        </div>
      </div>

      <div className="sing_sec4">
        <div className="container">
             <h2>{data.wpPage?.eventCareer.singcare3OfferTitleev}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage?.eventCareer.singcare3OfferDescriptionev }}></div>
            
        </div>
      </div>  


    </Layout>
  </div>
  )
}
export const query = graphql`
  {
    wpPage(title: {eq: "Event and Sales Coordinator"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      eventCareer {
        singcare3BannerImageev {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 526, height: 351, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }    
        singcare3BannerTitleev
        singcare3BannerDescev       
        singcare3AboutTitleev
        singcare3AboutDescriptionev   
        singcare3CcoTitleev
        singcare3OppDescriptionev
        singcare3OfferTitleev
        singcare3OfferDescriptionev
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
            tagline
            speakExpertLink
            speakExpertTitle
            testimonialTitle
            testimonials {
              comment
              designation
              url
              name
              image {
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`

export default SingleCareers
