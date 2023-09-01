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
  return (<div className="service consult-business liquidation voluntary_administration bankruptcy doc_1 safe_harbour media_moment media_moment_new">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.mediamoments.mediaBannerTitle}
        subtitle={''}
        text={data.wpPage.mediamoments.mediaBannerDesc}
        bannerImg={data.wpPage.mediamoments.mediaBannerImage}
        breadCrumbs={breadCrumbs}
        equalWidth={true}
      />


       <div className="liq_blocks va_blocks media_blocks">
        <div className="container">
          <div className="row">
              
              {data.wpPage.mediamoments.mediaWymnuDescriptionWhyliquid.map((d,key) => {
                return (
                   
                  <div className={((key+1)%3==0?'even col-md-12 mm_item col-lg-12':'col-md-6 mm_item col-lg-6')}>
                  <div  className={((key+1)%4==0)?'lb_txt4 ':(((key+1)%4==3)?'lb_txt3 ':(((key+1)%4==2)?'lb_txt2 ':'lb_txt1'))}>
                    <div className="lb_img">
                        <img src={d.mediaImage?.localFile?.publicURL} alt={d.image?.altText} />
                    </div>
                    <div className="lb_txt">
                      <h3 className="recovery-partner-title ">{d.mediaTitle?.trim()}</h3>
                      <h2 className="recovery-partner-desc" dangerouslySetInnerHTML={{ __html: d.mediaDescription}}></h2>
                     
                      <div><Link className="link_media" to={d.mediaReadMore} target="_blank">Read More <i class="fa fa-chevron-right" aria-hidden="true"></i></Link></div>                     
                    </div>
                    </div>
                  </div>)
              })}
          </div>
        </div>
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
    wpPage(title: {eq: "Media Moments"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      mediamoments {
        mediaBannerDesc
        mediaBannerImage {
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
        mediaBannerTitle
        
        mediaWymnuDescriptionWhyliquid {
          mediaDescription
          mediaImage {
            altText
            mediaItemUrl
            localFile {
              publicURL
            }
          }
          mediaTitle
          mediaReadMore
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
