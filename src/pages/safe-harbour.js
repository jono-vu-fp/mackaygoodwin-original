import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-4"
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
  return (<div className="service restructure consult-business liquidation voluntary_administration bankruptcy doc_1 safe_harbour">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.safeharbour.safeBannerTitle}
        subtitle={''}
        text={data.wpPage.safeharbour.safeBannerDesc}
        bannerImg={data.wpPage.safeharbour.safeBannerImage}
        breadCrumbs={breadCrumbs}
        equalWidth={true}
      />

       <div className="liq_blocks va_blocks doca_2">
        <div className="container">
          <div className="row">
              
              {data.wpPage.safeharbour.safeWymnuDescriptionWhyliquid.map((d) => {
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
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.safeharbour.safeWevaContent }}></div>
            {data.wpPage.safeharbour.safeWevaButtonLink !== null && data.wpPage.safeharbour.safeWevaButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.safeharbour.safeWevaButtonLink}>{data.wpPage.safeharbour.safeWevaButtonText}</Link> : ""}
        </div>
      </div>

      <div className="wva_section key_expert">
        <div className="container">
          <div className="wva_left">
            <img src={data.wpPage.safeharbour.safeFdImage?.mediaItemUrl} alt={data.wpPage.safeharbour.safeFdImage?.altText} />
          </div>
          <div className="wva_right">
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.safeharbour.safeFdContent }}></div>
          </div>
        </div>
      </div>

       <div className="weva_section obstacles">        
         <FullText
          subTxt={data.wpPage.safeharbour.safeWva1Description}
          customClass={'middleFullText obstacles_text'}
        />
       <div className="container"> {data.wpPage.safeharbour.safeWeva2ButtonLink !== null && data.wpPage.safeharbour.safeWeva2ButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.safeharbour.safeWeva2ButtonLink}>{data.wpPage.safeharbour.safeWeva2ButtonText}</Link> : ""}
      </div>
      </div>

      <div className="fd_section myexperience_section">
        <div className="container"> 
        <div className="row">    
         <div class="col-md-5 col-lg-5">
            <img src={data.wpPage.safeharbour.safeDcaImage.mediaItemUrl} alt={data.wpPage.safeharbour.safeDcaImage.altText} />
          </div>       
          <div class="col-md-7 col-lg-7">
              <div dangerouslySetInnerHTML={{ __html: data.wpPage.safeharbour.safeDcaDescription }}></div>
            
          </div>
         
        </div>
        </div>
      </div>

      <section className="health_check">
          <div className="container">
            <div className="ht_right">
              <img className="img-fluid" src={data.wpPage.safeharbour.safeHtImage?.mediaItemUrl} alt={data.wpPage.safeharbour.safeHtImage?.altText} />
            </div>

            <div className="ht_left">
              <h2>{data.wpPage.safeharbour.safeHtTitle}</h2>
              <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.safeharbour?.safeHtDescription }}></div>
          

              {data.wpPage.safeharbour.safeDca1ButtonLink !== null && data.wpPage.safeharbour.safeDca1ButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.safeharbour.safeDca1ButtonLink}>{data.wpPage.safeharbour.safeDca1ButtonText}</Link> : ""}

              <button  className="btn btn-primary me-5" type="button" onClick={()=>setModal(true)} data-toggle="modal" data-target="#myModal">{data.wpPage.safeharbour.safeDca1VideoText}</button>
              <div id="myModal" role="dialog" className={showModal?'in show modal fade':'modal fade'}>
              <div className="model_inner">
                  <div className="popup_dialog">
                      <div className="modal-content">
                          <button type="button" className="close" data-dismiss="modal" onClick={()=>{setModal(false);$('iframe.embed-responsive-item').attr('src', $('iframe.embed-responsive-item').attr('src').replace("autoplay=1&amp;", ""));}}>&times;</button>
                          <div className="popup_body">
                              <div className="video_ratio">
                                  <div dangerouslySetInnerHTML={{__html: data.wpPage.safeharbour.safeVideo }} />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

            </div>
          </div>
        </section>

         <section className="ht_section">
        <div className="container">
          <div className="ht_left">
            <img className="img-fluid" src={data.wpPage.safeharbour.safeThriveImage?.mediaItemUrl} alt={data.wpPage.safeharbour.safeThriveImage?.altText} />
          </div>
          <div className="ht_right">
            <h2>{data.wpPage.safeharbour.safeThriveTitle}</h2>
            <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.safeharbour?.safeThriveDescription }}></div>
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

          <FullText
        subTxt={data.wpPage.safeharbour.safeHt1Description}
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
    wpPage(title: {eq: "Safe Harbour"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      safeharbour {
        safeBannerDesc
        safeBannerImage {
          altText
          mediaItemUrl
        }
        safeBannerTitle
        
        safeWymnuDescriptionWhyliquid {
          description
          image {
            altText
            mediaItemUrl
          }
          title
        }
      
        safeWymnuImage {
          altText
          mediaItemUrl
        }
        safeWymnuLearnMoreLink
        safeWva1Description
        safeFdContent
        safeFdImage {
            altText
            mediaItemUrl
          }
        safeWevaContent
        safeWevaButtonText
        safeWevaButtonLink
        safeWeva2ButtonText
        safeWeva2ButtonLink
        safeDcaDescription        
        safeDca1ButtonText
        safeDca1ButtonLink
        safeDca1VideoText
        safeVideo
        safeDcaImage {
            altText
            mediaItemUrl
          }
        safeThriveTitle
        safeThriveDescription
        safeThriveImage {
          altText
          mediaItemUrl
        }          
        safeHtTitle
        safeHtDescription
        safeHt1Description
        safeHtImage {
          altText
          mediaItemUrl
        }
               
        safeWymnuTitle
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
