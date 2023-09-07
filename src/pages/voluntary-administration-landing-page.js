import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopBanner from "../components/top-banner-8";
import GetInTouch from "../components/get-in-touchlanding";
import Accordian from "../components/accordian/accordian-bankruptcy";
import FullText from "../components/full-text";
import ReciveryPlan from "../components/recovery-plan3"

import Container from "../components/slider/container-restructuring-nolink";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import News from "../components/news/list2";

import OurPeople from "../components/our-people-liquid/our-people3"

import GetInTouchPPForm from "../components/get-in-touch-liquidation-popup";
import $ from "jquery"

const Voluntary = ({ data }) => {

  let whyMG1 = [];
  data.wpPage.voluntaryAdministrationLandingPageOptions.valpFaqs.map((d) => {
    return whyMG1.push({ title: d.question1, description: d.answer, tag: '' });
  })

  const [showVid, setShowVid] = React.useState(false);

  const handleStopVideo = () => {
    setShowVid(false);
  }

  let businessData = [];
  data.wpPage.voluntaryAdministrationLandingPageOptions.peoples.map((d) => {
    return businessData.push({
      title: d.title,
      subtitle: d.backInBusiness.designation,
      text: d.backInBusiness.location,
      certification: d.backInBusiness.certification,
      content: d.content,
      linkedin: d.backInBusiness.linkedin,
      email: d.backInBusiness.email,
      phone: d.backInBusiness.phoneNumber,
      img: d.featuredImage?.node,
      altimg: d.backInBusiness?.staffImage2,
      designationType: d.backInBusiness.designationType,
      registeredLiquidators: d.backInBusiness.registeredLiquidators,
       slug: d.slug
    });
  });

  const [showModal, setModal] = React.useState(false); 
  

  
  // const formDetailContext = React.createContext(null);
  const [fromDetails, setFormDetails] = React.useState(0);
  const [fromDetails2, setFormDetails2] = React.useState(0);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const showContactForm = () => {
    $('#br_popup').addClass('show');
  }
  return (
    <div className="restructure_land bankruptcy service liquidation val_page">
      <Layout>
        <Seo
          title={data.wpPage.metaFields?.metaTitle}
          description={data.wpPage.metaFields?.metaDescription}
        />
        <TopBanner
          title={
            data.wpPage?.voluntaryAdministrationLandingPageOptions.valpBannerTitle
          }
          subtitle={
            data.wpPage?.voluntaryAdministrationLandingPageOptions.valpBannerSubtitle
          }
          bannerImg={
            data.wpPage?.voluntaryAdministrationLandingPageOptions.valpBannerImage
          }
        />

        <div class="rtsec3">
          <div class="container container2">
          <div class="carousel_row">
            <Carousel showDots={true} responsive={responsive} infinite={true}  autoPlay={true} autoPlaySpeed={2000}>


            {data.wpPage.voluntaryAdministrationLandingPageOptions.valpTestimonialsRow.map((d,key) => {
             return <div class="ctestitem">
               
             
             <div dangerouslySetInnerHTML={{ __html: d.valpTestimonialsContent }}></div>
             <h4>-{d.valpTestimonialsHeading}</h4>
            </div>
            })}
      </Carousel> 
          </div>
            
          </div>
          </div>

        

        
          <div className="wbl_section">
        <div className="container">
          <div className="wbl_right">
            <a onClick={()=>setShowVid(true)}><img src={data.wpPage.voluntaryAdministrationLandingPageOptions.valpBusinessThumbnail?.localFile?.childImageSharp?.resize?.src} /></a>
          </div>
          <div className="wbl_left">
            <h3>{data.wpPage.voluntaryAdministrationLandingPageOptions.valpBusinessTitle}</h3>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.voluntaryAdministrationLandingPageOptions.valpBusinessDesc }}></div>
             <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>
              Contact us
               </button>
             
          </div>
        </div>
      </div>


      <div className="liq_blocks va_blocks">
        <div className="container">
          <div className="row">
               <h3>{data.wpPage.voluntaryAdministrationLandingPageOptions.valpWymnuTitle}</h3> 
              {data.wpPage.voluntaryAdministrationLandingPageOptions.valpWymnuDescription.map((d) => {
                return (
                  <div className="col-md-4 col-lg-4">
                    <div className="lb_img">
                        <img src={d.image?.localFile?.publicURL} alt={d.image?.altText} />
                    </div>
                    <div className="lb_txt">
                      <p className="recovery-partner-title">{d.title?.trim()}</p>
                      <p className="recovery-partner-desc">{d.description?.trim()}</p>
                    </div>
                  </div>)
              })}
          </div>
        </div>
      </div>
        

        
      <div className="weva_section">
        <div className="container">
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.voluntaryAdministrationLandingPageOptions.valpContent }}></div>
            <button className="btn btn btn-primary" onClick={()=>showContactForm()}>
             Learn More
               </button>
            {/*{data.wpPage.voluntaryAdministrationLandingPageOptions.valpButtonLink !== null && data.wpPage.voluntaryAdministrationLandingPageOptions.valpButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.voluntaryAdministrationLandingPageOptions.valpButtonLink}>{data.wpPage.voluntaryAdministrationLandingPageOptions.valpButtonText}</Link> : ""}*/}
        </div>
      </div>


      <FullText
        text={data.wpPage.voluntaryAdministrationLandingPageOptions.valpLiquidationTagline}
        subTxt={data.wpPage.voluntaryAdministrationLandingPageOptions.valpLiquidationDescription}
        customClass={'middleFullText glpo_section'}
      />


      <ReciveryPlan
        data={data.wpPage.voluntaryAdministrationLandingPageOptions.valpProcess}
        titleDisplay={false}
        customClass={'glpo_reco_section va_glpo_reco_section'}
      />


      <div className="track_section">
        <div className="container">
          <h2>Get back on track today.</h2>
           <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>
          Contact Us
           </button>
           
        </div>
      </div>

      <div class="grey_faq">
      <Accordian
          title={data.wpPage.voluntaryAdministrationLandingPageOptions.valpFaqsTitle}
          showEnquireButton={false}
          data={whyMG1}
        />
        </div>

      <div class="vcfo_section na_section new_landing"> 
    <section class="news-list allnews_list">

        <div class="container">
        <div class="row">
                <div class="col-lg-12 col-md-12">
            <h2>Take a deep dive into restructuring</h2></div>
          </div>

          <News
        title={''}
        data={data.wpPage?.voluntaryAdministrationLandingPageOptions.articles1}
        btn={false}
      />
            
        </div>
    </section>
</div>
        

        
        <Container
          title={
            data.wpPage.voluntaryAdministrationLandingPageOptions.valpBusinessTitle2
          }
          subtitle={""}
          data={
            data.wpPage.voluntaryAdministrationLandingPageOptions.valpBusinessTestimonial
          }
          slideColor={"#EBE9DE"}
        />


        <section className="news-articles restructurenews-articles" id="people">
          <div className="container">
            <div className="row">
              <div className="people_head">
                <h2>{data.wpPage.voluntaryAdministrationLandingPageOptions.valpPeopleHead} </h2>
                 <div className="p" dangerouslySetInnerHTML={{ __html: data.wpPage.voluntaryAdministrationLandingPageOptions?.valpPeopleContent }}></div>
              </div>
            </div>

            <OurPeople
              title={""}
              text={""}
              data={businessData}
              showAll={0}
              liquidation={0}
            />
             <div class="row">
              <div class="col-lg-12 col-md-12 align-center">
                <Link className="btn btn-primary me-5" to="/people/">
                  All People
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="home">
      <GetInTouch
         title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
         text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
       />
    </div>
        

        
    <div id="myModal" role="dialog" className={showVid?'in show modal fade':'modal fade'}>
      <div className="model_inner">
        <div className="popup_dialog">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal" onClick={()=>handleStopVideo()}>&times;</button>
            <div className="popup_body">
              <div className="video_ratio cc">
              <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/'+data.wpPage.voluntaryAdministrationLandingPageOptions.valpBusinessVideo+'?autoplay=1&amp;amp;modestbranding=1&amp;amp;showinfo=0'} id="video" allowscriptaccess="always"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          
          <GetInTouchPPForm
          title={
            data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings
              .getInTouchTitle
          }
          text={
            data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings
              .getInTouchDescription
          }
          image={
            data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings
              .gitImage
          }
        />
        
      </Layout>
    </div>
  );
};

export const query = graphql`
  {
    wpPage(title: {eq: "Voluntary Administration Landing page"}) {
      voluntaryAdministrationLandingPageOptions {
        valpBannerTitle
        valpBannerSubtitle
        valpBannerImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 526, height: 473, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }

        valpTestimonialsRow {
          valpTestimonialsHeading
          valpTestimonialsContent
        }

        valpBusinessTitle
        valpBusinessDesc
        valpBusinessImage {
          altText
          mediaItemUrl
        }
        valpBusinessThumbnail {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 697, height: 378, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }
        
        valpBusinessVideo

        valpWymnuTitle


        valpWymnuDescription {
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

        valpContent
        valpButtonText
        valpButtonLink

        valpLiquidationTagline
        valpLiquidationDescription
        valpProcess {
          valpProcessTitle
        }
        valpSubDescription

        valpFaqsTitle
        valpFaqs {
          question1
          answer
        }

        valpBusinessTitle2
        valpBusinessTestimonial {
          comment
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
          url
          name
        }

        peoples {
          ... on WpOurpeople {
            id
            slug
            title
            backInBusiness{
              designation
              location
              certification
              linkedin
              email
              designationType
              registeredLiquidators
              phoneNumber
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
            content
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
          }
        } 
        valpPeopleHead
        valpPeopleContent

        articles1 {
          ... on WpArticle {
            id
            slug
            title
            excerpt
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
          }
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
        slug
        backInBusiness {
          designation
          location
          certification
          designationType
          linkedin
          email
          phoneNumber
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
`;

export default Voluntary;
