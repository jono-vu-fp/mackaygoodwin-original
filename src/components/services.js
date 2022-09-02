import * as React from "react"

const Accordian = (props) => {
  const isBrowser = typeof window !== "undefined"
  const [sheight,setHeight] = React.useState(isBrowser?window.scrollY:0);

  React.useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      setHeight(scrollPosition);
      if(document.getElementsByClassName("why-mg-fixed").length && (window.outerWidth<=991)){
        if(window.outerWidth<430){
          document.getElementsByClassName("why-mg-fixed")[0].style.top = 96+document.getElementsByClassName("slider_fix")[0].offsetHeight+'px';
        } else {
          document.getElementsByClassName("why-mg-fixed")[0].style.top = 162+document.getElementsByClassName("slider_fix")[0].offsetHeight+'px';
        }
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };

  }, []);


  return <section className="ols_section">
    <div className="container">
      <h3>{props.title}</h3>
      <div className="ols_list">
        <ul>
            {props.data.map((d, key) => {
              return <li>
              <h4>{d.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: d?.description }}></p>
              </li>
            })}
        </ul>
      </div>
    </div>
  </section>
}

export default Accordian
