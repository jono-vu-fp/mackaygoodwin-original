import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-4"

import FullText from "../components/full-text"
import ReciveryPlan from "../components/recovery-plan"
import News from "../components/news/list"
import GetInTouchPPForm from "../components/get-in-touch-bankruptcy-popup"
import GetInTouch3 from "../components/get-in-touch3"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import $ from "jquery"

const Careers = ({ data }) => { 
  let whyMG = [];
  data.allWpCareer.nodes.map((d) => {
    let locs = [];
    d.locations.nodes.map((d1) => {
      locs.push(d1.id);
    });
    let bizs = [];
    d.buinessareas.nodes.map((d1) => {
      bizs.push(d1.id);
    });
    return whyMG.push({ title: d.title, content: d.content,locs:locs,bizs:bizs,url:d.singleCareersOptions?.sigCarUrl });
  });
  const [curLoc, setCurLoc] = React.useState('');
  const [curBiz, setCurBiz] = React.useState('');
  const [showLoc, setShowLoc] = React.useState(false);
  const [showBiz, setShowBiz] = React.useState(false);
  const [noData, setNoData] = React.useState(false);
  const [filterList, setFilterList] = React.useState(whyMG);
  const [vdUrl, setVdUrl] = React.useState('');
  const [showModal, setModal] = React.useState(false);
  const setVideoUrl = (url) => {
    setVdUrl(url);
    setModal(true);
  }
  const fiterCareer = (v,t) =>{
    setNoData(false);
    let l1 = curLoc; let b1 = curBiz;
    if(t=='loc'){
      setCurLoc(v);
      l1 = v;
    }
    else{
      setCurBiz(v);
      // setCurLoc('');
      b1 = v;
      // l1 = '';
      // setShowLoc(true);
    }
    let whyMG1 = whyMG;
    if(l1!='' || b1!=''){
      if(l1!=''){
        whyMG1 = whyMG1.filter((d) => {
          return d.locs.indexOf(l1)>-1;
        });
      }
      if(b1!=''){
        whyMG1 = whyMG1.filter((d) => {
          return d.bizs.indexOf(b1)>-1;
        });
      }
    }
    setFilterList(whyMG1);
    setTimeout(()=>{
      setNoData(whyMG1.length>0?false:true);
    },100);
  }
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (<div className="service consult-business liquidation voluntary_administration bankruptcy doc_1 safe_harbour media_moment careers">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.careers?.careBannerTitle}
        subtitle={''}
        text={data.wpPage.careers?.careBannerDesc}
        bannerImg={data.wpPage.careers?.careBannerImage}
        equalWidth={true}
      />


       <div className="weva_section ino_mid_text">
        <div className="container">

          <div className="imt_text">
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.careers.careDescription }}></div>
          </div>

          <div className="imt_img">
            <img onClick={()=>setVideoUrl(data.wpPage.careers.toiVideo1?.mediaItemUrl)} src={data.wpPage.careers.toiVideoImage1?.mediaItemUrl} alt={data.wpPage.careers.toiVideoImage1?.altText} />
          </div>
            
        </div>
      </div>

       <div className="ccopportun">  
          <div className="container">

             <div className="top_width">

            <h2 dangerouslySetInnerHTML={{ __html: data.wpPage.careers.careCcoTitle }}></h2>

           <div class="row">
           <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
               <h3 className={showBiz?"activebiz":""} onClick={()=>{setShowBiz(!showBiz);setCurBiz('');fiterCareer('','biz');}}>Business Area</h3>
                
                <div className={showBiz?"activebiz job_list":"job_list"}>                     
                    <ul>
                        {data.allWpBuinessarea.nodes.map((d,key) => {
                          return <li key={'l'+key} className={curBiz==d.id?'active':''} onClick={()=>fiterCareer(d.id,'biz')}>{d.name}</li>
                        })}
                    </ul>
                </div>
           </div>

            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 rig_1">
               <h3 className={showLoc?"activeloc":""} onClick={()=>{setShowLoc(!showLoc);setCurLoc('');fiterCareer('','loc');}}>Location</h3>
              <div className={showLoc?"activeloc job_list":"job_list"}> 
                    <ul>
                        {data.allWpLocation.nodes.map((d,key) => {
                          return <li key={'l'+key} className={curLoc==d.id?'active':''} onClick={()=>fiterCareer(d.id,'loc')}>{d.name}</li>
                        })}                     
                    </ul> 
              </div>
           </div>

           <div className="career_list">
                    {filterList.map((d,key) => {
                      return <div key={'c'+key} className="list_1">
                          <div class="left_jobs">
                            <h4>{d.title}</h4>
                            <div dangerouslySetInnerHTML={{ __html: d.content }}></div>
                          </div>
                          <div class="right_but">                                                         
                              {d.url.includes('mailto:')?<a className="btn btn-primary" href={d.url}>Apply Now</a>:<Link className="btn btn-primary" to={d.url}>Apply Now</Link>}
                          </div>
                    </div>
                    })}  
                    {filterList.length==0?<div className="error_msg">no career opportunities</div>:null} 
           </div>
             
           </div>

            </div>

          </div>

       </div>
  <div className="mg_slide_part"> 
            <div className="container">

             <h2 dangerouslySetInnerHTML={{ __html: data.wpPage.careers.careSliderTitle }}></h2>

                 <div className="image-container hs_img">                     
                    <Carousel responsive={responsive}>
                        { data.wpPage.careers.careImage.map((d) => {
                          return <div><img src={d.image.mediaItemUrl} /></div>
                        })}
                    </Carousel>            
                  </div> 

            </div>

            </div>
      <div id="myModal" role="dialog" className={showModal?'in show modal cr_video_pp fade':'modal cr_video_pp fade'}>
        <div className="model_inner">
          <div className="popup_dialog">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" onClick={()=>setModal(false)}>&times;</button>
              <div className="popup_body">
                <div className="video_ratio">
                {vdUrl?<video key={vdUrl} width="100%" controls><source src={vdUrl} type="video/mp4" />Your browser does not support the video tag.</video>:null}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>


    </Layout>
  </div>
  )
}
export const query = graphql`
  {
    wpPage(title: {eq: "Careers"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      
      careers {
        careBannerImage {
          altText
          mediaItemUrl
        }
        
        careImage{
          image{
            altText
            mediaItemUrl
          } 
        }
        careSliderTitle
        careCcoTitle       
        careBannerTitle
        careBannerDesc       
        careDescription
        toiVideo1 {
          altText
          mediaItemUrl
        }
        toiVideoImage1 {
          altText
          mediaItemUrl
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
              }
            }
          }
        }
      }
    }
    allWpCareer(sort: {order: DESC, fields: date}) {
      nodes {
        title
        excerpt
        content
        slug
        locations {
          nodes {
            id
          }
        }
        buinessareas {
          nodes {
            id
          }
        }
        singleCareersOptions {
          sigCarUrl
        }
      }
    }
    allWpBuinessarea {
      nodes {
        name
        id
      }
    }
    allWpLocation {
      nodes {
        id
        name
      }
    }
  }
`

export default Careers
