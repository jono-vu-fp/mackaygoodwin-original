import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-3"
import Accordian from "../components/accordian/accordian-bankruptcy"
import FullText from "../components/full-text"
import ReciveryPlan from "../components/recovery-plan"
import News from "../components/news/list"

const Bankruptcy = ({ data }) => {
  let whyMG = [];
  data.wpPage.bankruptcy.brFaqs.map((d) => {
    console.log(d);
    return whyMG.push({ title: d.question, description: d.answer, tag: '' });
  })

  const breadCrumbs = [
    { link: "/", title: "Home" },
    { title: "Liquidation" },
  ]

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
      <div className="liq_blocks va_blocks">
        <div className="container">
          <div className="row">
              {/* <h3>{data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.tagline}</h3> */}
              {data.wpPage.bankruptcy.brDescriptionWhyliquid.map((d) => {
                return (
                  <div className="col-md-4 col-lg-4">
                    <div className="lb_img">
                        <img src={d.image?.mediaItemUrl} alt={d.image?.altText} />
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

      <div className="wva_section">
        <div className="container">
          <div className="wva_left">
            <img src={data.wpPage.bankruptcy.psImage.mediaItemUrl} alt={data.wpPage.bankruptcy.psImage.altText} />
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

        <div className="weva_section cm_cnt">
          <div className="container">
              <div dangerouslySetInnerHTML={{ __html: data.wpPage.bankruptcy.cmContent }}></div>
          </div>
        </div>

        <Accordian
          title={data.wpPage.bankruptcy.brFaqsTitle}
          showEnquireButton={false}
          data={whyMG}
        />

        <div className="bs_section">
          <div className="container">
            <div className="bs_right">
              <img src={data.wpPage.bankruptcy.bsImage?.mediaItemUrl} alt={data.wpPage.bankruptcy.bsImage?.altText} />
            </div>
            <div className="bs_left">
              <div dangerouslySetInnerHTML={{ __html: data.wpPage.bankruptcy.bsContent }}></div>
            </div>
          </div>
        </div>

        <News
          title={''}
          data={businessData}
          btn={false}
        />
        <div className="cu_fixed">
            <a href="/contact"><img src="/images/sophie-img.png" />Contact Us</a>
        </div>
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
        }
        brBannerTitle
        brBannerDesc        
        brDescriptionWhyliquid {
          description
          image {
            altText
            mediaItemUrl
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
    allWpArticle(sort: {order: DESC, fields: date}) {
      nodes {
        title
        excerpt
        content
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
        slug
      }
    }
  }
`

export default Bankruptcy
