import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-7"
import GetInTouch from "../components/get-in-touch3"
import OurPeople from "../components/our-people-list/our-people"
import AboutUs from "../components/about-us"
import History from "../components/history"
import Career from "../components/career"
import Awards from "../components/awards2"
import Accordian from "../components/accordian/accordian"
import { Link } from "gatsby"
import CurveLeft from "../components/curve-left"
import HealthForm from "../components/health-form"
import EbookForm from "../components/ebook-form"
import { element } from "prop-types"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { formHealthContext, formEbookContext } from '../components/context';
import ActiveCampaignHowthrive from "../components/activecampaign-howthrive"
import $ from "jquery"
// const newsData = [
//   {
//     "imgSrc":"/images/news.jpeg",
//     "title": "How will a business health check change the direction of your business?",
//     "text":"If you’re in survival mode right now, you’re not alone. Thousands of Australian businesses are being tested by the fallout from COVID-19. But no business director can afford to neglect ..."
//   },
//   {
//     "imgSrc":"/images/news.jpeg",
//     "title": "Struggling Tourism Operators To Seek Help Before JobKeeper Ends",
//     "text":"One of Australia’s leading restructuring advisers, Mackay Goodwin, is urging struggling travel and tourism operators to urgently seek financial advice before the Government winds back JobKeeper payments at the end ..."
//   },
//   {
//     "imgSrc":"/images/news.jpeg",
//     "title": "Why you need a budget for your business?",
//     "text":"You need a budget for your business. It doesn’t actually matter what size your business is – whether it’s a sole proprietor right through to a large corporation, if you’re ..."
//   },
// ]

// const whyMG = [
//   {
//     "title": "Innovation",
//     "text": "We’re in the business of resolution. Backed by leading technology and innovative thinking, we make the right decisions at the right time. Capturing opportunity and avoiding obstacles. Delivering the best possible outcome, every day."
//   },
//   {
//     "title": "Focus",
//     "text": "To achieve success takes determination and focus. We leave no stone unturned. Tailoring solutions to meet your specific needs, on top of every moment. Getting you where you need to be, step by step."
//   },
//   {
//     "title": "Action-orientated",
//     "text": "We know time is of the essence. So we put positive action into practice. Taking the initiative, we anticipate your needs and move ahead as swiftly as possible, all without missing a trick."
//   },
//   {
//     "title": "Understanding",
//     "text": "We see beyond the facts and figures, always mindful of the emotional and financial weight. We’ll guide you through with understanding and transparency. With us, you’ll always know where you stand."
//   }
// ]

// const businessData = [
//   {
//     "title": "Dominic Calabretta",
//     "subtitle": "Chief Executive",
//     "text": "Registered Liquidator by ASIC Sydney"
//   },
//   {
//     "title": "Kate Concannon",
//     "subtitle": "Chief Experience Officer",
//     "text": "Sydney"
//   },
//   {
//     "title": "Andrew Ngo",
//     "subtitle": "Director",
//     "text": "Sydney"
//   },
//   {
//     "title": "Laurentia Evelina",
//     "subtitle": "Senior Analyst",
//     "text": "Sydney"
//   },
//   {
//     "title": "Grahame Ward",
//     "subtitle": "Director",
//     "text": "Registered Liquidator by ASIC Sydney"
//   },
//   {
//     "title": "Lili Safa",
//     "subtitle": "Supervisor",
//     "text": "Sydney"
//   }
// ]

const MgWay = ({ data }) => {

  const [showForm, setForm] = React.useState(false);
    
  const breadCrumbs = [
    { link: "/", title: "Home" },
    { title: "Referral" },
  ]
  const checkVideo = () =>{
    setForm(true);
  }

  var t = setInterval(() => {
    if (typeof window !== "undefined" && window.location.hash !== "") {
      const element = document.getElementById(window.location.hash.replace("#", ""));
      if (typeof (element) != 'undefined' && element != null) {
        setTimeout(() => {
          document.getElementById(window.location.hash.replace("#", "")).scrollIntoView();
          clearInterval(t);
        }, 600)
      }
    }
  }, 500)
  const toggleVideo = () =>{
    let video = document.querySelector('.video');
    let playpause = document.querySelector('.playpause');
    if (video.paused) {
      video.play();
      playpause.setAttribute('hiddens', '');
    } else {
      video.pause();
      playpause.removeAttribute('hiddens');
    }
  }
  const [vdUrl, setVdUrl] = React.useState('');
  const [showModal, setModal] = React.useState(false);
  const setVideoUrl = (url) => {
    setVdUrl(url);
    setModal(true);
  }
  const [fromDetails, setFormDetails] = React.useState(0);
  const [fromEbookDetails, setFormEbookDetails] = React.useState(0);
  const value = { fromDetails, setFormDetails };
  const valueEbook = { fromEbookDetails, setFormEbookDetails };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (<div className="mgway reffreal-sec">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.ReferralPageOptions.refeBannerTitle}
        subtitle={data.wpPage.ReferralPageOptions.refeBannerSubtitle}
        text={data.wpPage.ReferralPageOptions.refeBannerDesc}
        bannerImg={data.wpPage.ReferralPageOptions.refeBannerImage}
        breadCrumbs={breadCrumbs}
        sendUrl={data.wpPage.ReferralPageOptions.refeLearnMoreUrl}
      />



       <div className="liq_blocks ref_mid_block">
        <div className="container">
          <div className="row">
              
              {data.wpPage.ReferralPageOptions.midDescription.map((d) => {
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

              <div className="but-sign"><Link to="#banner-section"> Sign Up</Link></div>
          </div>
        </div>
      </div>

       <section  class="wva_section about_section  mg_acnew4 refe_ondemand">
       <div class="container">    
       <div  className="row">    
        <div className="wva_left">
              <img class="img-fluid" src={data.wpPage.ReferralPageOptions.refeOndemandImage.mediaItemUrl} alt="data.wpPage.ReferralPageOptions.refeOndemandImage.altText"/>          
          </div>
          <div className="wva_right">
           <h3>{data.wpPage.ReferralPageOptions.refeOndemandTitle}</h3>
           <h4>{data.wpPage.ReferralPageOptions.refeOndemandTagline}</h4> 
              <div className="ondem-dec" dangerouslySetInnerHTML={{__html: data.wpPage.ReferralPageOptions.refeOndemandDescription }} />
               <Link className="btn btn-primary" to={data.wpPage.ReferralPageOptions.refeBooknowUrl}>Book Now</Link>
          </div> 
           </div>         
       </div>
    </section>
     


       <div className="wva_section about_section ref-about" id="about">
        <div className="container">
       

          <div className="wva_left">

          <div className="wva_video">
          <img onClick={()=>setVideoUrl(data.wpPage.ReferralPageOptions.refeAboutVideo?.mediaItemUrl)} src={data.wpPage.ReferralPageOptions.refeAboutVideoCover?.mediaItemUrl} alt={data.wpPage.ReferralPageOptions.refeAboutVideoCover?.altText} />
          </div>      
           
          </div>
          <div className="wva_right reffreal-wva-right">
            <h3>{data.wpPage.ReferralPageOptions.refeContentTitle}</h3>
            <div dangerouslySetInnerHTML={{__html: data.wpPage.ReferralPageOptions.refeContentDesc }} /> 
          </div>
        </div>
      </div>


          <div className="wcmg_section mg_approach referral_sec">
          <div className="container">
            <h2>{data.wpPage.ReferralPageOptions.refeApproachTitle}</h2>
        
            <ul>
              {data.wpPage.ReferralPageOptions.refeApproachQA.map((d, key) => {
                return <li><div className="wcmg_img"><img src={d.icon.mediaItemUrl} alt="" /></div><h4>{d.question}</h4>
                <div dangerouslySetInnerHTML={{__html: d.answer}} />
                </li>
              })} 
            </ul>
          </div>
        </div>  


         <section className="ht_section ht_bottom">
        <div className="container">
          <div className="ht_left">
            <img className="img-fluid" src={data.wpPage.ReferralPageOptions.refeImage?.mediaItemUrl} alt={data.wpPage.ReferralPageOptions.refeImage?.altText} />
          </div>
          <div className="ht_right">
            <h2>{data.wpPage.ReferralPageOptions.refeTitle}</h2>
            <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.ReferralPageOptions?.refeDescription }}></div>


            <formEbookContext.Provider value={valueEbook}>
              <button className="btn btn-primary me-5" onClick={() => { checkVideo() }}>Download Now</button>
              <EbookForm
                title={'Download e-guide'}
                text={'Download your free copy today and get on the path to recovery'}
              />
            </formEbookContext.Provider>
          </div>
        </div>
      </section>  


         <section className="health_check home_helthcheck refe_health">
          <div className="container">
            <div className="ht_right">
              <img className="img-fluid" src={data.wpPage.ReferralPageOptions.refeHealthCheckImage?.mediaItemUrl} alt={data.wpPage.ReferralPageOptions.refeHealthCheckImage?.altText} />
            </div>

            <div className="ht_left">
              <h2>{data.wpPage.ReferralPageOptions.refeHealthCheckTitle}</h2>
              <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.ReferralPageOptions?.refeHealthCheckDesc }}></div>
          

              {data.wpPage.ReferralPageOptions.refeButtonUrl !== null && data.wpPage.ReferralPageOptions.refeButtonUrl !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.ReferralPageOptions.refeButtonUrl}>{data.wpPage.ReferralPageOptions.refeButtonLabel}</Link> : ""}

              <div id="myModal" role="dialog" className={showForm?'in show modal fade':'modal fade'}>
              <div className="model_inner">
                <div className="popup_dialog">
                  <div className="modal-content">
                    <button type="button" className="close" onClick={()=>setForm(false)} data-dismiss="modal">&times;</button>
                    <div className="popup_body">
                      <div className="video_form"><ActiveCampaignHowthrive setForm={setForm} /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



              <button  className="btn btn-primary me-5" type="button" onClick={()=>setModal(true)} data-toggle="modal" data-target="#myModal">{data.wpPage.ReferralPageOptions.refeVideoButtonLabel}</button>
              <div id="myModal" role="dialog" className={showModal?'in show modal fade':'modal fade'}>
              <div className="model_inner">
                  <div className="popup_dialog">
                      <div className="modal-content">
                          <button type="button" className="close" data-dismiss="modal" onClick={()=>{setModal(false);$('iframe.embed-responsive-item').attr('src', $('iframe.embed-responsive-item').attr('src').replace("autoplay=1&amp;", ""));}}>&times;</button>
                          <div className="popup_body">
                              <div className="video_ratio">
                                  <div dangerouslySetInnerHTML={{__html: data.wpPage.ReferralPageOptions.refeVideoEmbedCode }} />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

            </div>
          </div>
        </section>


          <div className="mg_slide_part no-bg"> 
            <div className="container">

             <h2 dangerouslySetInnerHTML={{ __html: data.wpPage.ReferralPageOptions.refeMgTitle }}></h2>

                 <div className="image-container hs_img">                     
                    <Carousel responsive={responsive}>
                        { data.wpPage.ReferralPageOptions.refeMgImage.map((d) => {
                          return <div><img src={d.image.mediaItemUrl} /></div>
                        })}
                    </Carousel>            
                  </div> 

            </div>

            </div>



            

         


        <div id="myModal" role="dialog" className={showModal?'in show modal cr_video_pp fade':'modal cr_video_pp fade'}>
        <div className="model_inner">
          <div className="popup_dialog">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" onClick={()=>setModal(false)}>&times;</button>
              <div className="popup_body">
                <div className="video_ratio">
                {vdUrl?<video key={vdUrl} width="100%" controls><source src={vdUrl} type="video/mp4" />Your browser does not support the video tag.</video>:null}
                </div>
                
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
    wpPage(title: {eq: "Referral"}) {
      ReferralPageOptions {
        
        refeAboutVideo {
          altText
          mediaItemUrl
        }
        refeAboutVideoCover {
          altText
          mediaItemUrl
        }
        refeAboutTitle
        refeApproachQA {
          answer
          question
          approachtag
          icon {
            altText
            mediaItemUrl
          }
        }
        refeBooknowUrl
        refeOndemandTitle
        refeOndemandDescription
        refeOndemandTagline
        refeOndemandImage {
          altText
          mediaItemUrl
        }
        refeMgTitle
        refeMgImage{
          image{
            altText
            mediaItemUrl
          } 
        }

        refeApproachTitle
        refeBannerDesc
        refeBannerImage {
          altText
          mediaItemUrl
        }
        refeTitle
        refeDescription
        refeImage {
          altText
          mediaItemUrl
        }
        refeHealthCheckImage {
          altText
          mediaItemUrl
        }
        midDescription {
          description
          image {
            altText 
            mediaItemUrl
          }
          title
        }
        
        refeVideoEmbedCode
        refeVideoButtonLabel
        refeButtonLabel
        refeButtonUrl
        refeHealthCheckDesc
        refeHealthCheckTitle
        refeButtonLabel
        refeBannerTitle       
        refeContentDesc
        refeContentTitle            
        refeMgAwardTitle
        refeMgAwardPoints {
          fieldGroupName
          mgPointDesc
        }
      }
      metaFields {
        metaDescription
        metaTitle
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
            speakExpertLink
            speakExpertTitle
          }
        }
      }
    }
    allWpOurpeople(sort: {order:  ASC, fields: menuOrder}) {
      nodes {
        title
        slug
        backInBusiness {
          designation
          location
          certification
          designationType
          linkedin
          email
          phoneNumber
          staffImage2{
            altText
            mediaItemUrl
          }
        }
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
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

export default MgWay
