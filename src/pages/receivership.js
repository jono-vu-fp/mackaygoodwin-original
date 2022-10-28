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
  return (<div className="liquidation voluntary_administration bankruptcy doc_1 safe_harbour receivership">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.receivership.receBannerTitle}
        subtitle={''}
        text={data.wpPage.receivership.receBannerDesc}
        bannerImg={data.wpPage.receivership.receBannerImage}
        breadCrumbs={breadCrumbs}
        equalWidth={true}
      />

  <div className="liq_blocks va_blocks doca_2">
          <div className="container">
            <div className="row">
                
                {data.wpPage.receivership.receWymnuDescriptionWhyliquid.map((d) => {
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
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.receivership.receWevaContent }}></div>
            {data.wpPage.receivership.receWevaButtonLink !== null && data.wpPage.receivership.receWevaButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.receivership.receWevaButtonLink}>{data.wpPage.receivership.receWevaButtonText}</Link> : ""}
        </div>
      </div>

       <div className="wva_section key_expert">
        <div className="container">
          <div className="wva_left">
            <img src={data.wpPage.receivership.receFdImage?.mediaItemUrl} alt={data.wpPage.receivership.receFdImage?.altText} />
          </div>
          <div className="wva_right">
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.receivership.receFdContent }}></div>
            {data.wpPage.receivership.receWevaButton2Link !== null && data.wpPage.receivership.receWevaButton2Link !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.receivership.receWevaButton2Link}>{data.wpPage.receivership.receWevaButton2Text}</Link> : ""}
           
          </div>
        </div>
      </div>

      <div className="obstacles glpo_section ">        
         <FullText
          subTxt={data.wpPage.receivership.receWva1Description}
          customClass={'middleFullText obstacles_text'}
        />
       
      </div>

      <div className="fd_section myexperience_section">
        <div className="container"> 
        <div className="row">    
         <div class="col-md-5 col-lg-5">
            <img src={data.wpPage.receivership.receDcaImage.mediaItemUrl} alt={data.wpPage.receivership.receDcaImage.altText} />
          </div>       
          <div class="col-md-7 col-lg-7">
              <div dangerouslySetInnerHTML={{ __html: data.wpPage.receivership.receDcaDescription }}></div>
            
          </div>
         
        </div>
        </div>
      </div>


       <FullText
        subTxt={data.wpPage.receivership.receHt1Description}
        customClass={'middleFullText glpo_section help_many'}
      />
            
     
      
      <OurPeople
        title={''}
        text={''}
        data={businessData}
        showAll={0}
        liquidation={1}
      />

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
    wpPage(title: {eq: "Receivership"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      receivership {
        receBannerDesc
        receBannerImage {
          altText
          mediaItemUrl
        }
        receBannerTitle
        
        receWymnuDescriptionWhyliquid {
          description
          image {
            altText
            mediaItemUrl
          }
          title
        }
      
        receWymnuImage {
          altText
          mediaItemUrl
        }
        receWymnuLearnMoreLink
        receWva1Description
        receFdContent
        receFdImage {
            altText
            mediaItemUrl
          }
        receHt1Description
        receWevaContent
        receWevaButtonText
        receWevaButtonLink
        receWevaButton2Text
        receWevaButton2Link
        receDcaDescription        
        receDcaImage {
            altText
            mediaItemUrl
          }                
                       
        receWymnuTitle
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
