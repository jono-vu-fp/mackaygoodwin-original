import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GetInTouch from "../components/get-in-touch3"
import Awards from "../components/awards"
import Container from "../components/slider/container"
import Accordian from "../components/accordian/accordian"
import Services from "../components/services/container"
import Slider from "react-slick";
import { Link } from "gatsby"
import useInView from "react-cool-inview";
import OurPeople from "../components/our-people-list/our-people"
import News from "../components/news/list"
import $ from "jquery"
import GetInTouchPPForm from "../components/get-in-touch-bankruptcy-popup"

const settings = {
  arrows: false,
  infinite: true, 
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true
};

const IndexPage = ({ data }) => {
  let businessData = [];
  data.allWpOurpeople.nodes.map((d) => {
    return businessData.push({ title: d.title,slug: d.slug, subtitle: d.backInBusiness.designation, text: d.backInBusiness.location, certification: d.backInBusiness.certification, content: d.content, linkedin: d.backInBusiness.linkedin, email: d.backInBusiness.email, phone: d.backInBusiness.phoneNumber, img: d.featuredImage?.node, designationType: d.backInBusiness.designationType, altimg: d.backInBusiness?.staffImage2 });
  })
  const [showModal, setModal] = React.useState(false);
  const [showModal1, setModal1] = React.useState(false);
  //console.log("Home pG Data", datadata.wpPage.hpOptions.homeSlider[2]);
  const [serviceEnter, changeServiceEnter] = React.useState('')
  const { observe, unobserve, inView, scrollDirection, entry } = useInView({
    threshold: 0.25, // Default is 0
    onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
      changeServiceEnter('serviceIn')
      // Triggered when the target enters the viewport
    },
    onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
      changeServiceEnter('')
      // Triggered when the target leaves the viewport
    },
    // More useful options...
  });
  return (
    <div className="home">
      <Layout>
        <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
        <section className="banners">
          <Slider {...settings} className="home-slider">
            <div className="banner-slider">
              <div className="bannerslider-second first">
                <div className="container">
                  <div className="row">
                    <div className="col-12 d-block d-sm-block d-md-block d-lg-none">
                      <h1 className="banner-heading">{data.wpPage.hpOptions.homeSlider[0].bannerTitle}</h1>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-4">
                      <div className="slider-content d-none d-sm-none d-md-none d-lg-block">
                        <h2 className="banner-heading">{data.wpPage.hpOptions.homeSlider[0].bannerTitle}</h2>
                        <p className="banner-details">{data.wpPage.hpOptions.homeSlider[0].bannerSubtitle}</p>
                        {data.wpPage.hpOptions.homeSlider[0].learnMoreUrl !== null && data.wpPage.hpOptions.homeSlider[0].learnMoreUrl !== "" ? <Link className="btn btn-primary" to={data.wpPage.hpOptions.homeSlider[0].learnMoreUrl}>Learn more</Link> : ""}
                      </div>
                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-7">
                      <div className="banner-img-wrapper">
                        <img className="img-fluid" alt={data.wpPage.hpOptions.homeSlider[0].bannerImage.altText} src={data.wpPage.hpOptions.homeSlider[0].bannerImage.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.hpOptions.homeSlider[0].bannerImage.altText} />
                      </div>
                    </div>
                    <div className="col-12 d-block d-sm-block d-md-block d-lg-none">
                      <p className="banner-details ">{data.wpPage.hpOptions.homeSlider[0].bannerSubtitle}</p>
                      {data.wpPage.hpOptions.homeSlider[0].learnMoreUrl !== null && data.wpPage.hpOptions.homeSlider[0].learnMoreUrl !== "" ? <Link className="btn btn-primary" to={data.wpPage.hpOptions.homeSlider[0].learnMoreUrl}>Learn more</Link> : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-slider">
              <div className="bannerslider-second second">
                <div className="container">
                  <div className="row">
                    <div className="col-12 d-block d-sm-block d-md-block d-lg-none">
                      <h2 className="second banner-heading">{data.wpPage.hpOptions.homeSlider[1].bannerTitle}</h2>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-5 align-self-center">
                      <div className="slider-content second d-none d-sm-none d-md-none d-lg-block">
                        <h2 className="banner-heading">{data.wpPage.hpOptions.homeSlider[1].bannerTitle}</h2>
                        <p className="banner-details">{data.wpPage.hpOptions.homeSlider[1].bannerSubtitle}</p>
                        {data.wpPage.hpOptions.homeSlider[1].learnMoreUrl !== null && data.wpPage.hpOptions.homeSlider[1].learnMoreUrl !== "" ? <Link className="btn btn-primary" to={data.wpPage.hpOptions.homeSlider[1].learnMoreUrl}>Learn more</Link> : ""}
                      </div>
                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-7">
                      <div className="banner-img-wrapper">
                        <img className="img-fluid" src={data.wpPage.hpOptions.homeSlider[1].bannerImage.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.hpOptions.homeSlider[1].bannerImage.altText} />
                      </div>
                    </div>
                    <div className="col-12 d-block d-sm-block d-md-block d-lg-none">
                      <p className="banner-details ">{data.wpPage.hpOptions.homeSlider[1].bannerSubtitle}</p>
                      {data.wpPage.hpOptions.homeSlider[1].learnMoreUrl !== null && data.wpPage.hpOptions.homeSlider[1].learnMoreUrl !== "" ? <Link className="btn btn-primary" to={data.wpPage.hpOptions.homeSlider[1].learnMoreUrl}>Learn more</Link> : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-slider">
              <div className="bannerslider-second third">
                <div className="container">
                  <div className="row">
                    <div className="col-12 d-block d-block d-sm-block d-md-block d-lg-none">
                      <h2 className="third banner-heading">{data.wpPage.hpOptions.homeSlider[2].bannerTitle}</h2>
                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-7">
                      <div className="banner-img-wrapper thirdslide">
                        <img className="img-fluid" src={data.wpPage.hpOptions.homeSlider[2].bannerImage.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.hpOptions.homeSlider[2].bannerImage.altText} />
                      </div>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-5 align-self-center">
                      <div className="slider-content d-none d-sm-none d-md-none d-lg-block">
                        <h2 className="banner-heading">{data.wpPage.hpOptions.homeSlider[2].bannerTitle}</h2>
                        <p className="banner-details">{data.wpPage.hpOptions.homeSlider[2].bannerSubtitle}</p>
                        {data.wpPage.hpOptions.homeSlider[2].learnMoreUrl !== null && data.wpPage.hpOptions.homeSlider[2].learnMoreUrl !== "" ? <Link className="btn btn-primary" to={data.wpPage.hpOptions.homeSlider[2].learnMoreUrl}>Learn more</Link> : ""}
                      </div>
                    </div>
                    <div className="col-12 d-block d-sm-block d-md-block d-lg-none">
                      <p className="banner-details">{data.wpPage.hpOptions.homeSlider[2].bannerSubtitle}</p>
                      {data.wpPage.hpOptions.homeSlider[2].learnMoreUrl !== null && data.wpPage.hpOptions.homeSlider[2].learnMoreUrl !== "" ? <Link className="btn btn-primary" to={data.wpPage.hpOptions.homeSlider[2].learnMoreUrl}>Learn more</Link> : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-slider">
              <div className="bannerslider-second third">
                <div className="container">
                  <div className="row">
                    <div className="col-12 d-block d-sm-block d-md-block d-lg-none">
                      <h2 className="third banner-heading">{data.wpPage.hpOptions.homeSlider[3].bannerTitle}</h2>
                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-7">
                      <div className="banner-img-wrapper thirdslide">
                        <img className="img-fluid" src={data.wpPage.hpOptions.homeSlider[3].bannerImage.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.hpOptions.homeSlider[3].bannerImage.altText} />
                      </div>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-5 align-self-center">
                      <div className="slider-content d-none d-sm-none d-md-none d-lg-block">
                        <h2 className="banner-heading">{data.wpPage.hpOptions.homeSlider[3].bannerTitle}</h2>
                        <p className="banner-details">{data.wpPage.hpOptions.homeSlider[3].bannerSubtitle}</p>
                        {data.wpPage.hpOptions.homeSlider[3].learnMoreUrl !== null && data.wpPage.hpOptions.homeSlider[3].learnMoreUrl !== "" ? <Link className="btn btn-primary" to={data.wpPage.hpOptions.homeSlider[3].learnMoreUrl}>Learn more</Link> : ""}
                      </div>
                    </div>
                    <div className="col-12 d-block d-sm-block d-md-block d-lg-none">
                      <p className="banner-details">{data.wpPage.hpOptions.homeSlider[3].bannerSubtitle}</p>
                      {data.wpPage.hpOptions.homeSlider[3].learnMoreUrl !== null && data.wpPage.hpOptions.homeSlider[3].learnMoreUrl !== "" ? <Link className="btn btn-primary" to={data.wpPage.hpOptions.homeSlider[3].learnMoreUrl}>Learn more</Link> : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>

        </section>
        
        <div className="home_services">
          <div className="container">
            <h2>{data.wpPage.hpOptions.serviceTitle}</h2>
            <ul>
              {data.wpPage.hpOptions.services.map((d, key) => {
                return <li><div className="hs_img"><img src={d.serviceImage.localFile?.childImageSharp?.resize?.src} alt="" /></div><div className="hs_cnt"><h4>{d.serviceTitle}</h4><p>{d.serviceDecription}</p><Link className="btn btn-primary" to={d.servicePageUrl}>Learn more</Link></div></li>
              })}
            </ul>
          </div>
        </div>

        <div className="home_branding">
          <div className="container">
            <div className="obc_img">
              <img src={data.wpPage.hpOptions.obcImage.localFile?.childImageSharp?.resize?.src} alt="" />
              <button type="button" onClick={()=>setModal(true)} data-toggle="modal" data-target="#myModal">play</button>
            </div>
          </div>
        </div>
        <div className="wcmg_section">
          <div className="container">
            <h2>{data.wpPage.hpOptions.whyMgTitle}</h2>
            <ul>
              {data.wpPage.hpOptions.whyMgPoints.map((d, key) => {
                return <li><div className="wcmg_img"><img src={d.whyIcon.localFile?.publicURL} alt="" /></div><h4>{d.title}</h4><p>{d.description}</p></li>
              })}
            </ul>
          </div>
        </div>
        <OurPeople
          title={data.wpPage.hpOptions.peopleTitle}
          text={data.wpPage.hpOptions.peopleTagline}
          data={businessData}
          showAll={0}
        />

        <div className="wva_section fd_section dca_section dpn_part">
        <div className="container">
          <div className="wva_left">
            <img src={data.wpPage.hpOptions.dpnImage.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.hpOptions.dpnImage.altText} />
          </div>
          <div className="wva_right">
            <h3>{data.wpPage.hpOptions.dpnTitle}</h3>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.hpOptions.dpnDescription }}></div>
            {data.wpPage.hpOptions.dpnButtonLink !== null && data.wpPage.hpOptions.dpnButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.hpOptions.dpnButtonLink}>{data.wpPage.hpOptions.dpnButtonText}</Link> : ""} {data.wpPage.hpOptions.dpnButton2Link !== null && data.wpPage.hpOptions.dpnButton2Link !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.hpOptions.dpnButton2Link}>{data.wpPage.hpOptions.dpnButton2Text}</Link> : ""}
          </div>
        </div>
      </div>


        <div className="vcfo_section vcfo_section1">
          <div className="container">
            <div class="vcfo_left"><img src={data.wpPage.hpOptions.vcfoImage.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.hpOptions.vcfoImage.altText} /></div>
            <div class="vcfo_right">
              <h4>{data.wpPage.hpOptions.vcfoTitle}</h4>
              <div dangerouslySetInnerHTML={{__html: data.wpPage.hpOptions.vcfoDescription }} />
              <Link className="btn btn-primary" to={data.wpPage.hpOptions.vcfoButtonLink}>{data.wpPage.hpOptions.vcfoButtonText}</Link>
            </div>
          </div>
        </div>

        <section className="health_check home_helthcheck">
          <div className="container">
            <div className="ht_right">
              <img className="img-fluid" src={data.wpPage.hpOptions.bhcImage?.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.hpOptions.bhcImage?.altText} />
            </div>

            <div className="ht_left">
              <h2>{data.wpPage.hpOptions.bhcTitle}</h2>
              <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.hpOptions?.bhcDescription }}></div>
          

              {data.wpPage.hpOptions.bhcButtonLink !== null && data.wpPage.hpOptions.bhcButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.hpOptions.bhcButtonLink}>{data.wpPage.hpOptions.bhcButtonText}</Link> : ""}

              <button  className="btn btn-primary me-5" type="button" onClick={()=>setModal1(true)} data-toggle="modal" data-target="#myModal2">{data.wpPage.hpOptions.bhcVideoButtonText}</button>
              <div id="myModal2" role="dialog" className={showModal1?'in show modal fade':'modal fade'}>
              <div className="model_inner">
                  <div className="popup_dialog">
                      <div className="modal-content">
                          <button type="button" className="close" data-dismiss="modal" onClick={()=>{setModal1(false);$('iframe.embed-responsive-item').attr('src', $('iframe.embed-responsive-item').attr('src').replace("autoplay=1&amp;", ""));}}>&times;</button>
                          <div className="popup_body">
                              <div className="video_ratio">
                                  <div dangerouslySetInnerHTML={{__html: data.wpPage.hpOptions.bhcVideo }} />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

            </div>
          </div>
        </section>


        <div className="vcfo_section na_section">
          <div className="container">
            <h2>Resources</h2>
          </div>
          <News
            title={'News & Articles'}
            data={data.allWpArticle.nodes}
            btn={false}
          />
        </div>


        <GetInTouch
          title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
          text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
        />

         {/*<div id="myModal2" role="dialog" className={showModal?'in show modal fade':'modal fade'}>
        <div class="model_inner">
        <div class="popup_dialog">
        <div class="modal-content">
        <button type="button" class="close" data-dismiss="modal" onClick={()=>{setModal(false);$('iframe.embed-responsive-item').attr('src', $('iframe.embed-responsive-item').attr('src').replace("autoplay=1&amp;", ""));}}>&times;</button>
        <div class="popup_body">
        <div class="video_ratio">
        <div dangerouslySetInnerHTML={{__html: data.wpPage.hpOptions.bhcVideo }} />
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>*/}

        
        <div id="myModal" role="dialog" onClick={()=>{setModal(false);document.getElementById('pp_vid').pause();}} className={showModal?'in show modal fade':'modal fade'}>
        <div class="model_inner">
        <div class="popup_dialog">
        <div class="modal-content">
        <button type="button" class="close" data-dismiss="modal" onClick={()=>{setModal(false);document.getElementById('pp_vid').pause();}}>&times;</button>
        <div class="popup_body">
        <div class="video_ratio">
        <video width="100%" id="pp_vid" controls><source src={data.wpPage.hpOptions.obcVideoUpload.mediaItemUrl} type="video/mp4" />Your browser does not support the video tag.</video>
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
    wpPage(title: {eq: "Home"}) {
      hpOptions {
        homeSlider {
          bannerSubtitle
          bannerTitle
          fieldGroupName
          learnMoreUrl
          bannerImage {
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 746, height: 497, cropFocus: CENTER, quality: 80) {
                  src
                }
              }
            }
          }
        }
        serviceTitle
        services {
          fieldGroupName
          serviceDecription
          servicePageUrl
          serviceTitle
          serviceImage {
            mediaItemUrl
            altText
            localFile {
              childImageSharp {
                resize (width: 311, height: 218, cropFocus: CENTER, quality: 80) {
                  src
                }
              }
            }
          }
        }
        bhcTitle
        bhcDescription
        bhcButtonLink
        bhcButtonText
        bhcVideoButtonText
        bhcVideo
        bhcImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 522, height: 462, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }

        dpnTitle
        dpnDescription
        dpnButtonText
        dpnButtonLink
        dpnButton2Text
        dpnButton2Link
        dpnImage {
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 744, height: 462, cropFocus: CENTER, quality: 80) {
                  src
                }
              }
            }
          }

        testimonials {
          comment
          designation
          fieldGroupName
          name
          url
          image {
            altText
            mediaItemUrl
          }
        }
        whyMgPoints {
          description
          fieldGroupName
          title
          whyIcon {
            altText
            mediaItemUrl
            localFile {
              publicURL
            }
          }
        }
        awardTitle
        awardPoints {
          fieldGroupName
          pointDesc
        }
        testimonialTitle
        whyMgTitle
        obcTitle
        obcImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 1277, height: 593, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }
        obcVideoUpload {
          altText
          mediaItemUrl
        }
        obcVideo
        peopleTagline
        peopleTitle
        vcfoImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 744, height: 462, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }
        vcfoTitle
        vcfoDescription
        vcfoButtonText
        vcfoButtonLink
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
        slug
        backInBusiness {
          designation
          location
          certification
          designationType
          linkedin
          email
          phoneNumber
          staffImage2{
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 416, height: 450, cropFocus: CENTER, quality: 80) {
                  src
                }
              }
            }
          }
        }
        featuredImage {
          node {
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 416, height: 450, cropFocus: CENTER, quality: 80) {
                  src
                }
              }
            }
          }
        }
        content
      }
    }
    allWpArticle(sort: {order: DESC, fields: date}, limit:3) {
      nodes {
        title
        excerpt
        content
        featuredImage {
          node {
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 416, height: 450, cropFocus: CENTER, quality: 80) {
                  src
                }
              }
            }
          }
        }
        slug
      }
    }
  }
`

export default IndexPage
