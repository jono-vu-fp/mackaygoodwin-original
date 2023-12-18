import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopBanner from "../components/top-banner-landing";
import GetInTouch from "../components/get-in-touchlanding";
import Accordian from "../components/accordian/accordian-bankruptcy";
import GetInTouchPPForm from "../components/get-in-touch-liquidation-popup";

import Container from "../components/slider/container-restructuring-nolink";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import OurPeople from "../components/our-people-liquid/our-people3"

import $ from "jquery"

const Insolvency = ({ data }) => {
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
  const breadCrumbs = [
    { link: "/", title: "Home" }, 
    { title: "Corporate Insolvency" },
  ];

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
  React.useEffect(()=>{

    let scriptEle = document.createElement("script");
    scriptEle.setAttribute("src", '//js.hsforms.net/forms/embed/v2.js');
    scriptEle.setAttribute("type", "text/javascript");
    document.body.appendChild(scriptEle);
    scriptEle.addEventListener("load", () => {
      console.log("File loaded")
    });

    if(window.location.hash=='#receverships_sec'){
      changeTab(6);
    }
    return () => {

    };
  });

  return (
    <div className="restructure_land service liquidation ci_land restructure_land2 no_bannerform dpnfont_page">
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
          breadCrumbs={breadCrumbs}
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

        <section className="testimonial-main testimonial-mainnew">
      <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 p-5">
               
              <img
                class="img-fluid"
                src={
                  data.wpPage.corporateInsolvencyLandingPageOptions
                    .testimageco.localFile?.childImageSharp?.resize?.src
                }
                alt="data.wpPage.corporateInsolvencyLandingPageOptions.testimageco.altText"
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 p-5 desc">
               {data.wpPage.corporateInsolvencyLandingPageOptions.testimonialsRowco.map((d,key) => {
                 return <div>
                 
                  <div dangerouslySetInnerHTML={{ __html: d.testimonialsContentco}}></div>
                 <h2>- {d.testimonialsHeadingco}</h2>
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
         {data.wpPage.corporateInsolvencyLandingPageOptions.testimonialsRowco.map((d,key) => {
                 return <div>
                 
                  <div dangerouslySetInnerHTML={{ __html: d.testimonialsContentco}}></div>
                 <h2>- {d.testimonialsHeadingco}</h2>
                 </div>
                })}

              </div>

              <div class="col-sm-12 col-md-12 col-lg-6 colmn_2">
               
              <img
                class="img-fluid"
                src={
                  data.wpPage.corporateInsolvencyLandingPageOptions
                    .testimageco.localFile?.childImageSharp?.resize?.src
                }
                alt="data.wpPage.corporateInsolvencyLandingPageOptions.testimageco.altText"
              />
              </div>
            </div>
        </div>
      </div>*/}

        {/* <div class="rtsec3">
          <div class="container container2">
            <div class="carousel_row">
            <h3>Hear from our clients</h3>
            <Carousel showDots={true} responsive={responsive} infinite={true}  autoPlay={true} autoPlaySpeed={2000}> 
                {data.wpPage.corporateInsolvencyLandingPageOptions.testimonialsRowco.map((d,key) => {
                 return <div class="ctestitem">
                  <div dangerouslySetInnerHTML={{ __html: '"'+d.testimonialsContentco+'"' }}></div>
                 <h4>-{d.testimonialsHeadingco}</h4>
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
                  data.wpPage.corporateInsolvencyLandingPageOptions
                    .testimageco.localFile?.childImageSharp?.resize?.src
                }
                alt="data.wpPage.corporateInsolvencyLandingPageOptions.testimageco.altText"
              />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-7">
                <div class="rt_testmon">
                <h3>Hear from our clients</h3>

                  <Carousel showDots={true} responsive={responsive} infinite={true}  autoPlay={true} autoPlaySpeed={2000}> 
                {data.wpPage.corporateInsolvencyLandingPageOptions.testimonialsRowco.map((d,key) => {
                 return <div class="ctestitem">
                  <div dangerouslySetInnerHTML={{ __html: '"'+d.testimonialsContentco+'"' }}></div>
                 <h4>{d.testimonialsHeadingco}</h4>
                 </div>
                })}
          </Carousel> 
                </div>
              

              </div>
            </div>
        </div>
      </div>*/}

        
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
                          Learn more
                        </button>
              {/*<Link className="btn btn-primary me-5" to={data.wpPage.corporateInsolvencyLandingPageOptions.corlink}>
                Learn More
              </Link>*/}
            </div>
          </div>
        </section>


        <section class="eligible_sec mbottom_0 greybg">
          <div class="container container2">

          <h2>
                 {data.wpPage.corporateInsolvencyLandingPageOptions.coheading}
              </h2>
               <h3>
                {data.wpPage.corporateInsolvencyLandingPageOptions.cocontent}
              </h3>
               

            
              <ul>

              {data.wpPage.corporateInsolvencyLandingPageOptions.professionalGridco.map(
                (d, key) => {
                    return (
                       <li>
                       <input type="checkbox" name="radio" id={'radio'+key} />
                        <label for={'radio'+key}><strong>{d.cotitle}</strong><br/>

                        <span dangerouslySetInnerHTML={{ __html: d.coprocontent }}
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

            <ul class="profe_row">
              {data.wpPage.corporateInsolvencyLandingPageOptions.professionalGridco.map(
                (d, key) => {
                  return (
                    
                        <li>
                        <h4>{d.cotitle}</h4>
                        <div
                          class="p"
                          dangerouslySetInnerHTML={{ __html: d.coprocontent }}
                        />
                        
                       {" "}
                     </li>
                  );
                }
              )}
            </ul> 
          </div>
         </section>*/}

       {/* <section class="spek_sec">
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


         

        <Container
          title={
            data.wpPage.corporateInsolvencyLandingPageOptions.businessTitleco
          }
          subtitle={""}
          data={ whyMG2 }
          slideColor={"#EBE9DE"}
        />

         <div className="service bankruptcy brige_color brige_color2 sub_heading">
          <Accordian
          title={
            data.wpPage.corporateInsolvencyLandingPageOptions.brFaqsTitleco
          }
          showEnquireButton={false}
          data={whyMG1}
        />
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
    wpPage(title: {eq: "Corporate Insolvency"}) {

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
                resize (width: 412, height: 280, cropFocus: CENTER, quality: 100) {
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
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 100) {
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
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 100) {
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
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 100) {
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
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 100) {
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
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 100) {
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
                resize (width: 526, height: 351, cropFocus: CENTER, quality: 100) {
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
              resize (width: 549, height: 499, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }
        testimonialsRowco {
          testimonialsHeadingco
          testimonialsContentco 
           
        }
        testimageco {
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
            getInTouchDescription2
            getInTouchTitle
            gitImage{
              mediaItemUrl
              altText
              localFile {
                childImageSharp {
                  resize (width: 500, height: 685, cropFocus: CENTER, quality: 100) {
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

export default Insolvency;
