import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-3"
import Accordian from "../components/accordian/accordian-bankruptcy"
import FullText from "../components/full-text"
import ReciveryPlan from "../components/recovery-plan"
import News from "../components/news/list2"
import GetInTouchPPForm from "../components/get-in-touch-bankruptcy-popup"
import GetInTouch3 from "../components/get-in-touch3"
import OurPeople from "../components/our-people-liquid/our-people4"
import _ from 'lodash';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Bankruptcy = ({ data }) => {
  const [businessData2, setbusinessData] = React.useState([]);
  let whyMG = [];
  data.wpPage.bankruptcy.brFaqs.map((d) => {
    console.log(d);
    return whyMG.push({ title: d.question, description: d.answer, tag: '' });
  })

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const breadCrumbs = [
    { link: "/", title: "Home" },
    { title: "Liquidation" },
  ]

  React.useEffect(()=>{
    let businessData2 = [];
    let suffledArray = _.shuffle(data.allWpOurpeople.nodes); let lidx=0;
    suffledArray.map((d,key) => {
      if(d.title=='Gavin King'){
         lidx++;
        return businessData2.unshift({ title: d.title, subtitle: d.backInBusiness.designation, text: d.backInBusiness.location, certification: d.backInBusiness.certification, content: d.content, linkedin: d.backInBusiness.linkedin, email: d.backInBusiness.email, img: d.featuredImage?.node, designationType: d.backInBusiness.designationType, registeredLiquidators: d.backInBusiness.registeredLiquidators, altimg:d.backInBusiness.staffImage2 });
      }
      else if(lidx<5){
         lidx++;
        return businessData2.push({ title: d.title, subtitle: d.backInBusiness.designation, text: d.backInBusiness.location, certification: d.backInBusiness.certification, content: d.content, linkedin: d.backInBusiness.linkedin, email: d.backInBusiness.email, img: d.featuredImage?.node, designationType: d.backInBusiness.designationType, registeredLiquidators: d.backInBusiness.registeredLiquidators, altimg:d.backInBusiness.staffImage2 });
      }
    });
    setbusinessData(businessData2);
    return () => {

    };
  },[]);

  

  let businessData = [];
  data.allWpArticle.nodes.map((d) => {
    if(d.title === 'Understanding the Difference Between Liquidation and Bankruptcy' || d.title === 'How to Avoid Company Bankruptcy or Liquidation'){
      return businessData.push({ title: d.title, excerpt: d.excerpt, slug: d.slug, featuredImage: d.featuredImage });
    }
  })
  return (<div className="service restructure consult-business liquidation voluntary_administration bankruptcy">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.bankruptcy.brBannerTitle}
        subtitle={''}
        text={data.wpPage.bankruptcy.brBannerDesc}
        bannerImg={data.wpPage.bankruptcy.brBannerImage}
        breadCrumbs={breadCrumbs}
        equalWidth={true}
      />
      <div className="liq_blocks va_blocks br_blocks">
        <div className="container">
          <div className="row">
              {/* <h3>{data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.tagline}</h3> */}
              {data.wpPage.bankruptcy.brDescriptionWhyliquid.map((d) => {
                return (
                  <div className="col-md-4 col-lg-4">
                    <div className="lb_img">
                        <img src={d.image?.localFile?.publicURL} alt={d.image?.altText} />
                    </div>
                    <div className="lb_txt">
                      <p className="recovery-partner-title">{d.title?.trim()}</p>
                      <p className="recovery-partner-desc">{d.description?.trim()}</p>
                    </div>
                  </div>)
              })}
          </div>
        </div>
      </div>
      <div className="weva_section">
        <div className="container">
          <h3>{data.wpPage.bankruptcy.wbTitle}</h3>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.bankruptcy.wbDescription }}></div>
            {data.wpPage.bankruptcy.wbButtonLink !== null && data.wpPage.bankruptcy.wbButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.bankruptcy.wbButtonLink}>{data.wpPage.bankruptcy.wbButtonText}</Link> : ""}
        </div>
      </div>

      <div className="wva_section hide_block">
        <div className="container">
          <div className="wva_left">
            <img src={data.wpPage.bankruptcy.psImage.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.bankruptcy.psImage.altText} />
          </div>
          <div className="wva_right">
            <h3>{data.wpPage.bankruptcy.psTitle}</h3>
            <h5>{data.wpPage.bankruptcy.psSubTitle}</h5>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.bankruptcy.psDescription }}></div>
            {data.wpPage.bankruptcy.psButtonLink !== null && data.wpPage.bankruptcy.psButtonLink !== "" ? <Link className="btn btn-primary me-5" to={data.wpPage.bankruptcy.psButtonLink}>{data.wpPage.bankruptcy.psButtonText}</Link> : ""}
        </div>
          </div>
        </div>

        <FullText
          text={data.wpPage.bankruptcy.brLpTagline}
          subTxt={data.wpPage.bankruptcy.brLpDescription}
          customClass={'middleFullText glpo_section'}
        />

        <ReciveryPlan
          data={data.wpPage.bankruptcy.brLpProcess}
          titleDisplay={false}
          customClass={'glpo_reco_section va_glpo_reco_section'}
        />

         

      <div class="liqtestmon">
        <div class="container container2">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-5">
               
              <img class="img-fluid" src={data.wpPage.bankruptcy.tesImage.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.bankruptcy.tesImage.altText} />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-7">
                <div class="rt_testmon">
                  <Carousel showDots={true} responsive={responsive} infinite={true}  autoPlay={true} autoPlaySpeed={2000}> 
                {data.wpPage.bankruptcy.testimonialsrowban.map((d,key) => {
                 return <div class="ctestitem">
                 <div dangerouslySetInnerHTML={{ __html: d.testimonialscontentban }}></div>
                 </div>
                })}
          </Carousel> 
                </div>
              

              </div>
            </div>
        </div>
      </div>

      <OurPeople
        title={'Meet our team of experts and registered liquidators'}
        text={''}
        data={businessData2}
        showAll={0}
        liquidation={1}
      />
      <div class="row">
              <div class="col-lg-12 col-md-12 align-center">
                <Link className="btn btn-primary no-marg" to="/people/">
                  All People
                </Link>
              </div>
            </div>


      <div className="bankruptcy service grey_faq">
        <Accordian
          title={data.wpPage.bankruptcy.brFaqsTitle}
          showEnquireButton={false}
          data={whyMG}
        />
        </div>



        {data.wpPage.bankruptcy.bsContent !== null && data.wpPage.bankruptcy.bsContent !== "" ? 
        <div className="bs_section">
          <div className="container">
            <div className="bs_right">
              <img src={data.wpPage.bankruptcy.bsImage?.mediaItemUrl} alt={data.wpPage.bankruptcy.bsImage?.altText} />
            </div>
            <div className="bs_left">
              <div dangerouslySetInnerHTML={{ __html: data.wpPage.bankruptcy.bsContent }}></div>
            </div>
          </div>
        </div> : ""}


        <div class="liquidation_land"> 
            <div class="vcfo_section na_section new_landing"> 
              <section class="news-list allnews_list">

                  <div class="container">
                  <div class="row">
                          <div class="col-lg-12 col-md-12">
                      <h2>Understanding the Difference Between Liquidation and Bankruptcy</h2></div>
                    </div>

                    <News
                      title={''}
                      data={businessData}
                      btn={false}
                    />
                      
                  </div>
              </section>
          </div> </div>


        
        <div className="cu_fixed">
            <a href="/contact"><img src="/images/sophie-img.png" />Contact Us</a>
        </div>
        <div className="home">
        <GetInTouch3
          title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
          text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
        />
      </div>
        <GetInTouchPPForm
          title={data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
          text={data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
          image={data?.allWp?.nodes[0].themeGeneralSettings.themeGeneralSettings.gitImage}
          formid='rcpp_form'
        />
        
    </Layout>
  </div>
  )
}
export const query = graphql`
  {
    wpPage(title: {eq: "Bankruptcy"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      bankruptcy {
        brBannerImage {
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
        tesDescription
          tesImage {
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 676, height: 420, cropFocus: CENTER, quality: 80) {
                  src
                }
              }
            }
          }
        testimonialsrowban {
          testimonialscontentban           
        }  
        brBannerTitle
        brBannerDesc        
        brDescriptionWhyliquid {
          description
          image {
            altText
            mediaItemUrl
            localFile{
              publicURL
            }
          }
          title

        }
        brLearnMoreLink
        wbTitle
        wbDescription
        wbButtonText
        wbButtonLink
        psImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 676, height: 420, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }
        psTitle
        psSubTitle
        psDescription
        psButtonText
        psButtonLink
        brLpTagline
        brLpDescription
        brLpProcess {
          processTitle
        }
        cmContent
        brFaqsTitle
        brFaqs {
          question
          answer
        }
        bsImage {
          altText
          mediaItemUrl
        }
        bsContent
        ppTitle
        ppDescription
        ppImage {
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
          registeredLiquidators
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
    allWpArticle(sort: {order: DESC, fields: date}) {
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

export default Bankruptcy
