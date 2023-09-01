import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import GetInTouch from "../components/get-in-touch3"
import Container from "../components/slider/container"
import Accordian from "../components/accordian/accordian"
import FullText from "../components/full-text"
import CurveRight from "../components/curve-right"
import TestimonialMain from "../components/testimonial-main"
import ReciveryPlan from "../components/recovery-plan"

const ConsultBusiness = ({ data }) => {
  let whyMG = [];
  data.wpPage.consultBusiness.queAns.map((d) => {
    return whyMG.push({ title: d.ques, description: d.ans, learnMoreUrl: d.learnMoreUrl, learnMoreText: 'Learn More' });
  })
  console.log('whyMG--->20');
  console.log(whyMG);
  const breadCrumbs = [
    { link: "/", title: "Home" },
    { link: "#", title: "Services" },
    { title: "Experts in business" },
  ]
  return (<div className="service restructure experts_section">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.consultBusiness.bannerTitle}
        subtitle={data.wpPage.consultBusiness.bannerSubtitle}
        text={data.wpPage.consultBusiness.bannerDesc}
        bannerImg={data.wpPage.consultBusiness.bannerImage}
        //breadCrumbs={breadCrumbs}
        sendUrl={data.wpPage.consultBusiness.sendUrl}
       //equalWidth={true}
      />

      <div className="liq_blocks va_blocks doca_2">
        <div className="container">
          <div className="row">
           <h2 className="whyTitle">{data.wpPage.consultBusiness.title}</h2>
              
              {data.wpPage.consultBusiness.descriptionWhy.map((d) => {
                return (
                  <div className="col-md-4 col-lg-4">
                    <div className="lb_img">
                         <img src={d.image.mediaItemUrl} alt={d.image.altText} className="why-need-img" />
                    </div>
                    <div className="lb_txt">
                      <p className="recovery-partner-title">{d.title.trim()}</p>
                     <p className="recovery-partner-desc">{d.description.trim()}</p>
                    </div>
                  </div>)
              })}
          </div>
        </div>
      </div> 
      

       <div className="home">
    <GetInTouch
      title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
      text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
    />
    </div>  


      {/* <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="whyTitle">{data.wpPage.consultBusiness.title}</h1>
          </div>
        </div>
      </div>
      <div className="banner-slider">
        <div className="bannerslider-second third descriptionWhy">
          <div className="container">
            <div className="row">
              <div className="col-10 col-sm-10 col-md-10 col-lg-7">
                <div className="banner-img-wrapper thirdslide ">
                  <img className="img-fluid" src={data.wpPage.consultBusiness.image.mediaItemUrl} alt={data.wpPage.consultBusiness.image.altText} />
                </div>
              </div>
              <div className="col-2 col-sm-2 col-md-2 col-lg-5 align-self-center">
                <div className="slider-content d-none d-sm-none d-md-none d-lg-block">
                  {data.wpPage.consultBusiness.descriptionWhy.map((e) => {
                    return <div>
                      <h3 className="descriptionWhy-heading">{e.title}</h3>
                      <p className="descriptionWhy-details">{e.description}</p>
                    </div>
                  })}
                </div>
              </div>
              <div className="col-12 d-block d-sm-block d-md-block d-lg-none">
                {data.wpPage.consultBusiness.descriptionWhy.map((e) => {
                  return <div>
                    <h3 className="descriptionWhy-heading">{e.title}</h3>
                    <p className="descriptionWhy-details">{e.description}</p>
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <ReciveryPlan
        data={data.wpPage.consultBusiness.planStep}
      />
      {/* <CurveRight
        title={data.wpPage.consultBusiness.healthCheckTitle}
        text={data.wpPage.consultBusiness.healthCheckDesc}
        img={data.wpPage.consultBusiness.healthCheckImage}
        btn1Txt={'Business Advisors'}
        btn2Txt={'Business Directors'}
        btn1Link={data.wpPage.consultBusiness.businessDirectorAdvisorLink}
        btn2Link={data.wpPage.consultBusiness.businessDirectorButtonLink}
        customClass={"mb-0 pb-0"}
      /> */}
      <FullText
        text={data.wpPage.consultBusiness.tagline}
      />
       {/*<Accordian
        title={''}
        showEnquireButton={true}
        data={whyMG}
      />*/}

      <div class="ca_main res_new">
      {data.wpPage.consultBusiness.queAns.map((d,key) => {
          return <div className="ca_sec"><div className="container"><h2>{d?.ques}</h2>
          <div className="ca_txt" dangerouslySetInnerHTML={{ __html: d?.ans }}></div>
          {d?.learnMoreUrl !== null && d?.learnMoreUrl !== "" ? <Link className="btn btn-primary me-5" to={d?.learnMoreUrl}>Learn More</Link> : null}
          </div></div>
      })}
      </div>

      <section className="recovery-partner">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="whyTitle text-center">{data.wpPage.consultBusiness.recoveryTagline}</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            {data.wpPage.consultBusiness.partner.map((d) => {
              return (<div className={"col-xs-12 col-md-6 col-lg-" + parseInt(12 / data.wpPage.consultBusiness.partner.length)}>
                <div className="text-center">
                  <img src={d.image.mediaItemUrl} alt={d.image.altText} className="recovery-partner-img" />
                </div>                
                <p className="recovery-partner-title text-center" dangerouslySetInnerHTML={{ __html: d?.title }}></p>
              </div>)
            })}
          </div>
        </div>
      </section>
      <TestimonialMain
        data={data.wpPage.consultBusiness.testimonial}
      />
      <Container
        title={data.wpPage.consultBusiness.title}
        data={data.wpPage.consultBusiness.caseStudies}
        slideColor={'#EBE9DE'}
      />
    </Layout>
  </div>
  )
}
export const query = graphql`
  {
    wpPage(title: {eq: "Our Services"}) {
      id
      title
      consultBusiness {
        bannerDesc
        bannerSubtitle
        bannerImage {
          altText
          mediaItemUrl
        }
        businessDirectorAdvisorLink
        bannerTitle
        businessDirectorButtonLink
        fieldGroupName
        healthCheckDesc
        healthCheckImage {
          altText
          mediaItemUrl
        }
        recoveryTagline
        partner {
          image {
            altText
            mediaItemUrl
          }
          title
        }
        title
        descriptionWhy {
          image {
            altText
            mediaItemUrl
          }
          title
          description
        }
        caseStudies {
          comment
          fieldGroupName
          designation
          title
          url
          image {
            altText
            mediaItemUrl
          }
        }
        healthCheckTitle
        image {
          altText
          mediaItemUrl
        }
        planStep {
          description
          title
        }
        learnMoreLink
        queAns {
          ans
          ques
          learnMoreUrl
        }
        sendUrl
        subTitle
        tagline
        testimonial {
          description
          image {
            altText
            mediaItemUrl
          }
        }
        title
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
            tagline
            speakExpertLink
            speakExpertTitle
          }
        }
      }
    }
  }
`

export default ConsultBusiness
