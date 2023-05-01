import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import GetInTouch from "../components/get-in-touch3"
import FullText from "../components/full-text"
import CurveLeft from "../components/curve-left"
import HealthForm from "../components/health-form"
import EbookForm from "../components/ebook-form"
import { formHealthContext, formEbookContext } from '../components/context';
import ImageLeftLayout from "../components/image-left-layout2"
import ImageRightLayout from "../components/image-right-layout"
import GetInTouchPPForm from "../components/get-in-touch-bankruptcy-popup"
// const whyMG = [
//   {
//     "title": "Liquidation",
//     "text":"We’re in the business of resolution. Backed by leading technology and innovative thinking, we make the right decisions at the right time. Capturing opportunity and avoiding obstacles. Delivering the best possible outcome, every day."
//   },
//   {
//     "title": "Receivership",
//     "text":"To achieve success takes determination and focus. We leave no stone unturned. Tailoring solutions to meet your specific needs, on top of every moment. Getting you where you need to be, step by step."
//   },
//   {
//     "title": "Personal Insolvency",
//     "text":"We know time is of the essence. So we put positive action into practice. Taking the initiative, we anticipate your needs and move ahead as swiftly as possible, all without missing a trick."
//   }
// ]

import $ from "jquery"
const Insolvency = ({ data }) => {
    const [showModal, setModal] = React.useState(false);
  let whyMG = [];
  data.wpPage.insolvency.qA.map((d) => {
    return whyMG.push({ title: d.question, description: d.answer, learnMoreText: d.buttonLabel, learnMoreUrl: d.buttonUrl });
  })
  const breadCrumbs = [
    { link: "/", title: "Home" },
    { link: "#", title: "Services" },
    { title: "Insolvency" },
  ]
  const [fromDetails, setFormDetails] = React.useState(0);
  const [fromEbookDetails, setFormEbookDetails] = React.useState(0);
  const value = { fromDetails, setFormDetails };
  const valueEbook = { fromEbookDetails, setFormEbookDetails };
  return (<div className="service insolvency">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.insolvency.bannerTitle}
        subtitle={data.wpPage.insolvency.bannerSubtitle}
        text={data.wpPage.insolvency.bannerDesc}
        bannerImg={data.wpPage.insolvency.bannerImage}
        breadCrumbs={breadCrumbs}
        sendUrl={data.wpPage.insolvency.sendUrl}
      />
      <FullText
        text={data.wpPage.insolvency.pageTagline}
      />
      <div class="ca_main">
        {data.wpPage.insolvency.qA.map((d,key) => {
            return <div className={'ca_sec ca_sec'+key}><div className="container"><h2>{d.question}</h2><div className="ca_txt" dangerouslySetInnerHTML={{ __html: d.answer }}></div><div className="find_more">{d.buttonUrl !== null && d.buttonUrl !== "" ? <Link className="btn btn-primary me-5" to={d.buttonUrl}>{d.buttonLabel}</Link> : ""}</div></div></div>
        })}
      </div>
      {/* <CurveRight
        title={data.wpPage.insolvency.healthCheckTitle}
        text={data.wpPage.insolvency.healthCheckDesc}
        img={data.wpPage.insolvency.healthCheckImage}
        btn1Txt={'Business Advisors'}
        btn2Txt={'Business Directors'}
        btn1Link={data.wpPage.insolvency.businessDirectorAdvisorLink}
        btn2Link={data.wpPage.insolvency.businessDirectorButtonLink}
      /> */}


      {/* <formHealthContext.Provider value={value}>
        <ImageLeftLayout
          title={data.wpPage.insolvency.healthCheckTitle}
          text={data.wpPage.insolvency.healthCheckDesc}
          img={data.wpPage.insolvency.healthCheckImage}
          btnTxt={data.wpPage.insolvency.buttonBook}
          btnLink={data.wpPage.insolvency.buttonBookurl}
          btnClick={''}
          addClass={"ill_section bhc_section"}
          video={data.wpPage.insolvency.video}
          videolabel={data.wpPage.insolvency.videoButtonLabel}
        />
        
        <HealthForm
          title={'Register Now'}
          text={'Register now for your business health check'}
        />
      </formHealthContext.Provider> */}



      <section className="health_check home_helthcheck">
          <div className="container">
            <div className="ht_right">
              <img className="img-fluid" src={data.wpPage.insolvency.healthCheckImage?.mediaItemUrl} alt={data.wpPage.insolvency.healthCheckImage?.altText} />
            </div>

            <div className="ht_left">
              <h2>{data.wpPage.insolvency.healthCheckTitle}</h2>
              <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.insolvency?.healthCheckDesc }}></div>
          

              {data.wpPage.insolvency.buttonBookurl !== null && data.wpPage.insolvency.buttonBookurl !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.insolvency.buttonBookurl}>{data.wpPage.insolvency.buttonBook}</Link> : ""}

              <button  className="btn btn-primary me-5" type="button" onClick={()=>setModal(true)} data-toggle="modal" data-target="#myModal">{data.wpPage.insolvency.videoButtonLabel}</button>
              <div id="myModal" role="dialog" className={showModal?'in show modal fade':'modal fade'}>
              <div className="model_inner">
                  <div className="popup_dialog">
                      <div className="modal-content">
                          <button type="button" className="close" data-dismiss="modal" onClick={()=>{setModal(false);$('iframe.embed-responsive-item').attr('src', $('iframe.embed-responsive-item').attr('src').replace("autoplay=1&amp;", ""));}}>&times;</button>
                          <div className="popup_body">
                              <div className="video_ratio">
                                  <div dangerouslySetInnerHTML={{__html: data.wpPage.insolvency.video }} />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

            </div>
          </div>
        </section>




       {/* <formEbookContext.Provider value={valueEbook}>

        <ImageRightLayout
          title={data.wpPage.insolvency.survivalTitle}
          text={data.wpPage.insolvency.survivalDesc}
          img={data.wpPage.insolvency.survivalImage}
          btnTxt={'Download Now'}
          btnLink={""}
          btnClick={() => { setFormEbookDetails(1) }}
          addClass={"irl_section bsp_section"}
        />
        <EbookForm
          title={'Download e-guide'}
          text={'Download your free copy today and get on the path to recovery'}
        />
      </formEbookContext.Provider> */}

       <section className="ht_section ht_bottom">
        <div className="container">
          <div className="ht_left">
            <img className="img-fluid" src={data.wpPage.insolvency.insHtImage?.mediaItemUrl} alt={data.wpPage.insolvency.insHtImage?.altText} />
          </div>
          <div className="ht_right">
            <h2>{data.wpPage.insolvency.insHtTitle}</h2>
            <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.insolvency?.insHtDescription }}></div>
            <formEbookContext.Provider value={valueEbook}>
              <button className="btn btn-primary me-5" onClick={() => { setFormEbookDetails(1) }}>Download Now</button>
              <EbookForm
                title={'Download e-guide'}
                text={'Download your free copy today and get on the path to recovery'}
              />
            </formEbookContext.Provider>
          </div>
        </div>
      </section> 


       <div className="wva_section fd_section dca_section dpn_part">
        <div className="container">
          <div className="wva_left">
            <img src={data.wpPage.insolvency.dpn3Image.mediaItemUrl} alt={data.wpPage.insolvency.dpn3Image.altText} />
          </div>
          <div className="wva_right">
            <h2>{data.wpPage.insolvency.dpn3Title}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.insolvency.dpn3Description }}></div>
            {data.wpPage.insolvency.dpn3ButtonLink !== null && data.wpPage.insolvency.dpn3ButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.insolvency.dpn3ButtonLink}>{data.wpPage.insolvency.dpn3ButtonText}</Link> : ""} {data.wpPage.insolvency.dpn3Button2Link !== null && data.wpPage.insolvency.dpn3Button2Link !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.insolvency.dpn3Button2Link}>{data.wpPage.insolvency.dpn3Button2Text}</Link> : ""}
          </div>
        </div>
      </div>



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
    wpPage(title: {eq: "Corporate Insolvency"}) {
      insolvency {
        bannerDesc
        bannerImage {
          altText
          mediaItemUrl
        }
        bannerSubtitle
        bannerTitle
        businessDirectorAdvisorLink
        businessDirectorButtonLink
        buttonBook
        buttonBookurl
        videoButtonLabel
        video
        healthCheckDesc
        healthCheckImage {
          altText
          mediaItemUrl
        }
        survivalDesc
        survivalEnquireLink
        survivalTitle
        survivalImage {
          altText
          mediaItemUrl
        }
        healthCheckTitle
        pageTagline
        qA {
          answer
          question
          buttonUrl
          buttonLabel
        }
        insHtTitle
        insHtDescription
        insHtImage {
          altText
          mediaItemUrl
        }
        dpn3Title
        dpn3Description
        dpn3ButtonText
        dpn3ButtonLink
        dpn3Button2Text
        dpn3Button2Link
        dpn3Image {
            altText
            mediaItemUrl
          }

        sendUrl
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
            speakExpertLink
            speakExpertTitle
          }
        }
      }
    }
  }
`

export default Insolvency
