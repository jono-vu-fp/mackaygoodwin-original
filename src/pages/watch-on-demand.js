import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-watch"
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
import Events from "../components/events/events-cmn"
import ActiveCampaign from "../components/activecampaign"

import $ from "jquery"

const Watchondemand = ({ data }) => {

  const vidRef = React.useRef(null);
  const [showModal, setModal] = React.useState(false);
  const [ytUrl, setYtUrl] = React.useState('');
  const [vdUrl, setVdUrl] = React.useState('');
  const [showVid, setShowVid] = React.useState(false);
  const setVideoUrl = (url,tp) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    if(tp){
      setVdUrl(url);
      setYtUrl('');
    }
    else{
      setVdUrl('');
      setYtUrl((match&&match[7].length==11)? match[7] : false);
    }
    setModal(true);
  }
  const handleStopVideo = () => {
    setModal(false);
    vidRef.current?.pause();
  }

  let whyMG = [];

  let businessData = [];
  let count = 0;
  data.allWpOurpeople.nodes.map((d,key) => {

    if(d.backInBusiness.registeredLiquidators){

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
      {/*<Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />*/}
      <TopBanner
        title={data.wpPage.doca.docaBannerTitle}
        subtitle={''}
        text={data.wpPage.doca.docaBannerDesc}
        bannerImg={data.wpPage.doca.docaBannerImage}
        breadCrumbs={breadCrumbs}
        equalWidth={true}
      />

    {/*  <section class="fullTxtSection middleFullText glpo_section cmin_sec"><div class="container"><div class="row">
      <div class="col-xl-9 col-lg-11 col-md-11 col-sm-12 fullTxt">Coming Soon</div>
      <div class="col-xl-9 col-lg-11 col-md-11 col-sm-12 fullSubTxt">
      <p>Want to watch in person?</p>
       <Link className="btn btn-primary" to="https://mackaygoodwin.com.au/insights/your-window-into-the-ato/">Secure your seat</Link>
      </div></div></div></section>*/}

       

      <Events
        title={'Webinars'}
        data={data.wpPage.eventsPageNew?.eventsnew}
        btn={false}
        setVideoUrl={setVideoUrl}
        setShowVid={setShowVid}
      />

      <div id="myModal" role="dialog" className={showModal?'in show modal fade':'modal fade'}>
      <div className="model_inner">
        <div className="popup_dialog">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal" onClick={()=>handleStopVideo()}>&times;</button>
            <div className="popup_body">
              {!showVid?<div className="video_form"><ActiveCampaign setShowVid={setShowVid} /></div>:
              <div className="video_ratio cc">
              {vdUrl?<video key={vdUrl} width="100%" ref={vidRef} controls><source src={vdUrl} type="video/mp4" />Your browser does not support the video tag.</video>:<iframe key={ytUrl} className="embed-responsive-item" src={'https://www.youtube.com/embed/'+ytUrl+'?autoplay=1&amp;amp;modestbranding=1&amp;amp;showinfo=0'} id="video" allowscriptaccess="always"></iframe>}
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
 
    </Layout>
  </div>
  )
}
export const query = graphql`
  {
    wpPage(title: {eq: "Watch On Demand"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      watchOnDemandPage{
        docaBannerDesc
        docaBannerImage {
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
        docaBannerTitle
      }
      eventsPageNew{
        eventsnew {
          ... on WpEvent {
            id
            title
            excerpt
            content
            slug
            featuredImage {
              node {
                altText
                mediaItemUrl
                localFile {
                  childImageSharp {
                    resize (width: 660, height: 350, cropFocus: CENTER, quality: 100) {
                      src
                    }
                  }
                }
              }
            }
            eventsOption {
              eventDate
              buttonLabel
              registerUrl
              eventStatus
              recordingUrl {
                url
              },
              video {
                mediaItemUrl
              },
              shortDescription
            }
          }
        }
      }
    
      doca {
        docaBannerDesc
        docaBannerImage {
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
        docaBannerTitle
        
        docaWymnuDescriptionWhyliquid {
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
            localFile {
              childImageSharp {
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 80) {
                  src
                }
              }
            }
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
            localFile {
              childImageSharp {
                resize (width: 565, height: 375, cropFocus: CENTER, quality: 80) {
                  src
                }
              }
            }
          }        
        docaHtTitle
        docaHtDescription
        docaHt1Description
        docaHtImage {
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
                localFile {
                  childImageSharp {
                    resize (width: 412, height: 280, cropFocus: CENTER, quality: 80) {
                      src
                    }
                  }
                }
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

export default Watchondemand
