import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner-6"
import GetInTouch from "../components/get-in-touch3"
import GetInTouchPDF from "../components/get-in-touch-pdf"
import FsLightbox from "fslightbox-react";
import News from "../components/news/list"

// const whyMG = [
//   {
//     "title": "Liquidation",
//     "text":"We’re in the business of resolution. Backed by leading technology and innovative thinking, we make the right decisions at the right time. Capturing opportunity and avoiding obstacles. Delivering the best possible outcome, every day."
//   },
//   {
//     "title": "Receivership",
//     "text":"To achieve success takes determination and focus. We leave no stone unturned. Tailoring solutions to meet your specific needs, on top of every moment. Getting you where you need to be, step by step."
//   },
//   {
//     "title": "Personal Insolvency",
//     "text":"We know time is of the essence. So we put positive action into practice. Taking the initiative, we anticipate your needs and move ahead as swiftly as possible, all without missing a trick."
//   }
// ]

const Author = ({ data }) => {
  const [glimit,setLimit] = React.useState(6);
  const [showLm,setLm] = React.useState(true);
  const [toggler, setToggler] = React.useState(false);
  const [curslide, setCurslide] = React.useState(0);

  let imgArr = [];
  let breadCrumbs = [
    { link: "/", title: "Home" },
    { title: data.wpPost?.title }
  ]
  let shortname = '';

  if (data.wpOurpeople !== null) {
    data.wpPost = data.wpOurpeople;
    breadCrumbs = [
      { link: "/", title: "Home" },
      { link: "/insights", title: "Insights" },
      { link: "/news", title: "News and Articles" },
      { title: data.wpPost.title }
    ];
    shortname = data.wpPost.title.split(" ")[0];
  }
  return (<div className="service insolvency posts author_page">
    <Layout>
      <Seo title={data.wpPost?.metaFields?.metaTitle} description={data.wpPost?.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPost.title}
        subtitle={data.wpPost.backInBusiness?.designation}
        text={''}
        bannerImg={data.wpPost?.featuredImage?.node}
        breadCrumbs={breadCrumbs}
        // btn={typeof window !== 'undefined' && window.location.pathname === '/insights/business-survival-pack/' ? false : true}
        btn={false}
        btnTxt={data.wpPost.backInBusiness?.eventStatus == '' ? '' : (data.wpPost.backInBusiness?.eventStatus == 'enablevideoaccess' ? 'Watch Now' : data.wpPost.backInBusiness?.buttonLabel)}
        sendUrl={data.wpPost.backInBusiness?.eventStatus == 'enablevideoaccess' ? data.wpPost.backInBusiness.recordingUrl?.url : data.wpPost.backInBusiness?.registerUrl}
        downloadBtn2={typeof window !== 'undefined' && window.location.pathname === '/insights/business-survival-pack/' ? true : false}
      />
      {data.wpPost.content!="" && data.wpPost.content!=null?
      <div className="aufull_cont">
      <div className="container">
        <div className="row">
          <div className="col-sm-12"> 
            <div dangerouslySetInnerHTML={{ __html: data.wpPost.content }}></div>
            <div className="rig_button">

            {data.wpPost.eventsOption?.eventStatus != 'enablevideoaccess' ?
              data.wpPost.eventsOption?.registerUrl ? <a className="bt-big px-4 mx-4" href={data.wpPost.eventsOption?.registerUrl}>{data.wpPost.eventsOption?.buttonLabel} <i className="fa fa-chevron-right" aria-hidden="true"></i></a> : null
            :null
            }

            </div>
          </div>
        </div>
      </div>
      </div>:null}
     {data.wpPost.backInBusiness?.mediaMoments?
      <div className="liq_blocks va_blocks media_blocks">
        <div className="container">
          <div className="row">
               <div className="col-lg-12"> <h4 className="mid_head">
               {shortname} in the media</h4></div>

              {data.wpPost.backInBusiness?.mediaMoments?.map((d,key) => {
                return (
                  <div className={((key+1)%6==0)?'odd col-md-12 mm_item col-lg-12':((key+1)%3==0?'even col-md-12 mm_item col-lg-12':'col-md-6 mm_item col-lg-6')}>
                  <div  className={((key+1)%4==0)?'lb_txt4 ':(((key+1)%4==3)?'lb_txt3 ':(((key+1)%4==2)?'lb_txt2 ':'lb_txt1'))}>
                    <div className="lb_img">
                        <img src={d.image?.mediaItemUrl} alt={d.image?.altText} />
                    </div>
                    <div className="lb_txt">
                      <h3 className="recovery-partner-title ">{d.title?.trim()}</h3>
                      <h2 className="recovery-partner-desc" dangerouslySetInnerHTML={{ __html: d.description}}></h2>
                     
                      <div><Link className="link_media" to={d.readMore} target="_blank">Read More <i class="fa fa-chevron-right" aria-hidden="true"></i></Link></div>                     
                    </div>
                    </div>
                  </div>)
              })}
          </div>
        </div>
      </div>
:null}
       {data.wpPost.backInBusiness?.articles?
       <div className="au_newsec">
        <div className="container">
          <div className="row"><div className="col-lg-12"> <h4 className="mid_head">{shortname}’s resources</h4></div></div></div>
      <News
        title={''}
        data={data.wpPost.backInBusiness.articles}
        btn={false}
      /></div>
      :null}

    </Layout>
  </div>
  )
}
export const query = graphql`
query ($id: String) {
    wpOurpeople(id: {eq: $id}) {
      title
      content
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
      metaFields {
        metaDescription
        metaTitle
      }
      backInBusiness {
        designation
        twitter
        facebook
        linkedin
        articles {
          ... on WpArticle {
            id
            slug
            title
            excerpt
            featuredImage {
              node {
                altText
                mediaItemUrl
              }
            }
          }
        }
        mediaMoments {
          image {
            altText
            mediaItemUrl
          }
          readMore
          title
          description
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
  }
`

export default Author
