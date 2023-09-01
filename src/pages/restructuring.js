import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import GetInTouch from "../components/get-in-touch3"
import Accordian from "../components/accordian/accordian"
import FullText from "../components/full-text3"
import Container from "../components/slider/container-restructuring"
import CurveLeft from "../components/curve-left"
import CurveRight2 from "../components/curve-right2"
import HealthForm from "../components/health-form"
import EbookForm from "../components/ebook-form"
import ImageRightLayout from "../components/image-right-layout2"
import ImageLeftLayout from "../components/image-left-layout3"
import ActiveCampaignHowthrive from "../components/activecampaign-howthrive"
import { formHealthContext, formEbookContext } from '../components/context';
import GetInTouchPPForm from "../components/get-in-touch-bankruptcy-popup"

// breadCrumbs = [{
//   title:"Home",
//   link: "/"
// },
// {
//   title:"Services",
//   link: "/"
// }
// ]
import $ from "jquery"
const Restructuring = ({ data }) => {
  const [showModal, setModal] = React.useState(false);
  const [showForm, setForm] = React.useState(false);
  let whyMG = [];
  data.wpPage.restructuring.queAndAnsNew.map((d) => {
    return whyMG.push({ title: d.questionNew, description: d.answerNew });
  })
  const breadCrumbs = [
    { link: "/", title: "Home" },
    { link: "#", title: "Services" },
    { title: "Business Restructure" },
  ]
  const checkVideo = () =>{
    setForm(true);
  }
  const [fromDetails, setFormDetails] = React.useState(0);
  const [fromEbookDetails, setFormEbookDetails] = React.useState(0);
  const value = { fromDetails, setFormDetails };
  const valueEbook = { fromEbookDetails, setFormEbookDetails };
  return (<div className="service restructure">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.restructuring.bannerTitle}
        subtitle={data.wpPage.restructuring.bannerSubtitle}
        text={data.wpPage.restructuring.bannerDesc}
        bannerImg={data.wpPage.restructuring.bannerImage}
        breadCrumbs={breadCrumbs}
        sendUrl={data.wpPage.restructuring.sendUrl}
      />
      <FullText
        text={data.wpPage.restructuring.pageTagline}
      />
    {/*  <Accordian
        title={''}
        showEnquireButton={true}
        data={whyMG}
      />*/}

       <div class="ca_main res_new">
      {data.wpPage.restructuring.queAndAnsNew.map((d,key) => {
          return <div className="ca_sec"><div className="container"><h2>{d?.questionNew}</h2>
          <div className="ca_txt" dangerouslySetInnerHTML={{ __html: d?.answerNew }}></div>
          <Link className="btn btn-primary me-5" to={d.resLink != null ? d.resLink : (d.questionNew=='Creditor and Stakeholder Negotiations'?'#get-in-touch':(d.questionNew=='Operational Improvements'?'#get-in-touch':''))}>{d.resButtonText}</Link>
          </div></div>
      })}
      </div>

      <Container
        title={''}
        subtitle={data.wpPage.restructuring.businessDesc}
        data={data.wpPage.restructuring.businessTestimonial}
        slideColor={'#EBE9DE'}
      />
      {/*<ImageRightLayout
        id={'vCFO'}
        title={data.wpPage.restructuring.croTitle}
        text={data.wpPage.restructuring.croDesc}
        img={data.wpPage.restructuring.officerimage}
        btnTxt={'Enquire'}
        btnLink={data.wpPage.restructuring.enquireLink}
        addClass={"ill_section resill_section"}
      />*/}

     


       <div className="vcfo_section ill_section resill_section dpn_part">
        <div className="container">
          <div className="vcfo_left">
            <img src={data.wpPage.restructuring.dpn2Image.mediaItemUrl} alt={data.wpPage.restructuring.dpn2Image.altText} />
          </div>
          <div className="vcfo_right">
            <h3>{data.wpPage.restructuring.dpn2Title}</h3>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.restructuring.dpn2Description }}></div>
            {data.wpPage.restructuring.dpn2ButtonLink !== null && data.wpPage.restructuring.dpn2ButtonLink !== "" ? <Link className="btn btn-primary me-2" to={data.wpPage.restructuring.dpn2ButtonLink}>{data.wpPage.restructuring.dpn2ButtonText}</Link> : ""} {data.wpPage.restructuring.dpn2Button2Link !== null && data.wpPage.restructuring.dpn2Button2Link !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.restructuring.dpn2Button2Link}>{data.wpPage.restructuring.dpn2Button2Text}</Link> : ""}
          </div>
        </div>
      </div>


     {/* <formHealthContext.Provider value={value}>
        <ImageLeftLayout
          id={'business-health-check'}
          title={data.wpPage.restructuring.healthCheckTitle}
          text={data.wpPage.restructuring.healthCheckDesc}
          img={data.wpPage.restructuring.healthCheckImage}
          video={data.wpPage.restructuring.video}
          videolabel={data.wpPage.restructuring.videoButtonLabel}
          btnTxt={data.wpPage.restructuring.buttonLabel}
          btn1Txt={data.wpPage.restructuring.buttonLabel}
          btn2Txt={null}
          btn1Link={data.wpPage.restructuring.buttonUrl}
          btn2Link={''}
          addClass={"ill_section bhc_section new_restu"}
          //btn1Click={() => { setFormDetails(1) }}
        />
        <HealthForm
          title={'Register Now'}
          text={'Register now for your business health check'}
        />
      </formHealthContext.Provider> */}

       <section className="health_check home_helthcheck">
          <div className="container">
            <div className="ht_right">
              <img className="img-fluid" src={data.wpPage.restructuring.healthCheckImage?.mediaItemUrl} alt={data.wpPage.restructuring.healthCheckImage?.altText} />
            </div>

            <div className="ht_left">
              <h2>{data.wpPage.restructuring.healthCheckTitle}</h2>
              <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.restructuring?.healthCheckDesc }}></div>
          

              {data.wpPage.restructuring.buttonUrl !== null && data.wpPage.restructuring.buttonUrl !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.restructuring.buttonUrl}>{data.wpPage.restructuring.buttonLabel}</Link> : ""}

              <div id="myModal" role="dialog" className={showForm?'in show modal fade':'modal fade'}>
              <div className="model_inner">
                <div className="popup_dialog">
                  <div className="modal-content">
                    <button type="button" className="close" onClick={()=>setForm(false)} data-dismiss="modal">&times;</button>
                    <div className="popup_body">
                      <div className="video_form"><ActiveCampaignHowthrive setForm={setForm} /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



              <button  className="btn btn-primary me-5" type="button" onClick={()=>setModal(true)} data-toggle="modal" data-target="#myModal">{data.wpPage.restructuring.videoButtonLabel}</button>
              <div id="myModal" role="dialog" className={showModal?'in show modal fade':'modal fade'}>
              <div className="model_inner">
                  <div className="popup_dialog">
                      <div className="modal-content">
                          <button type="button" className="close" data-dismiss="modal" onClick={()=>{setModal(false);$('iframe.embed-responsive-item').attr('src', $('iframe.embed-responsive-item').attr('src').replace("autoplay=1&amp;", ""));}}>&times;</button>
                          <div className="popup_body">
                              <div className="video_ratio">
                                  <div dangerouslySetInnerHTML={{__html: data.wpPage.restructuring.video }} />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

            </div>
          </div>
        </section>



       <section className="ht_section ht_bottom">
        <div className="container">
          <div className="ht_left">
            <img className="img-fluid" src={data.wpPage.restructuring.resHtImage?.mediaItemUrl} alt={data.wpPage.restructuring.resHtImage?.altText} />
          </div>
          <div className="ht_right">
            <h2>{data.wpPage.restructuring.resHtTitle}</h2>
            <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.restructuring?.resHtDescription }}></div>


            <formEbookContext.Provider value={valueEbook}>
              <button className="btn btn-primary me-5" onClick={() => { checkVideo() }}>Download Now</button>
              <EbookForm
                title={'Download e-guide'}
                text={'Download your free copy today and get on the path to recovery'}
              />
            </formEbookContext.Provider>
          </div>
        </div>
      </section>



        {/*  <formEbookContext.Provider value={valueEbook}>

        <ImageRightLayout
          title={data.wpPage.restructuring.survivalTitle}
          text={data.wpPage.restructuring.survivalDesc}
          img={data.wpPage.restructuring.survivalImage}
          btnTxt={'Download Now'}
          btnLink={""}
          btnClick={() => { setFormEbookDetails(1) }}
          addClass={"irl_section bsp_section"}
        />
        <EbookForm
          title={'Download e-guide'}
          text={'Download your free copy today and get on the path to recovery'}
        />
      </formEbookContext.Provider>*/}



      
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
    wpPage(title: {eq: "Restructure and turnaround"}) {
      restructuring {
        bannerDesc
        bannerImage {
          altText
          mediaItemUrl
        }
        bannerSubtitle
        bannerTitle
        businessDesc
        businessDirectorAdvisorLink
        businessDirectorButtonLink
        businessTitle
        videoButtonLabel
        video
        croDesc
        officerimage {
          altText
          mediaItemUrl
        }
        croTitle
        survivalDesc
        survivalEnquireLink
        survivalTitle
        survivalImage {
          altText
          mediaItemUrl
        }
        resHtTitle
        resHtDescription
        resHtImage {
          altText
          mediaItemUrl
        }

        dpn2Title
        dpn2Description
        dpn2ButtonText
        dpn2ButtonLink
        dpn2Button2Text
        dpn2Button2Link
        dpn2Image {
            altText
            mediaItemUrl
          }

        enquireLink
        healthCheckImage {
          altText
          mediaItemUrl
        }
        healthCheckDesc
        healthCheckTitle
        buttonLabel
        buttonUrl
        sendUrl
        businessTestimonial {
          comment
          designation
          image {
            altText
            mediaItemUrl
          }
          url
          name
        }
        pageTagline
        queAndAnsNew {
          questionNew
          answerNew
          resLink
          resButtonText
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
            speakExpertLink
            speakExpertTitle
          }
        }
      }
    }
  }
`

export default Restructuring
