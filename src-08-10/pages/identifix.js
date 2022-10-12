import * as React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GetInTouch from "../components/get-in-touch3"

const Identifix = ({data}) => {
   const [showModal, setModal] = React.useState(false);
   React.useEffect(() => {
     document.body.classList = 'identifixpage';
     return () => {
       document.body.classList = '';
     }
   }, [])
  return (<Layout>
    <Seo title="Identifix" />
    <section id="banner-section" class="identi_bannersec identifix_sec1">
     <div class="container position-relative">
     <div class="row">
       <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5">
          <div class="banner-content innerpage-banner">
          <h1  class="banner-heading" dangerouslySetInnerHTML={{ __html: data.wpPage.identifixPageOptions.title }}></h1>
                         
             <div class="banner-desc d-none d-sm-none d-md-none d-lg-block">
             
             <div dangerouslySetInnerHTML={{__html: data.wpPage.identifixPageOptions.description }} />
             </div>
              <div class="d-none d-sm-none d-md-none d-lg-block">
                 <Link className="btn_more" to="/contact/">Enquire now</Link>
                </div>
          </div>
       </div>
       <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5">
          <div class="banner-image">
             <img src={data.wpPage.identifixPageOptions.banner.mediaItemUrl} alt="data.wpPage.identifixPageOptions.banner.altText" />
          </div>
          <div class="col-12 d-block d-sm-block d-md-block d-lg-none banner-mdesc">
             <div class="banner-desc"><div dangerouslySetInnerHTML={{__html: data.wpPage.identifixPageOptions.description }} /></div>
             <div>
              <Link className="btn_more" to="/contact/">Enquire Now</Link>

              </div>

          </div>
       </div>
    </div>
    </div>
    </section>



    <section class="sec_links">
      <div class="container position-relative">
       <div class="row">
         <div class="col-sm-12">
          <ul class="d-flex justify-content-center">
            <li>
             <Link to="#BHC">Business Health Check</Link> 
            </li>
            <li>
             <Link to="#vCFO">Virtual CFO</Link> 
            </li>
              <li>
               <Link to="#virtual-ciso">Virtual CISO</Link> 
            </li>
          </ul>
          </div>
          </div>
        </div>
    </section>





    <section id="BHC" class="wva_section about_section history_section identifix_sec2">
       <div class="container">

        <div className="wva_left">
             <div class="vid_play"><div class="hov_effact"><img class="img-fluid" src={data.wpPage.identifixPageOptions.banner1.mediaItemUrl} alt="data.wpPage.identifixPageOptions.banner1.altText"/>
             <button type="button" onClick={()=>setModal(true)} data-toggle="modal" data-target="#myModal">play</button></div>
             </div>
               
          </div>

          <div className="wva_right">
            <h3>{data.wpPage.identifixPageOptions.title1}</h3>
            <div dangerouslySetInnerHTML={{__html: data.wpPage.identifixPageOptions.description1 }} /> 
             <Link className="btn btn-primary me-5"  target="_blank" to="https://calendly.com/davidhill-mackaygoodwin/30min?month=2022-03">Book Now</Link>
          </div>

          
       </div>
    </section>

    

    <section id="vCFO" class="banners curve-right vcf_sec mg_identifix">
     <div class="container">
          <div className="wva_right">
            <img class="img-fluid" src={data.wpPage.identifixPageOptions.banner2.mediaItemUrl} alt="data.wpPage.identifixPageOptions.banner2.altText"/>           
          </div>
          <div className="wva_left">
          <h3>{data.wpPage.identifixPageOptions.title2}</h3>           
            <div dangerouslySetInnerHTML={{__html: data.wpPage.identifixPageOptions.description2 }}></div>
             <Link className="btn btn-primary me-5"  to="/vcfo/">Learn More</Link>
           
          </div>      
     </div>
  </section>

   <section id="virtual-ciso" class="wva_section about_section history_section identifix_sec2">
       <div class="container">

        <div className="wva_left">
             <img class="img-fluid" src={data.wpPage.identifixPageOptions.banner3.mediaItemUrl} alt="data.wpPage.identifixPageOptions.banner3.altText"/>            
               
          </div>

          <div className="wva_right">
            <h3>{data.wpPage.identifixPageOptions.title3}</h3>
            <div dangerouslySetInnerHTML={{__html: data.wpPage.identifixPageOptions.description3 }} />
              <Link className="btn btn-primary me-5"  to="#get-in-touch">Enquire now</Link>
          </div>

          
       </div>
    </section>

  
  <div className="home">
  <GetInTouch
     title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
     text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
   />
</div>
   <div id="myModal" role="dialog" className={showModal?'in show modal fade':'modal fade'}>
    <div class="model_inner">
     <div class="popup_dialog">
         <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" onClick={()=>setModal(false)}>&times;</button>
         <div class="popup_body">
                 <div class="video_ratio">
                 <div dangerouslySetInnerHTML={{__html: data.wpPage.identifixPageOptions.video }} />
                     </div>
         </div>
         
       </div>

     </div></div>
   </div>
</Layout>)
}
export const query = graphql`
  {
    wpPage(title: {eq: "Identifix"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      identifixPageOptions {
        description
        banner {
          mediaItemUrl
          altText
        }
        title
        title1
        banner1{
          mediaItemUrl
          altText
        }
        description1
        video
        title2
        banner2{
          mediaItemUrl
          altText
        }
        description2
        title3
        banner3{
          mediaItemUrl
          altText
        }
        description3
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
export default Identifix