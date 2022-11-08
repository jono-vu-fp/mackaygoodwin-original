import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import GetInTouch from "../components/get-in-touch3"
import OurPeople from "../components/our-people-list/our-people"
import AboutUs from "../components/about-us"
import History from "../components/history"
import Career from "../components/career"
import Awards from "../components/awards2"
import Accordian from "../components/accordian/accordian"
import { Link } from "gatsby"
import CurveLeft from "../components/curve-left"
import { element } from "prop-types"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// const newsData = [
//   {
//     "imgSrc":"/images/news.jpeg",
//     "title": "How will a business health check change the direction of your business?",
//     "text":"If you’re in survival mode right now, you’re not alone. Thousands of Australian businesses are being tested by the fallout from COVID-19. But no business director can afford to neglect ..."
//   },
//   {
//     "imgSrc":"/images/news.jpeg",
//     "title": "Struggling Tourism Operators To Seek Help Before JobKeeper Ends",
//     "text":"One of Australia’s leading restructuring advisers, Mackay Goodwin, is urging struggling travel and tourism operators to urgently seek financial advice before the Government winds back JobKeeper payments at the end ..."
//   },
//   {
//     "imgSrc":"/images/news.jpeg",
//     "title": "Why you need a budget for your business?",
//     "text":"You need a budget for your business. It doesn’t actually matter what size your business is – whether it’s a sole proprietor right through to a large corporation, if you’re ..."
//   },
// ]

// const whyMG = [
//   {
//     "title": "Innovation",
//     "text": "We’re in the business of resolution. Backed by leading technology and innovative thinking, we make the right decisions at the right time. Capturing opportunity and avoiding obstacles. Delivering the best possible outcome, every day."
//   },
//   {
//     "title": "Focus",
//     "text": "To achieve success takes determination and focus. We leave no stone unturned. Tailoring solutions to meet your specific needs, on top of every moment. Getting you where you need to be, step by step."
//   },
//   {
//     "title": "Action-orientated",
//     "text": "We know time is of the essence. So we put positive action into practice. Taking the initiative, we anticipate your needs and move ahead as swiftly as possible, all without missing a trick."
//   },
//   {
//     "title": "Understanding",
//     "text": "We see beyond the facts and figures, always mindful of the emotional and financial weight. We’ll guide you through with understanding and transparency. With us, you’ll always know where you stand."
//   }
// ]

// const businessData = [
//   {
//     "title": "Dominic Calabretta",
//     "subtitle": "Chief Executive",
//     "text": "Registered Liquidator by ASIC Sydney"
//   },
//   {
//     "title": "Kate Concannon",
//     "subtitle": "Chief Experience Officer",
//     "text": "Sydney"
//   },
//   {
//     "title": "Andrew Ngo",
//     "subtitle": "Director",
//     "text": "Sydney"
//   },
//   {
//     "title": "Laurentia Evelina",
//     "subtitle": "Senior Analyst",
//     "text": "Sydney"
//   },
//   {
//     "title": "Grahame Ward",
//     "subtitle": "Director",
//     "text": "Registered Liquidator by ASIC Sydney"
//   },
//   {
//     "title": "Lili Safa",
//     "subtitle": "Supervisor",
//     "text": "Sydney"
//   }
// ]

const MgWay = ({ data }) => {
  let sliderdata = [];
  let whyMG = [];
  data.wpPage.mgWayPageOptions.communityImages.map((d,k1) => {
    return sliderdata.push({
          imgSrc: d.image.mediaItemUrl
      });
  });
  data.wpPage.mgWayPageOptions.approachQA.map((d) => {
    console.log(d);
    return whyMG.push({ title: d.question, description: d.answer, icon: d.icon, tag: d.approachtag });
  })
  let businessData = [];
  data.allWpOurpeople.nodes.map((d) => {
    return businessData.push({ title: d.title, subtitle: d.backInBusiness.designation, text: d.backInBusiness.location, certification: d.backInBusiness.certification, content: d.content, linkedin: d.backInBusiness.linkedin, email: d.backInBusiness.email, phone: d.backInBusiness.phoneNumber, img: d.featuredImage?.node, designationType: d.backInBusiness.designationType });
  })
  const breadCrumbs = [
    { link: "/", title: "Home" },
    { title: "The MG Way" },
  ]
  var t = setInterval(() => {
    if (typeof window !== "undefined" && window.location.hash !== "") {
      const element = document.getElementById(window.location.hash.replace("#", ""));
      if (typeof (element) != 'undefined' && element != null) {
        setTimeout(() => {
          document.getElementById(window.location.hash.replace("#", "")).scrollIntoView();
          clearInterval(t);
        }, 600)
      }
    }
  }, 500)
  return (<div className="mgway">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.mgWayPageOptions.bannerTitle}
        subtitle={data.wpPage.mgWayPageOptions.bannerSubtitle}
        text={data.wpPage.mgWayPageOptions.bannerDesc}
        bannerImg={data.wpPage.mgWayPageOptions.bannerImage}
        breadCrumbs={breadCrumbs}
        sendUrl={data.wpPage.mgWayPageOptions.learnMoreUrl}
      />
      <OurPeople
        title={data.wpPage.mgWayPageOptions.peopleTitle}
        text={data.wpPage.mgWayPageOptions.peopleTagline}
        data={businessData}
        showAll={0}
      />


       <div className="wva_section about_section" id="about">
        <div className="container">
        <div class="row">
             <h2 class="my-3">{data.wpPage.mgWayPageOptions.aboutTitle}</h2>
             <div class="col-md-9 col-sm-12 fullTxt">             
             <div dangerouslySetInnerHTML={{__html: data.wpPage.mgWayPageOptions.contentTagline }} />
            </div>
          </div>

          <div className="wva_left">
            <img src={data.wpPage.mgWayPageOptions?.aboutImage.mediaItemUrl} alt="" />
          </div>
          <div className="wva_right">
            <h3>{data.wpPage.mgWayPageOptions.contentTitle}</h3>
            <div dangerouslySetInnerHTML={{__html: data.wpPage.mgWayPageOptions.contentDesc }} /> 
          </div>
        </div>
      </div>

      <Awards
          title={data.wpPage.mgWayPageOptions.mgAwardTitle}
          data={data.wpPage.mgWayPageOptions.mgAwardPoints}
        />


       <div className="wcmg_section mg_approach">
          <div className="container">
            <h2>{data.wpPage.mgWayPageOptions.approachTitle}</h2>
        
            <ul>
              {data.wpPage.mgWayPageOptions.approachQA.map((d, key) => {
                return <li><div className="wcmg_img"><img src={d.icon.mediaItemUrl} alt="" /></div><h4>{d.question}</h4>
                <div dangerouslySetInnerHTML={{__html: d.answer}} />
                </li>
              })} 
            </ul>
          </div>
        </div> 

        <div className="mg_identifix">
        <div className="container">
         
          <div className="wva_right">
           <img src={data.wpPage.mgWayPageOptions.identifixImage.mediaItemUrl} alt={data.wpPage.mgWayPageOptions.identifixImage.altText} />            
          </div>

           <div className="wva_left">
          <h3>{data.wpPage.mgWayPageOptions.identifixTitle} <sup>{data.wpPage.mgWayPageOptions.identifixTag}</sup></h3>
            <h5>{data.wpPage.mgWayPageOptions.bannerSubtitle}</h5>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.mgWayPageOptions.identifixDescription }}></div>
            {data.wpPage.mgWayPageOptions.enquireLink !== null && data.wpPage.mgWayPageOptions.enquireLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.mgWayPageOptions.enquireLink}>Enquire Now</Link> : ""}
           
          </div>
        </div>
      </div>

       <div className="wva_section about_section history_section">
        <div className="container">
        <div class="row">
             <h2 class="my-3">{data.wpPage.mgWayPageOptions.historyTitle}</h2>
             <div class="col-md-9 col-sm-12 fullTxt">             
             <div dangerouslySetInnerHTML={{__html: data.wpPage.mgWayPageOptions.historyContentTagline }} />
            </div>
          </div>

          <div className="wva_left">
            <img src={data.wpPage.mgWayPageOptions.historyImage.mediaItemUrl} alt="" />
          </div>
          <div className="wva_right">
            <h3>{data.wpPage.mgWayPageOptions.historyContentTitle}</h3>
            <div dangerouslySetInnerHTML={{__html: data.wpPage.mgWayPageOptions.historyContentDesc }} /> 
          </div>
        </div>
      </div>  

       <div className="home_services mg_carrer_part">
          <div className="container">
           
            <ul>

               <li id="careers">
                  <div className="hs_img"><img src={data.wpPage.mgWayPageOptions.careerImage?.mediaItemUrl} alt="" /></div>
                  <div className="hs_cnt"><h4>{data.wpPage.mgWayPageOptions.carrerTitle}</h4>
                  <div className="des_1" dangerouslySetInnerHTML={{__html: data.wpPage.mgWayPageOptions.careerContentDesc }} /> 
                  <a className="btn btn-primary" href={data.wpPage.mgWayPageOptions.careerButtonLink}>Get In Touch</a></div>
                </li>


                 <li id="community-support">                     
            

                  <div className="image-container hs_img">                     
                    <Carousel showThumbs={false} showIndicators={false} autoPlay={true} dynamicHeight={false} swipeable={true} emulateTouch={true} showStatus={false}>
                        { data.wpPage.mgWayPageOptions.communityImages.map((d) => {
                          return <div><img src={d.image.mediaItemUrl} /></div>
                        })}
                    </Carousel>            
                  </div>
                  <div className="hs_cnt">
                  <h2>{data.wpPage.mgWayPageOptions.communityTitle}</h2>
                  <h4>{data.wpPage.mgWayPageOptions.communityContentTitle}</h4>
                  <div dangerouslySetInnerHTML={{ __html: data.wpPage.mgWayPageOptions.communityContentDesc }} /> 
                  </div>
                   
                </li>


                   <li id="project8">
                  <div className="hs_img"><img className={"img-fluid img-fullwidth"} src={data.wpPage.mgWayPageOptions.journeyImage.mediaItemUrl} alt={data.wpPage.mgWayPageOptions.journeyImage.altText} /></div>
                  <div className="hs_cnt"><h4>{data.wpPage.mgWayPageOptions.journeyTitle}</h4>
                   <h3 className="card-title">{data.wpPage.mgWayPageOptions.journeyContentTitle}</h3>
                  <div  className="des_2" dangerouslySetInnerHTML={{__html: data.wpPage.mgWayPageOptions.journeyContentDesc }} /> 
                  {data.wpPage.mgWayPageOptions.journeyButtonLink !== "" ? <Link className="btn btn-primary" to={data.wpPage.mgWayPageOptions.journeyButtonLink}>Read More</Link> : ""}
                  </div>
                </li>
             
            </ul>
          </div>
        </div>
              
         

      {/*<AboutUs
        title={data.wpPage.mgWayPageOptions.aboutTitle}
        subtitle={data.wpPage.mgWayPageOptions.contentTitle}
        text={data.wpPage.mgWayPageOptions.contentDesc}
        tagline={data.wpPage.mgWayPageOptions.contentTagline}
        aboutImage={data.wpPage.mgWayPageOptions?.aboutImage}
      />*/}

      {/*<Accordian
        title={data.wpPage.mgWayPageOptions.approachTitle}
        showEnquireButton={false}
        data={whyMG}
      />*/}
      {/*<CurveLeft
        title={data.wpPage.mgWayPageOptions.identifixTitle}
        tag={data.wpPage.mgWayPageOptions.identifixTag}
        text={data.wpPage.mgWayPageOptions.identifixDescription}
        img={data.wpPage.mgWayPageOptions.identifixImage}
        btnTxt={'Enquire Now'}
        btnLink={data.wpPage.mgWayPageOptions.enquireLink}

      />*/}
      {/*<History
        title={data.wpPage.mgWayPageOptions.historyTitle}
        subtitle={data.wpPage.mgWayPageOptions.historyContentTitle}
        text={data.wpPage.mgWayPageOptions.historyContentDesc}
        tagline={data.wpPage.mgWayPageOptions.historyContentTagline}
        historyImage={data.wpPage.mgWayPageOptions.historyImage}
      />*/}
      
      {/*<Career
        title={data.wpPage.mgWayPageOptions.carrerTitle}
        text={data.wpPage.mgWayPageOptions.careerContentDesc}
        buttonLink={data.wpPage.mgWayPageOptions.careerButtonLink}
        image={data.wpPage.mgWayPageOptions.careerImage?.mediaItemUrl}
        altText={data.wpPage.mgWayPageOptions.careerImage.altText}
      />
      <section id="community-support" className="community">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>{data.wpPage.mgWayPageOptions.communityTitle}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-8 image-container">
            <Carousel showThumbs={false} showIndicators={false} autoPlay={true} dynamicHeight={false} swipeable={true} emulateTouch={true} showStatus={false}>
                { data.wpPage.mgWayPageOptions.communityImages.map((d) => {
                  return <div><img src={d.image.mediaItemUrl} /></div>
                })}
            </Carousel>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 align-items-center content-container">
              <div className="card-body">
                <h3 className="card-title">{data.wpPage.mgWayPageOptions.communityContentTitle}</h3>
                <div dangerouslySetInnerHTML={{ __html: data.wpPage.mgWayPageOptions.communityContentDesc }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="project8">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>{data.wpPage.mgWayPageOptions.journeyTitle}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-8 image-container">
              <img className={"img-fluid img-fullwidth"} src={data.wpPage.mgWayPageOptions.journeyImage.mediaItemUrl} alt={data.wpPage.mgWayPageOptions.journeyImage.altText} />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 align-items-center content-container">
              <div className="card-body">
                <h3 className="card-title">{data.wpPage.mgWayPageOptions.journeyContentTitle}</h3>
                <div className="pb-4" dangerouslySetInnerHTML={{ __html: data.wpPage.mgWayPageOptions.journeyContentDesc }} />
                {data.wpPage.mgWayPageOptions.journeyButtonLink !== "" ? <Link className="btn btn-primary" to={data.wpPage.mgWayPageOptions.journeyButtonLink}>Read More <i className="fa fa-chevron-right" aria-hidden="true"></i></Link> : ""}
              </div>
            </div>
          </div>
        </div> 
      </section>*/}
      <div className="home">
        <GetInTouch
          title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
          text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
        />
      </div>
    </Layout>
  </div>
  )
}


export const query = graphql`
  {
    wpPage(title: {eq: "The MG Way"}) {
      mgWayPageOptions {
        aboutImage {
          altText
          mediaItemUrl
        }
        aboutTitle
        allPeopleUrl
        approachQA {
          answer
          question
          approachtag
          icon {
            altText
            mediaItemUrl
          }
        }
        approachTitle
        bannerDesc
        bannerImage {
          altText
          mediaItemUrl
        }
        bannerTitle
        careerButtonLink
        careerContentDesc
        careerContentTitle
        careerImage {
          altText
          mediaItemUrl
        }
        carrerTitle
        communityContentDesc
        communityContentTitle
        communityImage {
          altText
          mediaItemUrl
        }
        communityImages{
          image{
            altText
            mediaItemUrl
          }
        }
        communityTitle
        contentDesc
        contentTagline
        contentTitle
        identifixTag
        identifixTitle
        identifixDescription
        identifixImage {
        altText
        mediaItemUrl
        }
        enquireLink
        historyContentDesc
        historyContentTagline
        historyContentTitle
        historyImage {
          altText
          mediaItemUrl
        }
        historyTitle
        learnMoreUrl
        peopleTagline
        peopleTitle
        journeyButtonLink
        journeyContentDesc
        journeyContentTitle
        journeyTitle
        journeyImage {
          altText
          mediaItemUrl
        }
        mgAwardTitle
        mgAwardPoints {
          fieldGroupName
          mgPointDesc
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
    allWpOurpeople(sort: {order:  ASC, fields: menuOrder}) {
      nodes {
        title
        backInBusiness {
          designation
          location
          certification
          designationType
          linkedin
          email
          phoneNumber
        }
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
        content
      }
    }
  }
`

export default MgWay
