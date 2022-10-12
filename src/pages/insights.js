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

// declare var window;


const breadCrumbs = [
  { link: "/", title: "Home" },
  { title: "Insights" },
]

const Insights = ({ data }) => {
  // window.location.href = "/";
  return (
    <div></div>
  )
}

export const query = graphql`
  {
    wpPage(title: {eq: "Insights"}) {
      insightPageOptions {
        bannerDesc
        bannerImage {
          altText
          mediaItemUrl
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
    allWpArticle(limit: 4, sort: {order: DESC, fields: date}) {
      nodes {
        title
        featuredImage {
          node {
            altText
            mediaItemUrl
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

export default Insights
