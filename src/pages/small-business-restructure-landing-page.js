import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopBanner from "../components/top-banner-landing" 
import ImageLeftLayout from "../components/image-left-layout4";
import ImageRightLayout from "../components/image-right-layout2";
import GetInTouch from "../components/get-in-touchlanding";
import Accordian from "../components/accordian/accordian-bankruptcy";
import CapabilityForm from "../components/capability-form";
import CapabilityFormNew from "../components/capability-form-new";
import FullText from "../components/full-text";
import { formDetailContext } from "../components/context";
import GetInTouchPPForm from "../components/get-in-touch-liquidation-popup"

import Container from "../components/slider/container-restructuring-nolink";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import News from "../components/news/list2";

import OurPeople from "../components/our-people-liquid/our-people3"
import $ from "jquery"

const Smallbusinessrestructure = ({ data }) => {React.useEffect(()=>{
    
    $('head').prepend("<meta name='robots' content='noindex, nofollow' />");

      return () => {
      };
    },[]);
  let whyMG = [];
  data.wpPage.smallBusinessRestructureLandingPageOptions.iconWithTextsbr.map((d) => {
    return whyMG.push({ title: d.itextsbr });
  });
  data.wpPage.smallBusinessRestructureLandingPageOptions.testimonialsRowsbr.map(
    (d) => {
      return whyMG.push({
        title: d.testimonialsHeadingsbr,
        testdescription: d.testimonialsContentsbr,
      });
    }
  );

  let swhyMG = [];
  data.wpPage.smallBusinessRestructureLandingPageOptions.eligiblerow.map((d) => {
    return swhyMG.push({ title: d.eligibletext });
  });


 
  data.wpPage.smallBusinessRestructureLandingPageOptions.resolutionGridsbr.map(
    (d) => {
      return whyMG.push({ title: d.retitlesbr, testdescription: d.recontentsbr });
    }
  );

  

  let businessData = [];
  data.wpPage.smallBusinessRestructureLandingPageOptions.peoples2sbr.map((d) => {
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
    { title: "Small Business Restructure" },
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
    if ('hbspt' in window) {
        window.hbspt.forms.create({
           region: "na1",
           portalId: "40112486",
           formId: "f1eb5ebb-c2ea-41d3-8bcd-31e9f68a21bf",
          target: "#rcpp_form"
      });
    }
    $('#br_popup').addClass('show');
  }

  React.useEffect(() => {
    //hubspot
    let scriptEle = document.createElement("script");
    scriptEle.setAttribute("src", '//js.hsforms.net/forms/embed/v2.js');
    scriptEle.setAttribute("type", "text/javascript");
    document.body.appendChild(scriptEle);
    scriptEle.addEventListener("load", () => {
      console.log("File loaded")
    });


    return () => {
    }
   }, [])

  return (
    <div className="restructure_land service liquidation smallrestructure_land smallrestructure_landn">
      <Layout>
        <Seo
          title={data.wpPage.metaFields?.metaTitle}
          description={data.wpPage.metaFields?.metaDescription}
        />
        <TopBanner
          title={
            data.wpPage?.smallBusinessRestructureLandingPageOptions.sbrbannerTitle
          }
          subtitle={
            data.wpPage?.smallBusinessRestructureLandingPageOptions.sbrbannerSubtitle
          }
          bannerImg={
            data.wpPage?.smallBusinessRestructureLandingPageOptions.sbrbannerImage
          }
          
          breadCrumbs={breadCrumbs}
        />

        <div class="rtsec2">
          <div class="container container2">
           <h2>About your recovery partner</h2>
            <ul>
              {data.wpPage.smallBusinessRestructureLandingPageOptions.iconWithTextsbr.map(
                (d, key) => {
                  return (
                    <li>
                      <img src={d.giconsbr?.localFile?.publicURL} />

                      <div dangerouslySetInnerHTML={{ __html: d.itextsbr }}></div>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>

        <section className="testimonial-main testimonial-mainnew">
      <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 p-5">
               
              <img
                class="img-fluid"
                src={
                  data.wpPage.smallBusinessRestructureLandingPageOptions
                    .testimagebr.localFile?.childImageSharp?.resize?.src
                }
                alt="data.wpPage.smallBusinessRestructureLandingPageOptions.testimagebr.altText"
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 p-5 desc">
               {data.wpPage.smallBusinessRestructureLandingPageOptions.testimonialsRowsbr.map((d,key) => {
                 return <div>
                 
                  <div dangerouslySetInnerHTML={{ __html:d.testimonialsContentsbr }}></div>
                   <h2>- {d.testimonialsHeadingsbr}</h2>
                 </div>
                })}
            </div>
          </div>
      </div>
    </section>


        {/*<div class="liqtestmon">
        <div class="container">
            <div class="row">
              
              <div class="col-sm-12 col-md-12 col-lg-6">
                
                <h3>Client testimonial</h3>
          {data.wpPage.smallBusinessRestructureLandingPageOptions.testimonialsRowsbr.map((d,key) => {
                 return <div>
                 
                  <div dangerouslySetInnerHTML={{ __html:d.testimonialsContentsbr }}></div>
                   <h2>- {d.testimonialsHeadingsbr}</h2>
                 </div>
                })}

              </div>

              <div class="col-sm-12 col-md-12 col-lg-6 colmn_2">
               
              <img
                class="img-fluid"
                src={
                  data.wpPage.smallBusinessRestructureLandingPageOptions
                    .testimagebr.localFile?.childImageSharp?.resize?.src
                }
                alt="data.wpPage.smallBusinessRestructureLandingPageOptions.testimagebr.altText"
              />
              </div>
            </div>
        </div>
      </div>*/}

        {/*<div class="rtsec3">
          <div class="container container2">
            <div class="carousel_row">
            <h3>Hear from our clients</h3>
            <Carousel showDots={true} responsive={responsive} infinite={true}  autoPlay={true} autoPlaySpeed={2000}> 
                {data.wpPage.smallBusinessRestructureLandingPageOptions.testimonialsRowsbr.map((d,key) => {
                 return <div class="ctestitem">
                  <div dangerouslySetInnerHTML={{ __html: '"'+d.testimonialsContentsbr+'"' }}></div>
                 <h4>-{d.testimonialsHeadingsbr}</h4>
                 </div>
                })}
          </Carousel> 
            </div>
          </div>
        </div>*/}


        {/*<div class="liqtestmon">
        <div class="container container2">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-5">
               
              <img
                class="img-fluid"
                src={
                  data.wpPage.smallBusinessRestructureLandingPageOptions
                    .testimagebr.localFile?.childImageSharp?.resize?.src
                }
                alt="data.wpPage.smallBusinessRestructureLandingPageOptions.testimagebr.altText"
              />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-7">
                <div class="rt_testmon">
                <h3>Hear from our clients</h3>

                  <Carousel showDots={true} responsive={responsive} infinite={true}  autoPlay={true} autoPlaySpeed={2000}> 
                {data.wpPage.smallBusinessRestructureLandingPageOptions.testimonialsRowsbr.map((d,key) => {
                 return <div class="ctestitem">
                  <div dangerouslySetInnerHTML={{ __html: '"'+d.testimonialsContentsbr+'"' }}></div>
                 <h4>{d.testimonialsHeadingsbr}</h4>
                 </div>
                })}
          </Carousel> 
                </div>
              

              </div>
            </div>
        </div>
      </div>*/}

        <section class="weva_section doc3">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-7 col-xl-7"> <h3>
                {data.wpPage.smallBusinessRestructureLandingPageOptions.wheadingsbr}
              </h3>
               <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage.smallBusinessRestructureLandingPageOptions
                      .wcontentsbr,
                }}
              ></div>
               <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>
                Learn more
              </button>
               
               {/* <Link className="btn btn-primary" to="/insights/guide-to-small-business-restructure/">
                Learn more
              </Link>*/}
              </div>
              <div class="col-sm-12 col-md-5 col-xl-5">
              <img
                class="img-fluid"
                src={
                  data.wpPage.smallBusinessRestructureLandingPageOptions
                    .wrmagebr.mediaItemUrl
                }
                alt="data.wpPage.smallBusinessRestructureLandingPageOptions.wrmagebr.altText"
              />
              </div>
            </div>
          
          

          </div>
        </section>


         

         <div className="liq_blocks va_blocks doca_2">
         <div class="row">
          <div class="col-md-12 col-lg-12">
            <h2>Reduce your financial distress</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
              
              {data.wpPage.smallBusinessRestructureLandingPageOptions.distressDescription.map((d) => {
                return (
                  <div className="col-md-4 col-lg-4">
                    <div className="lb_img">
                        <img src={d.imagered?.localFile?.publicURL} alt={d.imagered?.altText} />
                    </div>
                    <div className="lb_txt">
                      <p className="recovery-partner-title ">{d.titlered?.trim()}</p>
                      <div className="recovery-partner-desc" dangerouslySetInnerHTML={{ __html: d.descriptionred }}/>
                       
                    </div>
                  </div>)
              })}
          </div>
        </div>
      </div>
 

        <section class="eligible_sec">
          <div class="container container2">

          <h2 dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage.smallBusinessRestructureLandingPageOptions
                      .eligibleHead,}}
              />

              <h3>If you find yourself ticking all the boxes, get in contact with us today</h3>

            
              <ul>

              {data.wpPage.smallBusinessRestructureLandingPageOptions.eligiblerow.map(
                  (d, key) => {
                    return (
                       <li>
                       <input type="checkbox" name="radio" id={'radio'+key} />
                        <label for={'radio'+key}>{d.eligibletext}</label>

                       </li>
                      
                    );
                  }
                )}

                </ul>
                 <button className="btn btn btn-primary" onClick={()=>showContactForm()}>
                Contact us
              </button>
                
             {/*<Link
                  className="btn btn-primary"
                  to="#get-in-touch"
                >Contact us</Link>*/}
          </div>
          </section>

          <section class="includes_sec brigeincludes_sec">
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

         <Carousel showDots={true} responsive={stepsresponsive} infinite={true}  autoPlay={false} autoPlaySpeed={2000}> 
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
       

        

        <section class="sols_sec res_sols_sec">
          <div class="container container2">
            <h2>
              {data.wpPage.smallBusinessRestructureLandingPageOptions.reheadingsbr}{" "}
            </h2>

            <div class="sols_row">
              {data.wpPage.smallBusinessRestructureLandingPageOptions.resolutionGridsbr.map(
                (d, key) => {
                  return (
                    <div class="sols_grid">
                      <div class="sols_item">
                        {/*<img src={d.reiconsbr?.localFile?.publicURL} />*/}
                        
                        <h4 dangerouslySetInnerHTML={{ __html: d.retitlesbr }} />
                        <div
                          class="p"
                          dangerouslySetInnerHTML={{ __html: d.recontentsbr }}
                        />
                         
                        <button className="btn" onClick={()=>showContactForm()}>
                          Contact us
                        </button>
                      </div>{" "}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>

          

          <section id="vCFO" class="mg_identifix smallpageidentifix"><div class="container">
          <div class="wva_right">

          <img class="img-fluid"
                src={
                  data.wpPage.smallBusinessRestructureLandingPageOptions
                    .imageguide.localFile?.childImageSharp?.resize?.src
                }
                alt="data.wpPage.smallBusinessRestructureLandingPageOptions.imageguide.altText"
              />

           </div>
          <div class="wva_left">
          <h3 dangerouslySetInnerHTML={{ __html: data.wpPage.smallBusinessRestructureLandingPageOptions?.titleguide }}/>  
<a class="btn btn-primary me-5" href="/insights/guide-to-small-business-restructure/">Read More</a>
  

<div class="rdtime" dangerouslySetInnerHTML={{ __html: data.wpPage.smallBusinessRestructureLandingPageOptions?.readtimeguide }}/>  
</div>
</div></section>

        <Container
          title={
            data.wpPage.smallBusinessRestructureLandingPageOptions.businessTitlesbr
          }
          subtitle={""}
          data={
            data.wpPage.smallBusinessRestructureLandingPageOptions
              .businessTestimonialsbr
          }
          slideColor={"#EBE9DE"}
        />

         
         

        <section className="news-articles restructurenews-articles" id="people">
          <div className="container">
            <div className="row">
              <div className="people_head">
                <h2>{data.wpPage.smallBusinessRestructureLandingPageOptions.peopleHeadsbr} </h2>
              

                 <div className="p" dangerouslySetInnerHTML={{ __html: data.wpPage.smallBusinessRestructureLandingPageOptions?.peopleContentsbr }}></div>
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
                .getInTouchDescription2
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
              .getInTouchDescription2
          }
          image={
            data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings
              .gitImage
          }
          formid='rcpp_form'
        />
      </Layout>
    </div>
  );
};

export const query = graphql`
  {
    wpPage(title: {eq: "Small Business Restructure Landing Page"}) {

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

      smallBusinessRestructureLandingPageOptions {
        iconWithTextsbr {
          itextsbr 
          giconsbr{
            altText
            mediaItemUrl
            localFile{
              publicURL
            }
          }
        }
        wheadingsbr
        wcontentsbr
        wlinksbr
       
       distressDescription {
          descriptionred
          imagered {
            altText
            mediaItemUrl
            localFile{
              publicURL
            }
          }
          titlered
        }  
         
        

 
        peoples2sbr {
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
        peopleHeadsbr
        peopleContentsbr
        reheadingsbr
        resolutionGridsbr{
          recontentsbr
          retitlesbr
          reiconsbr{
           mediaItemUrl
           altText
           localFile{
            publicURL
           }
          }
        }

        businessTitlesbr
        businessTestimonialsbr {
          comment
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
          url
          name
        }

        
        nextStepsHeadingsbr 
        voluntaryAdministrationTitlesbr
        voluntaryAdministrationContentsbr
        vlinksbr
        voluntaryAdministrationImg{
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 100) {
                  src
                }
              }
            }
          }


        safeHarbourTitlesbr
        safeHarbourContentsbr
        slinksbr
        safeHarbourImg{
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 100) {
                  src
                }
              }
            }
          }

        creditorsVoluntaryLiquidationTitlesbr
        creditorsVoluntaryLiquidationContentsbr
        clinksbr
        creditorsVoluntaryLiquidationImg{
          altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 100) {
                  src
                }
              }
            }
         }

        simplifiedLiquidationTitlesbr
        simplifiedLiquidationContentsbr
        silinksbr
        simplifiedLiquidationImg{
          altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 100) {
                  src
                }
              }
            }
         }

        membersVoluntaryLiquidationTitlesbr
        membersVoluntaryLiquidationContentsbr
        mlinksbr
        membersVoluntaryLiquidationImg{
          altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 100) {
                  src
                }
              }
            }
         }
        
        eligibleHead
        eligiblerow {
          eligibletext
        }
       
        testimonialsRowsbr {
          testimonialsHeadingsbr
          testimonialsContentsbr 
           
        }
        testimagebr {
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
        wrmagebr {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 516, height: 605, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }
       sbrbannerTitle
       sbrbannerSubtitle
       sbrbannerImage {
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
        titleguide
        readtimeguide
        imageguide {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 526, height: 346, cropFocus: CENTER, quality: 100) {
                src
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
`;

export default Smallbusinessrestructure;
