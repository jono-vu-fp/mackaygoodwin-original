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
    <div className="restructure_land bankruptcy service liquidation">
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
        />

        <div class="rtsec2">
          <div class="container container2">
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

        <div class="rtsec3">
          <div class="container container2">
            <div class="carousel_row">
              <Carousel showDots={true} responsive={responsive} infinite={true}  autoPlay={true} autoPlaySpeed={2000}>

                {data.wpPage.restructureTurnaroundLandingPageOptions.testimonialsRowr.map(
                  (d, key) => {
                    return (
                      <div class="ctestitem">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: d.testimonialsContentr,
                          }}
                        ></div>
                        <h4>-{d.testimonialsHeadingr}</h4>
                      </div>
                    );
                  }
                )}
              </Carousel>
            </div>
          </div>
        </div>

        <section id="vCFO" class="banners curve-right vcf_sec mg_identifix">
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
                Learn More
              </button>
             {/* <Link className="btn btn-primary me-5" to="/restructuring/">
                Learn More
              </Link>*/}
            </div>
          </div>
        </section>

        <section class="spek_sec">
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
               {/*<Link className="btn btn-primary" to="/contact">
                Contact us
              </Link>*/}
            </div>

            <div class="spek_row">
              {data.wpPage.restructureTurnaroundLandingPageOptions.professionalGrid.map(
                (d, key) => {
                  return (
                    <div class="spek_grid">
                      <div class="spek_item">
                        {/*<img src={d.pimage?.localFile?.publicURL} />*/}
                        <h4>{d.ptitle}</h4>
                        <div
                          class="p"
                          dangerouslySetInnerHTML={{ __html: d.procontent }}
                        />
                         <button className="btn" onClick={()=>showContactForm()}>
                          Contact us
                        </button>
                        {/*  
                      {d.rprolink?<Link className="btn" to={d.rprolink}>
                          Contact us
                        </Link>:<button className="btn" onClick={()=>showContactForm()}>
                          Contact us
                        </button>}*/}

                      </div>{" "}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>

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

        <section class="incsteps_sec">
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
                          Learn More
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
                          Learn More
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
                          Learn More
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
                          Learn More
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
                          Learn More
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
                          Learn More
                        </button>
              </div>:null}

              
        
        
            </div>
          </div>
        </section>

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

        <div class="grey_faq">
        <Accordian
          title={
            data.wpPage.restructureTurnaroundLandingPageOptions.brFaqsTitle
          }
          showEnquireButton={false}
          data={whyMG1}
        />
        </div>
        
        <div class="vcfo_section na_section new_landing">
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
        </div>

        <section className="news-articles restructurenews-articles" id="people">
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
    wpPage(title: {eq: "Restructure & Turnaround Landing page"}) {
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
                    resize (width: 416, height: 450, cropFocus: CENTER, quality: 80) {
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
                resize (width: 412, height: 280, cropFocus: CENTER, quality: 80) {
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
              resize (width: 525, height: 326, cropFocus: CENTER, quality: 80) {
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
              resize (width: 526, height: 473, cropFocus: CENTER, quality: 80) {
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
`;

export default Restructure2;
