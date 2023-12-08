import * as React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-landing" 
import GetInTouchForm from "../components/banner-get-in-touch-form";
import Accordian from "../components/accordian/accordian2"
import Accordian2 from "../components/accordian/accordian-dpn"
import TestimonialMain from "../components/testimonial-main2"
import TestimonialMain3 from "../components/testimonial-main3"
import Options from "../components/options/container"
import useInView from "react-cool-inview";
import OurPeople from "../components/our-people-liquid/our-people3"
import Services from "../components/services/container2"
import GetInTouch from "../components/get-in-touch3"
import GetInTouch2 from "../components/get-in-touch2"

import GetInTouchPPForm from "../components/get-in-touch-liquidation-popup";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-multi-carousel';

import $ from "jquery"

const DirectorPenaltyNotice = ({data}) => {
   let whyMG = [];
  data.wpPage.directorpenaltynoticePageOptions.queAndAns.map((d) => {
    return whyMG.push({ title: d.question, description: d.answer });
  })

  let whyMGdpn = [];
  data.wpPage.directorpenaltynoticePageOptions.typesPoints.map((d) => {
    console.log(d);
    return whyMGdpn.push({ title: d.title, description: d.description, tag: '' });
  })

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
  const breadCrumbs = [
    { link: "/", title: "Home" },
    { title: "Director Penalty Notice" },
  ]
   const [showModal, setModal] = React.useState(false);
   React.useEffect(() => {
     document.body.classList = 'DirectorPenaltyNoticepage';
     return () => {
       document.body.classList = '';
     }
   }, [])
  const [serviceEnter, changeServiceEnter] = React.useState('')
  const { observe, unobserve, inView, scrollDirection, entry } = useInView({
    threshold: 0.25, // Default is 0
    onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
      changeServiceEnter('serviceIn')
      // Triggered when the target enters the viewport
    },
    onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
      changeServiceEnter('')
      // Triggered when the target leaves the viewport
    },
    // More useful options...
  });
  const showContactForm = () => {
    $('#br_popup').addClass('show');
  }
  return (<div className="restructure_land liquidation_land liquidation dpn-ban-sec dpn_new no_bannerform dpnfont_page"><Layout>
    <Seo title="DirectorPenaltyNotice" />
    
      <TopBanner
        title={data.wpPage?.directorpenaltynoticePageOptions.title}
        subtitle={data.wpPage?.directorpenaltynoticePageOptions.description} 
        bannerImg={data.wpPage?.directorpenaltynoticePageOptions.banner}
         breadCrumbs={breadCrumbs}
      
      />

      <div class="rtsec2">
        <div class="container container2">
         <h2>About your recovery partner</h2>
          <ul>
            {data.wpPage.directorpenaltynoticePageOptions.partnerNew.map((d) => {
                return (
                  <li>
                    <img src={d.imageNew?.localFile?.publicURL} />

                    <div dangerouslySetInnerHTML={{ __html: d.titleNew }}></div>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>

      <section className="testimonial-main testimonial-mainnew">
        <div className="container">
              
                {data.wpPage.directorpenaltynoticePageOptions.testimonialTest.map(
                  (d, key) => {
                    return (

                      <div className="row">

                        <div className="col-sm-12 col-md-12 col-lg-6 p-5">

                        <img
                          className="img-fluid"
                          src={
                            d.testImage.localFile?.childImageSharp?.resize?.src
                          }
                        />

                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-6 p-5 desc">
                          <div>
                          
                          <div dangerouslySetInnerHTML={{ __html:d.testDescription }}></div>
                           <h2>- {d.testTitle}</h2>
                            
                          </div>

                        </div>

                      </div>
                    );
                  }
                )}
            
        </div>
      </section>

      <div className="wva_section fd_section dca_section dpn_part dpn_part2">
        <div className="container">
          <div className="wva_left">
           <img class="img-fluid" src={data.wpPage.directorpenaltynoticePageOptions.banner1.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.dpnLandingPageOptions.dpnNotImage.altText"/>   
          </div>
          <div className="wva_right">
            <h3>{data.wpPage.directorpenaltynoticePageOptions.title1}</h3>
            <div dangerouslySetInnerHTML={{__html: data.wpPage.directorpenaltynoticePageOptions.description1 }}></div>
            
            <button className="btn btn btn-primary" onClick={()=>showContactForm()}>Contact Us </button>

          </div>
        </div>
      </div>

      <div className="vcfo_section vcfo_section1 vcfo_section1_n">
          <div className="container">
            <div class="vcfo_left"><img class="img-fluid" src={data.wpPage.dpnLandingPageOptions.dpnNotImageCopy?.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.dpnLandingPageOptions.dpnNotImageCopy.altText"/>   </div>
            <div class="vcfo_right">
              <h2>{data.wpPage.dpnLandingPageOptions.dpnNotTitle2}</h2>
              <div dangerouslySetInnerHTML={{__html: data.wpPage.dpnLandingPageOptions.dpnNotDescription2 }} />
             {/*<button className="btn btn btn-primary" onClick={()=>showContactForm()}>Contact Us </button>*/}
            </div>
          </div>
        </div>


        <div className="service bankruptcy brige_color brige_color2 faqacr1 sub_heading">
         <Accordian2
                title={data.wpPage?.directorpenaltynoticePageOptions?.typesTitle}
                showEnquireButton={false}
                data={whyMGdpn}
              />
           
        </div>

        <section class="includes_sec brigeincludes_sec brigeincludes_sec_n liqpagefont">
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

  <TestimonialMain3
        data={data.wpPage.directorpenaltynoticePageOptions.pleasureContent}
      />

      

   <div className="service bankruptcy brige_color brige_color2 sub_heading">
   <Accordian2
          title={data.wpPage?.directorpenaltynoticePageOptions?.faqTitle}
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
      

      
      
      

     
      
      <div class="home">
      <GetInTouch
          title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
          text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
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
    wpPage(title: {eq: "Director Penalty Notice"}) {
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
      metaFields {
        metaDescription
        metaTitle
      }
      dpnLandingPageOptions{
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
      directorpenaltynoticePageOptions {
        description
        banner {
          mediaItemUrl
          altText
          localFile {
            childImageSharp {
              resize (width: 526, height: 473, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }
        optionsTitle
        optionsSubtext
        title
        title1
        banner1{
          mediaItemUrl
          altText
          localFile {
            childImageSharp {
              resize (width: 744, height: 580, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }
        description1
        typesTitle
        typesPoints {
          description
          fieldGroupName
          title
        }
        testimonialTest {
          testDescription
          testTitle
          testImage {
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
        pleasureContent {
          ptestDescription
          ptestTitle
          ptestImage {
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
        faqTitle
        queAndAns {
          answer
          question
        }
        
        recoveryTaglineNew
        partnerNew {
          imageNew {
            altText
            mediaItemUrl
            localFile{
              publicURL
            }
          }
          titleNew
        }
        wsButtonLink
        wsButtonText
        liquidationTitle
        liquidationDescription
        liquidationLearnmoreLink
        liquidationImage{
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

        restructureTitle
        restructureDescription
        restructureLearnmoreLink
        restructureImage{
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
        administrationTitle
        administrationDescription
        administrationLearnmoreLink
        administrationImage{
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
          
        docaTitle
        docaDescription
        docaLearnmoreLink
        docaImage{
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
            speakExpertLink
            speakExpertTitle
          }
        }
      }
    }
  }
`
export default DirectorPenaltyNotice