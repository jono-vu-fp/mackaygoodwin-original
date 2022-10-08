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
        title={data.wpPage.doca.docaBannerTitle}
        subtitle={''}
        text={data.wpPage.doca.docaBannerDesc}
        bannerImg={data.wpPage.doca.docaBannerImage}
        breadCrumbs={breadCrumbs}
        equalWidth={true}
      />

      <div className="liq_blocks va_blocks doca_2">
        <div className="container">
          <div className="row">
              
              {data.wpPage.doca.docaWymnuDescriptionWhyliquid.map((d) => {
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
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.doca.docaWevaContent }}></div>
            {data.wpPage.doca.docaWevaButtonLink !== null && data.wpPage.doca.docaWevaButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.doca.docaWevaButtonLink}>{data.wpPage.doca.docaWevaButtonText}</Link> : ""}
        </div>
      </div>

      <div className="wva_section key_expert">
        <div className="container">
          <div className="wva_left">
            <img src={data.wpPage.doca.docaFdImage?.mediaItemUrl} alt={data.wpPage.doca.docaFdImage?.altText} />
          </div>
          <div className="wva_right">
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.doca.docaFdContent }}></div>
          </div>
        </div>
      </div>

       <FullText
        subTxt={data.wpPage.doca.docaWvaDescription}
        customClass={'middleFullText glpo_section navig_sec'}
      />

        <div className="weva_section obstacles">        
       <FullText
        subTxt={data.wpPage.doca.docaWva1Description}
        customClass={'middleFullText obstacles_text'}
      />
      </div>

      <div className="fd_section myexperience_section">
        <div className="container"> 
        <div className="row">    
         <div class="col-md-5 col-lg-5">
            <img src={data.wpPage.doca.docaDcaImage.mediaItemUrl} alt={data.wpPage.doca.docaDcaImage.altText} />
          </div>       
          <div class="col-md-7 col-lg-7">
              <div dangerouslySetInnerHTML={{ __html: data.wpPage.doca.docaDcaDescription }}></div>
            
          </div>
         
        </div>
        </div>
      </div>

        <section className="health_check">
          <div className="container">
            <div className="ht_right">
              <img className="img-fluid" src={data.wpPage.doca.docaHtImage?.mediaItemUrl} alt={data.wpPage.doca.docaHtImage?.altText} />
            </div>

            <div className="ht_left">
              <h2>{data.wpPage.doca.docaHtTitle}</h2>
              <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.doca?.docaHtDescription }}></div>
          

              {data.wpPage.doca.docaDca1ButtonLink !== null && data.wpPage.doca.docaDca1ButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.doca.docaDca1ButtonLink}>{data.wpPage.doca.docaDca1ButtonText}</Link> : ""}

              <button  className="btn btn-primary me-5" type="button" onClick={()=>setModal(true)} data-toggle="modal" data-target="#myModal">{data.wpPage.doca.docaDca1VideoText}</button>
              <div id="myModal" role="dialog" className={showModal?'in show modal fade':'modal fade'}>
              <div className="model_inner">
                  <div className="popup_dialog">
                      <div className="modal-content">
                          <button type="button" className="close" data-dismiss="modal" onClick={()=>{setModal(false);$('iframe.embed-responsive-item').attr('src', $('iframe.embed-responsive-item').attr('src').replace("autoplay=1&amp;", ""));}}>&times;</button>
                          <div className="popup_body">
                              <div className="video_ratio">
                                  <div dangerouslySetInnerHTML={{__html: data.wpPage.doca.docaVideo }} />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

            </div>
          </div>
        </section>


      <FullText
        subTxt={data.wpPage.doca.docaHt1Description}
        customClass={'middleFullText glpo_section help_many'}
      />

     
      
      <OurPeople
        title={''}
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
        docaBannerDesc
        docaBannerImage {
          altText
          mediaItemUrl
        }
        docaBannerTitle
        
        docaWymnuDescriptionWhyliquid {
          description
          image {
            altText
            mediaItemUrl
          }
          title
        }
      
        docaWymnuImage {
          altText
          mediaItemUrl
        }
        docaWymnuLearnMoreLink
        docaWvaTitle
        docaWvaDescription
        docaWva1Description
        docaFdContent
        docaFdImage {
            altText
            mediaItemUrl
          }
        docaWevaContent
        docaWevaButtonText
        docaWevaButtonLink
        docaDcaDescription
        docaDca1ButtonText
        docaDca1ButtonLink
        docaDca1VideoText
        docaVideo
        docaDcaImage {
            altText
            mediaItemUrl
          }        
        docaHtTitle
        docaHtDescription
        docaHt1Description
        docaHtImage {
          altText
          mediaItemUrl
        }
               
        docaWymnuTitle
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
