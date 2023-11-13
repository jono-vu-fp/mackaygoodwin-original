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
        title={data.wpPage?.singlecareerssaim?.singcare7BannerTitle}
        subtitle={''}
        text={data.wpPage?.singlecareerssaim?.singcare7BannerDesc}
        bannerImg={data.wpPage?.singlecareerssaim?.singcare7BannerImage}
        equalWidth={true}
      />


       <div className="sing_sec2">
        <div className="container">
             <h2>{data.wpPage?.singlecareerssaim.singcare7AboTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage?.singlecareerssaim.singcare7Description }}></div>
            
        </div>
      </div>  

       <div className="weva_section sing_sec3">
        <div className="container">
             <h2>{data.wpPage?.singlecareerssaim.singcare7CcoTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage?.singlecareerssaim.singcare7OppDescription }}></div>
            
        </div>
      </div>

      <div className="sing_sec4">
        <div className="container">
             <h2>{data.wpPage?.singlecareerssaim.singcare7OfferTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage?.singlecareerssaim.singcare7OfferDescription }}></div>
            
        </div>
      </div>  


    </Layout>
  </div>
  )
}
export const query = graphql`
  {
    wpPage(title: {eq: "Senior Analyst / Insolvency Manager"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      singlecareerssaim {
        singcare7BannerImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 525, height: 351, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }   
        singcare7BannerTitle
        singcare7BannerDesc       
        singcare7Description
        singcare7AboTitle 
        singcare7CcoTitle
        singcare7OppDescription
        singcare7OfferTitle
        singcare7OfferDescription
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
