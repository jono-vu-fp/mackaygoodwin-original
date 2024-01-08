import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import TestimonialMain from "../components/testimonial-main"
import BackInBusiness from "../components/resources/backinbusiness"
import Events from "../components/events/events"
import FullText from "../components/full-text"
import Container from "../components/slider/container"

const breadCrumbs = [
  { link: "/", title: "Home" },
  { title: "Thank You" },
]

const Project8 = ({ data }) => {
  setTimeout(() => {
    if (typeof window !== "undefined" && window.location.hash !== "") {
      document.getElementById(window.location.hash.replace("#", "")).scrollIntoView();
    }
  }, 100)
  return (
    <div className="service insights thankyou">
      <Layout>
        <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
        
        <div className="detailPost">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-8 sgpost_cont 11">
                <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }}></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  {
    wpPage(title: {eq: "Giving Back"}) {
      title
      content
      project8 {
        bannerImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 526, height: 378, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }
        bannerSubtitle
        bannerTitle
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
            testimonialTitle
            testimonials {
              comment
              designation
              url
              name
              image {
                altText
                mediaItemUrl
                localFile {
                  childImageSharp {
                    resize (width: 564, height: 376, cropFocus: CENTER, quality: 80) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Project8
