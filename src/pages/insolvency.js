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

const Insolvency = ({ data }) => {
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
            return <div className={'ca_sec ca_sec'+key}><div className="container"><h2>{d.question}</h2><div className="ca_txt" dangerouslySetInnerHTML={{ __html: d.answer }}></div>{d.buttonUrl !== null && d.buttonUrl !== "" ? <Link className="btn btn-primary me-5" to={d.buttonUrl}>{d.buttonLabel}</Link> : ""}</div></div>
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
      <formHealthContext.Provider value={value}>
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
      </formHealthContext.Provider>
      <formEbookContext.Provider value={valueEbook}>

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
      </formEbookContext.Provider>
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
