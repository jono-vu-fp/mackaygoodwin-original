import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-4"
import GetInTouch from "../components/get-in-touch3"
import CurveLeft from "../components/curve-left"
import Services from "../components/services"
import Accordian from "../components/accordian/accordian"
import FullText from "../components/full-text"
import OurPeople from "../components/our-people-liquid/our-people4"
import TestimonialMain from "../components/testimonial-main-liquid-1"
import ReciveryPlan from "../components/recovery-plan"
import Container from "../components/slider/container-liquidation"
import EbookForm from "../components/ebook-form"
import { formEbookContext } from '../components/context';
import GetInTouchPPForm from "../components/get-in-touch-bankruptcy-popup"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import News from "../components/news/list2"
import $ from "jquery"

import _ from 'lodash';

const ConsultBusiness = ({ data }) => {
  const [showModal, setModal] = React.useState(false);
  const [businessData, setbusinessData] = React.useState([]);
  let whyMG = [];

  let whyMG5 = [];
  data.wpPage.debtagreements.testimonialsrowdebt.map((d) => {
    return whyMG5.push({ testdescription: d.testimonialscontentdebt });
  })

   React.useEffect(()=>{
    let businessData = [];
    let suffledArray = _.shuffle(data.allWpOurpeople.nodes); let lidx=0;
    suffledArray.map((d,key) => {
      if(d.title=='Gavin King'){
         lidx++;
        return businessData.unshift({ title: d.title, subtitle: d.backInBusiness.designation, text: d.backInBusiness.location, certification: d.backInBusiness.certification, content: d.content, linkedin: d.backInBusiness.linkedin, email: d.backInBusiness.email, img: d.featuredImage?.node, designationType: d.backInBusiness.designationType, registeredLiquidators: d.backInBusiness.registeredLiquidators, altimg:d.backInBusiness.staffImage2 });
      }
      else if(lidx<5){
        lidx++;
        return businessData.push({ title: d.title, subtitle: d.backInBusiness.designation, text: d.backInBusiness.location, certification: d.backInBusiness.certification, content: d.content, linkedin: d.backInBusiness.linkedin, email: d.backInBusiness.email, img: d.featuredImage?.node, designationType: d.backInBusiness.designationType, registeredLiquidators: d.backInBusiness.registeredLiquidators, altimg:d.backInBusiness.staffImage2 });
      }
    });
    setbusinessData(businessData);
    return () => {

    };
  },[]);


  let businessData2 = [];
  data.allWpArticle.nodes.map((d) => {
    if(d.newscategories?.nodes.map(e => e.slug).indexOf('personal-insolvency')>-1 && d.databaseId != 815){
      return businessData2.push({ title: d.title, excerpt: d.excerpt, slug: d.slug, featuredImage: d.featuredImage });
    }
  })

   const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const breadCrumbs = [
    { link: "/", title: "Home" },
    { title: "" },
  ]

  const [fromDetails, setFormDetails] = React.useState(0);
  const [fromEbookDetails, setFormEbookDetails] = React.useState(0);
  const value = { fromDetails, setFormDetails };
  const valueEbook = { fromEbookDetails, setFormEbookDetails };
  return (<div className="liquidation voluntary_administration bankruptcy doc_1 safe_harbour receivership debt_agree">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.debtagreements.debtBannerTitle}
        subtitle={''}
        text={data.wpPage.debtagreements.debtBannerDesc}
        bannerImg={data.wpPage.debtagreements.debtBannerImage}
        breadCrumbs={breadCrumbs}
        equalWidth={true}
      />

  <div className="liq_blocks va_blocks doca_2"> 
          <div className="container">
            <div className="row">
                
                {data.wpPage.debtagreements.debtWymnuDescriptionWhyliquid.map((d) => {
                  return (
                    <div className="col-md-4 col-lg-4">
                      <div className="lb_img">
                          <img src={d.image?.localFile?.publicURL} alt={d.image?.altText} />
                      </div>
                      <div className="lb_txt">
                        <p className="recovery-partner-title ">{d.title?.trim()}</p>
                        <p className="recovery-partner-desc">{d.description?.trim()}</p>
                      </div>
                    </div>)
                })}
            </div>
          </div>
        </div>

         <div className="weva_section doc3">
        <div className="container">
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.debtagreements.debtWevaContent }}></div>
            {data.wpPage.debtagreements.debtWevaButtonLink !== null && data.wpPage.debtagreements.debtWevaButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.debtagreements.debtWevaButtonLink}>{data.wpPage.debtagreements.debtWevaButtonText}</Link> : ""}
        </div>
      </div>

       <div className="wva_section key_expert hide_block">
        <div className="container">
        <div className="row">
          <div className="wva_left">
            <img src={data.wpPage.debtagreements.debtFdImage?.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.debtagreements.debtFdImage?.altText} />
          </div>
          <div className="wva_right">
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.debtagreements.debtFdContent }}></div>
            {data.wpPage.debtagreements.debtWevaButton2Link !== null && data.wpPage.debtagreements.debtWevaButton2Link !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.debtagreements.debtWevaButton2Link}>{data.wpPage.debtagreements.debtWevaButton2Text}</Link> : ""}
           
          </div>
          </div>
        </div>
      </div>

      <div className="obstacles glpo_section ">        
         <FullText
          subTxt={data.wpPage.debtagreements.debtWva1Description}
          customClass={'middleFullText obstacles_text'}
        />
       
      </div>

        <FullText
        subTxt={data.wpPage.debtagreements.debtHt1Description}
        customClass={'middleFullText glpo_section help_many get_bg'}
      />

      {/*<div className="fd_section myexperience_section">
        <div className="container"> 
        <div className="row">    
         <div class="col-md-5 col-lg-5">
            <img src={data.wpPage.debtagreements.debtDcaImage.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.debtagreements.debtDcaImage.altText} />
          </div>       
          <div class="col-md-7 col-lg-7">
              <div dangerouslySetInnerHTML={{ __html: data.wpPage.debtagreements.debtDcaDescription }}></div>
            
          </div>
         
        </div>
        </div>
      </div>*/}

      <div class="liqtestmon">
        <div class="container container2">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-5">
               <img class="img-fluid" src={data.wpPage.debtagreements.debtDcaImage.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.debtagreements.debtDcaImage.altText} />
              
              </div>
              <div class="col-sm-12 col-md-12 col-lg-7">
                <div class="rt_testmon">
                  <Carousel showDots={true} responsive={responsive} infinite={true}  autoPlay={true} autoPlaySpeed={2000}> 
                {data.wpPage.debtagreements.testimonialsrowdebt.map((d,key) => {
                 return <div class="ctestitem">
                 <div dangerouslySetInnerHTML={{ __html: d.testimonialscontentdebt }}></div>
                 </div>
                })}
          </Carousel> 
                </div>
              

              </div>
            </div>
        </div>
      </div>

      <OurPeople
        title={'Meet our team of experts and registered liquidators'}
        text={''}
        data={businessData}
        showAll={0}
        liquidation={1}
      />
      <div class="row">
        <div class="col-lg-12 col-md-12 align-center">
          <Link className="btn btn-primary no-marg" to="/people/">
            All People
          </Link>
        </div>
      </div>

      <div class="liquidation_land"> 
            <div class="vcfo_section na_section new_landing"> 
              <section class="news-list allnews_list">

                  <div class="container">
                  <div class="row">
                          <div class="col-lg-12 col-md-12">
                      <h2>Resources</h2></div>
                    </div>

                    <News
                      title={''}
                      data={businessData2}
                      btn={false}
                    />
                      
                  </div>
              </section>
          </div> </div>

     
      

      <div className="home">
        <GetInTouch
          title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
          text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
        />
      </div>
     

      <div className="cu_fixed">
          <a href="/contact"><img src="/images/sophie-img.png" />Contact Us</a>
      </div>
      <GetInTouchPPForm
        title={data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
        text={data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
        image={data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings.gitImage}
      />
    </Layout>
  </div>
  )
}
export const query = graphql`
  {
    wpPage(title: {eq: "Debt Agreements"}) {
      metaFields {
        metaDescription
        metaTitle
      }
     
      debtagreements {
        testimonialsrowdebt {
          testimonialscontentdebt           
        } 
        debtBannerDesc
        debtBannerImage {
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
        debtBannerTitle
        
        debtWymnuDescriptionWhyliquid {
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
      
        debtWymnuImage {
          altText
          mediaItemUrl
        }
        debtWymnuLearnMoreLink
        debtWva1Description
        debtFdContent
        debtFdImage {
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 351, height: 422, cropFocus: CENTER, quality: 80) {
                  src
                }
              }
            }
          }
        debtHt1Description
        debtWevaContent
        debtWevaButtonText
        debtWevaButtonLink
        debtWevaButton2Text
        debtWevaButton2Link
        debtDcaDescription        
        debtDcaImage {
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 565, height: 375, cropFocus: CENTER, quality: 80) {
                  src
                }
              }
            }
          }                
                       
        debtWymnuTitle
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
        backInBusiness {
          designation
          location
          certification
          designationType
          linkedin
          email
          phoneNumber
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
   allWpArticle(sort: {order: DESC, fields: date}) {
      nodes {
        databaseId
        title
        excerpt
        content
        newscategories {
          nodes {
            slug
          }
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
        slug
      }
    }
  }
`

export default ConsultBusiness
