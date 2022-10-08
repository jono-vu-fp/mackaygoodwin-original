import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-3"
import GetInTouch from "../components/get-in-touch"
import CurveLeft from "../components/curve-left"
import Services from "../components/services"
import Accordian from "../components/accordian/accordian-bankruptcy"
import FullText from "../components/full-text"
import OurPeople from "../components/our-people-liquid/our-people2"
import TestimonialMain from "../components/testimonial-main-liquid-1"
import ReciveryPlan from "../components/recovery-plan2"
import Container from "../components/slider/container-liquidation"
import EbookForm from "../components/ebook-form"
import { formEbookContext } from '../components/context';
import GetInTouchPPForm from "../components/get-in-touch-bankruptcy-popup"

import $ from "jquery"

const ConsultBusiness = ({ data }) => {
  const [showModal, setModal] = React.useState(false);
  let whyMG = [];

  data.wpPage.personalinsolvency.perFaqs.map((d) => {
    console.log(d);
    return whyMG.push({ title: d.perQuestion, description: d.perAnswer, tag: '' });
  })

  let businessData = [];
  let count = 0;
  data.allWpOurpeople.nodes.map((d,key) => {

    if(d.backInBusiness.registeredLiquidators && (count < 3 )){

      console.log(count);

      count++;
      
      return businessData.push({ title: d.title, subtitle: d.backInBusiness.designation, text: d.backInBusiness.location, certification: d.backInBusiness.certification, content: d.content, linkedin: d.backInBusiness.linkedin, email: d.backInBusiness.email, img: d.featuredImage?.node, designationType: d.backInBusiness.designationType, registeredLiquidators: d.backInBusiness.registeredLiquidators });



    } else {
      return '';
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
  return (<div className="service restructure consult-business liquidation voluntary_administration bankruptcy doc_1 per_in_section">
    <Layout>
      <Seo title={data.wpPage?.metaFields?.metaTitle} description={data.wpPage?.metaFields?.metaDescription} />    

    <TopBanner
        title={data.wpPage.personalinsolvency.perBannerTitle}
        subtitle={''}
        text={data.wpPage.personalinsolvency.perBannerDesc}
        bannerImg={data.wpPage.personalinsolvency.perBannerImage}
        breadCrumbs={breadCrumbs}
        equalWidth={true}
      />

       <div className="liq_blocks va_blocks doca_2">
        <div className="container">
          <div className="row">
              
              {data.wpPage.personalinsolvency.perWymnuDescriptionWhyliquid.map((d) => {
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

       <div className="weva_section doc3 per_in_1">
        <div className="container">
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.personalinsolvency.perWevaContent }}></div>
            {data.wpPage.personalinsolvency.perWevaButtonLink !== null && data.wpPage.personalinsolvency.perWevaButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.personalinsolvency.perWevaButtonLink}>{data.wpPage.personalinsolvency.perWevaButtonText}</Link> : ""}
        </div>
      </div>


      <div className="fd_section myexperience_section per_insolvency">
        <div className="container"> 
        <div className="row">    
         <div class="col-md-5 col-lg-5">
            <img src={data.wpPage.personalinsolvency.perDcaImage.mediaItemUrl} alt={data.wpPage.personalinsolvency.perDcaImage.altText} />
          </div>       
          <div class="col-md-7 col-lg-7">
              <div dangerouslySetInnerHTML={{ __html: data.wpPage.personalinsolvency.perDcaDescription }}></div>
            
          </div>
         
        </div>
        </div>
      </div>

    <div className="liq_blocks va_blocks weva_section solutions_bloks">
            <div className="container">
              <div className="row">
                  <h3> {data.wpPage.personalinsolvency.perWvaTitle}</h3>
                  
                  {data.wpPage.personalinsolvency.perWvaDescription.map((d) => {
                    return (
                      <div className="col-md-4 col-lg-4">
                        <div className="lb_txt">
                          <p className="solutions-title">{d.perSubtitle?.trim()}</p>
                          <p className="solutions-desc">{d.perSubdesc?.trim()}</p>
                        </div>
                      </div>)
                  })}
              </div>
            </div>
          </div>   

        <div className="wva_section key_expert">
          <div className="container">
            <div className="wva_left">
              <img src={data.wpPage.personalinsolvency.perFdImage?.mediaItemUrl} alt={data.wpPage.personalinsolvency.perFdImage?.altText} />
            </div>
            <div className="wva_right">
              <div dangerouslySetInnerHTML={{ __html: data.wpPage.personalinsolvency.perFdContent }}></div>
              {data.wpPage.personalinsolvency.perDca1ButtonLink !== null && data.wpPage.personalinsolvency.perDca1ButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.personalinsolvency.perDca1ButtonLink}>{data.wpPage.personalinsolvency.perDca1ButtonText}</Link> : ""}
            </div>
          </div>
      </div> 

       <FullText
        text={data.wpPage.personalinsolvency.perLpTagline}
        subTxt={data.wpPage.personalinsolvency.perLpDescription}
          customClass={'middleFullText glpo_section find_path'}
      />  

      <ReciveryPlan
          data={data.wpPage.personalinsolvency.perLpProcess}
          titleDisplay={false}
          customClass={'glpo_reco_section va_glpo_reco_section'}
        />  

        <Accordian
          title={data.wpPage.personalinsolvency.perFaqsTitle}
          showEnquireButton={false}
          data={whyMG}
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
    wpPage(title: {eq: "Personal Insolvency"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      personalinsolvency {
        perBannerDesc
        perBannerImage {
          altText
          mediaItemUrl
        }
        perBannerTitle
        
        perWymnuDescriptionWhyliquid {
          description
          image {
            altText
            mediaItemUrl
          }
          title
        }
      
        perWymnuImage {
          altText
          mediaItemUrl
        }
        perWymnuLearnMoreLink
        perWvaTitle
        perWvaDescription{
          perSubtitle
          perSubdesc
        }
        perFdContent
        perFdImage {
            altText
            mediaItemUrl
          }
        perWevaContent
        perWevaButtonText
        perWevaButtonLink
        perDcaTitle
        perDcaDescription
        perDca1ButtonText
        perDca1ButtonLink
        perDcaImage {
            altText
            mediaItemUrl
          } 
        perFaqsTitle
        perFaqs {
          perQuestion
          perAnswer
        }       
        perLpTagline
        perLpDescription
        perLpProcess {
          perProcessTitle
        }
                       
        perWymnuTitle
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
