import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-left-image"  
import FullText from "../components/full-text2"
import GetInTouch from "../components/get-in-touch3"
import ActiveCampaignHowthrive from "../components/activecampaign-howthrive"
import { formHealthContext, formEbookContext } from '../components/context';
import EbookForm from "../components/ebook-form"

const Ondemand = ({ data }) => {
  let whyMG = [];
  data.wpPage.ondemandPageOptions.qS?.map((d) => {
    return whyMG.push({ title: d.question2, description: d.answer2 });
  })

  let whyMG1 = [];
  data.wpPage.iconWithTextSection.iconwithtextrowon.map((d) => {
    return whyMG1.push({ title: d.texton });
  });

  let whyMG2 = [];
  data.wpPage.ondemandPageOptions.icontext.map((d) => {
    return whyMG2.push({ title: d.worktext });
  });

  let whyMG3 = [];
  data.wpPage.fourGridSection.gridfour.map((d) => {
    return whyMG3.push({ title: d.grtitle, content: d.grcontent, linktext: d.linktext, linkurl: d.linkUrl  });
  });

  const breadCrumbs = [
    { link: "/", title: "Home" },
    { link: "#", title: "Services" },
    { title: "OnDemand" },
  ]
  // const formDetailContext = React.createContext(null);
    const [fromDetails2, setFormDetails2] = React.useState(0);
   const value2 = { fromDetails2, setFormDetails2 };
  const checkVideo = () =>{
    setForm(true);
  }

  const [showModal, setModal] = React.useState(false);
  const [showForm, setForm] = React.useState(false);

  const [fromDetails, setFormDetails] = React.useState(0);
  const [fromEbookDetails, setFormEbookDetails] = React.useState(0);
  const value = { fromDetails, setFormDetails };
  const valueEbook = { fromEbookDetails, setFormEbookDetails };
  return (<div className="service insights ondemandpage">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.topBannerLeft.bannerTitle1}
        subtitle={data.wpPage.topBannerLeft.bannerSubtitle}
        text={data.wpPage.topBannerLeft.bannerDesc}
        bannerImg={data.wpPage.topBannerLeft.bannerImage}
        sendUrl={data.wpPage.topBannerLeft.sendUrl}
        breadCrumbs={breadCrumbs}
      />

       <div class="rtsec2">
          <div class="container container2">
            <ul>
              {data.wpPage.iconWithTextSection.iconwithtextrowon.map(
                (d, key) => {
                  return (
                    <li>
                    <img src={d.iconon?.localFile?.publicURL} /> 

                      <div dangerouslySetInnerHTML={{ __html: d.texton }}></div>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
        <div class="lun_sec">
          <div class="container">
           <h2 dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage.ondemandPageOptions .workhead,}}
              ></h2>

              <h3 dangerouslySetInnerHTML={{
                  __html:
                    data.wpPage.ondemandPageOptions .worksubhead,}}
              ></h3>

            
             
            <ul>
            {data.wpPage.ondemandPageOptions.icontext.map(
                (d, key) => {
                  return (
                    <li> 
                      <img src={d.workimage?.localFile?.publicURL} />
                      <span dangerouslySetInnerHTML={{ __html: d.worktext }}></span>
                    </li>
                  );
                }
              )}
            </ul>
           
          </div>
        </div>

        <section className="grid_4_sec">
    <div class="container">
        <div class="row">
            <div class="col"><h2>Providing you with the tools and knowledge.<br/>Select your session:</h2></div>
        </div>
        <div class="row"> 

        {data.wpPage.fourGridSection.gridfour.map(
                (d, key) => {
                  return (
                    <div className="col-lg-3 col-md-6 col-xs-12">

                    <div class="grid_item">
              <img src={d.grimage?.localFile?.childImageSharp?.resize?.src} />
              <div class="card-body">
              <h3 class="card-title" dangerouslySetInnerHTML={{ __html: d.grtitle }}/>
              <div class="card-text" dangerouslySetInnerHTML={{ __html: d.grcontent }}></div>
               
              <Link className="btn btn-primary" to={d.linkUrl}>{d.linktext} </Link> 
               </div>
             </div> 
                    </div>
                  );
                }
              )} 
           
          
             
        </div>
    </div>
</section>

       
      
     {/*<section className="wva_section fd_section mg_acnew1 ondpage_se1">
       <div class="container">    
       <div  className="row">    
         <div className="wva_left  col-sm-12 col-md-12 col-lg-6 col-xl-5">
              <img class="img-fluid" src={data.wpPage.ondemandPageOptions.brImage.mediaItemUrl} alt="data.wpPage.ondemandPageOptions.brImage.altText"/>          
          </div>
          <div className="wva_right  col-sm-12 col-md-12 col-lg-6 col-xl-6">
           <h3>{data.wpPage.ondemandPageOptions.brTitle}</h3>
              <div dangerouslySetInnerHTML={{__html: data.wpPage.ondemandPageOptions.brDescription }} />
               <Link className="btn btn-primary" to={data.wpPage.ondemandPageOptions.brLink}>Book Now</Link>
          </div> 
           </div>         
       </div> 

       </section> */}

        {/*<section class="wva_section about_section history_section identifix_sec2 event_incubator mg_acnew2 ondpage_se2  ondpage_experience">
       <div class="container">  
        <div  className="row">      
          <div className="wva_left">
               <img class="img-fluid" src={data.wpPage.ondemandPageOptions.inImage.localFile?.childImageSharp?.resize?.src} alt="data.wpPage.ondemandPageOptions.inImage.altText"/>         
            </div>
            <div className="wva_right">
              <h3>{data.wpPage.ondemandPageOptions.inTitle}</h3>
              <div dangerouslySetInnerHTML={{__html: data.wpPage.ondemandPageOptions.inDescription }} />
               <Link className="btn btn-primary" to={data.wpPage.ondemandPageOptions.inLink}>Learn more</Link>
            </div>  
          </div>        
       </div>
    </section>*/}

    {/*<section className="wva_section fd_section mg_acnew1 ondpage_se1">
        <div className="container">
          <div  className="row">
              <div className="wva_left  col-sm-12 col-md-12 col-lg-6 col-xl-5">
                <img class="img-fluid" src={data.wpPage.ondemandPageOptions.insImage.mediaItemUrl} alt="data.wpPage.ondemandPageOptions.insImage.altText"/>      
              </div>
              <div className="wva_right  col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <h3>{data.wpPage.ondemandPageOptions.insTitle}</h3>
              <div dangerouslySetInnerHTML={{__html: data.wpPage.ondemandPageOptions.insDescription }} />
               <Link className="btn btn-primary" to={data.wpPage.ondemandPageOptions.insLink}>Book Now</Link>
           </div>
          </div>
         </div>
      </section>*/}

       {/*<section class="wva_section about_section history_section identifix_sec2 event_incubator mg_acnew2">
       <div class="container">  
        <div  className="row">      
          <div className="wva_left">
               <img class="img-fluid" src={data.wpPage.ondemandPageOptions.ecImage.mediaItemUrl} alt="data.wpPage.ondemandPageOptions.ecImage.altText"/>             
            </div>
            <div className="wva_right">
              <h3>{data.wpPage.ondemandPageOptions.ecTitle}</h3>
              <div dangerouslySetInnerHTML={{__html: data.wpPage.ondemandPageOptions.ecDescription }} />
               <Link className="btn btn-primary" to={data.wpPage.ondemandPageOptions.ecLink}>Book Now</Link>
            </div>  
          </div>        
       </div>
    </section>*/}

      {/*<div class="ca_main ca_main2">
      {data.wpPage.ondemandPageOptions.qS?.map((d,key) => {
          return <div className="ca_sec"><div className="container"><h2>{d.question2}</h2><div className="ca_txt" dangerouslySetInnerHTML={{ __html: d.answer2 }}></div><Link className="btn btn-primary" to={"https://outlook.office365.com/owa/calendar/MGAcademyonDemand@mackaygoodwin.com.au/bookings/"} target="_blank">Book Now</Link></div></div>
      })}
      </div>*/}

    <section className="ht_section ht_bottom">
        <div className="container">
          <div className="ht_left"> 

            <img className="img-fluid" src={data.wpPage.howToThriveSection.howimage2?.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.howToThriveSection.howimage2?.altText} />
          </div>
          <div className="ht_right">
            <h2>{data.wpPage.howToThriveSection.howhead}</h2>
            <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.howToThriveSection?.howdescription }}></div>


            <formEbookContext.Provider value={valueEbook}>
              <button className="btn btn-primary me-5" onClick={() => { checkVideo() }}>Download now</button>
              <EbookForm
                title={'Download e-guide'}
                text={'Download your free copy today and get on the path to recovery'}
              />
            </formEbookContext.Provider>
          </div>
        </div>
      </section>

   



      <div className="home">
        <GetInTouch
          title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
          text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
        />
      </div>
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

    

      
    
    </Layout>
  </div>)
}

export const query = graphql`
  {
    wpPage(title: {eq: "OnDemand"}) {

      howToThriveSection{
        howhead
        howdescription
        howimage2 {
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

      topBannerLeft{
        bannerDesc
        bannerImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 524, height: 349, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }
        bannerSubtitle
        bannerTitle1
        sendUrl

      }

      iconWithTextSection{

        iconwithtextrowon {
          texton 
          iconon{
            altText
            mediaItemUrl
            localFile{
              publicURL
            }
          }
        }

      }
      
      fourGridSection{

        fourhead
        gridfour {
          grtitle
          grcontent
          linktext
          linkUrl 
          grimage{
            altText
            mediaItemUrl
            localFile {
                  childImageSharp {
                    resize (width: 315, height: 219, cropFocus: CENTER, quality: 80) {
                      src
                    }
                  }
            }
          }
        }

      }

      ondemandPageOptions {

        workhead
        worksubhead
        icontext {
          worktext 
          workimage{
            altText
            mediaItemUrl
            localFile{
              publicURL
            }
          }
        }

        brLink
        brTitle
        brDescription
        brImage {
          altText
          mediaItemUrl
        }

        inLink
        inTitle
        inDescription
        inImage {
          altText
          mediaItemUrl
          localFile {
                  childImageSharp {
                    resize (width: 526, height: 351, cropFocus: CENTER, quality: 80) {
                      src
                    }
                  }
            }
        }

        insLink
        insTitle
        insDescription
        insImage {
          altText
          mediaItemUrl
        }

        ecLink
        ecTitle
        ecDescription
        ecImage {
          altText
          mediaItemUrl
        }
        
       
        fieldGroupName
        
      
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

export default Ondemand
