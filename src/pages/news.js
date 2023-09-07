import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import News from "../components/news/list"
import GetInTouch from "../components/get-in-touch3"
import EbookForm from "../components/ebook-form"
import { formHealthContext, formEbookContext } from '../components/context';
import ActiveCampaignHowthrive from "../components/activecampaign-howthrive"



const breadCrumbs = [
  { link: "/", title: "Home" },
  //{ link: "/insights/", title: "Insights" },
  { title: "Resources" },
]
  
const NewsPage = ({ data }) => {
  const [showForm, setForm] = React.useState(false);
   const [fromDetails, setFormDetails] = React.useState(0);
  const [fromEbookDetails, setFormEbookDetails] = React.useState(0);
  const value = { fromDetails, setFormDetails };
  const valueEbook = { fromEbookDetails, setFormEbookDetails };
  const checkVideo = () =>{
    setForm(true);
  }
  let businessData2 = [];
  data.allWpArticle.nodes.map((d) => {
    if(![7590,6213,1238,785,810,1235,1247].includes(d.databaseId)){
      return businessData2.push({ title: d.title, excerpt: d.excerpt, slug: d.slug, featuredImage: d.featuredImage });
    }
  })
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
        data={businessData2}
        btn={false}
      />

       <section className="ht_section ht_bottom">
        <div className="container">
          <div className="ht_left">
            <img className="img-fluid" src={data.wpPage.news.newsImage?.localFile?.childImageSharp?.resize?.src} alt={data.wpPage.news.newsImage?.altText} />
          </div>
          <div className="ht_right">
            <h2>{data.wpPage.news.newsTitle}</h2>
            <div className="ht_cnt" dangerouslySetInnerHTML={{ __html: data.wpPage.news?.newsDescription }}></div>
            <formEbookContext.Provider value={valueEbook}>
              {/*<button className="btn btn-primary me-5" onClick={() => { setFormEbookDetails(1) }}>Download Now</button>*/}
            <button className="btn btn-primary me-5" onClick={() => { checkVideo() }}>Download Now</button>
              <EbookForm
                title={'Download e-guide'}
                text={'Download your free copy today and get on the path to recovery'}
              />
            </formEbookContext.Provider>
            <div id="myModal" role="dialog" className={showForm?'in show modal fade':'modal fade'}>
              <div className="model_inner">
                <div className="popup_dialog">
                  <div className="modal-content">
                    <button type="button" className="close" onClick={()=>setForm(false)} data-dismiss="modal">&times;</button>
                    <div className="popup_body">
                      <div className="video_form"><ActiveCampaignHowthrive setForm={setForm} /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          localFile {
            childImageSharp {
              resize (width: 526, height: 351, cropFocus: CENTER, quality: 80) {
                src
              }
            }
          }
        }
        title
        newsTitle
        newsDescription
        newsImage {
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
        databaseId
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
        newscategories {
          nodes {
            name
            id
          }
        }
      }
    }
  }
`

export default NewsPage
