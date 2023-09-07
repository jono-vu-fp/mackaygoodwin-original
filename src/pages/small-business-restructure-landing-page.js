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
import GetInTouchPPForm from "../components/get-in-touch-liquidation-popup"

import Container from "../components/slider/container-restructuring-nolink";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import News from "../components/news/list2";

import OurPeople from "../components/our-people-liquid/our-people3"
import $ from "jquery"

const Smallbusinessrestructure = ({ data }) => {
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
    <div className="restructure_land service liquidation smallrestructure_land">
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

        <div class="rtsec3">
          <div class="container container2">
            <div class="carousel_row">
            <h3>Hear from our clients</h3>
              <Carousel showDots={true} responsive={responsive} infinite={true}  autoPlay={true} autoPlaySpeed={2000}>

                {data.wpPage.smallBusinessRestructureLandingPageOptions.testimonialsRowsbr.map(
                  (d, key) => {
                    return (
                      <div class="ctestitem">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: d.testimonialsContentsbr,
                          }}
                        ></div>
                        <h4>"{d.testimonialsHeadingsbr}"</h4>
                      </div>
                    );
                  }
                )}
              </Carousel>
            </div>
          </div>
        </div>

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
                Learn More
              </button>
               
               {/* <Link className="btn btn-primary" to="/insights/guide-to-small-business-restructure/">
                Learn More
              </Link>*/}
              </div>
              <div class="col-sm-12 col-md-5 col-xl-5"><img src="https://cms.mackaygoodwin.com.au/wp-content/uploads/2022/10/having_worked_img.jpg" class="img-fluid" alt=""/></div>
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

       

        <section class="incsteps_sec">
          <div class="container container2">
            <h2>
              {
                data.wpPage.smallBusinessRestructureLandingPageOptions
                  .nextStepsHeadingsbr
              }
            </h2>
            <h4>Your debt relief options may include:</h4>

            

            {/*<div class="steps_nav">
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
                
              </ul> 
              </div>*/}
          </div>
          {/*<div class="steps_tab">
            <div class="container container2">
              {curTab==1?<div>
                <h3>
                  {
                    data.wpPage.smallBusinessRestructureLandingPageOptions
                      .voluntaryAdministrationTitlesbr
                  }
                </h3>
                <div
                  class="p"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpPage?.smallBusinessRestructureLandingPageOptions
                        ?.voluntaryAdministrationContentsbr,
                  }}
                /> 
                <Link
                  className="btn btn-primary"
                  to={data.wpPage.smallBusinessRestructureLandingPageOptions.vlinksbr}
                >
                  Learn More
                </Link>
              </div>:null}

              {curTab==2?<div>
                <h3>
                  {
                    data.wpPage.smallBusinessRestructureLandingPageOptions
                      .safeHarbourTitlesbr
                  }
                </h3>
                <div
                  class="p"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpPage?.smallBusinessRestructureLandingPageOptions
                        ?.safeHarbourContentsbr,
                  }}
                />
               <Link
                  className="btn btn-primary"
                  to={data.wpPage.smallBusinessRestructureLandingPageOptions.slinksbr}
                >
                  Learn More
                </Link>
              </div>:null}

              {curTab==3?<div>
                <h3>
                  {
                    data.wpPage.smallBusinessRestructureLandingPageOptions
                      .creditorsVoluntaryLiquidationTitlesbr
                  }
                </h3>
                <div
                  class="p"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpPage?.smallBusinessRestructureLandingPageOptions
                        ?.creditorsVoluntaryLiquidationContentsbr,
                  }}
                />
                <Link
                  className="btn btn-primary"
                  to={data.wpPage.smallBusinessRestructureLandingPageOptions.clinksbr}
                >
                  Learn More
                </Link>
              </div>:null}

              {curTab==4?<div>
                <h3>
                  {
                    data.wpPage.smallBusinessRestructureLandingPageOptions
                      .simplifiedLiquidationTitlesbr
                  }
                </h3>
                <div
                  class="p"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpPage?.smallBusinessRestructureLandingPageOptions
                        ?.simplifiedLiquidationContentsbr,
                  }}
                />
                <Link
                  className="btn btn-primary"
                  to={data.wpPage.smallBusinessRestructureLandingPageOptions.silinksbr}
                >
                  Learn More
                </Link>
              </div>:null}

              {curTab==5?<div>
                <h3>
                  {
                    data.wpPage.smallBusinessRestructureLandingPageOptions
                      .membersVoluntaryLiquidationTitlesbr
                  }
                </h3>
                <div
                  class="p"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpPage?.smallBusinessRestructureLandingPageOptions
                        ?.membersVoluntaryLiquidationContentsbr,
                  }}
                />
                 <Link
                  className="btn btn-primary"
                  to={data.wpPage.smallBusinessRestructureLandingPageOptions.mlinksbr}
                >
                  Learn More
                </Link>
              </div>:null}
            </div>
          </div>*/}
        </section>

        <section id="administration" class="banners curve-right vcf_sec mg_identifix dpntab_sec">
           <div class="container">
                <div className="wva_right">
                  <img class="img-fluid" src={data.wpPage.smallBusinessRestructureLandingPageOptions.voluntaryAdministrationImg.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.smallBusinessRestructureLandingPageOptions.voluntaryAdministrationImg.altText"/>           
                </div>
                <div className="wva_left">
                <h3>{data.wpPage.smallBusinessRestructureLandingPageOptions.voluntaryAdministrationTitlesbr}</h3>           
                  <div dangerouslySetInnerHTML={{__html: data.wpPage.smallBusinessRestructureLandingPageOptions.voluntaryAdministrationContentsbr }}></div>
                   {/*<Link className="btn btn-primary me-5"  to={data.wpPage.smallBusinessRestructureLandingPageOptions.vlinksbr}>Learn More</Link>*/}

                    <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>
                Learn More
              </button>
                 
                </div>      
           </div>
        </section>

        <section id="restructure" class="wva_section about_section history_section identifix_sec2 dpntab_sec">
       <div class="container">

        <div className="wva_left">
             <img class="img-fluid" src={data.wpPage.smallBusinessRestructureLandingPageOptions.safeHarbourImg.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.smallBusinessRestructureLandingPageOptions.safeHarbourImg.altText"/>            
               
          </div>

          <div className="wva_right">
            <h3>{data.wpPage.smallBusinessRestructureLandingPageOptions.safeHarbourTitlesbr}</h3>
            <div dangerouslySetInnerHTML={{__html: data.wpPage.smallBusinessRestructureLandingPageOptions.safeHarbourContentsbr }} />
             <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>
                Learn More
              </button>
               {/*<Link className="btn btn-primary me-5"  to={data.wpPage.smallBusinessRestructureLandingPageOptions.slinksbr}>Learn More</Link>*/}
          </div>

          
       </div>
    </section>

    <section id="administration" class="banners curve-right vcf_sec mg_identifix dpntab_sec">
           <div class="container">
                <div className="wva_right">
                  <img class="img-fluid" src={data.wpPage.smallBusinessRestructureLandingPageOptions.creditorsVoluntaryLiquidationImg.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.smallBusinessRestructureLandingPageOptions.creditorsVoluntaryLiquidationImg.altText"/>           
                </div>
                <div className="wva_left">
                <h3>{data.wpPage.smallBusinessRestructureLandingPageOptions.creditorsVoluntaryLiquidationTitlesbr}</h3>           
                  <div dangerouslySetInnerHTML={{__html: data.wpPage.smallBusinessRestructureLandingPageOptions.creditorsVoluntaryLiquidationContentsbr }}></div>
                   <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>
                Learn More
              </button>
                   {/*<Link className="btn btn-primary me-5"  to={data.wpPage.smallBusinessRestructureLandingPageOptions.clinksbr}>Learn More</Link>*/}
                 
                </div>      
           </div>
        </section>

         <section id="restructure" class="wva_section about_section history_section identifix_sec2 dpntab_sec">
       <div class="container">

        <div className="wva_left">
             <img class="img-fluid" src={data.wpPage.smallBusinessRestructureLandingPageOptions.simplifiedLiquidationImg.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.smallBusinessRestructureLandingPageOptions.simplifiedLiquidationImg.altText"/>            
               
          </div>

          <div className="wva_right">
            <h3>{data.wpPage.smallBusinessRestructureLandingPageOptions.simplifiedLiquidationTitlesbr}</h3>
            <div dangerouslySetInnerHTML={{__html: data.wpPage.smallBusinessRestructureLandingPageOptions.simplifiedLiquidationContentsbr }} />
             <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>
                Learn More
              </button>
               {/*<Link className="btn btn-primary me-5"  to={data.wpPage.smallBusinessRestructureLandingPageOptions.silinksbr}>Learn More</Link>*/}
          </div>

          
       </div>
    </section>

    <section id="administration" class="banners curve-right vcf_sec mg_identifix dpntab_sec">
           <div class="container">
                <div className="wva_right">
                  <img class="img-fluid" src={data.wpPage.smallBusinessRestructureLandingPageOptions.membersVoluntaryLiquidationImg.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.smallBusinessRestructureLandingPageOptions.membersVoluntaryLiquidationImg.altText"/>           
                </div>
                <div className="wva_left">
                <h3>{data.wpPage.smallBusinessRestructureLandingPageOptions.membersVoluntaryLiquidationTitlesbr}</h3>           
                  <div dangerouslySetInnerHTML={{__html: data.wpPage.smallBusinessRestructureLandingPageOptions.membersVoluntaryLiquidationContentsbr }}></div>
                   <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>
                Learn More
              </button>
                   {/*<Link className="btn btn-primary me-5"  to={data.wpPage.smallBusinessRestructureLandingPageOptions.mlinksbr}>Learn More</Link>*/}
                 
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
      </Layout>
    </div>
  );
};

export const query = graphql`
  {
    wpPage(title: {eq: "Small Business Restructure Landing Page"}) {
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
                resize (width: 412, height: 280, cropFocus: CENTER, quality: 80) {
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
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 80) {
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
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 80) {
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
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 80) {
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
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 80) {
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
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 80) {
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
              resize (width: 526, height: 346, cropFocus: CENTER, quality: 80) {
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

export default Smallbusinessrestructure;
