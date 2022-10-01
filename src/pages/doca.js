import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-3"
import GetInTouch from "../components/get-in-touch"
import CurveLeft from "../components/curve-left"
import Services from "../components/services"
import Accordian from "../components/accordian/accordian"
import FullText from "../components/full-text"
import OurPeople from "../components/our-people-liquid/our-people"
import TestimonialMain from "../components/testimonial-main-liquid-1"
import ReciveryPlan from "../components/recovery-plan"
import Container from "../components/slider/container-liquidation"
import EbookForm from "../components/ebook-form"
import { formEbookContext } from '../components/context';
import GetInTouchPPForm from "../components/get-in-touch-bankruptcy-popup"

const ConsultBusiness = ({ data }) => {
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
  return (<div className="service restructure consult-business liquidation voluntary_administration bankruptcy doc_1">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.doca.bannerTitle}
        subtitle={''}
        text={data.wpPage.doca.bannerDesc}
        bannerImg={data.wpPage.doca.bannerImage}
        breadCrumbs={breadCrumbs}
        equalWidth={true}
      />

      <div className="liq_blocks va_blocks doca_2">
        <div className="container">
          <div className="row">
              
              {data.wpPage.doca.wymnuDescriptionWhyliquid.map((d) => {
                return (
                  <div className="col-md-4 col-lg-4">
                    <div className="lb_img">
                        <img src={d.image?.mediaItemUrl} alt={d.image?.altText} />
                    </div>
                    <div className="lb_txt">
                      <p className="recovery-partner-title ">{d.title?.trim()}</p>
                      <p className="recovery-partner-desc">{d.description?.trim()}</p>
                    </div>
                  </div>)
              })}
          </div>
        </div>
      </div> 


     <div className="weva_section">
        <div className="container">
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.doca.wevaContent }}></div>
            {data.wpPage.doca.wevaButtonLink !== null && data.wpPage.doca.wevaButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.doca.wevaButtonLink}>{data.wpPage.doca.wevaButtonText}</Link> : ""}
        </div>
      </div>

      <div className="wva_section key_expert">
        <div className="container">
          <div className="wva_left">
            <img src={data.wpPage.doca.fdImage.mediaItemUrl} alt={data.wpPage.doca.fdImage.altText} />
          </div>
          <div className="wva_right">
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.doca.fdContent }}></div>
          </div>
        </div>
      </div>
                
     
      
      <OurPeople
        title={'Meet our registered Liquidators'}
        text={''}
        data={businessData}
        showAll={0}
        liquidation={1}
      />
      <Container
        title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.testimonialTitle}
        data={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.testimonials}
        slideColor={'#ebe9de'}
      />
      <div className="cu_fixed">
          <a href="/contact"><img src="/images/sophie-img.png" />Contact Us</a>
      </div>
      <GetInTouchPPForm
        title={data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
        text={data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
        image={data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings.gitImage}
      />
    </Layout>
  </div>
  )
}
export const query = graphql`
  {
    wpPage(title: {eq: "DOCA"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      doca {
        bannerDesc
        bannerImage {
          altText
          mediaItemUrl
        }
        bannerTitle
        
        wymnuDescriptionWhyliquid {
          description
          image {
            altText
            mediaItemUrl
          }
          title
        }
        
        wymnuImage {
          altText
          mediaItemUrl
        }
        wymnuLearnMoreLink
        vaLiquidationDescription
        wvaTitle
        wvaDescription
        wvaVideo
        fdContent
        fdImage {
            altText
            mediaItemUrl
          }
        wevaContent
        wevaButtonText
        wevaButtonLink
        dcaTitle
        dcaSubTitle
        dcaDescription
        dcaButtonText
        dcaButtonLink
        dcaImage {
            altText
            mediaItemUrl
          }
        vaPartners {
          vaTitle
          vaImage {
            altText
            mediaItemUrl
          }
        }
        htTitle
        htDescription
        htImage {
          altText
          mediaItemUrl
        }
        vaLiquidationTagline
        vaRecoveryTagline
        vaSubDescription
        vaProcess {
          processTitle
        }
        wymnuTitle
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
          }
        }
        content
      }
    }
  }
`

export default ConsultBusiness
