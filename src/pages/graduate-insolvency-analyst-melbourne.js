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
  return (<div className="service consult-business liquidation voluntary_administration bankruptcy doc_1 safe_harbour media_moment careers single_career">
    <Layout>
      <Seo title={data.wpPage?.metaFields?.metaTitle} description={data.wpPage?.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage?.singlecareers?.singcareBannerTitle}
        subtitle={''}
        text={data.wpPage?.singlecareers?.singcareBannerDesc}
        bannerImg={data.wpPage?.singlecareers?.singcareBannerImage}
        equalWidth={true}
      />


       <div className="sing_sec2">
        <div className="container">
             <h2>{data.wpPage?.singlecareers.singcareAboTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage?.singlecareers.singcareDescription }}></div>
            
        </div>
      </div>  

       <div className="weva_section sing_sec3">
        <div className="container">
             <h2>{data.wpPage?.singlecareers.singcareCcoTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage?.singlecareers.singcareOppDescription }}></div>
            
        </div>
      </div>

      <div className="sing_sec4">
        <div className="container">
             <h2>{data.wpPage?.singlecareers.singcareOfferTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage?.singlecareers.singcareOfferDescription }}></div>
            
        </div>
      </div>  


    </Layout>
  </div>
  )
}
export const query = graphql`
  {
    wpPage(title: {eq: "Graduate Insolvency Analyst Melbourne"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      singlecareers {
        singcareBannerImage {
          altText
          mediaItemUrl
        }    
        singcareBannerTitle
        singcareBannerDesc       
        singcareDescription
        singcareAboTitle 
        singcareCcoTitle
        singcareOppDescription
        singcareOfferTitle
        singcareOfferDescription
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
