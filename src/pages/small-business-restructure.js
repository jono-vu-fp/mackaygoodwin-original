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
import OurPeople from "../components/our-people-liquid/our-people4"
import TestimonialMain from "../components/testimonial-main-liquid-1"
import ReciveryPlan from "../components/recovery-plan"
import Container from "../components/slider/container-small-business"
import EbookForm from "../components/ebook-form"
import { formEbookContext } from '../components/context';
import GetInTouchPPForm from "../components/get-in-touch-bankruptcy-popup"
import _ from 'lodash';
import $ from "jquery"

const ConsultBusiness = ({ data }) => {
  const [showModal, setModal] = React.useState(false);
  let whyMG = [];

  let businessData = [];
  let count = 0;
  data.wpPage.smallbusinessrestructure.peoplessmr.map((d,key) => {
      console.log(count);
      count++;
      return businessData.push({ title: d.title, subtitle: d.backInBusiness.designation, text: d.backInBusiness.location, certification: d.backInBusiness.certification, content: d.content, linkedin: d.backInBusiness.linkedin, email: d.backInBusiness.email, img: d.featuredImage?.node, designationType: d.backInBusiness.designationType, registeredLiquidators: d.backInBusiness.registeredLiquidators });
   
  })

  // let businessData = [];
  // let suffledArray = _.shuffle(data.allWpOurpeople.nodes); let lidx=0;
  // suffledArray.map((d,key) => {
  //   if(d.backInBusiness.registeredLiquidators && lidx<2){
  //     lidx++;
  //     return businessData.push({ title: d.title, subtitle: d.backInBusiness.designation, text: d.backInBusiness.location, certification: d.backInBusiness.certification, content: d.content, linkedin: d.backInBusiness.linkedin, email: d.backInBusiness.email, img: d.featuredImage?.node, designationType: d.backInBusiness.designationType, registeredLiquidators: d.backInBusiness.registeredLiquidators, altimg:d.backInBusiness.staffImage2 });
       
  //   }
  // });
  // suffledArray.map((d,key) => {
  //   if(d.backInBusiness.registeredLiquidators==null && lidx<6){
  //     lidx++;
  //     return businessData.push({ title: d.title, subtitle: d.backInBusiness.designation, text: d.backInBusiness.location, certification: d.backInBusiness.certification, content: d.content, linkedin: d.backInBusiness.linkedin, email: d.backInBusiness.email, img: d.featuredImage?.node, designationType: d.backInBusiness.designationType, registeredLiquidators: d.backInBusiness.registeredLiquidators, altimg:d.backInBusiness.staffImage2 });
       
  //   }
  // });

  const breadCrumbs = [
    { link: "/", title: "Home" },
    { title: "Liquidation" },
  ]

  const [fromDetails, setFormDetails] = React.useState(0);
  const [fromEbookDetails, setFormEbookDetails] = React.useState(0);
  const value = { fromDetails, setFormDetails };
  const valueEbook = { fromEbookDetails, setFormEbookDetails };
  return (<div className="service restructure consult-business liquidation voluntary_administration bankruptcy doc_1 safe_harbour small_business">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.smallbusinessrestructure.smallBannerTitle}
        subtitle={''}
        text={data.wpPage.smallbusinessrestructure.smallBannerDesc}
        bannerImg={data.wpPage.smallbusinessrestructure.smallBannerImage}
        breadCrumbs={breadCrumbs}
        equalWidth={true}
      />

       <div className="liq_blocks va_blocks doca_2">
        <div className="container">
          <div className="row">
              
              {data.wpPage.smallbusinessrestructure.smallWymnuDescriptionWhyliquid.map((d) => {
                return (
                  <div className="col-md-4 col-lg-4">
                    <div className="lb_img">
                        <img src={d.image?.localFile?.publicURL} alt={d.image?.altText} />
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
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.smallbusinessrestructure.smallWevaContent }}></div>
            {data.wpPage.smallbusinessrestructure.smallWevaButtonLink !== null && data.wpPage.smallbusinessrestructure.smallWevaButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.smallbusinessrestructure.smallWevaButtonLink}>{data.wpPage.smallbusinessrestructure.smallWevaButtonText}</Link> : ""}
        </div>
      </div>

      <div className="wva_section key_expert">
        <div className="container">
          <div className="wva_left">
            <img src={data.wpPage.smallbusinessrestructure.smallFdImage?.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.smallbusinessrestructure.smallFdImage?.altText} />
          </div>
          <div className="wva_right">
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.smallbusinessrestructure.smallFdContent }}></div>
          </div>
        </div>
      </div>

       <FullText
        subTxt={data.wpPage.smallbusinessrestructure.smallDelvContent}
        customClass={'middleFullText glpo_section right_soloution'}
      />

       <div className="weva_section obstacles">        
         <FullText
          subTxt={data.wpPage.smallbusinessrestructure.smallWva1Description}
          customClass={'middleFullText obstacles_text'}
        />
       <div className="container"> {data.wpPage.smallbusinessrestructure.smallWeva2ButtonLink !== null && data.wpPage.smallbusinessrestructure.smallWeva2ButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.smallbusinessrestructure.smallWeva2ButtonLink}>{data.wpPage.smallbusinessrestructure.smallWeva2ButtonText}</Link> : ""}
      </div>
      </div>

      {/*<div className="fd_section myexperience_section">
        <div className="container"> 
        <div className="row">    
         <div class="col-md-5 col-lg-5">
            <img src={data.wpPage.smallbusinessrestructure.smallDcaImage.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.smallbusinessrestructure.smallDcaImage.altText} />
          </div>       
          <div class="col-md-7 col-lg-7">
              <div dangerouslySetInnerHTML={{ __html: data.wpPage.smallbusinessrestructure.smallDcaDescription }}></div>
            
          </div>
         
        </div>
        </div>
      </div>*/}

      <section className="health_check">
          <div className="container">
            <div className="ht_right">
              <img className="img-fluid" src={data.wpPage.smallbusinessrestructure.smallHtImage?.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.smallbusinessrestructure.smallHtImage?.altText} />
            </div>

            <div className="ht_left">
              <h2>{data.wpPage.smallbusinessrestructure.smallHtTitle}</h2>
              <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.smallbusinessrestructure?.smallHtDescription }}></div>
          

              {data.wpPage.smallbusinessrestructure.smallDca1ButtonLink !== null && data.wpPage.smallbusinessrestructure.smallDca1ButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.smallbusinessrestructure.smallDca1ButtonLink}>{data.wpPage.smallbusinessrestructure.smallDca1ButtonText}</Link> : ""}

              <button  className="btn btn-primary me-5" type="button" onClick={()=>setModal(true)} data-toggle="modal" data-target="#myModal">{data.wpPage.smallbusinessrestructure.smallDca1VideoText}</button>
              <div id="myModal" role="dialog" className={showModal?'in show modal fade':'modal fade'}>
              <div className="model_inner">
                  <div className="popup_dialog">
                      <div className="modal-content">
                          <button type="button" className="close" data-dismiss="modal" onClick={()=>{setModal(false);$('iframe.embed-responsive-item').attr('src', $('iframe.embed-responsive-item').attr('src').replace("autoplay=1&amp;", ""));}}>&times;</button>
                          <div className="popup_body">
                              <div className="video_ratio">
                                  <div dangerouslySetInnerHTML={{__html: data.wpPage.smallbusinessrestructure.smallVideo }} />
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
        subTxt={data.wpPage.smallbusinessrestructure.smallHt1Description}
        customClass={'middleFullText glpo_section help_many'}
      />
   
     
      
      <OurPeople
        title={''}
        text={''}
        data={businessData}
       showAll={0}
        liquidation={1}
      />
      <div class="row">
              <div class="col-lg-12 col-md-12 align-center">
                <Link className="btn btn-primary no-marg" to="/people/">
                  All People
                </Link>
              </div>
            </div>
      <Container 
        title={data.wpPage.smallbusinessrestructure.smBusinessTitle}
        subtitle={false}
        data={data.wpPage.smallbusinessrestructure.smBusinessTestimonial}
        slideColor={'#EBE9DE'}
      />
      <div className="cu_fixed">
          <a href="/contact"><img src="/images/sophie-img.png" />Contact Us</a>
      </div>
      <div className="home">
        <GetInTouch
          title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
          text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
        />
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
    wpPage(title: {eq: "Small Business Restructure"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      smallbusinessrestructure {
        smallBannerDesc
        smallBannerImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 526, height: 351, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }
        smallBannerTitle
        
        smallWymnuDescriptionWhyliquid {
          description
          image {
            altText
            mediaItemUrl
            localFile{
              publicURL
            }
          }
          title
        }
      
        smallWymnuImage {
          altText
          mediaItemUrl
        }
        smallWymnuLearnMoreLink
        smallWva1Description
        smallFdContent
        smallDelvContent
        smallFdImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 526, height: 351, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }
        smallWevaContent
        smallWevaButtonText
        smallWevaButtonLink
        smallWeva2ButtonText
        smallWeva2ButtonLink
        smallDcaDescription        
        smallDca1ButtonText
        smallDca1ButtonLink
        smallDca1VideoText
        smallVideo
        smallDcaImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 565, height: 372, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }                
        smallHtTitle
        smallHtDescription
        smallHt1Description
        smallHtImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 522, height: 462, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }
               
        smallWymnuTitle

        smBusinessTitle
        smBusinessDesc

        smBusinessTestimonial {
          smComment
          smDesignation
          smImage {
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 412, height: 280, cropFocus: CENTER, quality: 80) {
                  src
                }
              }
            }
          }
          smLearnMoreUrl
          smName
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
          phoneNumber
          registeredLiquidators
          staffImage2{
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 416, height: 450, cropFocus: CENTER, quality: 80) {
                  src
                }
              }
            }
          }
        }
        featuredImage {
          node {
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 416, height: 450, cropFocus: CENTER, quality: 80) {
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

export default ConsultBusiness
