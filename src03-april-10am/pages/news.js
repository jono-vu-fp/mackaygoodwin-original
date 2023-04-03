import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import News from "../components/news/list"
import GetInTouch from "../components/get-in-touch3"
import EbookForm from "../components/ebook-form"
import { formHealthContext, formEbookContext } from '../components/context';


const breadCrumbs = [
  { link: "/", title: "Home" },
  //{ link: "/insights/", title: "Insights" },
  { title: "Resources" },
]
  
const NewsPage = ({ data }) => {
  const [fromDetails, setFormDetails] = React.useState(0);
  const [fromEbookDetails, setFormEbookDetails] = React.useState(0);
  const value = { fromDetails, setFormDetails };
  const valueEbook = { fromEbookDetails, setFormEbookDetails };
  return (<div className="service insights">
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

       <section className="ht_section ht_bottom">
        <div className="container">
          <div className="ht_left">
            <img className="img-fluid" src={data.wpPage.news.newsImage?.mediaItemUrl} alt={data.wpPage.news.newsImage?.altText} />
          </div>
          <div className="ht_right">
            <h2>{data.wpPage.news.newsTitle}</h2>
            <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.news?.newsDescription }}></div>
            <formEbookContext.Provider value={valueEbook}>
              <button className="btn btn-primary me-5" onClick={() => { setFormEbookDetails(1) }}>Download Now</button>
              <EbookForm
                title={'Download e-guide'}
                text={'Download your free copy today and get on the path to recovery'}
              />
            </formEbookContext.Provider>
          </div>
        </div>
      </section>


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
}

export const query = graphql`
  {
    wpPage(title: {eq: "News & Articles"}) {
      news {
        image {
          altText
          mediaItemUrl
        }
        title
        newsTitle
        newsDescription
        newsImage {
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
