import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import Events from "../components/events/events2"
import GetInTouch from "../components/get-in-touch3"

const breadCrumbs = [
  { link: "/", title: "Home" },
  { title: "Search" },
]

export default function SearchPage() {  
  
  const data = useStaticQuery(graphql`{
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
        id
        title
        excerpt
        content
        featuredImage {
          node {
            altText
            mediaItemUrl
            localFile{
              childImageSharp{
                resize (width: 416, height: 285, cropFocus: CENTER, quality: 80) {
                  src
                }
              }
            }
          }
        }
        slug
      }
    }
  }`)
   const SearchBar = () => {
    useEffect(() => {
      let q1 = window.location.href.replace(/\+/g,' ').split("s=")[1];
      if(q1!='' && q1!=null && q1!=undefined){
        filterResults(q1);
        setQuery(q1);
      }
    }, [])
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const filterResults = (q) =>{
      let res = data.allWpArticle.nodes.filter(v=>v.title.toLowerCase().includes(q.toLowerCase()) || v.content.toLowerCase().includes(q.toLowerCase()));
      setResults(res);
    }
    return (
      <div className="service insights serch_section">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={'Search'}
        subtitle={''}
        text={'Search results for keyword '+query}
        bannerImg={data.wpPage.news.image}
        btn={false}
        breadCrumbs={breadCrumbs}
      />
        {/*<input
          onChange={e => {
            filterResults(e.target.value);
          }}
          value={query}
          autoComplete='off'
          placeholder="Search..."
        />*/}
          
        <section className="news-list">
          <div className="container">
            <div className="row">
              {results.map((d, index) => {
                return <div key={'sr'+index} className="col-lg-4 col-md-12  mt-4">
                  <div className="listbg">
                    <img className="img-fluid" style={{ objectFit: "cover" }} src={d.featuredImage?.node?.localFile?.childImageSharp?.resize?.src} alt={d.featuredImage?.node?.altText} />
                    <h4 className="px-4" style={{ minHeight: "150px" }}>{d.title}</h4>
                    <div className="pt-4 px-4 news-desc" dangerouslySetInnerHTML={{ __html: d.excerpt }}></div>
                    <Link className="ps-4 pe-4 px-4" to={"/insights/" + d.slug + "/"}>Read More <i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
                  </div>
                </div>
              })}
              {results.length==0?<h2>No results found!</h2>:null}
            </div>
          </div>
        </section>
        <div className="home">
          <GetInTouch
            title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
            text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
          />
          </div>
        </Layout>
      </div>
    );
  };
  return (
    <SearchBar />
  )
}