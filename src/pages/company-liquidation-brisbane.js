import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopBanner from "../components/top-banner-landing";
import ImageLeftLayout from "../components/image-left-layout4";
import ImageRightLayout from "../components/image-right-layout2";
import GetInTouch from "../components/get-in-touchlanding";
import Accordian from "../components/accordian/accordian-bankruptcy";
import CapabilityForm from "../components/capability-form";
import CapabilityFormNew from "../components/capability-form-new";
import FullText from "../components/full-text";
import { formDetailContext } from "../components/context";
import GetInTouchPPForm from "../components/get-in-touch-liquidation-popup"

import Container from "../components/slider/container-restructuring";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import News from "../components/news/list2";

import OurPeople from "../components/our-people-liquid/our-people3"

import $ from "jquery"

const CompanyLiquidationBrisbane = ({ data }) => {

  let whyMG1 = [];
  data.wpPage.iconWithTextSection.iconwithtextrowon.map((d) => {
    return whyMG1.push({ title: d.texton });
  });

  const [showVid, setShowVid] = React.useState(false);
   const handleStopVideo = () => {
    setShowVid(false);
  }

  const [showVid1, setShowVid1] = React.useState(false);
    const handleStopVideo1 = () => {
    setShowVid1(false);
  }

  let whyMG = [];
  data.wpPage.professionalSection.professionalsGrid3.map(
    (d) => {
      return whyMG.push({ title: d.profetitle, testdescription: d.profecontent, linktext: d.profecontent });
    }
  );

    let whyMG2 = [];
  data.wpPage.faqSection.fqa.map((d) => {
    console.log(d);
    return whyMG2.push({ title: d.famquestion, description: d.famanswer, tag: "" });
  });

   let businessData = [];
  data.wpPage.peopleSection.peoplerowpeo.map((d) => {
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

  const breadCrumbs = [
    { link: "/", title: "Home" }, 
    { title: "Liquidators Brisbane" },
  ];
  // const formDetailContext = React.createContext(null);
  const [fromDetails, setFormDetails] = React.useState(0);
  const [fromDetails2, setFormDetails2] = React.useState(0);
  const [curTab, changeTab] = React.useState(1);
  const value = { fromDetails, setFormDetails };
  const value2 = { fromDetails2, setFormDetails2 };
  
  const responsive = {
    mobile: {
      breakpoint: { max: 567, min: 0 },
      items: 1
    },
    mintablet: {
      breakpoint: { max: 991, min: 568 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1101, min: 991 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1100 },
      items: 4
    },
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    }
  };

 

  const showContactForm = () => {
    $('#br_popup').addClass('show');
  }

  return (
    <div className="restructure_land service liquidation clm-page cloc_s_page cloc_brs_page">
      <Layout>

      <Seo
          title={data.wpPage.metaFields?.metaTitle}
          description={data.wpPage.metaFields?.metaDescription}
        />

        <TopBanner
          title={
            data.wpPage?.locationBannerWithForm.locbannerTitle
          }
          subtitle={
            data.wpPage?.locationBannerWithForm.locbannerSubtitle
          }
          bannerImg={
            data.wpPage?.locationBannerWithForm.locbannerImage
          }
          bannerContent={
            data.wpPage?.locationBannerWithForm.locbannerContent
          }
          breadCrumbs={breadCrumbs}
        />

        <div class="contact-map">
          <div class="container">
              <div class="left-map">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage.contactMapBlock
                      .seccontactMap,
                }}
              ></div>
                   
              </div>
              <div class="right-map">
                  <h3> {data.wpPage.contactMapBlock.seccontactTitle}</h3>
                  <div dangerouslySetInnerHTML={{
                        __html:
                          data.wpPage.contactMapBlock
                            .seccontactDescription,
                      }}></div>
                      <button className="btn btn btn-primary" onClick={()=>showContactForm()}>Contact us</button>
                  </div>
          </div>
      </div>

      <div class="rtsec2">
          <div class="container container2">
          <h2>About your recovery partner</h2>
            <ul>
              {data.wpPage.iconWithTextSection.iconwithtextrowon.map(
                (d, key) => {
                  return (
                    <li>
                    <img src={d.iconon?.localFile?.publicURL} /> 

                      <div dangerouslySetInnerHTML={{ __html: d.texton }}></div>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>

        <div class="val_page clm-sec-4">
       <div className="wbl_section">
              <div className="container">
                <div className="wbl_right">
                 <h3>{data.wpPage.expertsInBlock.expmomentstitle}</h3>
                  <div dangerouslySetInnerHTML={{ __html: data.wpPage.expertsInBlock.expmomentsDesc }}></div>   
                        
                  
                </div>
                <div className="wbl_left">
                <a href="javascript:void(0);" onClick={()=>setShowVid(true)}><img src={data.wpPage.expertsInBlock.expmomentsThumbnail?.localFile?.childImageSharp?.resize?.src} /></a>
                 
                </div>
              </div>
            </div>
       </div>

        <div id="myModal" role="dialog" className={showVid?'in show modal fade':'modal fade'}>
        <div className="model_inner">
          <div className="popup_dialog">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" onClick={()=>handleStopVideo()}>&times;</button>
              <div className="popup_body">
                <div className="video_ratio cc">
                <video key={data.wpPage.expertsInBlock.expmomentsVideo} width="100%" controls autoplay><source src={data.wpPage.expertsInBlock.expmomentsVideo} type="video/mp4" />Your browser does not support the video tag.</video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 


      <div className="wcmg_section margin_bottom">
          <div className="container">
            <h2>{data.wpPage.whyChooseMg1Options.whyMg1Title}</h2>
            <ul>
              {data.wpPage.whyChooseMg1Options.whyMg1Points.map((d, key) => {
                return <li>
                  <div className="wcmg_img">
                    <img src={d.whyMg1Icon.localFile?.publicURL} alt="" />
                   </div>
                   <h4>{d.whyMg1Title}</h4>
                   <p>{d.whyMg1Description}</p>
                  </li>
              })}
            </ul>
          </div>
        </div>

        

       <div id="myModal1" role="dialog" className={showVid1?'in show modal fade':'modal fade'}>
        <div className="model_inner">
          <div className="popup_dialog">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" onClick={()=>handleStopVideo1()}>&times;</button>
              <div className="popup_body">
                <div className="video_ratio cc">
                <video key={data.wpPage.whatIsLiquidation.whatVideo.mediaItemUrl} width="100%" controls autoplay><source src={data.wpPage.whatIsLiquidation.whatVideo.mediaItemUrl} type="video/mp4" />Your browser does not support the video tag.</video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="wva_section fd_section dca_section dpn_part margin_bottom helping_section">
        <div className="container">
          <div className="wva_left">
        
            <img class="img-fluid" src={data.wpPage.wcaSectionLeftImage.wcaImage?.localFile?.childImageSharp?.resize?.src} />
          </div>
          <div className="wva_right">
            <h3>{data.wpPage.wcaSectionLeftImage.wcatitle}</h3>
           <div dangerouslySetInnerHTML={{ __html: data.wpPage.wcaSectionLeftImage.wcadesc }}></div> 
            

          </div>
        </div>
      </div>


      {/*<div class="val_page clm-sec-4">
       <div className="wbl_section">
              <div className="container">
                <div className="wbl_right">
               <h3>{data.wpPage.wcaSectionLeftImage.wcatitle}</h3>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.wcaSectionLeftImage.wcadesc }}></div> 
                 
                  
                </div>
                <div className="wbl_left">
                  <img alt="" src={data.wpPage.wcaSectionLeftImage.wcaImage?.localFile?.childImageSharp?.resize?.src} />
                </div>
              </div>
            </div>
       </div>*/}

        {/*<div className="mg_identifix mg_identifix1">
        <div className="container">
         
          <div className="wva_right">
           <img alt="" src={data.wpPage.wcaSectionLeftImage.wcaImage?.localFile?.childImageSharp?.resize?.src} />
          </div>

           <div className="wva_left">
          <h3>{data.wpPage.wcaSectionLeftImage.wcatitle}</h3>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.wcaSectionLeftImage.wcadesc }}></div> 
           
           
          </div>
        </div>
      </div>*/}



        <section class="eligible_sec">
          <div class="container container2">

           <h2> {data.wpPage.professionalSection.profeheading}</h2>
          
              <h3 dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage?.professionalSection
                      ?.profecontent,
                }}
              />

               <ul>

                {data.wpPage.professionalSection.professionalsGrid3.map(
                (d, key) => {
                  return (
                    
                        <li>

                         <input type="checkbox" name="radio" id={'radio'+key} />
                        <label for={'radio'+key}><strong>{d.profetitle}</strong><br/>

                        <span
                          class="p"
                          dangerouslySetInnerHTML={{ __html: d.profedesc }}
                        />
                         
                        </label>


                       
                        
                       {" "}
                     </li>
                  );
                }
              )}

              

                </ul>
                 <button className="btn btn btn-primary" onClick={()=>showContactForm()}>
                Contact us
              </button>
                 
          </div>
          </section>

          {/*<div class="clm-sec-4 clm-sec-is">
       <div className="wbl_section">
              <div className="container">
                <div className="wbl_left">
                   <img class="img-fluid" src={data.wpPage.leftImageAndRightContent
                    .leftimage.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.leftImageAndRightContent.leftimage.altText"/>          
                   
                </div>
                <div className="wbl_right">
                 <h3> {data.wpPage.leftImageAndRightContent.rightheading}</h3>
            <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage.leftImageAndRightContent
                      .rightcontent,
                }}
              ></div>
                 
                </div>
              </div>
            </div>
       </div>
*/}

 

      <section class="includes_sec brigeincludes_sec margin_bottom">
       <div class="container container2">
         <div class="spek_head">

         <h2 dangerouslySetInnerHTML={{ __html:data.wpPage?.theyMayIncludeSection?.theyheading,}}/>

        
              <div
                class="p"
                dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage?.theyMayIncludeSection
                      ?.theysubheading,
                }}
              />
         </div>

         <div class="step_row">

         <Carousel showDots={true} responsive={responsive} infinite={true}  autoPlay={false} autoPlaySpeed={2000}> 
                {data.wpPage.theyMayIncludeSection.includes.map((d, key) => {
                 return <div class="step_grid">
             <div class="step_item">
               <img src={d.theyimage?.localFile?.childImageSharp?.resize?.src}/>
               <div class="step_gcont">
                <h3>{d.theytitle}</h3>
                         <div dangerouslySetInnerHTML={{ __html: d.theycontent }} />
                         <button className="btn btn btn-primary" onClick={()=>showContactForm()}>Learn more</button>
                         
                </div>
             </div>
           </div>
                })}
          </Carousel> 

         
         </div>
       </div>
   </section>
 

   <div class="brige_color_sec">

     <div className="container">
     <div className="row">
       <div class="grid_7">
        <h3>{data.wpPage.whatIsLiquidation.whatTitle}</h3>
                  <div dangerouslySetInnerHTML={{ __html: data.wpPage.whatIsLiquidation.whatDesc }}></div> 
                
                 <button className="btn btn btn-primary" onClick={()=>showContactForm()}>Get in touch with us today</button>
       </div>
       <div class="grid_5">
         
          {data.wpPage.whatIsLiquidation?.whatimagevideo=='Video'?<a href="javascript:void(0);" onClick={()=>setShowVid1(true)}><img class="img-fluid"  src={data.wpPage.whatIsLiquidation.whatThumbnail?.localFile?.childImageSharp?.resize?.src} /></a>:<img class="img-fluid" src={data.wpPage.whatIsLiquidation.whatImage?.localFile?.childImageSharp?.resize?.src} />}

       </div>
     </div>
                 
     </div>

   </div>
       
           
             
              <div className="service bankruptcy brige_color">
               <Accordian
                title={
                  data.wpPage.faqSection.fmainheading
                }
                showEnquireButton={false}
                data={whyMG2}
              />
              </div>

            <section className="news-articles restructurenews-articles" id="people">
              <div className="container">
                <div className="row">
                  <div className="people_head">
                    <h2>{data.wpPage.peopleSection.peomaintitle} </h2>
                  

                     {/*<div className="p" dangerouslySetInnerHTML={{ __html: data.wpPage.peopleSection?.peomaincontent }}></div>*/}
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
          title={data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
          text={data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
          image={data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings.gitImage}
        />

      </Layout>
    </div>
  );
};

export const query = graphql`
  {
    wpPage(title: {eq: "Company Liquidation Brisbane"}) {


     faqSection{
        fmainheading
        fqa {
          famquestion
          famanswer
        }
      }
      theyMayIncludeSection{
        theyheading
        theysubheading
        includes{
          theytitle
          theycontent
          theylink{
            title
            url
          } 
          theyimage {
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 413, height: 290, cropFocus: CENTER, quality: 100) {
                  src
                }
              }
            }
          }
        }
      }

      leftImageAndRightContent{
        rightheading
        rightcontent
        leftimage{
          mediaItemUrl
          altText
          localFile {
            childImageSharp {
              resize (width: 525, height: 351, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }
      }
       

      professionalSection{
        profeheading
        profecontent 
        professionalsGrid3{
          profetitle
          profedesc
          linkText {
            title
            url
          } 
          profeimage{
             mediaItemUrl
             altText
             localFile{
                publicURL
             }
          }
        }
      }

      wcaSectionLeftImage{
        wcadesc
        wcatitle
        wcaImage{
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 745, height:460, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }

      }


      whatIsLiquidation{
        whatImage{
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 547, height:412, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }
        whatimagevideo
        whatThumbnail{
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 599, height:375, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }
        whatVideo{
           altText
          mediaItemUrl
        }
        whatTitle
        whatDesc
      }
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
      expertsInBlock {
        expmomentsDesc
        expmomentsImage{
          altText
          mediaItemUrl
        }
        expmomentsVideo
        expmomentstitle
        expmomentsThumbnail{
           altText
           mediaItemUrl
           localFile {
           childImageSharp {
            resize (width: 599, height:412, cropFocus: CENTER, quality: 100) {
             src
             }
          }
         }
        }
      } 

      locationBannerWithForm {
        locbannerTitle
        locbannerSubtitle
        locbannerContent
        locbannerImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 526, height: 473, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }
      }
      contactMapBlock {
        seccontactMap
        seccontactTitle
        seccontactDescription
      }

      iconWithTextSection{
        iconwithtextrowon {
          texton 
          iconon{
            altText
            mediaItemUrl
            localFile{
              publicURL
            }
          }
        }
      }

      peopleSection{
          peomaintitle
          peomaincontent
          peoplerowpeo {
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
                    resize (width: 416, height: 450, cropFocus: CENTER, quality: 100) {
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
                    resize (width: 416, height: 450, cropFocus: CENTER, quality: 100) {
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
                localFile {
                  childImageSharp {
                    resize (width: 412, height: 280, cropFocus: CENTER, quality: 100) {
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
                resize (width: 416, height: 450, cropFocus: CENTER, quality: 100) {
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

export default CompanyLiquidationBrisbane
