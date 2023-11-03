import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-3"
import GetInTouch from "../components/get-in-touch3"
import CurveLeft from "../components/curve-left"
import Services from "../components/services"
import Accordian from "../components/accordian/accordian"
import FullText from "../components/full-text"
import OurPeople from "../components/our-people-liquid/our-people"
import TestimonialMain from "../components/testimonial-main-liquid-1"
import ReciveryPlan from "../components/recovery-plan4"
import Container from "../components/slider/container-liquidation"
import EbookForm from "../components/ebook-form"
import { formEbookContext } from '../components/context';

const ResearchDiscovery = ({ data }) => {
  const [showModal, setModal] = React.useState(false);
  let whyMG = [];

  let businessData = [];
  data.allWpOurpeople.nodes.map((d) => {
    return businessData.push({ title: d.title, subtitle: d.backInBusiness.designation, text: d.backInBusiness.location, certification: d.backInBusiness.certification, content: d.content, linkedin: d.backInBusiness.linkedin, email: d.backInBusiness.email, img: d.featuredImage?.node, designationType: d.backInBusiness.designationType, registeredLiquidators: d.backInBusiness.registeredLiquidators });
  })

  const breadCrumbs = [
    { link: "/", title: "Home" },
    { title: "Liquidation" },
  ]

  const [fromDetails, setFormDetails] = React.useState(0);
  const [fromEbookDetails, setFormEbookDetails] = React.useState(0);
  const value = { fromDetails, setFormDetails };
  const valueEbook = { fromEbookDetails, setFormEbookDetails };
  return (<div className="service restructure consult-business liquidation voluntary_administration">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.researchDiscovery.redbannerTitle}
        subtitle={''}
        text={data.wpPage.researchDiscovery.redbannerDesc}
        bannerImg={data.wpPage.researchDiscovery.redbannerImage}
        breadCrumbs={breadCrumbs}
        equalWidth={true}
      />
      <section className="recovery-partner liq_rec_section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="whyTitle text-center">{data.wpPage.researchDiscovery.redrecoveryTagline}</h2>
            </div>
          </div>
          <div className="row justify-content-center redrecoveryrow">
            {data.wpPage.researchDiscovery.redpartners.map((d,k) => {
              return (<div key={'v'+k} className={"col-xs-12 col-md-6 col-lg-" + parseInt(12 / data.wpPage.researchDiscovery.redpartners.length)}>
                <div className="text-center rec_img">
                  <img src={d.redImage?.localFile?.publicURL} alt={d.redImage?.altText} className="recovery-partner-img" />
                </div>
                
                <p className="recovery-partner-title text-center" dangerouslySetInnerHTML={{ __html: d.redTitle }}></p>
              </div>)
            })}
          </div>
        </div>
      </section>

      <div className="wva_section fd_section dca_section rddca_section">
        <div className="container">
          <div className="wva_left">
            <img src={data.wpPage.researchDiscovery.wrdimage.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.researchDiscovery.wrdimage.altText} />
          </div>
          <div className="wva_right">
            <h3>{data.wpPage.researchDiscovery.wrdheading}</h3>
            <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage.researchDiscovery
                      .wrdcontent,
                }}
              ></div>
            <Link className="btn btn btn-primary me-5" to="#get-in-touch">
             Learn more
            </Link>
          </div>
        </div>
      </div>

      
        
        <div class="focus_sec">
        <div class="container">
          <div class="row">
          <div class="col-md-12">
         <h2> {data.wpPage.researchDiscovery.foucusheading}</h2>
         <h3> {data.wpPage.researchDiscovery.foucussubheading}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage.researchDiscovery
                      .focuscontent,
                }}
              ></div>
              </div>
              </div>
              </div>
              </div>
      
     
     <FullText
        text={data.wpPage.researchDiscovery.redliquidationTagline}
        subTxt={data.wpPage.researchDiscovery.redliquidationDescription}
        customClass={'middleFullText glpo_section'}
      />

      <ReciveryPlan
        data={data.wpPage.researchDiscovery.redprocess}
        titleDisplay={false}
        customClass={'glpo_reco_section va_glpo_reco_section'}
      />

      <div class="dpn-sec2 rdpdpn-sec5">
        <div class="container">
          <div class="row">
          
            <div class="col-md-7 col-lg-7 rig-text">
              <h3>
                {data.wpPage.researchDiscovery.helpheading}
              </h3>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage.researchDiscovery
                      .helpcontent,
                }}
              ></div>
              <Link className="btn btn btn-primary me-5" to="#get-in-touch">
                          Contact us
                        </Link>
              
            </div>

            <div class="col-md-5 col-lg-5">
               <img
                class="img-fluid"
                src={
                  data.wpPage.researchDiscovery
                    .helpimage.localFile?.childImageSharp?.resize?.src
                }
                alt="data.wpPage.researchDiscovery.helpimage.altText"
              />
            </div>
            
          </div>
        </div>
      </div>

      <div className="home">
        <GetInTouch
          title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
          text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
        />
      </div>

    </Layout>
  </div>
  )
}
export const query = graphql`
  {
    wpPage(title: {eq: "Research and Development"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      researchDiscovery {
          redbannerDesc
          redbannerTitle
          redbannerImage {
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 100) {
                  src
                }
              }
            }
          }
          redrecoveryTagline
          redpartners {
            redTitle
            redImage {
              altText
              mediaItemUrl
              localFile {
                publicURL
              }
            }
          }
          wrdcontent
          wrdheading
          wrdimage{
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 100) {
                  src
                }
              }
            }
          }
           
          foucusheading
          foucussubheading
          focuscontent 
        
          redliquidationTagline
          redliquidationDescription  
          redprocess {
            redprocessTitle
          }

          helpcontent
          helpheading
          helpimage{
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 546, height: 694, cropFocus: CENTER, quality: 100) {
                  src
                }
              }
            }
          }
         
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
                localFile {
                  childImageSharp {
                    resize (width: 412, height: 280, cropFocus: CENTER, quality: 100) {
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
    allWpOurpeople(sort: {order:  ASC, fields: menuOrder}) {
      nodes {
        title
        backInBusiness {
          designation
          location
          certification
          designationType
          linkedin
          email
          registeredLiquidators
        }
        featuredImage {
          node {
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 416, height: 450, cropFocus: CENTER, quality: 100) {
                  src
                }
              }
            }
          }
        }
        content
      }
    }
  }
`

export default ResearchDiscovery
