import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-4"
import GetInTouch from "../components/get-in-touch3"
import CurveLeft from "../components/curve-left"
import Services from "../components/services"
import Accordian from "../components/accordian/accordian"
import FullText from "../components/full-text"
import OurPeople from "../components/our-people-liquid/our-people2"
import TestimonialMain from "../components/testimonial-main-liquid-1"
import ReciveryPlan from "../components/recovery-plan"
import Container from "../components/slider/container-liquidation"
import EbookForm from "../components/ebook-form"
import { formEbookContext } from '../components/context';
import GetInTouchPPForm from "../components/get-in-touch-bankruptcy-popup"

import $ from "jquery"

const ConsultBusiness = ({ data }) => {
  const [showModal, setModal] = React.useState(false);
  let whyMG = [];

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
    { title: "" },
  ]

  const [fromDetails, setFormDetails] = React.useState(0);
  const [fromEbookDetails, setFormEbookDetails] = React.useState(0);
  const value = { fromDetails, setFormDetails };
  const valueEbook = { fromEbookDetails, setFormEbookDetails };
  return (<div className="liquidation voluntary_administration bankruptcy doc_1 safe_harbour receivership debt_agree">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.debtagreements.debtBannerTitle}
        subtitle={''}
        text={data.wpPage.debtagreements.debtBannerDesc}
        bannerImg={data.wpPage.debtagreements.debtBannerImage}
        breadCrumbs={breadCrumbs}
        equalWidth={true}
      />

  <div className="liq_blocks va_blocks doca_2"> 
          <div className="container">
            <div className="row">
                
                {data.wpPage.debtagreements.debtWymnuDescriptionWhyliquid.map((d) => {
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

         <div className="weva_section doc3">
        <div className="container">
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.debtagreements.debtWevaContent }}></div>
            {data.wpPage.debtagreements.debtWevaButtonLink !== null && data.wpPage.debtagreements.debtWevaButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.debtagreements.debtWevaButtonLink}>{data.wpPage.debtagreements.debtWevaButtonText}</Link> : ""}
        </div>
      </div>

       <div className="wva_section key_expert">
        <div className="container">
        <div className="row">
          <div className="wva_left">
            <img src={data.wpPage.debtagreements.debtFdImage?.mediaItemUrl} alt={data.wpPage.debtagreements.debtFdImage?.altText} />
          </div>
          <div className="wva_right">
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.debtagreements.debtFdContent }}></div>
            {data.wpPage.debtagreements.debtWevaButton2Link !== null && data.wpPage.debtagreements.debtWevaButton2Link !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.debtagreements.debtWevaButton2Link}>{data.wpPage.debtagreements.debtWevaButton2Text}</Link> : ""}
           
          </div>
          </div>
        </div>
      </div>

      <div className="obstacles glpo_section ">        
         <FullText
          subTxt={data.wpPage.debtagreements.debtWva1Description}
          customClass={'middleFullText obstacles_text'}
        />
       
      </div>

        <FullText
        subTxt={data.wpPage.debtagreements.debtHt1Description}
        customClass={'middleFullText glpo_section help_many get_bg'}
      />

      <div className="fd_section myexperience_section">
        <div className="container"> 
        <div className="row">    
         <div class="col-md-5 col-lg-5">
            <img src={data.wpPage.debtagreements.debtDcaImage.mediaItemUrl} alt={data.wpPage.debtagreements.debtDcaImage.altText} />
          </div>       
          <div class="col-md-7 col-lg-7">
              <div dangerouslySetInnerHTML={{ __html: data.wpPage.debtagreements.debtDcaDescription }}></div>
            
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
    wpPage(title: {eq: "Debt Agreements"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      debtagreements {
        debtBannerDesc
        debtBannerImage {
          altText
          mediaItemUrl
        }
        debtBannerTitle
        
        debtWymnuDescriptionWhyliquid {
          description
          image {
            altText
            mediaItemUrl
          }
          title
        }
      
        debtWymnuImage {
          altText
          mediaItemUrl
        }
        debtWymnuLearnMoreLink
        debtWva1Description
        debtFdContent
        debtFdImage {
            altText
            mediaItemUrl
          }
        debtHt1Description
        debtWevaContent
        debtWevaButtonText
        debtWevaButtonLink
        debtWevaButton2Text
        debtWevaButton2Link
        debtDcaDescription        
        debtDcaImage {
            altText
            mediaItemUrl
          }                
                       
        debtWymnuTitle
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
