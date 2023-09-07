import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-8" 
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
    { link: "#", title: "Services" },
    { title: "Restructure & Turnaround" },
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
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
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
      
      />

        <div class="rtsec2">
          <div class="container container2">
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

     <div class="rtsec3">
          <div class="container container2">
            <div class="carousel_row">
              <Carousel showDots={true} responsive={responsive} infinite={true}  autoPlay={true} autoPlaySpeed={2000}>

                {data.wpPage.dpnLandingPageOptions.dpnTestimonialsRow.map(
                  (d, key) => {
                    return (
                      <div class="ctestitem">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: d.dpnTestimonialsContent,
                          }}
                        ></div>
                        <h4>-{d.dpnTestimonialsHeading}</h4>
                      </div>
                    );
                  }
                )}
              </Carousel>
            </div>
          </div>
        </div>


       <section  class="wva_section about_section history_section identifix_sec2  mg_acnew4 ond_sec dpn-sec1">
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

              {/*<Link className="btn btn-primary" to={data.wpPage.dpnLandingPageOptions.dpnNotLink}>Contact Us</Link>*/}
          </div> 
           </div>         
       </div>
    </section>

    <div class="dpn-sec2">
      <div class="container">
    <div class="row">
          <div className="col-md-5 col-lg-5">
            <h3>{data.wpPage.dpnLandingPageOptions.dpnNotTitle2}</h3>
          </div>
          <div className="col-md-7 col-lg-7 rig-text">
            <div dangerouslySetInnerHTML={{__html: data.wpPage.dpnLandingPageOptions.dpnNotDescription2 }} />

             <button className="btn btn btn-primary" onClick={()=>showContactForm()}>Contact Us
 </button>

            {/*<Link className="btn btn-primary" to={data.wpPage.dpnLandingPageOptions.dpnNotLink2}>Contact Us</Link>*/}

      </div>
 </div>
    </div></div>

    <div className="bankruptcy service">
      <Accordian2
          title={data.wpPage?.dpnLandingPageOptions?.dpnTypesTitle}
          showEnquireButton={false}
          data={whyMGdpn}
        />
  </div>   

     

    <section className="dpn_optoins your-opt1"> 
     <div className="container position-relative">
      <div className="row">
        <div className="col-sm-12"> <h2>{data.wpPage.dpnLandingPageOptions.dpnOptionsTitle}</h2>
     <div dangerouslySetInnerHTML={{__html: data.wpPage.dpnLandingPageOptions.dpnOptionsSubText }}></div>
      </div>
      </div>
      </div>
    </section>

    <section class="incsteps_sec">
          <div class="container container2">
             

            <h2 dangerouslySetInnerHTML={{__html:data.wpPage?.corporateInsolvencyLandingPageOptions
                        ?.nextStepsHeadingco,}} />

            <div class="steps_nav">

            <ul>
                <li class={curTab==1?"tactive":""}>
                  <button onClick={()=>changeTab(1)}>Repay Debt</button>
                </li>
                <li class={curTab==2?"tactive":""}>
                  <button onClick={()=>changeTab(2)}>Deed of Company Arrangement (DOCA)</button>
                </li>
                <li class={curTab==3?"tactive":""}>
                  <button onClick={()=>changeTab(3)}>Liquidation</button>
                </li>
                <li class={curTab==4?"tactive":""}>
                  <button onClick={()=>changeTab(4)}>Administration</button>
                </li>
                 
              </ul>

              
            </div>
          </div>
          <div class="steps_tab">
            <div class="container container2">
              {curTab==1?<div>
                <h3>
                  {data.wpPage.dpnLandingPageOptions.dpnOptTitle}
                </h3>

                <div class="p" dangerouslySetInnerHTML={{__html: data.wpPage.dpnLandingPageOptions.dpnOptDescription }} />
               {/*<Link className="btn btn-primary me-5"  to={data.wpPage.dpnLandingPageOptions.dpnOptLink}>Learn More</Link>*/}

               <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>Learn More</button>

                
              </div>:null}
              {curTab==2?<div>
                

               <h3>{data.wpPage.dpnLandingPageOptions.dpnOptTitle2}</h3>           
            <div class="p" dangerouslySetInnerHTML={{__html: data.wpPage.dpnLandingPageOptions.dpnOptDescription2 }}></div>
            {/* <Link className="btn btn-primary me-5"  to={data.wpPage.dpnLandingPageOptions.dpnOptLink2}>Learn More</Link>*/}
             <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>Learn More</button>
                
              </div>:null}

              {curTab==3?<div>
                

                 <h3>{data.wpPage.dpnLandingPageOptions.dpnOptTitle3}</h3>           
            <div class="p" dangerouslySetInnerHTML={{__html: data.wpPage.dpnLandingPageOptions.dpnOptDescription3 }}></div>
             {/*<Link className="btn btn-primary me-5"  to={data.wpPage.dpnLandingPageOptions.dpnOptLink3}>Learn More</Link>*/}
             <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>Learn More</button>
                
              </div>:null}

              {curTab==4?<div>
                

                <h3>{data.wpPage.dpnLandingPageOptions.dpnOptTitle4}</h3>           
            <div  class="p" dangerouslySetInnerHTML={{__html: data.wpPage.dpnLandingPageOptions.dpnOptDescription4 }}></div>
            {/* <Link className="btn btn-primary me-5"  to={data.wpPage.dpnLandingPageOptions.dpnOptLink4}>Learn More</Link>*/}
             <button className="btn btn btn-primary me-5" onClick={()=>showContactForm()}>Learn More</button>
                
              </div>:null}
 
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
               <Link className="btn btn-primary me-5"  to={data.wpPage.dpnLandingPageOptions.dpnOptLink}>Learn More</Link>
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
             <Link className="btn btn-primary me-5"  to={data.wpPage.dpnLandingPageOptions.dpnOptLink2}>Learn More</Link>
           
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
             <Link className="btn btn-primary me-5"  to={data.wpPage.dpnLandingPageOptions.dpnOptLink3}>Learn More</Link>
           
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
             <Link className="btn btn-primary me-5"  to={data.wpPage.dpnLandingPageOptions.dpnOptLink4}>Learn More</Link>
           
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
    


        
     
  <div className="bankruptcy service">
   <div class="grey_faq">
      <Accordian
          title={data.wpPage?.dpnLandingPageOptions?.dpnFaqsTitle}
          showEnquireButton={false}
          data={whyMG}
        />
  </div> </div>     


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
         text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
       />
    </div>
      <GetInTouchPPForm
          title={data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
          text={data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
          image={data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings.gitImage}
        />
    </Layout>
  </div>)
}

export const query = graphql`
  {
    wpPage(title: {eq: "DPN Paid Landing"}) {
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
              resize (width: 526, height: 473, cropFocus: CENTER, quality: 80) {
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
              resize (width: 526, height: 354, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }

        dpnNotLink2
        dpnNotTitle2
        dpnNotDescription2  

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
                resize (width: 412, height: 280, cropFocus: CENTER, quality: 80) {
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

export default Dpnpaidlandingpage
