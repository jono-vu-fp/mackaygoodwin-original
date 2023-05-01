import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import CurveLeft from "../components/curve-left"
import ImageLeftLayout from "../components/image-left-layout4"
import ImageRightLayout from "../components/image-right-layout2"
import GetInTouch from "../components/get-in-touch3"
import Accordian from "../components/accordian/accordian"
import CapabilityForm from "../components/capability-form"
import CapabilityFormNew from "../components/capability-form-new"
import FullText from "../components/full-text"
import { formDetailContext } from '../components/context';
import GetInTouchPPForm from "../components/get-in-touch-bankruptcy-popup"

const Corporate = ({ data }) => {
  let whyMG = [];
  data.wpPage.corporateAdvisoryPageOptions.qA.map((d) => {
    return whyMG.push({ title: d.question, description: d.answer });
  })
  const breadCrumbs = [
    { link: "/", title: "Home" },
    { link: "#", title: "Services" },
    { title: "Corporate Advisory" },
  ]
  // const formDetailContext = React.createContext(null);
  const [fromDetails, setFormDetails] = React.useState(0);
  const [fromDetails2, setFormDetails2] = React.useState(0);
  const value = { fromDetails, setFormDetails };
  const value2 = { fromDetails2, setFormDetails2 };
  return (<div className=" service corporate-advisory">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.corporateAdvisoryPageOptions.bannerTitle}
        subtitle={data.wpPage.corporateAdvisoryPageOptions.bannerSubtitle}
        text={data.wpPage.corporateAdvisoryPageOptions.bannerDesc}
        bannerImg={data.wpPage.corporateAdvisoryPageOptions.bannerImage}
        sendUrl={data.wpPage.corporateAdvisoryPageOptions.sendUrl}
        breadCrumbs={breadCrumbs}
      />
      <FullText
        text={data.wpPage.corporateAdvisoryPageOptions.pageTagline}
      />
      
      <div class="ca_main">
      {data.wpPage.corporateAdvisoryPageOptions.qA.map((d,key) => {
          return <div className="ca_sec"><div className="container"><h2>{d.question}</h2><div className="ca_txt" dangerouslySetInnerHTML={{ __html: d.answer }}></div><Link className="btn btn-primary" to={"#get-in-touch"}>Enquire</Link></div></div>
      })}
      </div>
      <formDetailContext.Provider value={value}>
        <ImageLeftLayout
          title={data.wpPage.corporateAdvisoryPageOptions?.croTitle}
          text={data.wpPage.corporateAdvisoryPageOptions?.croDesc}
          img={data.wpPage.corporateAdvisoryPageOptions?.officerimage}
          btnTxt={"Download Now"}
          btnLink={""}
          btnClick={() => { setFormDetails(1) }}
          addClass={"ill_section"}
        />
        <CapabilityForm
          title={'Download Capability Statement'}
          text={'Download your free copy today and get on the path to recovery'}
        />
      </formDetailContext.Provider>
      <formDetailContext.Provider value={value2}>
        <ImageRightLayout
          title={data.wpPage.corporateAdvisoryPageOptions?.newFinancialTitle}
          text={data.wpPage.corporateAdvisoryPageOptions?.newFinancialDesc}
          img={data.wpPage.corporateAdvisoryPageOptions?.newFinancialImage}
          btnTxt={"Download Now"}
          btnLink={""}
          btnClick={() => { setFormDetails2(1) }}
          addClass={"irl_section irl_section2"}
        />
        <CapabilityFormNew
          title={'Download New Financial Year Guide'}
          text={'Download your free copy today and get on the path to recovery'}
        />
      </formDetailContext.Provider>


      <ImageLeftLayout
          title={data.wpPage.corporateAdvisoryPageOptions.cfoTitle}
          text={data.wpPage.corporateAdvisoryPageOptions.cfoDesc}
          img={data.wpPage.corporateAdvisoryPageOptions.cfoImage}
          btnTxt={"Enquire"}
          btnLink={data.wpPage.corporateAdvisoryPageOptions.cfoEnquireLink}
          addClass={"ill_section ill_section2"}
        />
      
      

    

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
    wpPage(title: {eq: "Corporate Advisory"}) {
      corporateAdvisoryPageOptions {
        croDesc
        officerimage {
          altText
          mediaItemUrl
        }
        croTitle
        enquireLink
        bannerDesc
        bannerImage {
          altText
          mediaItemUrl
        }
        newFinancialTitle
        newFinancialDesc
        newFinancialImage {
          altText
          mediaItemUrl
        }
        newFinancialEnquireLink
        bannerSubtitle
        bannerTitle
        fieldGroupName
        pageTagline
        qA {
          answer
          question
        }
        sendUrl
        cfoTitle
        cfoDesc
        cfoImage {
          altText
          mediaItemUrl
        }
        cfoEnquireLink
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

export default Corporate
