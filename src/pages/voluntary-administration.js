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

const ConsultBusiness = ({ data }) => {
  const [showModal, setModal] = React.useState(false);
  let whyMG = [];

  let businessData = [];
  data.allWpOurpeople.nodes.map((d) => {
    if(d.title == 'Andrew Ngo' || d.title == 'Grahame Ward' || d.title == 'Kate McMahon'){
      return businessData.push({ title: d.title, subtitle: d.backInBusiness.designation, text: d.backInBusiness.location, certification: d.backInBusiness.certification, content: d.content, linkedin: d.backInBusiness.linkedin, email: d.backInBusiness.email, img: d.featuredImage?.node, designationType: d.backInBusiness.designationType });
    }
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
        title={data.wpPage.voluntaryadministration.bannerTitle}
        subtitle={''}
        text={data.wpPage.voluntaryadministration.bannerDesc}
        bannerImg={data.wpPage.voluntaryadministration.bannerImage}
        breadCrumbs={breadCrumbs}
        equalWidth={true}
      />
      <section className="recovery-partner liq_rec_section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="whyTitle text-center">{data.wpPage.voluntaryadministration.vaRecoveryTagline}</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            {data.wpPage.voluntaryadministration.vaPartners.map((d) => {
              return (<div className={"col-xs-12 col-md-6 col-lg-" + parseInt(12 / data.wpPage.voluntaryadministration.vaPartners.length)}>
                <div className="text-center rec_img">
                  <img src={d.vaImage?.mediaItemUrl} alt={d.vaImage?.altText} className="recovery-partner-img" />
                </div>
                <p className="recovery-partner-title text-center"> {d.vaTitle} </p>
              </div>)
            })}
          </div>
        </div>
      </section>
      <div className="liq_blocks va_blocks">
        <div className="container">
          <div className="row">
              {/* <h3>{data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.tagline}</h3> */}
              {data.wpPage.voluntaryadministration.wymnuDescriptionWhyliquid.map((d) => {
                return (
                  <div className="col-md-4 col-lg-4">
                    <div className="lb_img">
                        <img src={d.image?.mediaItemUrl} alt={d.image?.altText} />
                    </div>
                    <div className="lb_txt">
                      <p className="recovery-partner-title">{d.title?.trim()}</p>
                      <p className="recovery-partner-desc">{d.description?.trim()}</p>
                    </div>
                  </div>)
              })}
          </div>
        </div>
      </div>
        
      <div className="wva_section">
        <div className="container">
          <div className="wva_left">
            <img src={data.wpPage.voluntaryadministration.wvaImage.mediaItemUrl} alt={data.wpPage.voluntaryadministration.wvaImage.altText} />
          </div>
          <div className="wva_right">
            <h3>{data.wpPage.voluntaryadministration.wvaTitle}</h3>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.voluntaryadministration.wvaDescription }}></div>
          </div>
        </div>
      </div>        
        
      <div className="weva_section">
        <div className="container">
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.voluntaryadministration.wevaContent }}></div>
            {data.wpPage.voluntaryadministration.wevaButtonLink !== null && data.wpPage.voluntaryadministration.wevaButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.voluntaryadministration.wevaButtonLink}>{data.wpPage.voluntaryadministration.wevaButtonText}</Link> : ""}
        </div>
      </div>

      <div className="wva_section fd_section">
        <div className="container">
          <div className="wva_left">
            <img src={data.wpPage.voluntaryadministration.fdImage.mediaItemUrl} alt={data.wpPage.voluntaryadministration.fdImage.altText} />
          </div>
          <div className="wva_right">
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.voluntaryadministration.fdContent }}></div>
          </div>
        </div>
      </div>
      
      
      <div id="myModal" role="dialog" className={showModal?'in show modal fade':'modal fade'}>
        <div className="model_inner">
          <div className="popup_dialog">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" onClick={()=>setModal(false)}>&times;</button>
              <div className="popup_body">
                <div className="video_ratio">
                <video width="100%" controls><source src={data.wpPage.voluntaryadministration.businessVideo?.mediaItemUrl} type="video/mp4" />Your browser does not support the video tag.</video>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <FullText
        text={data.wpPage.voluntaryadministration.vaLiquidationTagline}
        subTxt={data.wpPage.voluntaryadministration.vaLiquidationDescription}
        customClass={'middleFullText glpo_section'}
      />

      <ReciveryPlan
        data={data.wpPage.voluntaryadministration.vaProcess}
        titleDisplay={false}
        customClass={'glpo_reco_section va_glpo_reco_section'}
      />


      <div className="wva_section fd_section dca_section">
        <div className="container">
          <div className="wva_left">
            <img src={data.wpPage.voluntaryadministration.dcaImage.mediaItemUrl} alt={data.wpPage.voluntaryadministration.dcaImage.altText} />
          </div>
          <div className="wva_right">
            <h3>{data.wpPage.voluntaryadministration.dcaTitle}</h3>
            <h5>{data.wpPage.voluntaryadministration.dcaSubTitle}</h5>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.voluntaryadministration.dcaDescription }}></div>
            {data.wpPage.voluntaryadministration.dcaButtonLink !== null && data.wpPage.voluntaryadministration.dcaButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.voluntaryadministration.dcaButtonLink}>{data.wpPage.voluntaryadministration.dcaButtonText}</Link> : ""}
          </div>
        </div>
      </div>
      
      
      {/* <FullText
        text={data.wpPage.voluntaryadministration.vaSubDescription}
      /> */}

      <section className="ht_section">
        <div className="container">
          <div className="ht_left">
            <img className="img-fluid" src={data.wpPage.voluntaryadministration.htImage?.mediaItemUrl} alt={data.wpPage.voluntaryadministration.htImage?.altText} />
          </div>
          <div className="ht_right">
            <h2>{data.wpPage.voluntaryadministration.htTitle}</h2>
            <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.voluntaryadministration?.htDescription }}></div>
            <formEbookContext.Provider value={valueEbook}>
              <button className="btn btn-primary me-5" onClick={() => { setFormEbookDetails(1) }}>Download Now</button>
              <EbookForm
                title={'Download e-guide'}
                text={'Download your free copy today and get on the path to recovery'}
              />
            </formEbookContext.Provider>
          </div>
        </div>
      </section>
      
      <OurPeople
        title={'Meet your administrators'}
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
    </Layout>
  </div>
  )
}
export const query = graphql`
  {
    wpPage(title: {eq: "Voluntary Administration"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      voluntaryadministration {
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
        wvaImage {
            altText
            mediaItemUrl
          }
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
