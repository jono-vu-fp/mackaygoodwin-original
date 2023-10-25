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
import Accordian2 from "../components/accordian/accordian-dpn"
import CapabilityForm from "../components/capability-form"
import CapabilityFormNew from "../components/capability-form-new"
import FullText from "../components/full-text"
import { formDetailContext } from '../components/context';
import GetInTouchPPForm from "../components/get-in-touch-liquidation-popup";

import Container from "../components/slider/container-restructuring-nolink";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import OurPeople from "../components/our-people-liquid/our-people3"
import $ from "jquery"


const Dpnpaidlandingpage = ({ data }) => {
   
  let whyMG = [];
  let whyMG1 = [];
  let whyMG2 = [];
  data.wpPage.dpnLandingPageOptions.dpnFaqs1.map((d) => {
    console.log(d);
    return whyMG.push({ title: d.question1, description: d.answer1, tag: '' });
  })

  let whyMGdpn = [];
  data.wpPage.dpnLandingPageOptions.dpnTypesPoints.map((d) => {
    console.log(d);
    return whyMGdpn.push({ title: d.title, description: d.description, tag: '' });
  })

  const breadCrumbs = [
    { link: "/", title: "Home" },
    { title: "DPN" },
  ]
  // const formDetailContext = React.createContext(null);
  const [fromDetails, setFormDetails] = React.useState(0);
  const [fromDetails2, setFormDetails2] = React.useState(0);
  const value = { fromDetails, setFormDetails };
  const value2 = { fromDetails2, setFormDetails2 };
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

  let businessData = [];
  data.wpPage.dpnLandingPageOptions.dpnPeoples.map((d) => {
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
  React.useEffect(() => {
    
    $('head').prepend("<meta name='robots' content='noindex, nofollow' />");
    
    console.log($('.dpn-sec3 a').length)
    $('.dpn-sec3 a').each(function(){
      console.log($(this).attr('href').replace('?',''))
      $(this).attr('href', $(this).attr('href').replace('/?',''));
    });  
  }, []);

  const showContactForm = () => {
    $('#br_popup').addClass('show');
  }

  return (<div className="restructure_land liquidation_land liquidation dpn-ban-sec">
    <Layout>
       <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage?.dpnLandingPageOptions.dpnBannerTitle}
        subtitle={data.wpPage?.dpnLandingPageOptions.dpnBannerSubtitle} 
        bannerImg={data.wpPage?.dpnLandingPageOptions.dpnBannerImage}
         breadCrumbs={breadCrumbs}
      
      />

        <div class="rtsec2">
          <div class="container container2">
           <h2>About your recovery partner</h2>
            <ul>
              {data.wpPage.dpnLandingPageOptions.dpnIconWithText.map(
                (d, key) => {
                  return (
                    <li>
                      <img src={d.dpnGicon?.localFile?.publicURL} />

                      <div dangerouslySetInnerHTML={{ __html: d.dpnItext }}></div>
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
                  data.wpPage.dpnLandingPageOptions
                    .testimage2.localFile?.childImageSharp?.resize?.src
                }
                alt="data.wpPage.dpnLandingPageOptions.testimage2.altText"
              />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 p-5 desc">
                {data.wpPage.dpnLandingPageOptions.dpnTestimonialsRow.map(
                  (d, key) => {
                    return (
                      <div>
                      
                      <div dangerouslySetInnerHTML={{ __html:d.dpnTestimonialsContent }}></div>
                       <h2>- {d.dpnTestimonialsHeading}</h2>
                        
                      </div>
                    );
                  }
                )}
              </div>
            </div>
        </div>
      </section>

       {/* <div class="liqtestmon">
        <div class="container">
            <div class="row">
              
              <div class="col-sm-12 col-md-12 col-lg-6">
                
                <h3>Client testimonial</h3>
          {data.wpPage.dpnLandingPageOptions.dpnTestimonialsRow.map(
                  (d, key) => {
                    return (
                      <div>
                      
                      <div dangerouslySetInnerHTML={{ __html:d.dpnTestimonialsContent }}></div>
                       <h2>- {d.dpnTestimonialsHeading}</h2>
                        
                      </div>
                    );
                  }
                )}

              </div>

              <div class="col-sm-12 col-md-12 col-lg-6 colmn_2">
               
              <img
                class="img-fluid"
                src={
                  data.wpPage.dpnLandingPageOptions
                    .testimage2.localFile?.childImageSharp?.resize?.src
                }
                alt="data.wpPage.dpnLandingPageOptions.testimage2.altText"
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

                {data.wpPage.dpnLandingPageOptions.dpnTestimonialsRow.map(
                  (d, key) => {
                    return (
                      <div class="ctestitem">
                      <div dangerouslySetInnerHTML={{ __html: '"'+d.dpnTestimonialsContent+'"' }}></div>
                       
                        <h4>-{d.dpnTestimonialsHeading}</h4>
                      </div>
                    );
                  }
                )}
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
                  data.wpPage.dpnLandingPageOptions
                    .testimage2.localFile?.childImageSharp?.resize?.src
                }
                alt="data.wpPage.liquidationLandingPageOptions.testimage2.altText"
              />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-7">
                <div class="rt_testmon">
                <h3>Hear from our clients</h3>

                  <Carousel showDots={true} responsive={responsive} infinite={true}  autoPlay={true} autoPlaySpeed={2000}>

                {data.wpPage.dpnLandingPageOptions.dpnTestimonialsRow.map(
                  (d, key) => {
                    return (
                      <div class="ctestitem">
                      <div dangerouslySetInnerHTML={{ __html: '"'+d.dpnTestimonialsContent+'"' }}></div>
                       
                        <h4>{d.dpnTestimonialsHeading}</h4>
                      </div>
                    );
                  }
                )}
              </Carousel>
                </div>
              

              </div>
            </div>
        </div>
      </div>*/}


   


       {/*<section  class="wva_section about_section history_section identifix_sec2  mg_acnew4 ond_sec dpn-sec1">
       <div class="container">    
       <div  className="row">    
        <div className="wva_left">
              <img class="img-fluid" src={data.wpPage.dpnLandingPageOptions.dpnNotImage?.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.news.ondemandImage.altText"/>          
          </div>
          <div className="wva_right">
           <h3>{data.wpPage.dpnLandingPageOptions.dpnNotTitle}</h3>
              <div dangerouslySetInnerHTML={{__html: data.wpPage.dpnLandingPageOptions.dpnNotDescription }} />
               <button className="btn btn btn-primary" onClick={()=>showContactForm()}>
                 Contact Us
                 </button> 
          </div> 
           </div>         
       </div>
    </section>*/}

        <div className="wva_section fd_section dca_section dpn_part dpn_part2">
        <div className="container">
          <div className="wva_left">
           <img class="img-fluid" src={data.wpPage.dpnLandingPageOptions.dpnNotImage?.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.dpnLandingPageOptions.dpnNotImage.altText"/>   
          </div>
          <div className="wva_right">
            <h3>{data.wpPage.dpnLandingPageOptions.dpnNotTitle}</h3>
            <div dangerouslySetInnerHTML={{__html: data.wpPage.dpnLandingPageOptions.dpnNotDescription }}></div>
            
            <button className="btn btn btn-primary" onClick={()=>showContactForm()}>
                 Contact Us
                 </button>

          </div>
        </div>
      </div>


     <div className="vcfo_section vcfo_section1">
          <div className="container">
            <div class="vcfo_left"><img class="img-fluid" src={data.wpPage.dpnLandingPageOptions.dpnNotImageCopy?.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.dpnLandingPageOptions.dpnNotImageCopy.altText"/>   </div>
            <div class="vcfo_right">
              <h4>{data.wpPage.dpnLandingPageOptions.dpnNotTitle2}</h4>
              <div dangerouslySetInnerHTML={{__html: data.wpPage.dpnLandingPageOptions.dpnNotDescription2 }} />
             <button className="btn btn btn-primary" onClick={()=>showContactForm()}>Contact Us </button>
            </div>
          </div>
        </div>

     
  

    <div className="service bankruptcy brige_color brige_color2 faqacr1">
   <Accordian2
          title={data.wpPage?.dpnLandingPageOptions?.dpnTypesTitle}
          showEnquireButton={false}
          data={whyMGdpn}
        />
     
  </div>  

 
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


   

     
 


    {/*<section className="sec_links dpn-sec4">
      <div className="container position-relative">
      <div className="row">
        <div className="col-sm-12">
          <ul class="d-flex justify-content-center">
            <li>
             <Link to="#repay-debt">Repay Debt</Link> 
            </li>
            <li>
             <Link to="#doca">Deed of Company Arrangement (DOCA)</Link> 
            </li>
              <li>
               <Link to="#liquidation">Liquidation</Link> 
            </li>
            <li>
               <Link to="#administration">Administration</Link> 
            </li>
          </ul>
        </div>
      </div>
      </div>
    </section>

      <section id="repay-debt" class="wva_section about_section history_section identifix_sec2 dpntab_sec dpn-doc-img1">
       <div class="container">

        <div className="wva_left">
          <img class="img-fluid" src={data.wpPage.dpnLandingPageOptions.dpnOptImage.mediaItemUrl} alt="data.wpPage.dpnLandingPageOptions.dpnOptImage.altText"/>                   
               
          </div>

          <div className="wva_right">
            <h3>{data.wpPage.dpnLandingPageOptions.dpnOptTitle}</h3>
            <div dangerouslySetInnerHTML={{__html: data.wpPage.dpnLandingPageOptions.dpnOptDescription }} />
               <Link className="btn btn-primary me-5"  to={data.wpPage.dpnLandingPageOptions.dpnOptLink}>Learn more</Link>
          </div>

          
       </div>
    </section>

     <section id="doca" class="banners curve-right vcf_sec mg_identifix dpntab_sec dpn-doc-img2">
     <div class="container">
          <div className="wva_right">
            <img class="img-fluid" src={data.wpPage.dpnLandingPageOptions.dpnOptImage2.mediaItemUrl} alt="data.wpPage.dpnLandingPageOptions.dpnOptImage2.altText"/>      
          </div>
          <div className="wva_left">
          <h3>{data.wpPage.dpnLandingPageOptions.dpnOptTitle2}</h3>           
            <div dangerouslySetInnerHTML={{__html: data.wpPage.dpnLandingPageOptions.dpnOptDescription2 }}></div>
             <Link className="btn btn-primary me-5"  to={data.wpPage.dpnLandingPageOptions.dpnOptLink2}>Learn more</Link>
           
          </div>      
     </div>
  </section>

   <section id="liquidation" class="wva_section about_section history_section identifix_sec2 dpntab_sec dpn-doc-img1 dpn-doc-img3">
     <div class="container">
          <div className="wva_left">
            <img class="img-fluid" src={data.wpPage.dpnLandingPageOptions.dpnOptImage3.mediaItemUrl} alt="data.wpPage.dpnLandingPageOptions.dpnOptImage3.altText"/>           
          </div>
          <div className="wva_right">
          <h3>{data.wpPage.dpnLandingPageOptions.dpnOptTitle3}</h3>           
            <div dangerouslySetInnerHTML={{__html: data.wpPage.dpnLandingPageOptions.dpnOptDescription3 }}></div>
             <Link className="btn btn-primary me-5"  to={data.wpPage.dpnLandingPageOptions.dpnOptLink3}>Learn more</Link>
           
          </div>      
     </div>
  </section>

   <section id="administration" class="banners curve-right vcf_sec mg_identifix dpntab_sec dpn-doc-img2 dpn-doc-img4 adimi-1">
     <div class="container">
          <div className="wva_right">
            <img class="img-fluid" src={data.wpPage.dpnLandingPageOptions.dpnOptImage4.mediaItemUrl} alt="data.wpPage.dpnLandingPageOptions.dpnOptImage4.altText"/>      
          </div>
          <div className="wva_left">
          <h3>{data.wpPage.dpnLandingPageOptions.dpnOptTitle4}</h3>           
            <div dangerouslySetInnerHTML={{__html: data.wpPage.dpnLandingPageOptions.dpnOptDescription4 }}></div>
             <Link className="btn btn-primary me-5"  to={data.wpPage.dpnLandingPageOptions.dpnOptLink4}>Learn more</Link>
           
          </div>      
     </div>
  </section>*/}


  <Container
          title={
            data.wpPage.dpnLandingPageOptions.dpnBusinessTitle
          }
          subtitle={""}
          data={
            data.wpPage.dpnLandingPageOptions
              .dpnBusinessTestimonial
          }
          slideColor={"#EBE9DE"}
        />
    


        
     
  <div className="service bankruptcy brige_color brige_color2">
    
      <Accordian
          title={data.wpPage?.dpnLandingPageOptions?.dpnFaqsTitle}
          showEnquireButton={false}
          data={whyMG}
        /> 
    </div>     


         <section className="news-articles restructurenews-articles corporate_people" id="people">
          <div className="container">
            <div className="row">
              <div className="people_head">
                <h2>{data.wpPage.dpnLandingPageOptions.dpnPeopleHead} </h2>
              

                 <div className="p" dangerouslySetInnerHTML={{ __html: data.wpPage.dpnLandingPageOptions?.dpnPeopleContent }}></div>
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
    wpPage(title: {eq: "DPN Paid Landing"}) {

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


      dpnLandingPageOptions{             

        dpnFaqsTitle
        dpnFaqs1 {
          question1
          answer1
        } 

        dpnIconWithText {
          dpnItext 
          dpnGicon{
            altText
            mediaItemUrl
            localFile{
              publicURL
            }
          }
        }        
        
        testimage2 {
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
        
        dpnTestimonialsRow { 
          dpnTestimonialsHeading
          dpnTestimonialsContent 
           
        }
       dpnBannerTitle
       dpnBannerSubtitle
       dpnBannerImage {
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

        dpnNotLink
        dpnNotTitle
        dpnNotDescription
        dpnNotImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 744, height: 580, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }

        dpnNotLink2
        dpnNotTitle2
        dpnNotDescription2 
        dpnNotImageCopy {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 744, height: 520, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }


        dpnTypesTitle
        dpnTypesPoints {
          description
          fieldGroupName
          title
        } 

        dpnOptionsTitle
        dpnOptionsSubText 

        dpnOptLink
       dpnOptTitle
       dpnOptDescription
        dpnOptImage {
          altText
          mediaItemUrl
        } 
         dpnOptLink2
       dpnOptTitle2
       dpnOptDescription2
        dpnOptImage2 {
          altText
          mediaItemUrl
        } 

        dpnOptLink3
       dpnOptTitle3
       dpnOptDescription3
        dpnOptImage3 {
          altText
          mediaItemUrl
        }  

        dpnOptLink4
       dpnOptTitle4
       dpnOptDescription4
        dpnOptImage4 {
          altText
          mediaItemUrl
        }  
        dpnBusinessTitle
        dpnBusinessTestimonial {
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
          learnMoreUrl
          name
        }   

        dpnPeoples {
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

         dpnPeopleHead
         dpnPeopleContent
       
         
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

export default Dpnpaidlandingpage
