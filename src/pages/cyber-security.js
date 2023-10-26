import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Events from "../components/events/upcoming"
import GetInTouch from "../components/get-in-touchlanding"
import TopBanner from "../components/top-banner-left-image"  
import $ from "jquery"


const Cybersecurity = ({data}) => {
   const [showModal, setModal] = React.useState(false);
   const [showModal2, setModal2] = React.useState(false);
   const [formLink, setformLink] = React.useState('');
   const [showForm, setShowForm] = React.useState(false);
   const [toggleArr, setToggleArr] = React.useState([]);
   const [signupTitle, setSignupTitle] = React.useState('Sign up now');
   const setModalForm = (fid) => {
       setShowForm(false);
       setModal2(fid);
       setformLink(fid);
       setTimeout(()=>{
           setShowForm(true);
       },2000);
   }
   const showContactForm = (title) => {
    setSignupTitle(title);
    setModal(true);
    if ('hbspt' in window) {
        window.hbspt.forms.create({
        region: "na1",
        portalId: "40112486",
        formId: "19f7ed9f-64e1-405d-bbe1-2c379e55f027",
        target: "#formContainer"
      });
    }
  }

   const setActiveCh = (e) =>{
       $(e.target).parent('li').toggleClass('active');
   }
   const ntoggleArr = (key) =>{console.log(key)
      let tarr = toggleArr;
      tarr[key] = !tarr[key];console.log(tarr)
      setToggleArr([...tarr]);
   }
   React.useEffect(() => {
    document.body.classList = 'identifixpage';
    //hubspot
    let scriptEle = document.createElement("script");
    scriptEle.setAttribute("src", '//js.hsforms.net/forms/embed/v2.js');
    scriptEle.setAttribute("type", "text/javascript");
    document.body.appendChild(scriptEle);
    scriptEle.addEventListener("load", () => {
      console.log("File loaded")
    });

    return () => {
      document.body.classList = '';
    }
   }, [])
  return (<div className="cyber_page"><Layout>

     <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.topBannerLeft.bannerTitle1}
        subtitle={data.wpPage.topBannerLeft.bannerSubtitle}
        text={data.wpPage.topBannerLeft.bannerDesc}
        bannerImg={data.wpPage.topBannerLeft.bannerImage}
        sendUrl={data.wpPage.topBannerLeft.sendUrl}
        breadCrumbs={false}
      />
 
         <div class="cyber_sec1">
          <div class="container">
             <h2>{data.wpPage.cyberPage.cyberHead1}</h2>
             <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.cyberPage?.cybercontent }}></div>
             <Link className="btn btn-primary" to={data.wpPage.cyberPage?.cyberlink.link}>{data.wpPage.cyberPage?.cyberlink.title}</Link>
          </div>
         </div>
        
        <div class="cyber_sec2">
             <div class="container">
             <div class="cyber_keep">
             <h2>{data.wpPage.cyberPage.footheading}</h2> 
             <p>{data.wpPage.cyberPage.footcontent}</p>
              </div> 

              <div class="cyberpl_row">
                {data.wpPage.cyberPage.plans.map((d,key) => {
                 return <div class="cyberpl_grid" key={'pl'+key}>
                  <h3>{d.plantitle} 
                  {d.planprice!=null?<div>
                  {!toggleArr[key]?<span><b>$</b>{d.planprice} <strong>/ monthly</strong></span>:<span><b>$</b>{d.planprice2} <strong>/ annually</strong></span>}

                   <label class="toggle-control">
                    <input type="checkbox" onChange={()=>ntoggleArr(key)} />
                    <span class="control"></span>
                    Pay annually and <strong>get one month free <svg width="140" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h140v12H0z"/><path d="M127 3.9c-.418-.63-2.885-.394-6-.9-2.25-.366.9-.906-2.399-1.2C102.064.326 74.251-.212 54.146.539c-14.167.516-40.068 2.32-40.04 5.497.026.806 1.51 2.958 0 3.864-1.51.906-2.106 1.5 1.394.9 3.09-.53 8.374-1.414 11-1.783 42.053-5.908 73.663-5.438 91-4.74 10.18.411 9.938.3 9.5-.377z" fill="#000"/></svg></strong>
                  </label>
                  
                  </div>
                  :<div class="determined">
                    Price determined during consultation
                  </div>}

                  
                  </h3>
                 
                   <ul>
                       {d.planlist?.map((d1,key1) => {
                          return <li key={'cl'+key1}>
                            <div class="cplan_ac" onClick={(e)=>setActiveCh(e)}>{d1.plisttitle}</div>
                            <div class="cplan_cont" dangerouslySetInnerHTML={{ __html:d1.plistcontent }}></div>
                             
                          </li>
                      })}
                    </ul>



                    {d.planprice!=null?<button className="btn btn-primary" onClick={()=>showContactForm('Sign up now')}>Sign up</button>:<button className="btn btn-primary" onClick={()=>showContactForm('Enquire now')}>Enquire now</button>}

                    
                 </div>
                })}
              </div> 
           
               

              </div> 

        </div> 

         <div class="cyber_sec3">
          <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                  <img
                  class="img-fluid"
                  src={
                    data.wpPage.cyberPage
                      .didimage.localFile?.childImageSharp?.resize?.src
                  }
                  alt="data.wpPage.cyberPage.didimage.altText"
                />
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.cyberPage?.didcontent }}></div>
                </div>
              </div>
              
             
             
          </div>
         </div>

         <div id="myModal" role="dialog" className={showModal?'in show modal cr_video_pp fade br_popup':'modal cr_video_pp fade'}>
    <div className="brpp_outer"></div>
    <div className="brp_inner hubspot_popup"> 
     <div className="brpp_close" onClick={()=>setModal(false)}>x</div> 
      <div className="brp_right">
         
      </div>
      <div className="brp_left">
        <h2>{signupTitle}</h2>
        <div className="brp_desc">Enter your details below or call <a href="tel:1300 750 599">1300 750 599</a></div>
         <div id="formContainer"></div>
      </div>
    </div>
  </div>

          
         <div className="home">
        <GetInTouch
          title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
          text="In business, there are critical moments. <br/> In the event a cyber incident does occur, we are available at all hours to keep you on the front foot. These are the moments that matter."
        />
      </div>
     
 

   
</Layout></div>)
}
export const query = graphql`
  {
    wpPage(title: {eq: "Cyber Security"}) {

      cyberPage{
          cyberHead1
          cybercontent
          cyberlink {
            title
            url
          }

          footheading
          footcontent
          plans{
              plantitle
              planprice
              planprice2
              pricesubtext
              planlist{
                  plisttitle
                  plistcontent
              }
          }

          didcontent
          didimage {
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 331, height: 417, cropFocus: CENTER, quality: 100) {
                  src
                }
              }
            }
         }

      }  
      

      topBannerLeft{
        bannerDesc
        bannerImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 568, height: 382, cropFocus: CENTER, quality: 100) {
                src
              }
            }
          }
        }
        bannerSubtitle
        bannerTitle1
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
            gitImage {
                altText
                mediaItemUrl
                localFile {
                  childImageSharp {
                    resize (width: 500, height: 685, cropFocus: CENTER, quality: 100) {
                      src
                    }
                  }
                }
             }
            speakExpertLink
            speakExpertTitle
          }
        }
      }
    }
  }
`
export default Cybersecurity