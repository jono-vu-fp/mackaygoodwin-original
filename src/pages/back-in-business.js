import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import BackInBusiness from "../components/backinbusiness/backinbusiness"
import GetInTouch from "../components/get-in-touch"

const breadCrumbs = [
  { link: "/", title: "Home" },
  { link: "/insights/", title: "Insights" },
  { title: "Back in business" },
]

const BackInBusinessPage = ({ data }) => (
  <div className="service insights back-inbusiness-detail">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.news.title}
        subtitle={''}
        text={''}
        bannerImg={data.wpPage.news.image}
        btn={false}
        breadCrumbs={breadCrumbs}
      />
      <BackInBusiness
        title={''}
        data={data.allWpBusiness.nodes}
        btn={false}
      />
      <GetInTouch
        title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
        text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
      />
    </Layout>
  </div>
)

export const query = graphql`
  {
    wpPage(title: {eq: "Back In Business"}) {
      news {
        image {
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
            speakExpertLink
            speakExpertTitle
          }
        }
      }
    }
    allWpBusiness(sort: {order: DESC, fields: date}) {
      nodes {
        title
        excerpt
        content
        slug
        featuredImage {
          node {
            altText
            mediaItemUrl
            localFile {
              childImageSharp {
                resize (width: 636, height: 424, cropFocus: CENTER, quality: 80) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

export default BackInBusinessPage
