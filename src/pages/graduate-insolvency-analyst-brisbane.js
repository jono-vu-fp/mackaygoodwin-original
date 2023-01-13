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
        title={data.wpPage?.singlecareers4?.singcare4BannerTitle}
        subtitle={''}
        text={data.wpPage?.singlecareers4?.singcare4BannerDesc}
        bannerImg={data.wpPage?.singlecareers4?.singcare4BannerImage}
        equalWidth={true}
      />


       <div className="sing_sec2">
        <div className="container">
             <h2>{data.wpPage?.singlecareers4?.singcare4AboTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage?.singlecareers4?.singcare4Description }}></div>
            
        </div>
      </div>  

       <div className="weva_section sing_sec3 sec_new1">
        <div className="container">
             <h2>{data.wpPage?.singlecareers4?.singcare4CcoTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage?.singlecareers4?.singcare4OppDescription }}></div>
            
        </div>
      </div>

      <div className="sing_sec3 sec_new">
        <div className="container">
         <h2>{data.wpPage?.singlecareers4?.singcare4OfferTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage?.singlecareers4?.singcare4OfferDescription }}></div>
            
        </div>
      </div>

      <div className="sing_sec4">
        <div className="container">
            
             <h2>{data.wpPage?.singlecareers4?.singcare4AboutTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage?.singlecareers4?.singcare4AboutDescription }}></div>
            
        </div>
      </div>  


    </Layout>
  </div>
  )
}
export const query = graphql`
  {
    wpPage(title: {eq: "Graduate Insolvency Analyst Brisbane"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      singlecareers4 {
        singcare4BannerImage {
          altText
          mediaItemUrl
        }    
        singcare4BannerTitle
        singcare4BannerDesc       
        singcare4Description
        singcare4AboTitle
        singcare4AboutTitle
        singcare4AboutDescription   
        singcare4CcoTitle
        singcare4OppDescription
        singcare4OfferTitle
        singcare4OfferDescription
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
