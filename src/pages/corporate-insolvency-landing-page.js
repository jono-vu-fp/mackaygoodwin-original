import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopBanner from "../components/top-banner-8";
import GetInTouch from "../components/get-in-touchlanding";
import Accordian from "../components/accordian/accordian-bankruptcy";
import GetInTouchPPForm from "../components/get-in-touch-liquidation-popup";

import Container from "../components/slider/container-restructuring-nolink";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import OurPeople from "../components/our-people-liquid/our-people3"

import $ from "jquery"

const Corporateinsolvency2 = ({ data }) => {
  let whyMG = [];
  data.wpPage.corporateInsolvencyLandingPageOptions.iconWithTextco.map((d) => {
    return whyMG.push({ title: d.itextco });
  });
  data.wpPage.corporateInsolvencyLandingPageOptions.testimonialsRowco.map(
    (d) => {
      return whyMG.push({
        title: d.testimonialsHeadingco,
        testdescription: d.testimonialsContentco,
      });
    }
  );
  data.wpPage.corporateInsolvencyLandingPageOptions.professionalGridco.map(
    (d) => {
      return whyMG.push({ title: d.cotitle, testdescription: d.coprocontent, testlink: d.coplink });
    }
  );
  data.wpPage.corporateInsolvencyLandingPageOptions.resolutionGridco.map(
    (d) => {
      return whyMG.push({ title: d.retitleco, testdescription: d.recontentco });
    }
  );

  let whyMG1 = [];
  data.wpPage.corporateInsolvencyLandingPageOptions.brFaqsco.map((d) => {
    console.log(d);
    return whyMG1.push({ title: d.questionco, description: d.answerco, tag: "" });
  });

  let whyMG2 = [];
  data.wpPage.corporateInsolvencyLandingPageOptions.businessTestimonialco.map((d,k) => {
    console.log(d)
    return whyMG2.push({ name: d.nameco, designation: "", comment: d.commentco, url:d.urlco, keyloc:"d"+k, image:d.imageco });
  });

  let businessData = [];
  data.wpPage.corporateInsolvencyLandingPageOptions.peoplesco.map((d) => {
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

  
  // const formDetailContext = React.createContext(null);
  const [curTab, changeTab] = React.useState(1);
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
  React.useEffect(()=>{
    if(window.location.hash=='#receverships_sec'){
      changeTab(6);
    }
    return () => {

    };
  });

  return (
    <div className="restructure_land service liquidation">
      <Layout>
        <Seo
          title={data.wpPage.metaFields?.metaTitle}
          description={data.wpPage.metaFields?.metaDescription}
        />
        <TopBanner
          title={
            data.wpPage?.corporateInsolvencyLandingPageOptions.cobannerTitle
          }
          subtitle={
            data.wpPage?.corporateInsolvencyLandingPageOptions.cobannerSubtitle
          }
          bannerImg={
            data.wpPage?.corporateInsolvencyLandingPageOptions.cobannerImage
          }
        />

        <div class="rtsec2">
          <div class="container container2">
          <h2>About your recovery partner</h2>
            <ul>
              {data.wpPage.corporateInsolvencyLandingPageOptions.iconWithTextco.map(
                (d, key) => {
                  return (
                    <li>
                      <img src={d.giconco?.localFile?.publicURL} />

                      <div dangerouslySetInnerHTML={{ __html: d.itextco }}></div>
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

                {data.wpPage.corporateInsolvencyLandingPageOptions.testimonialsRowco.map(
                  (d, key) => {
                    return (
                      <div class="ctestitem">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: d.testimonialsContentco,
                          }}
                        ></div>
                        <h4>"{d.testimonialsHeadingco}"</h4>
                      </div>
                    );
                  }
                )}
              </Carousel>
            </div>
          </div>
        </div>
<div class="midheading">
        <div class="container"> <h2>{data.wpPage.corporateInsolvencyLandingPageOptions.midheading}</h2> </div> </div>
        <section id="vCFO" class="mg_identifix cinlpageidentifix">
        
          <div class="container">
            <div className="wva_right">
              <img
                class="img-fluid"
                src={
                  data.wpPage.corporateInsolvencyLandingPageOptions
                    .costructureImage.localFile?.childImageSharp?.resize?.src
                }
                alt="data.wpPage.corporateInsolvencyLandingPageOptions.costructureImage.altText"
              />
            </div>
            <div className="wva_left">
              <h3>
                {data.wpPage.corporateInsolvencyLandingPageOptions.coresheading}
              </h3>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage.corporateInsolvencyLandingPageOptions
                      .corescontent,
                }}
              ></div>
              <button className="btn btn-primary me-5" onClick={()=>showContactForm()}>
                          Learn More
                        </button>
              {/*<Link className="btn btn-primary me-5" to={data.wpPage.corporateInsolvencyLandingPageOptions.corlink}>
                Learn More
              </Link>*/}
            </div>
          </div>
        </section>

        <section class="spek_sec">
          <div class="container container2">
            <div class="spek_head">
              <h2>
                {data.wpPage.corporateInsolvencyLandingPageOptions.coheading}
              </h2>
              <div
                class="p"
                dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage?.corporateInsolvencyLandingPageOptions
                      ?.cocontent,
                }}
              />
              <button className="btn btn-primary " onClick={()=>showContactForm()}>
                         Contact </button>
            </div>



            <div class="spek_row">
              {data.wpPage.corporateInsolvencyLandingPageOptions.professionalGridco.map(
                (d, key) => {
                  return (
                    <div class="spek_grid">
                      <div class="spek_item">
                       {/* <img src={d.coimage?.localFile.publicURL} />*/}
                        <h4>{d.cotitle}</h4>
                        <div
                          class="p"
                          dangerouslySetInnerHTML={{ __html: d.coprocontent }}
                        />
                         {d.coplink?<Link className="btn" to={d.coplink}>
                          Contact us
                        </Link>:<button className="btn" onClick={()=>showContactForm()}>
                          Contact us
                        </button>}
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

           <h2 dangerouslySetInnerHTML={{__html:data.wpPage?.corporateInsolvencyLandingPageOptions
                        ?.coreheading,}} />

            <div class="sols_row">
              {data.wpPage.corporateInsolvencyLandingPageOptions.resolutionGridco.map(
                (d, key) => {
                  return (
                    <div class="sols_grid">
                      <div class="sols_item">
                       {/* <img src={d.reiconco?.localFile?.publicURL} />*/}

                        <h4>{d.retitleco}</h4>
                        <div
                          class="p"
                          dangerouslySetInnerHTML={{ __html: d.recontentco }}
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

        <section class="incsteps_sec">
          <div class="container container2">
             

            <h2 dangerouslySetInnerHTML={{__html:data.wpPage?.corporateInsolvencyLandingPageOptions
                        ?.nextStepsHeadingco,}} />

            {/*<div class="steps_nav">

            <ul>
                <li class={curTab==1?"tactive":""}>
                  <button onClick={()=>{changeTab(1);window.location.hash='other_sec';}}>Voluntary Administration</button>
                </li>
                <li class={curTab==2?"tactive":""}>
                  <button onClick={()=>{changeTab(2);window.location.hash='other_sec';}}>Safe Harbour</button>
                </li>
                <li class={curTab==3?"tactive":""}>
                  <button onClick={()=>{changeTab(3);window.location.hash='other_sec';}}>Creditors Voluntary Liquidation</button>
                </li>
                <li class={curTab==4?"tactive":""}>
                  <button onClick={()=>{changeTab(4);window.location.hash='other_sec';}}>Small Business Restructure</button>
                </li>
                <li class={curTab==5?"tactive":""}>
                  <button onClick={()=>{changeTab(5);window.location.hash='other_sec';}}>Members' Voluntary Liquidation</button>
                </li>
                <li class={curTab==6?"tactive":""}>
                  <button onClick={()=>{changeTab(6);window.location.hash='receverships_sec';}}>Receivership</button>
                </li>
              </ul>

              
            </div>*/}
          </div>
         {/* <div class="steps_tab" id="receverships_sec">
            <div class="container container2">
              {curTab==1?<div>
                <h3>
                  {
                    data.wpPage.corporateInsolvencyLandingPageOptions
                      .voluntaryAdministrationTitleco
                  }
                </h3>
                <div
                  class="p"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpPage?.corporateInsolvencyLandingPageOptions
                        ?.voluntaryAdministrationContentco,
                  }}
                />
                <Link
                  className="btn btn-primary"
                  to={data.wpPage.corporateInsolvencyLandingPageOptions.vlinkco}
                >
                  Learn More
                </Link>
              </div>:null}

              {curTab==2?<div>
                <h3>
                  {
                    data.wpPage.corporateInsolvencyLandingPageOptions
                      .safeHarbourTitleco
                  }
                </h3>
                <div
                  class="p"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpPage?.corporateInsolvencyLandingPageOptions
                        ?.safeHarbourContentco,
                  }}
                />
                <Link
                  className="btn btn-primary"
                  to={data.wpPage.corporateInsolvencyLandingPageOptions.slinkco}
                >
                  Learn More
                </Link>
              </div>:null}

              {curTab==3?<div>
                <h3>
                  {
                    data.wpPage.corporateInsolvencyLandingPageOptions
                      .creditorsVoluntaryLiquidationTitleco
                  }
                </h3>
                <div
                  class="p"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpPage?.corporateInsolvencyLandingPageOptions
                        ?.creditorsVoluntaryLiquidationContentco,
                  }}
                />
                <Link
                  className="btn btn-primary"
                  to={data.wpPage.corporateInsolvencyLandingPageOptions.clinkco}
                >
                  Learn More
                </Link>
              </div>:null}

              {curTab==4?<div>
                <h3>
                  {
                    data.wpPage.corporateInsolvencyLandingPageOptions
                      .simplifiedLiquidationTitleco
                  }
                </h3>
                <div
                  class="p"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpPage?.corporateInsolvencyLandingPageOptions
                        ?.simplifiedLiquidationContentco,
                  }}
                />
                <Link
                  className="btn btn-primary"
                  to={data.wpPage.corporateInsolvencyLandingPageOptions.silinkco}
                >
                  Learn More
                </Link>
              </div>:null}

              {curTab==5?<div>
                <h3>
                  {
                    data.wpPage.corporateInsolvencyLandingPageOptions
                      .membersVoluntaryLiquidationTitleco
                  }
                </h3>
                <div
                  class="p"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpPage?.corporateInsolvencyLandingPageOptions
                        ?.membersVoluntaryLiquidationContentco,
                  }}
                />
                <Link
                  className="btn btn-primary"
                  to={data.wpPage.corporateInsolvencyLandingPageOptions.mlinkco}
                >
                  Learn More
                </Link>
              </div>:null}

              {curTab==6?<div>
                <h3>
                  {
                    data.wpPage.corporateInsolvencyLandingPageOptions
                      .receivershiptitle
                  }
                </h3>
                <div
                  class="p"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpPage?.corporateInsolvencyLandingPageOptions
                        ?.receivershipContent,
                  }}
                />
                <Link
                  className="btn btn-primary"
                  to={data.wpPage.corporateInsolvencyLandingPageOptions.relink}
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
                  <img class="img-fluid" src={data.wpPage.corporateInsolvencyLandingPageOptions.voluntaryAdministrationImg1.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.corporateInsolvencyLandingPageOptions.voluntaryAdministrationImg1.altText"/>           
                </div>
                <div className="wva_left">
                <h3>{data.wpPage.corporateInsolvencyLandingPageOptions.voluntaryAdministrationTitleco}</h3>           
                  <div dangerouslySetInnerHTML={{__html: data.wpPage.corporateInsolvencyLandingPageOptions.voluntaryAdministrationContentco }}></div>
                   <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>
                Learn More
              </button>
                   {/*<Link className="btn btn-primary me-5"  to={data.wpPage.corporateInsolvencyLandingPageOptions.vlinkco}>Learn More</Link>*/}
                 
                </div>      
           </div>
        </section>

        <section id="restructure" class="wva_section about_section history_section identifix_sec2 dpntab_sec">
       <div class="container">

        <div className="wva_left">
             <img class="img-fluid" src={data.wpPage.corporateInsolvencyLandingPageOptions.safeHarbourImg1.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.corporateInsolvencyLandingPageOptions.safeHarbourImg1.altText"/>            
               
          </div>

          <div className="wva_right">
            <h3>{data.wpPage.corporateInsolvencyLandingPageOptions.safeHarbourTitleco}</h3>
            <div dangerouslySetInnerHTML={{__html: data.wpPage.corporateInsolvencyLandingPageOptions.safeHarbourContentco }} />
             <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>
                Learn More
              </button>
               {/*<Link className="btn btn-primary me-5"  to={data.wpPage.corporateInsolvencyLandingPageOptions.slinkco}>Learn More</Link>*/}
          </div>

          
       </div>
    </section>

    <section id="administration" class="banners curve-right vcf_sec mg_identifix dpntab_sec">
           <div class="container">
                <div className="wva_right">
                  <img class="img-fluid" src={data.wpPage.corporateInsolvencyLandingPageOptions.creditorsVoluntaryLiquidationImg1.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.corporateInsolvencyLandingPageOptions.creditorsVoluntaryLiquidationImg1.altText"/>           
                </div>
                <div className="wva_left">
                <h3>{data.wpPage.corporateInsolvencyLandingPageOptions.creditorsVoluntaryLiquidationTitleco}</h3>           
                  <div dangerouslySetInnerHTML={{__html: data.wpPage.corporateInsolvencyLandingPageOptions.creditorsVoluntaryLiquidationContentco }}></div>
                   <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>
                Learn More
              </button>
                   {/*<Link className="btn btn-primary me-5"  to={data.wpPage.corporateInsolvencyLandingPageOptions.clinkco}>Learn More</Link>*/}
                 
                </div>      
           </div>
        </section>

         <section id="restructure" class="wva_section about_section history_section identifix_sec2 dpntab_sec">
       <div class="container">

        <div className="wva_left">
             <img class="img-fluid" src={data.wpPage.corporateInsolvencyLandingPageOptions.simplifiedLiquidationImg1.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.corporateInsolvencyLandingPageOptions.simplifiedLiquidationImg1.altText"/>            
               
          </div>

          <div className="wva_right">
            <h3>{data.wpPage.corporateInsolvencyLandingPageOptions.simplifiedLiquidationTitleco}</h3>
            <div dangerouslySetInnerHTML={{__html: data.wpPage.corporateInsolvencyLandingPageOptions.simplifiedLiquidationContentco }} />
             <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>
                Learn More
              </button>
               {/*<Link className="btn btn-primary me-5"  to={data.wpPage.corporateInsolvencyLandingPageOptions.silinkco}>Learn More</Link>*/}
          </div>

          
       </div>
    </section>

    <section id="administration" class="banners curve-right vcf_sec mg_identifix dpntab_sec">
           <div class="container">
                <div className="wva_right">
                  <img class="img-fluid" src={data.wpPage.corporateInsolvencyLandingPageOptions.membersVoluntaryLiquidationImg1.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.corporateInsolvencyLandingPageOptions.membersVoluntaryLiquidationImg1.altText"/>           
                </div>
                <div className="wva_left">
                <h3>{data.wpPage.corporateInsolvencyLandingPageOptions.membersVoluntaryLiquidationTitleco}</h3>           
                  <div dangerouslySetInnerHTML={{__html: data.wpPage.corporateInsolvencyLandingPageOptions.membersVoluntaryLiquidationContentco }}></div>
                   <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>
                Learn More
              </button>
                   {/*<Link className="btn btn-primary me-5"  to={data.wpPage.corporateInsolvencyLandingPageOptions.mlinkco}>Learn More</Link>*/}
                 
                </div>      
           </div>
        </section>

        <section id="restructure" class="wva_section about_section history_section identifix_sec2 dpntab_sec">
       <div class="container">

        <div className="wva_left">
             <img class="img-fluid" src={data.wpPage.corporateInsolvencyLandingPageOptions.receivershipImg1.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.corporateInsolvencyLandingPageOptions.receivershipImg1.altText"/>            
               
          </div>

          <div className="wva_right">
            <h3>{data.wpPage.corporateInsolvencyLandingPageOptions.receivershiptitle}</h3>
            <div dangerouslySetInnerHTML={{__html: data.wpPage.corporateInsolvencyLandingPageOptions.receivershipContent }} />
             <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>
                Learn More
              </button>
               {/*<Link className="btn btn-primary me-5"  to={data.wpPage.corporateInsolvencyLandingPageOptions.relink}>Learn More</Link>*/}
          </div>

          
       </div>
    </section>

        <Container
          title={
            data.wpPage.corporateInsolvencyLandingPageOptions.businessTitleco
          }
          subtitle={""}
          data={ whyMG2 }
          slideColor={"#EBE9DE"}
        />

        <div class="bankruptcy service">
         <div class="grey_faq"> 
          <Accordian
          title={
            data.wpPage.corporateInsolvencyLandingPageOptions.brFaqsTitleco
          }
          showEnquireButton={false}
          data={whyMG1}
        />
        </div>
         </div>
        
        

        <section className="news-articles restructurenews-articles corporate_people" id="people">
          <div className="container">
            <div className="row">
              <div className="people_head">
                <h2>{data.wpPage.corporateInsolvencyLandingPageOptions.peopleHeadco} </h2>
              

                 <div className="p" dangerouslySetInnerHTML={{ __html: data.wpPage.corporateInsolvencyLandingPageOptions?.peopleContentco }}></div>
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
    wpPage(title: {eq: "Corporate Insolvency Landing Page"}) {
      corporateInsolvencyLandingPageOptions {
        iconWithTextco {
          itextco 
          giconco{
            altText
            mediaItemUrl
            localFile {
              publicURL
            }
          }
        }
        midheading
        coresheading
        corescontent
        corlink
        cocontent
        coheading
        professionalGridco{
          cotitle
          coprocontent
          coplink
          coimage{
           mediaItemUrl
           altText
           localFile{
            publicURL
           }
          }
        }

        
        peoplesco {
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
        peopleHeadco
        peopleContentco
        coreheading
        resolutionGridco{
          recontentco
          retitleco
          reiconco{
           mediaItemUrl
           altText
           localFile{
            publicURL
           }
          }
        }

        businessTitleco
        businessTestimonialco {
          commentco
          imageco {
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
          urlco
          nameco
        }

        brFaqsTitleco
        brFaqsco {
          questionco
          answerco
        }


        nextStepsHeadingco 
        voluntaryAdministrationTitleco
        voluntaryAdministrationContentco
        vlinkco
        voluntaryAdministrationImg1{
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

        safeHarbourTitleco
        safeHarbourContentco
        slinkco
        safeHarbourImg1{
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

        creditorsVoluntaryLiquidationTitleco
        creditorsVoluntaryLiquidationContentco
        clinkco
        creditorsVoluntaryLiquidationImg1{
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

        simplifiedLiquidationTitleco
        simplifiedLiquidationContentco
        silinkco
        simplifiedLiquidationImg1{
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

        membersVoluntaryLiquidationTitleco
        membersVoluntaryLiquidationContentco
        mlinkco
        membersVoluntaryLiquidationImg1{
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

        receivershiptitle
        receivershipContent
        relink
        receivershipImg1{
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
        
        costructureImage{
          mediaItemUrl
          altText
          localFile {
            childImageSharp {
              resize (width: 549, height: 499, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }
        testimonialsRowco {
          testimonialsHeadingco
          testimonialsContentco 
           
        }
       cobannerTitle
       cobannerSubtitle
       cobannerImage {
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
            getInTouchDescription
            getInTouchTitle
            gitImage{
              mediaItemUrl
              altText
              localFile {
                childImageSharp {
                  resize (width: 500, height: 685, cropFocus: CENTER, quality: 80) {
                    src
                  }
                }
              }
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

export default Corporateinsolvency2;
