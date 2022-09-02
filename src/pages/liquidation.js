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
  let FAQs = [];

  data.wpPage.liquidation.queAnsliquidation.map((d) => {
    return whyMG.push({ title: d.ques, description: d.ans, learnMoreUrl: d.learnMoreUrl, learnMoreText: 'Contact us' });
  })

  data.wpPage.liquidation.faq.map((d) => {
    return FAQs.push({ title: d.faqTitle, description: d.faqDesc });
  })

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
  return (<div className="service restructure consult-business liquidation">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.liquidation.bannerTitle}
        subtitle={data.wpPage.liquidation.bannerSubtitle}
        text={data.wpPage.liquidation.bannerDesc}
        bannerImg={data.wpPage.liquidation.bannerImage}
        breadCrumbs={breadCrumbs}
        sendUrl={''}
        equalWidth={true}
      />
      <section className="recovery-partner liq_rec_section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="whyTitle text-center">{data.wpPage.liquidation.recoveryTagline}</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            {data.wpPage.liquidation.partners.map((d) => {
              return (<div className={"col-xs-12 col-md-6 col-lg-" + parseInt(12 / data.wpPage.liquidation.partners.length)}>
                <div className="text-center rec_img">
                  <img src={d.image.mediaItemUrl} alt={d.image.altText} className="recovery-partner-img" />
                </div>
                <p className="recovery-partner-title text-center"> {d.title} </p>
              </div>)
            })}
          </div>
        </div>
      </section>
      <div className="liq_blocks">
        <div className="container">
          <div className="row">
              {/* <h3>{data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.tagline}</h3> */}
              {data.wpPage.liquidation.descriptionWhyliquid.map((d) => {
                return (
                  <div className="col-md-4 col-lg-4">
                    <div className="lb_img">
                        <img src={d.image.mediaItemUrl} alt={d.image.altText} />
                    </div>
                    <div className="lb_txt">
                      <p className="recovery-partner-title">{d.title.trim()}</p>
                      <p className="recovery-partner-desc">{d.description.trim()}</p>
                    </div>
                  </div>)
              })}
          </div>
        </div>
      </div>
      <section className={"testimonial-main testimonial-main1"}>
      <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 p-5">
              <img className="img-fluid" src={data.wpPage.liquidation.testimonialsLiquid[0].image?.mediaItemUrl} alt={data.wpPage.liquidation.testimonialsLiquid[0].image?.altText} />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 p-5 desc">
              <p>{data.wpPage.liquidation.testimonialsLiquid[0].description}</p>
            </div>
          </div>
      </div>
    </section>
      <div className="wbl_section">
        <div className="container">
          <div className="wbl_right">
            <a onClick={()=>setModal(true)}><img src={data.wpPage.liquidation.businessThumbnail.mediaItemUrl} /></a>
          </div>
          <div className="wbl_left">
            <h3>{data.wpPage.liquidation.businessTitle}</h3>
            <p>{data.wpPage.liquidation.businessDesc}</p>
            {data.wpPage.liquidation.enquire !== null && data.wpPage.liquidation.enquire !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.liquidation.enquire}>Learn More</Link> : ""}
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
                <video width="100%" controls><source src={data.wpPage.liquidation.businessVideo.mediaItemUrl} type="video/mp4" />Your browser does not support the video tag.</video>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services
        title={'Our Liquidation Services'}
        showEnquireButton={true}
        data={whyMG}
        className={'liquid'}
      />
      <FullText
        text={data.wpPage.liquidation.liquidationTagline}
        subTxt={data.wpPage.liquidation.liquidationDescription}
        customClass={'middleFullText glpo_section'}
      />
      <ReciveryPlan
        data={data.wpPage.liquidation.process}
        titleDisplay={false}
        customClass={'glpo_reco_section'}
      />
      <section className={"testimonial-main testimonial-main1"}>
        <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-sm-12 col-md-12 col-lg-6 p-5">
                <img className="img-fluid" src={data.wpPage.liquidation.testimonialsLiquid[1].image?.mediaItemUrl} alt={data.wpPage.liquidation.testimonialsLiquid[1].image?.altText} />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 p-5 desc">
                <p>{data.wpPage.liquidation.testimonialsLiquid[1].description}</p>
              </div>
            </div>
        </div>
      </section>
      {/* <FullText
        text={data.wpPage.liquidation.subDescription}
      /> */}

      <section className="ht_section">
        <div className="container">
          <div className="ht_left">
            <img className="img-fluid" src={data.wpPage.liquidation.htImage?.mediaItemUrl} alt={data.wpPage.liquidation.htImage?.altText} />
          </div>
          <div className="ht_right">
            <h2>{data.wpPage.liquidation.htTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.liquidation?.htDescription }}></div>
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
    </Layout>
  </div>
  )
}
export const query = graphql`
  {
    wpPage(title: {eq: "Liquidation"}) {
      liquidation {
        bannerDesc
        bannerImage {
          altText
          mediaItemUrl
        }
        bannerSubtitle
        bannerTitle
        businessDesc
        businessImage {
          altText
          mediaItemUrl
        }
        businessThumbnail {
          altText
          mediaItemUrl
        }
        businessTitle
        businessVideo {
          altText
          mediaItemUrl
        }
        enquire
        descriptionWhyliquid {
          description
          image {
            altText
            mediaItemUrl
          }
          title
        }
        faq {
          faqDesc
          faqTitle
        }
        imagevideo
        image {
          altText
          mediaItemUrl
        }
        learnMoreLink
        liquidationDescription
        partners {
          title
          image {
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
        liquidationTagline
        recoveryTagline
        sendUrl
        subDescription
        liquidationTypeTitle
        tagline
        process {
          processTitle
        }
        queAnsliquidation
         {
          ans 
          learnMoreUrl
          ques
        }
        title
        testimonialsLiquid {
          description
          image {
            altText
            mediaItemUrl
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
