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
import GetInTouchPPForm from "../components/get-in-touch-liquidation-popup";

import Container from "../components/slider/container-restructuring-nolink";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import News from "../components/news/list2";

import OurPeople from "../components/our-people-liquid/our-people3"

import $ from "jquery"

const Restructure2 = ({ data }) => {
  let whyMG = [];
  data.wpPage.restructureTurnaroundLandingPageOptions.iconWithTextr.map((d) => {
    return whyMG.push({ title: d.itext });
  });
  data.wpPage.restructureTurnaroundLandingPageOptions.testimonialsRowr.map(
    (d) => {
      return whyMG.push({
        title: d.testimonialsHeadingr,
        testdescription: d.testimonialsContentr,
      });
    }
  );
  data.wpPage.restructureTurnaroundLandingPageOptions.professionalGrid.map(
    (d) => {
      return whyMG.push({ title: d.ptitle, testdescription: d.procontent, testlink: d.rprolink });
    }
  );
  data.wpPage.restructureTurnaroundLandingPageOptions.resolutionGrid.map(
    (d) => {
      return whyMG.push({ title: d.retitle, testdescription: d.recontent });
    }
  );

  let whyMG1 = [];
  data.wpPage.restructureTurnaroundLandingPageOptions.brFaqs2.map((d) => {
    console.log(d);
    return whyMG1.push({ title: d.question2, description: d.answer2, tag: "" });
  });

  let businessData = [];
  data.wpPage.restructureTurnaroundLandingPageOptions.peoples2.map((d) => {
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

  return (
    <div className="restructure_land bankruptcy service liquidation restructure_land2">
      <Layout>
        <Seo
          title={data.wpPage.metaFields?.metaTitle}
          description={data.wpPage.metaFields?.metaDescription}
        />
        <TopBanner
          title={
            data.wpPage?.restructureTurnaroundLandingPageOptions.rbannerTitle
          }
          subtitle={
            data.wpPage?.restructureTurnaroundLandingPageOptions.rbannerSubtitle
          }
          bannerImg={
            data.wpPage?.restructureTurnaroundLandingPageOptions.rbannerImage
          }
          breadCrumbs={breadCrumbs}
        />

        <div class="rtsec2">
          <div class="container container2">
           <h2>About your recovery partner</h2>
            <ul>
              {data.wpPage.restructureTurnaroundLandingPageOptions.iconWithTextr.map(
                (d, key) => {
                  return (
                    <li>
                      <img src={d.gicon?.localFile?.publicURL} />

                      <div dangerouslySetInnerHTML={{ __html: d.itext }}></div>
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
                  data.wpPage.restructureTurnaroundLandingPageOptions
                    .testimage3.localFile?.childImageSharp?.resize?.src
                }
                alt="data.wpPage.restructureTurnaroundLandingPageOptions.testimage3.altText"
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 p-5 desc">
                {data.wpPage.restructureTurnaroundLandingPageOptions.testimonialsRowr.map((d,key) => {
                 return <div>
                
                  <div dangerouslySetInnerHTML={{ __html: d.testimonialsContentr }}></div>
                   <h2>- {d.testimonialsHeadingr}</h2>
                 
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
         {data.wpPage.restructureTurnaroundLandingPageOptions.testimonialsRowr.map((d,key) => {
                 return <div>
                
                  <div dangerouslySetInnerHTML={{ __html: d.testimonialsContentr }}></div>
                   <h2>- {d.testimonialsHeadingr}</h2>
                 
                 </div>
                })}

              </div>

              <div class="col-sm-12 col-md-12 col-lg-6 colmn_2">
               
              <img
                class="img-fluid"
                src={
                  data.wpPage.restructureTurnaroundLandingPageOptions
                    .testimage3.localFile?.childImageSharp?.resize?.src
                }
                alt="data.wpPage.restructureTurnaroundLandingPageOptions.testimage3.altText"
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
                {data.wpPage.restructureTurnaroundLandingPageOptions.testimonialsRowr.map((d,key) => {
                 return <div class="ctestitem">
                  <div dangerouslySetInnerHTML={{ __html: '"'+d.testimonialsContentr+'"' }}></div>
                 <h4>{d.testimonialsHeadingr}</h4>
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
                  data.wpPage.restructureTurnaroundLandingPageOptions
                    .testimage3.localFile?.childImageSharp?.resize?.src
                }
                alt="data.wpPage.restructureTurnaroundLandingPageOptions.testimage3.altText"
              />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-7">
                <div class="rt_testmon">
                <h3>Hear from our clients</h3>

                  <Carousel showDots={true} responsive={responsive} infinite={true}  autoPlay={true} autoPlaySpeed={2000}> 
                {data.wpPage.restructureTurnaroundLandingPageOptions.testimonialsRowr.map((d,key) => {
                 return <div class="ctestitem">
                  <div dangerouslySetInnerHTML={{ __html: '"'+d.testimonialsContentr+'"' }}></div>
                 <h4>{d.testimonialsHeadingr}</h4>
                 </div>
                })}
          </Carousel> 
                </div>
              

              </div>
            </div>
        </div>
      </div>*/}

      <div class="dpn-sec2">
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-lg-7 rig-text">
              <h3>
                {data.wpPage.restructureTurnaroundLandingPageOptions.wheading}
              </h3>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage.restructureTurnaroundLandingPageOptions
                      .wcontent,
                }}
              ></div>
              <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>
                Learn more
              </button>
            </div>
            <div class="col-md-5 col-lg-5">
               <img
                class="img-fluid"
                src={
                  data.wpPage.restructureTurnaroundLandingPageOptions
                    .restructureImage.localFile?.childImageSharp?.resize?.src
                }
                alt="data.wpPage.restructureTurnaroundLandingPageOptions.restructureImage.altText"
              />
            </div>
          </div>
        </div>
      </div>
        

        {/*<section id="vCFO" class="banners curve-right vcf_sec mg_identifix">
          <div class="container">
            <div className="wva_right">
              <img
                class="img-fluid"
                src={
                  data.wpPage.restructureTurnaroundLandingPageOptions
                    .restructureImage.localFile?.childImageSharp?.resize?.src
                }
                alt="data.wpPage.restructureTurnaroundLandingPageOptions.restructureImage.altText"
              />
            </div>
            <div className="wva_left">
              <h3>
                {data.wpPage.restructureTurnaroundLandingPageOptions.wheading}
              </h3>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage.restructureTurnaroundLandingPageOptions
                      .wcontent,
                }}
              ></div>
              <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>
                Learn more
              </button>
             
            </div>
          </div>
        </section>*/}


      <section class="eligible_sec">
          <div class="container container2">

           <h2>
                {data.wpPage.restructureTurnaroundLandingPageOptions.pheading}
              </h2>
               <h3>
                {data.wpPage.restructureTurnaroundLandingPageOptions.pcontent}
              </h3>
               

            
              <ul>

              {data.wpPage.restructureTurnaroundLandingPageOptions.professionalGrid.map(
                (d, key) => {
                    return (
                       <li>
                       <input type="checkbox" name="radio" id={'radio'+key} />
                        <label for={'radio'+key}><strong>{d.ptitle}</strong><br/>

                        <span
                          class="p"
                          dangerouslySetInnerHTML={{ __html: d.procontent }}
                        />
                         
                        </label>

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

       {/*<section class="speakprof_sec spek_sec">
          <div class="container container2">
             <div class="spek_head">
              <h2>
                {data.wpPage.restructureTurnaroundLandingPageOptions.pheading}
              </h2>
              <div
                class="p"
                dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage?.restructureTurnaroundLandingPageOptions
                      ?.pcontent,
                }}
              />
              <button className="btn btn-primary" onClick={()=>showContactForm()}>
                Contact us
              </button>
               
            </div>           

            <ul class="profe_row">
              {data.wpPage.restructureTurnaroundLandingPageOptions.professionalGrid.map(
                (d, key) => {
                  return (
                    
                        <li>
                        <h4>{d.ptitle}</h4>
                        <div
                          class="p"
                          dangerouslySetInnerHTML={{ __html: d.procontent }}
                        />
                        
                       {" "}
                     </li>
                  );
                }
              )}
            </ul> 
          </div>
         </section>*/}

        

        <section class="sols_sec res_sols_sec">
          <div class="container container2">
             
            <h2 dangerouslySetInnerHTML={{__html:data.wpPage?.restructureTurnaroundLandingPageOptions
                        ?.reheading,}} />

            <div class="sols_row">
              {data.wpPage.restructureTurnaroundLandingPageOptions.resolutionGrid.map(
                (d, key) => {
                  return (
                    <div class="sols_grid">
                      <div class="sols_item">
                       {/* <img src={d.reicon?.localFile?.publicURL} />*/}
                        
                         <h4 dangerouslySetInnerHTML={{ __html: d.retitle }} />
                        <div
                          class="p"
                          dangerouslySetInnerHTML={{ __html: d.recontent }}
                        />
                        <button className="btn" onClick={()=>showContactForm()}>
                          Contact us
                        </button>
                        {/*<Link className="btn" to="/contact/">
                          Contact us
                        </Link>*/}
                      </div>{" "}
                    </div>
                  );
                }
              )}
            </div>
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

        {/*<section class="incsteps_sec">
          <div class="container container2">
            <h2>
              {
                data.wpPage.restructureTurnaroundLandingPageOptions
                  .nextStepsHeading
              }
            </h2>

            <div class="steps_nav">
              <ul>
                <li class={curTab==1?"tactive":""}>
                  <button onClick={()=>changeTab(1)}>Voluntary Administration</button>
                </li>
                <li class={curTab==2?"tactive":""}>
                  <button onClick={()=>changeTab(2)}>Safe Harbour</button>
                </li>
                <li class={curTab==3?"tactive":""}>
                  <button onClick={()=>changeTab(3)}>Creditors Voluntary Liquidation</button>
                </li>
                <li class={curTab==4?"tactive":""}>
                  <button onClick={()=>changeTab(4)}>Simplified Liquidation</button>
                </li>
                <li class={curTab==5?"tactive":""}>
                  <button onClick={()=>changeTab(5)}>Members' Voluntary Liquidation</button>
                </li>
                 <li class={curTab==6?"tactive":""}>
                  <button onClick={()=>changeTab(6)}>Small Business Restructure</button>
                </li>
              </ul>
            </div>
          </div>
          <div class="steps_tab">
            <div class="container container2">
              {curTab==1?<div>
                <h3>
                  {
                    data.wpPage.restructureTurnaroundLandingPageOptions
                      .voluntaryAdministrationTitle
                  }
                </h3>
                <div
                  class="p"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpPage?.restructureTurnaroundLandingPageOptions
                        ?.voluntaryAdministrationContent,
                  }}
                />
                 <button className="btn btn-primary" onClick={()=>showContactForm()}>
                          Learn more
                        </button>
                
              </div>:null}

              {curTab==2?<div>
                <h3>
                  {
                    data.wpPage.restructureTurnaroundLandingPageOptions
                      .safeHarbourTitle
                  }
                </h3>
                <div
                  class="p"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpPage?.restructureTurnaroundLandingPageOptions
                        ?.safeHarbourContent,
                  }}
                />
                 <button className="btn btn-primary" onClick={()=>showContactForm()}>
                          Contact us
                        </button>
                        
                 <button className="btn btn-primary" onClick={()=>showContactForm()}>
                          Learn more
                        </button>
              </div>:null}

              {curTab==3?<div>
                <h3>
                  {
                    data.wpPage.restructureTurnaroundLandingPageOptions
                      .creditorsVoluntaryLiquidationTitle
                  }
                </h3>
                <div
                  class="p"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpPage?.restructureTurnaroundLandingPageOptions
                        ?.creditorsVoluntaryLiquidationContent,
                  }}
                />
               <button className="btn btn-primary" onClick={()=>showContactForm()}>
                          Learn more
                        </button>
              </div>:null}

              {curTab==4?<div>
                <h3>
                  {
                    data.wpPage.restructureTurnaroundLandingPageOptions
                      .simplifiedLiquidationTitle
                  }
                </h3>
                <div
                  class="p"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpPage?.restructureTurnaroundLandingPageOptions
                        ?.simplifiedLiquidationContent,
                  }}
                />
                <button className="btn btn-primary" onClick={()=>showContactForm()}>
                          Learn more
                        </button>
              </div>:null}

              {curTab==5?<div>
                <h3>
                  {
                    data.wpPage.restructureTurnaroundLandingPageOptions
                      .membersVoluntaryLiquidationTitle
                  }
                </h3>
                <div
                  class="p"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpPage?.restructureTurnaroundLandingPageOptions
                        ?.membersVoluntaryLiquidationContent,
                  }}
                />
                <button className="btn btn-primary" onClick={()=>showContactForm()}>
                          Learn more
                        </button>
              </div>:null}

              {curTab==6?<div>
                <h3>
                  {
                    data.wpPage.restructureTurnaroundLandingPageOptions
                      .smallBusinessRestructureTitle
                  }
                </h3>
                <div
                  class="p"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpPage?.restructureTurnaroundLandingPageOptions
                        ?.smallBusinessRestructureContent,
                  }}
                />
                <button className="btn btn-primary" onClick={()=>showContactForm()}>
                          Learn more
                        </button>
              </div>:null}

              
        
        
            </div>
          </div>
        </section>
*/}
        <Container
          title={
            data.wpPage.restructureTurnaroundLandingPageOptions.businessTitle
          }
          subtitle={""}
          data={
            data.wpPage.restructureTurnaroundLandingPageOptions
              .businessTestimonial
          }
          slideColor={"#EBE9DE"}
        />

         <div className="service bankruptcy brige_color brige_color2">
        <Accordian
          title={
            data.wpPage.restructureTurnaroundLandingPageOptions.brFaqsTitle
          }
          showEnquireButton={false}
          data={whyMG1}
        />
        </div>
        
        {/*<div class="vcfo_section na_section new_landing">
          <section class="news-list allnews_list">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <h2>Take a deep dive into restructuring.</h2>
                </div>
              </div>

              <News
                title={""}
                data={
                  data.wpPage?.restructureTurnaroundLandingPageOptions.articles2
                }
                btn={false}
              />
            </div>
          </section>
        </div>*/}

        <section className="news-articles restructurenews-articles pa-top" id="people">
          <div className="container">
            <div className="row">
              <div className="people_head">
                <h2>{data.wpPage.restructureTurnaroundLandingPageOptions.peopleHead} </h2>
              

                 <div className="p" dangerouslySetInnerHTML={{ __html: data.wpPage.restructureTurnaroundLandingPageOptions?.peopleContent }}></div>
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
        />
      </Layout>
    </div>
  );
};

export const query = graphql`
  {
    wpPage(title: {eq: "Restructure & Turnaround Landing page"}) {

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

      restructureTurnaroundLandingPageOptions {
        iconWithTextr {
          itext 
          gicon{
            altText
            mediaItemUrl
            localFile{
              publicURL
            }
          }
        }
        wheading
        wcontent
        wlink
        pcontent
        pheading
        professionalGrid{
          ptitle
          procontent
          rprolink
          pimage{
           mediaItemUrl
           altText
           localFile{
            publicURL
           }
          }
        }

        articles2 {
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
        peoples2 {
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
        reheading
        resolutionGrid{
          recontent
          retitle
          reicon{
           mediaItemUrl
           altText
           localFile{
            publicURL
           }
          }
        }

        businessTitle
        businessTestimonial {
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

        brFaqsTitle
        brFaqs2 {
          question2
          answer2
        }


        nextStepsHeading 
        voluntaryAdministrationTitle
        voluntaryAdministrationContent
        vlink
        safeHarbourTitle
        safeHarbourContent
        slink
        creditorsVoluntaryLiquidationTitle
        creditorsVoluntaryLiquidationContent
        clink
        simplifiedLiquidationTitle
        simplifiedLiquidationContent
        silink
        membersVoluntaryLiquidationTitle
        membersVoluntaryLiquidationContent
        mlink

        smallBusinessRestructureTitle
        smallBusinessRestructureContent
        smllink
        
        restructureImage{
          mediaItemUrl
          altText
          localFile {
            childImageSharp {
              resize (width: 525, height: 326, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }

        testimage3 {
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

        testimonialsRowr {
          testimonialsHeadingr
          testimonialsContentr 
           
        }
       rbannerTitle
       rbannerSubtitle
       rbannerImage {
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
`;

export default Restructure2;
