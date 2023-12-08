import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-landing"
import GetInTouch from "../components/get-in-touch3"
import CurveLeft from "../components/curve-left"
import Services from "../components/services"
import Accordian from "../components/accordian/accordian-bankruptcy";
import FullText from "../components/full-text"
import OurPeople from "../components/our-people-liquid/our-people3"
import TestimonialMain from "../components/testimonial-main-liquid-1"
import ReciveryPlan from "../components/recovery-plan"
import Container from "../components/slider/container-restructuring-nolink";
import EbookForm from "../components/ebook-form"
import { formEbookContext } from '../components/context';

const ConsultBusiness = ({ data }) => {
  const [showModal, setModal] = React.useState(false);
  let whyMG = [];

  let whyMG2 = [];
  data.wpPage.faqSection.fqa.map((d) => {
    console.log(d);
    return whyMG2.push({ title: d.famquestion, description: d.famanswer, tag: "" });
  });

  let businessData = [];
  data.wpPage.voluntaryadministration.valpagepeoples.map((d) => {
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
    { title: "Voluntary Administration" },
  ]

  const [fromDetails, setFormDetails] = React.useState(0);
  const [fromEbookDetails, setFormEbookDetails] = React.useState(0);
  const value = { fromDetails, setFormDetails };
  const valueEbook = { fromEbookDetails, setFormEbookDetails };
  return (<div className="restructure_land service liquidation val_page val_page_new val_page_new2 voluntary_page no_bannerform dpnfont_page">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.voluntaryadministration.bannerTitle}
        subtitle={data.wpPage.voluntaryadministration.bannerDesc}
        bannerImg={data.wpPage.voluntaryadministration.bannerImage}
        breadCrumbs={breadCrumbs}
        equalWidth={true}
      />

      <div className="liq_blocks va_blocks">
        <div className="container">
          <div className="row">
               {data.wpPage.voluntaryadministration.wymnuDescriptionWhyliquid.map((d,k) => {
                return (
                  <div className="col-md-4 col-lg-4" key={'i'+k}>
                    <div className="lb_img">
                        <img src={d.image?.localFile.publicURL} alt={d.image?.altText} />
                    </div>
                    <div className="lb_txt">
                      <p className="recovery-partner-title">{d.title?.trim()}</p>
                      <p className="recovery-partner-desc">{d.description?.trim()}</p>
                    </div>
                  </div>)
              })}
          </div>
        </div>
      </div>

      


      <div class="rtsec2">
          <div class="container container2">
           <h2>{data.wpPage.voluntaryadministration.vaRecoveryTagline}</h2>
            <ul>
              {data.wpPage.voluntaryadministration.vaPartners.map((d,k) => {
                  return (
                    <li>
                     <img src={d.vaImage?.localFile?.publicURL} /> 
                     
                      <div dangerouslySetInnerHTML={{ __html: d.vaTitle }}></div>
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
                  data.wpPage.voluntaryadministration
                    .valpagetestimage.localFile?.childImageSharp?.resize?.src
                }
                alt="data.wpPage.voluntaryadministration.valpagetestimage.altText"
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 p-5 desc">

            <div dangerouslySetInnerHTML={{ __html:data.wpPage.voluntaryadministration.valpagetestimonialscontent}}></div>
              <h2>- {data.wpPage.voluntaryadministration.valpagetestimonialsheading}</h2>
              
            </div>
          </div>
      </div>
    </section>

     <div className="wva_section">
        <div className="container">
          <div className="wva_left">
            <iframe src={'https://www.youtube.com/embed/'+data.wpPage.voluntaryadministration.wvaVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="wva_right">
            <h3>{data.wpPage.voluntaryadministration.wvaTitle}</h3>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.voluntaryadministration.wvaDescription }}></div>
          </div>
        </div>
      </div>   

      <div className="liq_blocks va_blocks">
        <div className="container">
         <h3>The benefits of entering Voluntary Administration</h3> 
          <div className="row">
               {data.wpPage.voluntaryadministration.wymnuDescriptionWhyliquid.map((d,k) => {
                return (
                  <div className="col-md-4 col-lg-4" key={'i'+k}>
                    <div className="lb_img">
                        <img src={d.image?.localFile.publicURL} alt={d.image?.altText} />
                    </div>
                    <div className="lb_txt">
                      <p className="recovery-partner-title">{d.title?.trim()}</p>
                      <p className="recovery-partner-desc">{d.description?.trim()}</p>
                    </div>
                  </div>)
              })}
          </div>
        </div>
      </div>

      <div className="weva_section">
        <div className="container">
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.voluntaryadministration.wevaContent }}></div>
            {data.wpPage.voluntaryadministration.wevaButtonLink !== null && data.wpPage.voluntaryadministration.wevaButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.voluntaryadministration.wevaButtonLink}>{data.wpPage.voluntaryadministration.wevaButtonText}</Link> : ""}
        </div>
      </div>

      <div className="wva_section fd_section">
        <div className="container">
          <div className="wva_left">
            <img src={data.wpPage.voluntaryadministration.fdImage.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.voluntaryadministration.fdImage.altText} />
          </div>
          <div className="wva_right">
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.voluntaryadministration.fdContent }}></div>
          </div>
        </div>
      </div>
      
      
      <div id="myModal" role="dialog" className={showModal?'in show modal fade':'modal fade'}>
        <div className="model_inner">
          <div className="popup_dialog">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" onClick={()=>setModal(false)}>&times;</button>
              <div className="popup_body">
                <div className="video_ratio">
                <video width="100%" controls><source src={data.wpPage.voluntaryadministration.businessVideo?.mediaItemUrl} type="video/mp4" />Your browser does not support the video tag.</video>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <FullText
        text={data.wpPage.voluntaryadministration.vaLiquidationTagline}
        subTxt={data.wpPage.voluntaryadministration.vaLiquidationDescription}
        customClass={'middleFullText glpo_section'}
      />

      <ReciveryPlan
        data={data.wpPage.voluntaryadministration.vaProcess}
        titleDisplay={false}
        customClass={'glpo_reco_section va_glpo_reco_section'}
      />


      


      <div className="wva_section fd_section dca_section">
        <div className="container">
          <div className="wva_left">
            <img src={data.wpPage.voluntaryadministration.dcaImage.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.voluntaryadministration.dcaImage.altText} />
          </div>
          <div className="wva_right">
            <h3>{data.wpPage.voluntaryadministration.dcaTitle}</h3>
            <h5>{data.wpPage.voluntaryadministration.dcaSubTitle}</h5>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.voluntaryadministration.dcaDescription }}></div>
            {data.wpPage.voluntaryadministration.dcaButtonLink !== null && data.wpPage.voluntaryadministration.dcaButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.voluntaryadministration.dcaButtonLink}>{data.wpPage.voluntaryadministration.dcaButtonText}</Link> : ""}
          </div>
        </div>
      </div>
      
      
      {/* <FullText
        text={data.wpPage.voluntaryadministration.vaSubDescription}
      /> */}
      

       <div className="service bankruptcy brige_color brige_color2 sub_heading">
               <Accordian
                title={
                  data.wpPage.faqSection.fmainheading
                }
                showEnquireButton={false}
                data={whyMG2}
              />
     </div>



     


        <Container
        title="We’ve helped many businesses undergo a successful restructure. We can do the same for you."
        data={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.testimonials}
        slideColor={'#ebe9de'}
      />

      <section className="news-articles restructurenews-articles" id="people">
          <div className="container">
            <div className="row">
              <div className="people_head">
                <h2>{data.wpPage.voluntaryadministration.valpagepeoplehead} </h2>
                 <div className="p" dangerouslySetInnerHTML={{ __html: data.wpPage.voluntaryadministration?.valpagepeoplecontent }}></div>
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


     {/* <section className="ht_section">
        <div className="container">
          <div className="ht_left">
            <img className="img-fluid" src={data.wpPage.voluntaryadministration.htImage?.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.voluntaryadministration.htImage?.altText} />
          </div>
          <div className="ht_right">
            <h2>{data.wpPage.voluntaryadministration.htTitle}</h2>
            <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.voluntaryadministration?.htDescription }}></div>
            <formEbookContext.Provider value={valueEbook}>
              <button className="btn btn-primary me-5" onClick={() => { setFormEbookDetails(1) }}>Download Now</button>
              <EbookForm
                title={'Download e-guide'}
                text={'Download your free copy today and get on the path to recovery'}
              />
            </formEbookContext.Provider>
          </div>
        </div>
      </section>*/}
      
      
      
      <div className="cu_fixed">
          <a href="/contact"><img src="/images/sophie-img.png" />Contact Us</a>
      </div>

      <div className="home">
        <GetInTouch
          title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
          text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
        />
      </div>

    </Layout>
  </div>
  )
}
export const query = graphql`
  {
    wpPage(title: {eq: "Voluntary Administration"}) {

      faqSection{
        fmainheading
        fqa {
          famquestion
          famanswer
        }
      }

      metaFields {
        metaDescription
        metaTitle
      }
      voluntaryadministration {
        bannerDesc
        bannerImage {
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
        bannerTitle
        
        wymnuDescriptionWhyliquid {
          description
          image {
            altText
            mediaItemUrl
            localFile {
              publicURL
            }
          }
          title
        }
        
        wymnuImage {
          altText
          mediaItemUrl
        }
        wymnuLearnMoreLink
        vaLiquidationDescription
        wvaTitle
        wvaDescription
        wvaVideo
        fdContent
        fdImage {
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
        wevaContent
        wevaButtonText
        wevaButtonLink
        dcaTitle
        dcaSubTitle
        dcaDescription
        dcaButtonText
        dcaButtonLink
        dcaImage {
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
        vaPartners {
          vaTitle
          vaImage {
            altText
            mediaItemUrl
            localFile {
              publicURL
            }
          }
        }
        htTitle
        htDescription
        htImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 682, height: 465, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }

        valpagepeoplehead
        valpagepeoplecontent

        valpagetestimonialscontent
        valpagetestimonialsheading
        
        valpagetestimage {
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

        vaLiquidationTagline
        vaRecoveryTagline
        vaSubDescription
        vaProcess {
          processTitle
        }
        wymnuTitle


        valpagepeoples {
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
              designationType
              registeredLiquidators
              phoneNumber
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
        backInBusiness {
          designation
          location
          certification
          designationType
          linkedin
          email
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
`

export default ConsultBusiness
