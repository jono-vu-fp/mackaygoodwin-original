import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import News from "../components/news/news"
import BackInBusiness from "../components/backinbusiness/backinbusiness"
import Events from "../components/events/events"
import GetInTouch from "../components/get-in-touch3"
import Career from "../components/career"
const breadCrumbs = [
  { link: "/", title: "Home" },
  { title: "Announcements" },
]

const Announcements = ({ data }) => {
  setTimeout(() => {
    if (typeof window !== "undefined" && window.location.hash !== "") {
      document.getElementById(window.location.hash.replace("#", "")).scrollIntoView();
    }
  }, 100)
  return (
    <div className="service insights">
      <Layout>
        <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
        <TopBanner
          title={data.wpPage.insightPageOptions.bannerTitle}
          subtitle={data.wpPage.insightPageOptions.bannerSubtitle}
          text={data.wpPage.insightPageOptions.bannerDesc}
          bannerImg={data.wpPage.insightPageOptions.bannerImage}
          breadCrumbs={breadCrumbs}
          sendUrl={data.wpPage.insightPageOptions.sendUrl}
        />
        <News
          title={data.wpPage.insightPageOptions.newsTitle}
          data={data.wpPage.announcementsPage.announcements}
        />
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
    wpPage(title: {eq: "Announcements"}) {
      insightPageOptions {
        bannerDesc
        bannerImage {
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
        bannerTitle
        businessButtonUrl
        businessTitle
        eventsButtonUrl
        eventsTitle
        fieldGroupName
        newsButtonUrl
        newsTitle
        sendUrl
        dealButtonLink
        dealContentDesc
        dealContentTitle
        dealTitle
        dealImage {
          altText
          mediaItemUrl
          localFile {
            childImageSharp {
              resize (width: 868, height: 579, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }
      }
      metaFields {
        metaDescription
        metaTitle
      }
      announcementsPage{
        announcements {
          ... on WpArticle {
            id
            slug
            title
            excerpt
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
                  publicURL
                }
              }
            }
          }
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
            speakExpertLink
            speakExpertTitle
          }
        }
      }
    }
    allWpArticle(limit: 4, sort: {order: DESC, fields: date}) {
      nodes {
        title
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
              publicURL
            }
          }
        }
        excerpt
        content
        slug
      }
    }
    allWpBusiness(limit: 4, sort: {order: DESC, fields: date}) {
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
    allWpEvent(limit: 4, sort: {order: DESC, fields: date}) {
      nodes {
        title
        excerpt
        content
        slug
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
        eventsOption {
          eventDate
          buttonLabel
          registerUrl
        }
      }
    }
  }
`

export default Announcements
