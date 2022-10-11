import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import News from "../components/news/list"
import GetInTouch from "../components/get-in-touch3"

const breadCrumbs = [
  { link: "/", title: "Home" },
  //{ link: "/insights/", title: "Insights" },
  { title: "Resources" },
]

const NewsPage = ({ data }) => (
  <div className="service insights">
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
      <News
        title={''}
        data={data.allWpArticle.nodes}
        btn={false}
      />
      {/* <BackInBusiness
        title={data.wpPage.insightPageOptions.businessTitle}
        data={data.allWpBusiness.nodes}
      />
      <Events 
        title={data.wpPage.insightPageOptions.eventsTitle}
        data={data.allWpEvent.nodes}
      /> */}
      <div className="home">
      <GetInTouch
        title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
        text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
      />
      </div>
    </Layout>
  </div>
)

export const query = graphql`
  {
    wpPage(title: {eq: "News & Articles"}) {
      news {
        image {
          altText
          mediaItemUrl
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

export default NewsPage
