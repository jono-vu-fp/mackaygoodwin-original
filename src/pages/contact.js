import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GetInTouch from "../components/get-in-touch3"
import TopBanner from "../components/top-banner"
import EbookForm from "../components/ebook-form"
import { formEbookContext } from '../components/context';
import Locations from "../components/locations/location"

const Corporate = ({data}) => {
  const [showModal, setModal] = React.useState(false);
  // let whyMG = [];
  // data.wpPage.corporateAdvisoryPageOptions.qA.map((d) => {
  //   return whyMG.push({title: d.question, description: d.answer});
  // })
  const breadCrumbs = [
    {link: "/",title: "Home"},
    {title: "Contact"},
  ]
  const [fromEbookDetails, setFormEbookDetails] = React.useState(0);
  const valueEbook = { fromEbookDetails, setFormEbookDetails };
  return (<div className=" service contact">
  <Layout>
    <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
    <TopBanner
      title={data.wpPage.contactPageOptions.bannerTitle}
      subtitle={''}
      text={data.wpPage.contactPageOptions.bannerDesc}
      bannerImg={data.wpPage.contactPageOptions.bannerImage}
      sendUrl={data.wpPage.contactPageOptions.sendUrl}
      btn={false}
    />

      <div className="home">
    <GetInTouch
      title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
      text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
    />
    </div>  

    <section className="ht_section">
        <div className="container">
          <div className="ht_left">
            <img className="img-fluid" src={data.wpPage.contactPageOptions.conThriveImage?.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.contactPageOptions.conThriveImage?.altText} />
          </div>
          <div className="ht_right">
            <h2>{data.wpPage.contactPageOptions.conThriveTitle}</h2>
            <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.contactPageOptions?.conThriveDescription }}></div>
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

      <section class="wva_section about_section history_section identifix_sec2">
       <div class="container">

        <div className="wva_left">
             <div class="vid_play"><div class="hov_effact"><img class="img-fluid" src={data.wpPage.contactPageOptions.conImage.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.contactPageOptions.conImage.altText"/>
             <button type="button" onClick={()=>setModal(true)} data-toggle="modal" data-target="#myModal">play</button></div>
             </div>
               
          </div>

          <div className="wva_right">
            <h3>{data.wpPage.contactPageOptions.conTitle}</h3>
            <div dangerouslySetInnerHTML={{__html: data.wpPage.contactPageOptions.conDescription }} /> 
             <Link className="btn btn-primary me-5"  target="_blank" to="https://calendly.com/davidhill-mackaygoodwin/30min?month=2022-03">Book Now</Link>
          </div>
 
          
       </div>
    </section>


    <Locations 
      title={data.wpPage.contactPageOptions.locationTagline}
      data={data.wpPage.contactPageOptions.locations}
    />

  <div className="ca_sec2">
    <div className="container">
        <div dangerouslySetInnerHTML={{__html: data.wpPage.contactPageOptions.conDescription2 }} /> 
         <a className="btn btn-primary me-5" href="mailto:media@mackaygoodwin.com.au?subject=Media & PR Enquiry" target="_blank">Here</a>         
    </div>
  </div>

  <div className="ca_sec2 ca_sec2_n">
    <div className="container">
        <div dangerouslySetInnerHTML={{__html: data.wpPage.contactPageOptions.cseTitle }} /> 
        {data.wpPage.contactPageOptions.cseButtonLink !== null && data.wpPage.contactPageOptions.cseButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.contactPageOptions.cseButtonLink}>{data.wpPage.contactPageOptions.cseButtonText}</Link> : ""}
    </div>
  </div>

    {/* <FullText 
      text={data.wpPage.corporateAdvisoryPageOptions.pageTagline}
    />
    <Accordian 
      title={''}
      data={whyMG}
    /> */}

      <div id="myModal" role="dialog" className={showModal?'in show modal fade':'modal fade'}>
    <div class="model_inner">
     <div class="popup_dialog">
         <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" onClick={()=>setModal(false)}>&times;</button>
         <div class="popup_body">
                 <div class="video_ratio">
                 <div dangerouslySetInnerHTML={{__html: data.wpPage.contactPageOptions.conVideo }} />
                     </div>
         </div>
         
       </div>

     </div></div>
   </div>
  
  </Layout>
  </div>)
}

export const query = graphql`
  {
    wpPage(title: {eq: "Contact"}) {
      contactPageOptions {
        bannerDesc
        bannerImage {
          mediaItemUrl
          altText
          localFile {
            childImageSharp {
              resize (width: 526, height: 351, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }
        bannerTitle
        locationTagline
        fieldGroupName
        locations {
          locationAddress
          locationName
          conLink2
        }
         sendUrl
        conTitle
        conImage{
          mediaItemUrl
          altText
          localFile {
            childImageSharp {
              resize (width: 526, height: 351, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }

        conDescription
        conDescription2
        conVideo

        cseTitle
        cseButtonText
        cseButtonLink

        conThriveTitle 
        conThriveDescription
        conThriveImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 682, height: 465, cropFocus: CENTER, quality: 80) {
                src
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
            speakExpertLink
            speakExpertTitle
          }
        }
      }
    }
  }
`

export default Corporate
