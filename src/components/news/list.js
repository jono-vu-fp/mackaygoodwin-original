import * as React from "react"
import { Link } from "gatsby"

const NewsList = (props) => {
  const [curCat, setCurCat] = React.useState('');
  const [showCat, setShowCat] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(false);
  let whyMG = [];let cats=[]; let cnames=[];
  props.data.map((d) => {
    let catsd= [];
    if(d.newscategories){
      d.newscategories.nodes.map((d1) => {
        if(cats.indexOf(d1.id)==-1){
          cats.push(d1.id);
          cnames.push(d1);
        }
        if(catsd.indexOf(d1.id)==-1){
          catsd.push(d1.id);
        }
      });
    }
    d['cats'] = catsd;
    return whyMG.push(d);
  });
  cnames.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  const [filterList, setFilterList] = React.useState(whyMG);
  const fiterNews = (v) =>{
    setCurCat(v);
    let whyMG1 = whyMG;
    if(v!=''){
      whyMG1 = whyMG1.filter((d) => {
        return d.cats.indexOf(v)>-1;
      });
    }
    setFilterList(whyMG1);
  }

  React.useEffect(() => {
     if(window.location.href.includes('news')){
      setShowFilter(true);
     }
     return () => {
      setShowFilter(false);
     }
   }, []);

  return (<section className="news-list allnews_list">
    <div className="container">
    {showFilter?
      <div className="ccopportun">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <h3 className={showCat?"activeloc":""} onClick={()=>{setShowCat(!showCat);setCurCat('');}}>Categories</h3>
            <div className={showCat?"activeloc job_list":"job_list"}>                     
              <ul>
              <li className={curCat==''?'active':''} onClick={()=>fiterNews('')}>All</li>
                {cnames.map((d, index) => {
                 return <li className={curCat==d.id?'active':''} onClick={()=>fiterNews(d.id)}>{d.name}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>:null}      

      <div className="row">
        {filterList.map((d, index) => {
          return <div className="col-lg-4 col-md-12  mt-4">
            <div className="listbg">
              <img className="img-fluid" style={{ objectFit: "cover" }} src={d.featuredImage?.node?.localFile?.childImageSharp?.resize?.src} alt={d.featuredImage?.node?.altText} />
              <h4 className="px-4" style={{ minHeight: "150px" }}>{d.title}</h4>
              <div className="pt-4 px-4 news-desc" dangerouslySetInnerHTML={{ __html: d.excerpt.replace("newsandarticle","insights") }}></div>
              <Link className="ps-4 pe-4 px-4" to={"/insights/" + d.slug + "/"}>Read More <i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
            </div>
          </div>
        })}
      </div>
      {props.btn !== false ? <div className="pt-5">
        <Link className="bt-big" to="/news/" role="button">All News &amp; Articles</Link>
      </div> : ""}
    </div>
  </section>)
}

export default NewsList
