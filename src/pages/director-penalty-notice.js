import * as React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GetInTouchForm from "../components/banner-get-in-touch-form";
import Accordian from "../components/accordian/accordian2"
import TestimonialMain from "../components/testimonial-main2"
import Options from "../components/options/container"
import useInView from "react-cool-inview";
import OurPeople from "../components/our-people-list/our-people2"
import Services from "../components/services/container2"
import GetInTouch from "../components/get-in-touch3"
import GetInTouch2 from "../components/get-in-touch2"

const DirectorPenaltyNotice = ({data}) => {
   let whyMG = [];
  data.wpPage.directorpenaltynoticePageOptions.queAndAns.map((d) => {
    return whyMG.push({ title: d.question, description: d.answer });
  })
  let businessData = [];
  data.allWpOurpeople.nodes.map((d) => {
    return businessData.push({ title: d.title, slug:d.slug, subtitle: d.backInBusiness.designation, text: d.backInBusiness.location, certification: d.backInBusiness.certification, content: d.content, linkedin: d.backInBusiness.linkedin, email: d.backInBusiness.email, phone: d.backInBusiness.phoneNumber, img: d.featuredImage?.node, designationType: d.backInBusiness.designationType, registeredLiquidators: d.backInBusiness.registeredLiquidators });
  })
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
  return (<Layout>
    <Seo title="DirectorPenaltyNotice" />
    <div class="dpn_page">
      <section id="banner-section" class="identi_bannersec identifix_sec1">
     <div class="container position-relative">
      <div class="row">
       <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5">
          <div class="banner-content innerpage-banner">
             <h1 class="banner-heading">{data.wpPage.directorpenaltynoticePageOptions.title}</h1>
              
             <div class="banner-desc d-none d-sm-none d-md-none d-lg-block">
             
             <div dangerouslySetInnerHTML={{__html: data.wpPage.directorpenaltynoticePageOptions.description }} /> 
             </div>
             <div class="d-none d-sm-none d-md-none d-lg-block">
                 <Link className="btn_more" to="/contact/">Enquire now</Link>
                </div>
          </div>
       </div>
       <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5">
          <div class="banner-image">
           <img src={data.wpPage.directorpenaltynoticePageOptions.banner.mediaItemUrl} alt="data.wpPage.directorpenaltynoticePageOptions.banner.altText" />

          </div>
          <div class="col-12 d-block d-sm-block d-md-block d-lg-none banner-mdesc">
             <div class="banner-desc"><div dangerouslySetInnerHTML={{__html: data.wpPage.directorpenaltynoticePageOptions.description }} /></div>
             <div>
              <Link className="btn_more" to="/contact/">Enquire Now</Link>

              </div>

          </div>
       </div>
    </div>
    </div>
    </section>   

      <section id="vCFO" class="wva_section about_section history_section identifix_sec2">
       <div class="container">

       <div className="wva_left">
            <img class="img-fluid" src={data.wpPage.directorpenaltynoticePageOptions.banner1.mediaItemUrl} alt="data.wpPage.directorpenaltynoticePageOptions.banner1.altText"/>
            </div>

          <div className="wva_right">
            <h3>{data.wpPage.directorpenaltynoticePageOptions.title1}</h3>
            <div dangerouslySetInnerHTML={{__html: data.wpPage.directorpenaltynoticePageOptions.description1 }} />
               {data.wpPage.directorpenaltynoticePageOptions.wsButtonLink !== null && data.wpPage.directorpenaltynoticePageOptions.wsButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.directorpenaltynoticePageOptions.wsButtonLink}>{data.wpPage.directorpenaltynoticePageOptions.wsButtonText}</Link> : ""}
          </div>

           
       </div>
    </section>
    <section class="dpnsec_3">
               
    {data.wpPage.directorpenaltynoticePageOptions.typesPoints.map((d) => {
              return (<div className="ca_sec">
              <div class="container">
              <h3>{data.wpPage.directorpenaltynoticePageOptions.typesTitle}</h3>  
                  <h2>{d.title}</h2>
                  <div className="ca_txt">
                <div dangerouslySetInnerHTML={{__html: d.description }} />
              </div> </div></div>)
            })}
    
    </section>
    {/*  <Accordian
            title={data.wpPage.directorpenaltynoticePageOptions.typesTitle}
            showEnquireButton={false}
            data={data.wpPage.directorpenaltynoticePageOptions.typesPoints}
            bgColor={'#1C5E48'}
            textColor={'#EBE9DE'}
            textHoverColor={"#DBFD90"}
          />*/}

   <section className="dpn_optoins"> 
     <div className="container position-relative">
      <div className="row">
        <div className="col-sm-12"> <h2>{data.wpPage.directorpenaltynoticePageOptions.optionsTitle}</h2>
     <div dangerouslySetInnerHTML={{__html: data.wpPage.directorpenaltynoticePageOptions.optionsSubtext }}></div>
      </div>
      </div>
      </div>
    </section>
    <section className="sec_links">
      <div className="container position-relative">
      <div className="row">
        <div className="col-sm-12">
          <ul class="d-flex justify-content-center">
            <li>
             <Link to="#liquidation">Liquidation</Link> 
            </li>
            <li>
             <Link to="#restructure">Restructure & turnaround</Link> 
            </li>
              <li>
               <Link to="#administration">Administration</Link> 
            </li>
            <li>
               <Link to="#DOCA">DOCA</Link> 
            </li>
          </ul>
        </div>
      </div>
      </div>
    </section>

    <section id="liquidation" class="banners curve-right vcf_sec mg_identifix dpntab_sec">
     <div class="container">
          <div className="wva_right">
            <img class="img-fluid" src={data.wpPage.directorpenaltynoticePageOptions.liquidationImage.mediaItemUrl} alt="data.wpPage.directorpenaltynoticePageOptions.liquidationImage.altText"/>           
          </div>
          <div className="wva_left">
          <h3>{data.wpPage.directorpenaltynoticePageOptions.liquidationTitle}</h3>           
            <div dangerouslySetInnerHTML={{__html: data.wpPage.directorpenaltynoticePageOptions.liquidationDescription }}></div>
             <Link className="btn btn-primary me-5"  to={data.wpPage.directorpenaltynoticePageOptions.liquidationLearnmoreLink}>Learn More</Link>
           
          </div>      
     </div>
  </section>

  <section id="restructure" class="wva_section about_section history_section identifix_sec2 dpntab_sec">
       <div class="container">

        <div className="wva_left">
             <img class="img-fluid" src={data.wpPage.directorpenaltynoticePageOptions.restructureImage.mediaItemUrl} alt="data.wpPage.directorpenaltynoticePageOptions.restructureImage.altText"/>            
               
          </div>

          <div className="wva_right">
            <h3>{data.wpPage.directorpenaltynoticePageOptions.restructureTitle}</h3>
            <div dangerouslySetInnerHTML={{__html: data.wpPage.directorpenaltynoticePageOptions.restructureDescription }} />
               <Link className="btn btn-primary me-5"  to={data.wpPage.directorpenaltynoticePageOptions.restructureLearnmoreLink}>Learn More</Link>
          </div>

          
       </div>
    </section>

     <section id="administration" class="banners curve-right vcf_sec mg_identifix dpntab_sec">
     <div class="container">
          <div className="wva_right">
            <img class="img-fluid" src={data.wpPage.directorpenaltynoticePageOptions.administrationImage.mediaItemUrl} alt="data.wpPage.directorpenaltynoticePageOptions.administrationImage.altText"/>           
          </div>
          <div className="wva_left">
          <h3>{data.wpPage.directorpenaltynoticePageOptions.administrationTitle}</h3>           
            <div dangerouslySetInnerHTML={{__html: data.wpPage.directorpenaltynoticePageOptions.administrationDescription }}></div>
             <Link className="btn btn-primary me-5"  to={data.wpPage.directorpenaltynoticePageOptions.administrationLearnmoreLink}>Learn More</Link>
           
          </div>      
     </div>
  </section>

  <section id="DOCA" class="wva_section about_section history_section identifix_sec2 dpntab_sec">
       <div class="container">

        <div className="wva_left">
             <img class="img-fluid" src={data.wpPage.directorpenaltynoticePageOptions.docaImage.mediaItemUrl} alt="data.wpPage.directorpenaltynoticePageOptions.docaImage.altText"/>            
               
          </div>

          <div className="wva_right">
            <h3>{data.wpPage.directorpenaltynoticePageOptions.docaTitle}</h3>
            <div dangerouslySetInnerHTML={{__html: data.wpPage.directorpenaltynoticePageOptions.docaDescription }} />
               <Link className="btn btn-primary me-5"  to={data.wpPage.directorpenaltynoticePageOptions.docaLearnmoreLink}>Learn More</Link>
          </div>

          
       </div>
    </section>

       {/*<div ref={observe} className={serviceEnter}>
          <Services optionsTitle={data.wpPage.directorpenaltynoticePageOptions.optionsTitle} optionsSubtext={data.wpPage.directorpenaltynoticePageOptions.optionsSubtext}
          />
        </div>  */}
      

      <TestimonialMain
        data={data.wpPage.directorpenaltynoticePageOptions.testimonialTest}
      />
      <div className="service bankruptcy">
       <Accordian
        title={data.wpPage.directorpenaltynoticePageOptions.faqTitle}
        showEnquireButton={false}
        data={whyMG}
        isPage={'dpn'}
      />
      </div>
      <section className="recovery-partner dpn_rp_sec">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="whyTitle text-center">{data.wpPage.directorpenaltynoticePageOptions.recoveryTaglineNew}</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            {data.wpPage.directorpenaltynoticePageOptions.partnerNew.map((d) => {
              return (<div className={"col-xs-12 col-md-6 col-lg-" + parseInt(12 / data.wpPage.directorpenaltynoticePageOptions.partnerNew.length)}>
                <div className="text-center rp_img">
                  <img src={d.imageNew?.mediaItemUrl} alt={d.imageNew?.altText} className="recovery-partner-img" />
                </div>
                <p className="recovery-partner-title text-center"> {d.titleNew} </p>
              </div>)
            })}
          </div>
        </div>
      </section>

     
      <div class="mgway">

      <OurPeople
        title='Our liquidators'
        text=''
        data={businessData}
        showAll={1}
      />
      </div>
      <div class="home">
      <GetInTouch
          title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
          text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
        />
        </div>
    </div>
</Layout>)
}
export const query = graphql`
  {
    wpPage(title: {eq: "Director Penalty Notice"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      directorpenaltynoticePageOptions {
        description
        banner {
          mediaItemUrl
          altText
        }
        optionsTitle
        optionsSubtext
        title
        title1
        banner1{
          mediaItemUrl
          altText
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
          testImage {
            altText
            mediaItemUrl
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
          }

        restructureTitle
        restructureDescription
        restructureLearnmoreLink
        restructureImage{
            altText
            mediaItemUrl
          }  
        administrationTitle
        administrationDescription
        administrationLearnmoreLink
        administrationImage{
            altText
            mediaItemUrl
          } 
          
        docaTitle
        docaDescription
        docaLearnmoreLink
        docaImage{
            altText
            mediaItemUrl
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
            speakExpertLink
            speakExpertTitle
          }
        }
      }
    }
  }
`
export default DirectorPenaltyNotice