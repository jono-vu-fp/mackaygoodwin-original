import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopBanner from "../components/top-banner-8";
import ImageLeftLayout from "../components/image-left-layout4";
import ImageRightLayout from "../components/image-right-layout2";
import GetInTouch from "../components/get-in-touchlanding";
import Accordian from "../components/accordian/accordian-bankruptcy";
import CapabilityForm from "../components/capability-form";
import CapabilityFormNew from "../components/capability-form-new";
import FullText from "../components/full-text";
import { formDetailContext } from "../components/context";
import GetInTouchPPForm from "../components/get-in-touch-bankruptcy-popup";

import Container from "../components/slider/container-restructuring";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import News from "../components/news/list2";

import OurPeople from "../components/our-people-liquid/our-people3"

import $ from "jquery"

const CompanyLiquidationMelbourne = ({ data }) => {
  let whyMG = [];
  data.wpPage.companyLiquidationMelbournePageOptions.clmIconWithTextr.map((d) => {
    return whyMG.push({ title: d.clmItext });
  });
  data.wpPage.companyLiquidationMelbournePageOptions.clmTestimonialsRowr.map(
    (d) => {
      return whyMG.push({
        title: d.clmTestimonialsHeadingr,
        testdescription: d.clmTestimonialsContentr,
      });
    }
  );
  data.wpPage.companyLiquidationMelbournePageOptions.clmProfessionalGrid.map(
    (d) => {
      return whyMG.push({ title: d.clmPtitle, testdescription: d.clmProcontent, testlink: d.clmRprolink });
    }
  );
  

  let whyMG1 = [];
  data.wpPage.companyLiquidationMelbournePageOptions.clmBrFaqs2.map((d) => {
    console.log(d);
    return whyMG1.push({ title: d.question2, description: d.answer2, tag: "" });
  });

   const [showVid, setShowVid] = React.useState(false);
   const [showVid1, setShowVid1] = React.useState(false);



  const handleStopVideo = () => {
    setShowVid(false);
  }
  const handleStopVideo1 = () => {
    setShowVid1(false);
  }

  let businessData = [];
  data.wpPage.companyLiquidationMelbournePageOptions.clmPeoples2.map((d) => {
    return businessData.push({
      title: d.title,
      subtitle: d.backInBusiness.designation,
      text: d.backInBusiness.location,
      certification: d.backInBusiness.certification,
      content: d.content,
      linkedin: d.backInBusiness.linkedin,
      email: d.backInBusiness.email,
      phone: d.backInBusiness.phoneNumber,
      altimg: d.backInBusiness?.staffImage2,
      img: d.featuredImage?.node,
      designationType: d.backInBusiness.designationType,
      registeredLiquidators: d.backInBusiness.registeredLiquidators,
      slug: d.slug
    });
  });

   const [showModal, setModal] = React.useState(false); 

  const breadCrumbs = [
    { link: "/", title: "Home" },
    { link: "#", title: "Services" },
    { title: "Restructure & Turnaround" },
  ];
  // const formDetailContext = React.createContext(null);
  const [fromDetails, setFormDetails] = React.useState(0);
  const [fromDetails2, setFormDetails2] = React.useState(0);
  const [curTab, changeTab] = React.useState(1);
  const value = { fromDetails, setFormDetails };
  const value2 = { fromDetails2, setFormDetails2 };
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
    <div className="restructure_land bankruptcy service liquidation clm-page">
      <Layout>

      <Seo
          title={data.wpPage.metaFields?.metaTitle}
          description={data.wpPage.metaFields?.metaDescription}
        />
        <TopBanner
          title={
            data.wpPage?.companyLiquidationMelbournePageOptions.clmRbannerTitle
          }
          subtitle={
            data.wpPage?.companyLiquidationMelbournePageOptions.clmRbannerSubtitle
          }
          bannerImg={
            data.wpPage?.companyLiquidationMelbournePageOptions.clmRbannerImage
          }
          bannerContent={
            data.wpPage?.companyLiquidationMelbournePageOptions.clmBannerContent
          }
        />

        <div class="contact-map">
          
           
        <div class="container">
        
        <div class="left-map">
         <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage.companyLiquidationMelbournePageOptions
                      .contactMap,
                }}
              ></div>
          </div>
              <div class="right-map">
       
                <h3> {data.wpPage.companyLiquidationMelbournePageOptions.contactTitle}</h3>
         <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage.companyLiquidationMelbournePageOptions
                      .contactDescription,
                }}
              ></div>

               <Link className="btn btn-primary" to="/contact/">
                Contact us
              </Link></div>
        </div>
        </div>


        <div class="rtsec2">
          <div class="container container2">
           <h2>About your recovery partner</h2>
            <ul>
              {data.wpPage.companyLiquidationMelbournePageOptions.clmIconWithTextr.map(
                (d, key) => {
                  return (
                    <li>
                      <img src={d.clmGicon?.localFile?.publicURL} />

                      <div dangerouslySetInnerHTML={{ __html: d.clmItext }}></div>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>


         <div class="rtsec3">
          <div class="container container2">
            <div class="carousel_row">
              <Carousel showDots={true} responsive={responsive} infinite={true}  autoPlay={true} autoPlaySpeed={2000}>

                {data.wpPage.companyLiquidationMelbournePageOptions.clmTestimonialsRowr.map(
                  (d, key) => {
                    return (
                      <div class="ctestitem">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: d.clmTestimonialsContentr,
                          }}
                        ></div>
                        <h4>-{d.clmTestimonialsHeadingr}</h4>
                      </div>
                    );
                  }
                )}
              </Carousel>
            </div>
          </div>
        </div>

      <div class="val_page clm-sec-4">
       <div className="wbl_section">
              <div className="container">
                <div className="wbl_right">
                 <h3>{data.wpPage.companyLiquidationMelbournePageOptions.keyMomentsTitle}</h3>
                  <div dangerouslySetInnerHTML={{ __html: data.wpPage.companyLiquidationMelbournePageOptions.keyMomentsDesc }}></div>   
                        
                  
                </div>
                <div className="wbl_left">
                <a href="javascript:void(0);" onClick={()=>setShowVid(true)}><img src={data.wpPage.companyLiquidationMelbournePageOptions.keyMomentsThumbnail?.localFile?.childImageSharp?.resize?.src} /></a>
                 
                </div>
              </div>
            </div>
       </div>

         <div className="wcmg_section">
          <div className="container">
            <h2>{data.wpPage.whyChooseMg1Options.whyMg1Title}</h2>
            <ul>
              {data.wpPage.whyChooseMg1Options.whyMg1Points.map((d, key) => {
                return <li><div className="wcmg_img"><img src={d.whyMg1Icon.localFile?.publicURL} alt="" /></div><h4>{d.whyMg1Title}</h4><p>{d.whyMg1Description}</p></li>
              })}
            </ul>
          </div>
        </div>


         <div class="val_page clm-sec-4 clm-sec-6">
       <div className="wbl_section">
              <div className="container">
                <div className="wbl_right">
                 <h3>{data.wpPage.companyLiquidationMelbournePageOptions.corLiqTitle}</h3>
                  <div dangerouslySetInnerHTML={{ __html: data.wpPage.companyLiquidationMelbournePageOptions.corLiqDesc }}></div>   
                  <Link className="btn btn-primary" to="/liquidation/">
               Find out more
              </Link>                        
                  
                </div>
                <div className="wbl_left">
                <a href="javascript:void(0);" onClick={()=>setShowVid1(true)}><img src={data.wpPage.companyLiquidationMelbournePageOptions.corLiqThumbnail?.localFile?.childImageSharp?.resize?.src} /></a>
                 
                </div>
              </div>
            </div>
       </div>




         <section  class="wva_section about_section history_section identifix_sec2  mg_acnew4 ond_sec dpn-sec1 lrb_sec1 ">
       <div class="container">    
       <div  className="row">    
        <div className="wva_left">
              <img class="img-fluid" src={data.wpPage.companyLiquidationMelbournePageOptions
                    .clmRestructureImage.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.companyLiquidationMelbournePageOptions.clmRestructureImage.altText"/>          
          </div>
          <div className="wva_right">
          <h3> {data.wpPage.companyLiquidationMelbournePageOptions.clmWheading}</h3>
            <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage.companyLiquidationMelbournePageOptions
                      .clmWcontent,
                }}
              ></div>
            
          </div> 
           </div>         
       </div>
    </section>


     <section class="liquidation-solution">
       <div class="container">    
       <div  className="row">    
        <div className="wva_left">
              <img class="img-fluid" src={data.wpPage.companyLiquidationMelbournePageOptions
                    .lsImage.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.companyLiquidationMelbournePageOptions.lsImage.altText"/>          
          </div>
          <div className="wva_right">
          <h3> {data.wpPage.companyLiquidationMelbournePageOptions.lsWheading}</h3>
            <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage.companyLiquidationMelbournePageOptions
                      .lsWcontent,
                }}
              ></div>
            
          </div> 
           </div>         
       </div>
    </section>

    <section class="spek_sec">
          <div class="container container2">
            <div class="spek_head">
              <h2>
                {data.wpPage.companyLiquidationMelbournePageOptions.clmPheading}
              </h2>
              <div
                class="p"
                dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage?.companyLiquidationMelbournePageOptions
                      ?.clmPcontent,
                }}
              />
              
            </div>

            <div class="spek_row">
              {data.wpPage.companyLiquidationMelbournePageOptions.clmProfessionalGrid.map(
                (d, key) => {
                  return (
                    <div class="spek_grid">
                      <div class="spek_item">
                        
                        <h4>{d.clmPtitle}</h4>
                        <div
                          class="p"
                          dangerouslySetInnerHTML={{ __html: d.clmProcontent }}
                        />
                         
                      {/*{d.clmRprolink?<Link className="btn" to={d.clmRprolink}>
                          Contact us
                        </Link>:<button className="btn" onClick={()=>showContactForm()}>
                          Contact us
                        </button>}*/}

                      {d.clmRprolink?<Link className="btn" to={d.clmRprolink}>
                          Contact us
                        </Link>:<Link className="btn" to="/contact">
                          Contact us
                        </Link>}
                      </div>{" "}
                    </div>
                  );
                }
              )}
            </div>

             <div class="button-center">
             <Link className="btn btn-primary" to="/contact">
                Contact us now for a free confidential consultation!
              </Link>
          </div>
          </div>
         
        </section>
       
      

         <Accordian
          title={
            data.wpPage.companyLiquidationMelbournePageOptions.clmBrFaqsTitle
          }
          showEnquireButton={false}
          data={whyMG1}
        />


         <section className="news-articles restructurenews-articles" id="people">
          <div className="container">
            <div className="row">
              <div className="people_head">
                <h2>{data.wpPage.companyLiquidationMelbournePageOptions.clmPeopleHead} </h2>
              

                 <div className="p" dangerouslySetInnerHTML={{ __html: data.wpPage.companyLiquidationMelbournePageOptions?.clmPeopleContent }}></div>
              </div>
            </div>

            <OurPeople
              title={""}
              text={""}
              data={businessData}
              showAll={0}
              liquidation={0}
            />

           
          </div>
        </section>

          <Container
          title={
            data.wpPage.companyLiquidationMelbournePageOptions.clmBusinessTitle
          }
          subtitle={""}
          data={
            data.wpPage.companyLiquidationMelbournePageOptions
              .clmBusinessTestimonial
          }
          slideColor={"#EBE9DE"}
        />


        <div className="home">
          <GetInTouch
            title={
              data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings
                .getInTouchTitle
            }
            text={
              data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings
                .getInTouchDescription
            }
          />
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
           
         
          <div id="myModal" role="dialog" className={showVid?'in show modal fade':'modal fade'}>
      <div className="model_inner">
        <div className="popup_dialog">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal" onClick={()=>handleStopVideo()}>&times;</button>
            <div className="popup_body">
              <div className="video_ratio cc">
              <video key={data.wpPage.companyLiquidationMelbournePageOptions.keyMomentsVideo} width="100%" controls autoplay><source src={data.wpPage.companyLiquidationMelbournePageOptions.keyMomentsVideo} type="video/mp4" />Your browser does not support the video tag.</video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
        <div id="myModal1" role="dialog" className={showVid1?'in show modal fade':'modal fade'}>
      <div className="model_inner">
        <div className="popup_dialog">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal" onClick={()=>handleStopVideo1()}>&times;</button>
            <div className="popup_body">
              <div className="video_ratio cc">
              <video key={data.wpPage.companyLiquidationMelbournePageOptions.corLiqVideo.mediaItemUrl} width="100%" controls autoplay><source src={data.wpPage.companyLiquidationMelbournePageOptions.corLiqVideo.mediaItemUrl} type="video/mp4" />Your browser does not support the video tag.</video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      </Layout>
    </div>
  );
};

export const query = graphql`
  {
    wpPage(title: {eq: "Company Liquidation Melbourne"}) {

      whyChooseMg1Options {
          whyMg1Title
          whyMg1Points {
          whyMg1Description
          whyMg1Title
          whyMg1Icon {
            altText
            mediaItemUrl
            localFile {
              publicURL
            }
          }
        }

        }


      companyLiquidationMelbournePageOptions {
        clmIconWithTextr {
          clmItext 
          clmGicon{
            altText
            mediaItemUrl
            localFile{
              publicURL
            }
          }
        }

        clmWheading
        clmWcontent
        clmWlink
        clmPcontent
        clmPheading
        clmProfessionalGrid{
          clmPtitle
          clmProcontent
          clmRprolink
          clmPimage{
           mediaItemUrl
           altText
           localFile{
            publicURL
           }
          }
        }




        clmPeoples2 {
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
              phoneNumber
              designationType
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
       
         

        clmBusinessTitle
        clmBusinessTestimonial {
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

        clmPeopleHead
        clmPeopleContent

        clmBrFaqsTitle
        clmBrFaqs2 {
          question2
          answer2
        }

                
        clmRestructureImage{
          mediaItemUrl
          altText
          localFile {
            childImageSharp {
              resize (width: 525, height: 326, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }
        clmTestimonialsRowr {
         clmTestimonialsHeadingr
         clmTestimonialsContentr 
           
        }

        lsWheading  
        lsWcontent
         lsImage{
          mediaItemUrl
          altText
          localFile {
            childImageSharp {
              resize (width: 525, height: 378, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }


        keyMomentsTitle
        keyMomentsDesc
        keyMomentsImage {
          altText
          mediaItemUrl
        }
        keyMomentsThumbnail{
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 599, height:412, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }
        
        keyMomentsVideo


        corLiqTitle
       corLiqDesc
        corLiqImage {
          altText
          mediaItemUrl
        }
        corLiqThumbnail{
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 599, height:412, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }
        corLiqVideo{
          altText
          mediaItemUrl
}
          contactMap
        contactTitle
        contactDescription
        contactLink
       clmRbannerTitle
       clmRbannerSubtitle
       clmRbannerImage {
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
        clmBannerContent


       
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

export default CompanyLiquidationMelbourne
