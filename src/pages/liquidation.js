import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-landing" 
import ImageLeftLayout from "../components/image-left-layout4"
import ImageRightLayout from "../components/image-right-layout2"
import GetInTouch from "../components/get-in-touchlanding"
import Accordian from "../components/accordian/accordian-bankruptcy"
import CapabilityForm from "../components/capability-form"
import CapabilityFormNew from "../components/capability-form-new"
import FullText from "../components/full-text"
import { formDetailContext } from '../components/context';
import GetInTouchPPForm from "../components/get-in-touch-liquidation-popup"

import Container from "../components/slider/container-restructuring"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import News from "../components/news/list2"

import ReciveryPlan from "../components/recovery-plan"

import OurPeople from "../components/our-people-liquid/our-people3"
import $ from "jquery"

const ConsultBusiness = ({ data }) => {
  const [showModal, setModal] = React.useState(false);
  

  let whyMG1 = [];
  data.wpPage.liquidationLandingPageOptions.brFaqs1.map((d) => {
    console.log(d);
    return whyMG1.push({ title: d.question1, description: d.answer1, tag: '' });
  })

  let whyMG2 = [];
  data.wpPage.liquidationLandingPageOptions.iconWithText1.map((d) => {
    return whyMG2.push({ title: d.itext1 });
  })

  let whyMG3 = [];
  data.wpPage.liquidationLandingPageOptions.yourLiquidationRow.map((d) => {
    return whyMG3.push({ title: d.yourLiquidationTitle, testdescription: d.yourLiquidationContent });
  })

 
  
  

  let whyMG6 = [];
  data.wpPage.liquidationLandingPageOptions.canHelpGrid.map((d) => {
    return whyMG6.push({ title: d.cancontent});
  })

  
  

  let businessData = [];
  data.wpPage.liquidationLandingPageOptions.peoples1.map((d) => {
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

  const breadCrumbs = [
    { link: "/", title: "Home" }, 
    { title: "Liquidation" },
  ]
  // const formDetailContext = React.createContext(null);
  const [fromDetails, setFormDetails] = React.useState(0);
  const [fromDetails2, setFormDetails2] = React.useState(0);
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

  const stepsresponsive = {
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
  const setModal2 = (event) => {
     if (!$(event.target).is('.video')) {
        setModal(false);document.querySelector('.video').pause();
     }
  }

  return (<div className="restructure_land liquidation_land service liquidation liquidation_landbanner liquidation_landbannern liquidationpagenew no_bannerform dpnfont_page">
    <Layout>
       <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      

      <TopBanner
        title={data.wpPage.liquidationLandingPageOptions.rbannerTitle}
        subtitle={data.wpPage.liquidationLandingPageOptions.rbannerSubtitle} 
        bannerImg={data.wpPage.liquidationLandingPageOptions.rbannerImage}
        bannerContent={data.wpPage.liquidationLandingPageOptions.rbannerDesc}
        breadCrumbs={breadCrumbs}
        sendUrl={''}
        equalWidth={false}
      />




      

      <div class="rtsec2">
      <div class="container container2">
        <h2>About your recovery partner</h2>
      <ul>
        {data.wpPage.liquidationLandingPageOptions.iconWithText1.map((d,key) => {
         return <li>
          <img src={d.gicon1?.localFile?.publicURL}/>
         
         <div dangerouslySetInnerHTML={{ __html: d.itext1 }}></div>
        </li>
        })}
      </ul>
      </div>
      </div>

      <div className="liq_blocks liq_blocks_new liq_threblocks liqpagefont">
        <div className="container">
          <div className="row">
              {/* <h3>{data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.tagline}</h3> */}
              {data.wpPage.liquidation.descriptionWhyliquid.map((d) => {
                return (
                  <div className="col-md-4 col-lg-4">
                    <div className="lb_img">
                        <img src={d.image.localFile?.publicURL} alt={d.image.altText} />
                    </div>
                    <div className="lb_txt">
                      <p className="recovery-partner-title">{d.title.trim()}</p>
                      <p className="recovery-partner-desc">{d.description.trim()}</p>
                    </div>
                  </div>)
              })}
          </div>
        </div>
      </div>

      <section className={"testimonial-main testimonial-main1 testimonial-mainnew"}>
      <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 p-5">
              <img className="img-fluid" src={data.wpPage.liquidation.testimonialsLiquid[0].image?.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.liquidation.testimonialsLiquid[0].image?.altText} />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 p-5 desc">
              <p>{data.wpPage.liquidation.testimonialsLiquid[0].description}</p>
               <h2>-{data.wpPage.liquidation.testimonialsLiquid[0].liqtestimonialsheading1}</h2>
            </div>
          </div>
      </div>
    </section>


       


        <div className="wbl_section">
        <div className="container">
          <div className="wbl_right"> 
            <a href="javascript:void(0);"  onClick={()=>setModal(true)}><img src={data.wpPage.liquidationLandingPageOptions.businessThumbnail.localFile.childImageSharp.resize.src} /></a>
          </div>
          <div className="wbl_left">
            <h3>{data.wpPage.liquidationLandingPageOptions.businessTitle}</h3>
            <p>{data.wpPage.liquidationLandingPageOptions.businessDesc1}</p>
             <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>
 Learn more
 </button>
            {/*{data.wpPage.liquidationLandingPageOptions.enquire !== null && data.wpPage.liquidationLandingPageOptions.enquire !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.liquidationLandingPageOptions.enquire}>Learn more</Link> : ""}*/}
          </div>
        </div>
      </div>
      <div id="myModal" role="dialog" className={showModal?'in show modal fade':'modal fade'} onClick={(e)=>{setModal2(e);}}>
        <div className="model_inner">
          <div className="popup_dialog">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" onClick={()=>{setModal(false);document.querySelector('.video').pause();}}>&times;</button>
              <div className="popup_body">
                <div className="video_ratio">
                <video class="video" width="100%" controls><source src={data.wpPage.liquidationLandingPageOptions.businessVideo.mediaItemUrl} type="video/mp4" />Your browser does not support the video tag.</video>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>


      
        
         <div class="canh_section">
           <div class="container">
           <h2> {data.wpPage.liquidationLandingPageOptions.pheading} </h2>

           {data.wpPage.liquidationLandingPageOptions.canHelpGrid.map((d,key) => {
         return <div class="c_grid">
          <img src={d.canimage?.localFile?.publicURL}/>
         
         <div dangerouslySetInnerHTML={{ __html: d.cancontent }}></div>
        </div>
        })}
 

           </div>

         </div>


          {/*<section class="ols_section">
            <div class="container">

          <h3> {data.wpPage.liquidationLandingPageOptions.yourLiquidationHeading} </h3>
          <div id="liquidser" class="ols_list"><ul>

            
            {data.wpPage.liquidationLandingPageOptions.yourLiquidationRow.map((d,key) => {
                   return <li> 
                   <h4>{d.yourLiquidationTitle}</h4>
                    <div dangerouslySetInnerHTML={{ __html: d.yourLiquidationContent }}></div>
                    <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>
 Enquire Now
 </button>
                        </li>
                  })}

           </ul></div></div>
         </section>*/}

         <section class="includes_sec brigeincludes_sec liqpagefont">
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

         <div class="step_row noneed_dots">

         <Carousel showDots={true} responsive={stepsresponsive} infinite={false}  autoPlay={false} autoPlaySpeed={2000}> 
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


   <FullText
        text={data.wpPage.liquidation.liquidationTagline}
        subTxt={data.wpPage.liquidation.liquidationDescription}
        customClass={'middleFullText glpo_section'}
      />
      <ReciveryPlan
        data={data.wpPage.liquidation.process}
        titleDisplay={false}
        customClass={'glpo_reco_section margin_bt'}
      />

      <section className={"testimonial-main testimonial-main1"}>
        <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-sm-12 col-md-12 col-lg-6 p-5">
                <img className="img-fluid" src={data.wpPage.liquidation.testimonialsLiquid[1].image?.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.liquidation.testimonialsLiquid[1].image?.altText} />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 p-5 desc">
                <p>{data.wpPage.liquidation.testimonialsLiquid[1].description}</p>
              </div>
            </div>
        </div>
      </section>

  

  <div className="service bankruptcy brige_color brige_color2 sub_heading">
  <Accordian
          title={data.wpPage.liquidationLandingPageOptions.brFaqsTitle}
          showEnquireButton={false}
          data={whyMG1}
        />

 </div>
 




        <div class="vcfo_section na_section new_landing"> 
    <section class="news-list allnews_list">

        <div class="container">
        <div class="row">
                <div class="col-lg-12 col-md-12">
            <h2>Take a deep dive into the insights of liquidation. </h2></div>
          </div>

          <News
        title={''}
        data={data.wpPage?.liquidationLandingPageOptions.articles1}
        btn={false}
      />
            
        </div>
    </section>
</div>


      

<section className="news-articles restructurenews-articles" id="people">
          <div className="container">
            <div className="row">
              <div className="people_head">
                <h2>{data.wpPage.liquidationLandingPageOptions.peopleHead} </h2>
              

                 <div className="p" dangerouslySetInnerHTML={{ __html: data.wpPage.liquidationLandingPageOptions?.peopleContent }}></div>
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
         text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription2}
       />
    </div>
      <GetInTouchPPForm
          title={data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
          text={data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription2}
          image={data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings.gitImage}
        />
    </Layout>
  </div>)
}

export const query = graphql`
  {
    wpPage(title: {eq: "Liquidation"}) {

      liquidation{
        descriptionWhyliquid {
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

        testimonialsLiquid {
          description
          liqtestimonialsheading1
          image {
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 564, height: 376, cropFocus: CENTER, quality: 100) {
                  src
                }
              }
            }
          }
        }


        liquidationTagline
        liquidationDescription

         process {
          processTitle
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

      liquidationLandingPageOptions {
        iconWithText1 {
          itext1 
          gicon1{
            altText
            mediaItemUrl
            localFile{
              publicURL
            }
          }
        } 

         

        brFaqsTitle
        brFaqs1 {
          question1
          answer1
        }

       


        businessTitle
        businessDesc1
        enquire
        businessImage {
          altText
          mediaItemUrl
        }
        businessThumbnail {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 599, height: 413, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }
        
        businessVideo {
          altText
          mediaItemUrl
        }
        
         
         
        
       

        testimage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 564, height: 376, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }

        yourLiquidationHeading
        yourLiquidationRow{
          yourLiquidationTitle
          yourLiquidationContent
          learnmoreurl2
        }

        pheading
        canHelpGrid {
          cancontent
          canimage {
            altText
            mediaItemUrl
            localFile{
              publicURL
            }
          }
        }

        peoples1 {
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
        peopleHead
        peopleContent

        
        
       rbannerTitle
       rbannerSubtitle
       rbannerDesc
       rbannerImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 636, height: 571, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }
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
            getInTouchDescription2
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
`

export default ConsultBusiness
