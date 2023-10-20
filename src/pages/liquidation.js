import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-3"
import GetInTouch from "../components/get-in-touch3"
import Services from "../components/services"
import Accordian from "../components/accordian/accordian-bankruptcy"
import FullText from "../components/full-text"
import OurPeople from "../components/our-people-liquid/our-people4"
import ReciveryPlan from "../components/recovery-plan"
import EbookForm from "../components/ebook-form"
import { formEbookContext } from '../components/context';
import GetInTouchPPForm from "../components/get-in-touch-bankruptcy-popup"
import News from "../components/news/list2"
import _ from 'lodash';

const ConsultBusiness = ({ data }) => {
  const [showModal, setModal] = React.useState(false);
  const [businessData, setbusinessData] = React.useState([]);
  let whyMG = [];
  let FAQs = [];

  data.wpPage.liquidation.queAnsliquidation.map((d) => {
    return whyMG.push({ title: d.ques, description: d.ans, learnMoreUrl: d.learnMoreUrl, learnMoreText: 'Contact us' });
  })

  data.wpPage.liquidation.faq.map((d) => {
    return FAQs.push({ title: d.faqTitle, description: d.faqDesc });
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

  
  // suffledArray.map((d) => {
  //     return businessData.push({ title: d.title, subtitle: d.backInBusiness.designation, text: d.backInBusiness.location, certification: d.backInBusiness.certification, content: d.content, linkedin: d.backInBusiness.linkedin, email: d.backInBusiness.email, img: d.featuredImage?.node, designationType: d.backInBusiness.designationType, registeredLiquidators: d.backInBusiness.registeredLiquidators });
  // })

  const breadCrumbs = [
    { link: "/", title: "Home" },
    { title: "Liquidation" },
  ]

  const [fromEbookDetails, setFormEbookDetails] = React.useState(0);
  const valueEbook = { fromEbookDetails, setFormEbookDetails };
  return (<div className="service restructure consult-business liquidation liquidation_servpage">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.liquidation.bannerTitle}
        subtitle={data.wpPage.liquidation.bannerSubtitle}
        text={data.wpPage.liquidation.bannerDesc}
        bannerImg={data.wpPage.liquidation.bannerImageli}
        breadCrumbs={breadCrumbs}
        sendUrl={''}
        equalWidth={true}
      />
      <section className="recovery-partner liq_rec_section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="whyTitle text-center">{data.wpPage.liquidation.recoveryTagline}</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            {data.wpPage.liquidation.partners.map((d) => {
              return (<div className={"col-xs-12 col-md-6 col-lg-" + parseInt(12 / data.wpPage.liquidation.partners.length)}>
                <div className="text-center rec_img">
                  <img src={d.image.localFile?.publicURL} alt={d.image.altText} className="recovery-partner-img" />
                </div>
                <p className="recovery-partner-title text-center"> {d.title} </p>
              </div>)
            })}
          </div>
        </div>
      </section>
      <div className="liq_blocks liq_blocks_new">
        <div className="container">
          <div className="row">
              {/* <h3>{data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.tagline}</h3> */}
              {data.wpPage.liquidation.descriptionWhyliquid.map((d) => {
                return (
                  <div className="col-md-4 col-lg-4">
                    <div className="lb_img">
                        <img src={d.image.localFile?.publicURL} alt={d.image.altText} />
                    </div>
                    <div className="lb_txt">
                      <p className="recovery-partner-title">{d.title.trim()}</p>
                      <p className="recovery-partner-desc">{d.description.trim()}</p>
                    </div>
                  </div>)
              })}
          </div>
        </div>
      </div>
      <section className={"testimonial-main testimonial-main1 testimonial-mainnew"}>
      <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 p-5">
              <img className="img-fluid" src={data.wpPage.liquidation.testimonialsLiquid[0].image?.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.liquidation.testimonialsLiquid[0].image?.altText} />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 p-5 desc">
              <p>{data.wpPage.liquidation.testimonialsLiquid[0].description}</p>
               <h2>-{data.wpPage.liquidation.testimonialsLiquid[0].liqtestimonialsheading1}</h2>
            </div>
          </div>
      </div>
    </section>

    {/*<div class="liqtestmon">
        <div class="container">
            <div class="row">
              
              <div class="col-sm-12 col-md-12 col-lg-6">
                
                <h3>Client testimonial</h3>
              <div> <p>{data.wpPage.liquidation.testimonialsLiquid[0].description}</p>
                <h2>-{data.wpPage.liquidation.testimonialsLiquid[0].liqtestimonialsheading1}</h2>
                 </div> 

              </div>

              <div class="col-sm-12 col-md-12 col-lg-6 colmn_2">
               <img className="img-fluid" src={data.wpPage.liquidation.testimonialsLiquid[0].image?.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.liquidation.testimonialsLiquid[0].image?.altText} />
              </div>
            </div>
        </div>
      </div>*/}

      <div className="wbl_section">
        <div className="container">
          <div className="wbl_right">
            <a onClick={()=>setModal(true)}><img src={data.wpPage.liquidation.businessThumbnail.localFile?.childImageSharp?.resize?.src} /></a>
          </div>
          <div className="wbl_left">
            <h3>{data.wpPage.liquidation.businessTitle}</h3>
            <p>{data.wpPage.liquidation.businessDesc}</p>
            {data.wpPage.liquidation.enquire !== null && data.wpPage.liquidation.enquire !== "" ? <Link className="btn btn-primary me-5" target="_blank" to={data.wpPage.liquidation.enquire}>Learn more</Link> : ""}
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
                <video width="100%" controls><source src={data.wpPage.liquidation.businessVideo.mediaItemUrl} type="video/mp4" />Your browser does not support the video tag.</video>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services
        title={'Our Liquidation Services'}
        showEnquireButton={true}
        data={whyMG}
        className={'liquid'}
      />
      <FullText
        text={data.wpPage.liquidation.liquidationTagline}
        subTxt={data.wpPage.liquidation.liquidationDescription}
        customClass={'middleFullText glpo_section'}
      />
      <ReciveryPlan
        data={data.wpPage.liquidation.process}
        titleDisplay={false}
        customClass={'glpo_reco_section'}
      />
      <section className={"testimonial-main testimonial-main1"}>
        <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-sm-12 col-md-12 col-lg-6 p-5">
                <img className="img-fluid" src={data.wpPage.liquidation.testimonialsLiquid[1].image?.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.liquidation.testimonialsLiquid[1].image?.altText} />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 p-5 desc">
                <p>{data.wpPage.liquidation.testimonialsLiquid[1].description}</p>
              </div>
            </div>
        </div>
      </section>
      {/* <FullText
        text={data.wpPage.liquidation.subDescription}
      /> */}

      <section className="ht_section">
        <div className="container">
          <div className="ht_left">
            <img className="img-fluid" src={data.wpPage.liquidation.htImage?.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.liquidation.htImage?.altText} />
          </div>
          <div className="ht_right">
            <h2>{data.wpPage.liquidation.htTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.liquidation?.htDescription }}></div>
            <formEbookContext.Provider value={valueEbook}>
              <button className="btn btn-primary me-5" onClick={() => { setFormEbookDetails(1) }}>Download now</button>
              <EbookForm
                title={'Download e-guide'}
                text={'Download your free copy today and get on the path to recovery'}
              />
            </formEbookContext.Provider>
          </div>
        </div>
      </section>
      
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

     <div className="service bankruptcy brige_color brige_color2 pa-top">
                 <Accordian
            title="Liquidation FAQs"
            showEnquireButton={false}
            data={FAQs}
          />
              </div>

            

            <div class="liquidation_land"> 
            <div class="vcfo_section na_section new_landing"> 
              <section class="news-list allnews_list">

                  <div class="container">
                  <div class="row">
                          <div class="col-lg-12 col-md-12">
                      <h2>Take a deep dive into the insights of liquidation. </h2></div>
                    </div>

                    <News
                  title={''}
                  data={data.wpPage?.liquidation.articles2}
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
    wpPage(title: {eq: "Liquidation"}) {
      liquidation {
        bannerDesc
        bannerImageli {
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
        
        bannerSubtitle
        bannerTitle
        businessDesc
        businessImage {
          altText
          mediaItemUrl
        }
        businessThumbnail {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 599, height: 377, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }
        businessTitle
        businessVideo {
          altText
          mediaItemUrl
        }
        enquire
        descriptionWhyliquid {
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
        faq {
          faqDesc
          faqTitle
        }
        imagevideo
        image {
          altText
          mediaItemUrl
        }
        learnMoreLink
        liquidationDescription
        partners {
          title
          image {
            altText
            mediaItemUrl
            localFile{
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
        liquidationTagline
        recoveryTagline
        sendUrl
        subDescription
        liquidationTypeTitle
        tagline
        process {
          processTitle
        }
        queAnsliquidation
         {
          ans 
          learnMoreUrl
          ques
        }
        title
        testimonialsLiquid {
          description
          liqtestimonialsheading1
          image {
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
