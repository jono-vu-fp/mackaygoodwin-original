import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Mackey from "../images/logo.svg";
import MackeySmall from "../images/small-logo.svg";
import $ from "jquery";

const Header = () => {
  const inputEl = useRef(null);
  const inputEl1 = useRef(null);
  const [query, setQuery] = useState('');
  const [newTopbar, setNewTopbar] = useState(false);
  const showContactForm = () => {
    $('#brhead_popup').addClass('show');
  }
  const handleScroll = (event) => {
    //handle your event base on scroll in pixels or what ever for example : 
    if (window.screen.width > 991) {
      if (document.getElementsByClassName('small-logo').length > 0 && document.getElementsByClassName('over-nav').length > 0 && document.getElementsByClassName('below-nav').length > 0) {
        if (window.scrollY > 50) {
          document.getElementsByClassName('small-logo')[0].classList.add('d-flex')
          document.getElementsByClassName('over-nav')[0].classList.add('d-flex')
          document.getElementsByClassName('below-nav')[0].classList.add('d-none')
          document.getElementsByClassName('small-logo')[0].classList.remove('d-none')
          document.getElementsByClassName('over-nav')[0].classList.remove('d-none')
          document.getElementsByClassName('below-nav')[0].classList.remove('d-flex')
          document.getElementsByClassName('mainnav')[0].classList.add('fnav')
        } else {
          document.getElementsByClassName('small-logo')[0].classList.remove('d-flex')
          document.getElementsByClassName('over-nav')[0].classList.remove('d-flex')
          document.getElementsByClassName('below-nav')[0].classList.remove('d-none')
          document.getElementsByClassName('small-logo')[0].classList.add('d-none')
          document.getElementsByClassName('over-nav')[0].classList.add('d-none')
          document.getElementsByClassName('below-nav')[0].classList.add('d-flex')
          document.getElementsByClassName('mainnav')[0].classList.remove('fnav')
        }
      }
    } else {
      document.getElementsByClassName('below-nav')[0].classList.remove('d-flex');
      document.getElementsByClassName('small-logo')[0].classList.remove('d-flex')
      document.getElementsByClassName('over-nav')[0].classList.remove('d-flex')
    }
    if($(window).scrollTop()>0) $('#mobileNav').addClass('scrolled');
    else $('#mobileNav').removeClass('scrolled');
  }
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    setQuery(window.location.href.replace(/\+/g,' ').split("s=")[1]);
    if(window.location.href.includes('liquidation-landing-page') || window.location.href.includes('restructure-turnaround-landing-page') || window.location.href.includes('corporate-insolvency-landing-page') || window.location.href.includes('small-business-restructure-landing-page') || window.location.href.includes('dpn-landing-page') || window.location.href.includes('voluntary-administration-landing-page')){
      setNewTopbar(true);
    }
    else {
      setNewTopbar(false);
    }
    return () => {
      setNewTopbar(false);
    }
  }, []);
  const toggleMenu = (e) =>{
    let isact = $(e.target).hasClass('active');
    $(e.target).closest('.submain').find('.parentsubnav').removeClass('show');
    $(e.target).closest('.submain').find('button').removeClass('active');
    if(!isact){
      $(e.target).parent('li').find('.parentsubnav').addClass('show');
      $(e.target).addClass('active');
    }
  }

  return <header>
    <nav className="navbar navbar-light bg-light position-fixed col-12 desktopNav mainnav megamenu">
      <div className="container">
        <Link className="navbar-brand small-logo d-none" to="/">
          <img src={MackeySmall} alt="Mackay Goodwin - Corporate Restructuring, Advisory & Insolvency" />
        </Link>
        <ul className="top-belt1 mb-0 me-auto over-nav d-none">
          <li className="nav-item p-3 dropdown" onMouseOver={(t) => { t.currentTarget.classList.add('show'); }} onMouseOut={(t) => { t.currentTarget.classList.remove('show'); }}>
            <Link className="nav-link" to="/expertsinbusiness/"> Services</Link>
            <div className="dropdown-menu" ref={inputEl} aria-labelledby="navbarDropdown">
                <div className="mgmenurow">
                  <div className="mgmenu_col">
                  <ul className="submain">
                  <li>
                    <Link className="dropdown-item" to="/restructuring/">Restructure & Turnaround</Link><button onClick={(e)=>toggleMenu(e)} className="">+</button>
                    <ul className="parentsubnav">
                     <li><Link className="dropdown-item" to="/voluntary-administration/">Voluntary Administration + DOCA    </Link></li>
                      <li><Link className="dropdown-item" to="/small-business-restructure/">Small Business Restructure</Link></li>
                      <li><Link className="dropdown-item" to="/safe-harbour/">Safe Harbour    </Link></li>
                       
                  </ul>

                  </li>
                   <li>
                    <Link className="dropdown-item" to="/personal-insolvency/">Personal Insolvency</Link><button onClick={(e)=>toggleMenu(e)} className="">+</button>
                    <ul className="parentsubnav">
                     <li><Link className="dropdown-item" to="/bankruptcy/">Bankruptcy</Link></li>
                <li><Link className="dropdown-item" to="/debt-agreements/">Debt Agreements</Link></li>
                <li><Link className="dropdown-item" to="/personal-insolvency/">Creditor Negotiations </Link></li> 
                 
                  </ul>

                  </li>
               
              </ul>
              </div>
                  <div className="mgmenu_col">
                <ul className="submain">
                  <li>
                    <Link className="dropdown-item" to="/insolvency/">Corporate Insolvency</Link><button onClick={(e)=>toggleMenu(e)} className="">+</button>
                    <ul className="parentsubnav">
                     <li><Link className="dropdown-item" to="/liquidation/">Creditors Voluntary Liquidation</Link></li>
                <li><Link className="dropdown-item" to="/liquidation/">Simplified Liquidation</Link></li>
                <li><Link className="dropdown-item" to="/liquidation/">Members Voluntary Liquidation</Link></li>
                <li><Link className="dropdown-item" to="/corporate-insolvency-landing-page#receverships_sec">Receverships </Link></li>
                 
                  </ul>

                  </li>
                   <li>
                    <Link className="dropdown-item" to="/corporate-advisory/">Corporate Advisory</Link>
                    </li>
                       
                  </ul>
                  </div>
                </div>
                

              </div>

          </li>
          {/*<li className="nav-item p-3 dropdown" onMouseOver={(t) => { t.currentTarget.classList.add('show'); }} onMouseOut={(t) => { t.currentTarget.classList.remove('show'); }}>
            <Link className="nav-link" to="/insights/">Insights</Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li className="p-2"><Link className="dropdown-item" to="/deal-hub/">Deal Hub</Link></li>
              <li className="p-2"><Link className="dropdown-item" to="/news/">News & articles</Link></li>
              <li className="p-2"><Link className="dropdown-item" to="/back-in-business/">Case studies</Link></li>
              
            </ul>
          </li>*/}
          <li className="nav-item p-3 dropdown" onMouseOver={(t) => { t.currentTarget.classList.add('show'); }} onMouseOut={(t) => { t.currentTarget.classList.remove('show'); }}>
            <Link className="nav-link" to="#" tabIndex="-1" aria-disabled="true">Resources </Link>
            <div className="dropdown-menu" ref={inputEl} aria-labelledby="navbarDropdown">
                <div className="mgmenurow">
                  <div className="mgmenu_col">
                  <ul className="submain">
                  <li>
                    <Link className="dropdown-item" to="/restructuring/">MG Academy</Link><button onClick={(e)=>toggleMenu(e)} className="">+</button>
                    <ul className="parentsubnav">
                     <li><Link className="dropdown-item" to="/watch-on-demand/">Watch On Demand</Link></li>
                      <li><Link className="dropdown-item" to="/ondemand/">Working Lunch</Link></li>
                      </ul>

                  </li>
                   <li className="no_margin">
                    <Link className="dropdown-item" to="/news/">Insights</Link> </li>
                    <li className="no_margin">
                    <Link className="dropdown-item" to="/back-in-business/">Case Studies</Link> </li>
                    <li className="no_margin">
                    <Link className="dropdown-item" to="/identifix/">Indentifix </Link> </li>
               
              </ul>
              </div>
                  <div className="mgmenu_col">
                <ul className="submain">
                  <li>
                    <Link className="dropdown-item" to="#">Guides</Link><button onClick={(e)=>toggleMenu(e)} className="">+</button>
                    <ul className="parentsubnav">
                    <li><Link className="dropdown-item" to="/insights/guide-to-liquidation/">Liquidation </Link></li>
                     <li><Link className="dropdown-item" to="/insights/your-comprehensive-guide-to-voluntary-administration-2023/">Voluntary Administration</Link></li>
                <li><Link className="dropdown-item" to="/insights/guide-to-small-business-restructure/">Small Business Restructure</Link></li>
                <li><Link className="dropdown-item" to="/insights/how-safe-harbour-can-help-protect-directors-from-personal-liability/">Safe Harbour</Link></li>
                <li><Link className="dropdown-item" to="/insights/your-guide-to-australian-bankruptcy/">Bankruptcy </Link></li>
                
                 
                  </ul>

                  </li>
                    
                       
                  </ul>
                  </div>
                </div>
                

              </div>

               
           {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="p-2"><Link className="dropdown-item" to="/mg-way/#people">People</Link></li>
              <li className="p-2"><Link className="dropdown-item" to="/mg-way/#about">About us</Link></li>
              <li className="p-2"><Link className="dropdown-item" to="/careers">Careers</Link></li>
              <li className="p-2"><Link className="dropdown-item" to="/mg-way/#community-support">Community support</Link></li>
            </ul>*/}
          </li>
          <li className="nav-item p-3 dropdown" onMouseOver={(t) => { t.currentTarget.classList.add('show'); }} onMouseOut={(t) => { t.currentTarget.classList.remove('show'); }}>
            <Link className="nav-link" to="/mg-way/" tabIndex="-1" aria-disabled="true">About Us</Link>
            {/* <Link className="nav-link dropdown-toggle" to="/#services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              MG Academy
            </Link> */}
           {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="p-2"><Link className="dropdown-item" to="/media-moments/">Media Moments</Link></li>
              <li className="p-2"><Link className="dropdown-item" to="/news/">Resources</Link></li>
              <li className="p-2"><Link className="dropdown-item" to="/events/">Events</Link></li>
              <li className="p-2"><Link className="dropdown-item" to="/mg-academy/#incubator-program">Incubator Program</Link></li>
            </ul>*/}
            <div className="dropdown-menu" ref={inputEl} aria-labelledby="navbarDropdown">
                <div className="mgmenurow">
                  <div className="mgmenu_col">
                  <ul className="submain">
                   
                   <li className="no_margin">
                    <Link className="dropdown-item" to="/mg-way/">About Us</Link> </li>
                    <li className="no_margin">
                    <Link className="dropdown-item" to="/mg-way/#people">Our People</Link> </li>
                    <li className="no_margin">
                    <Link className="dropdown-item" to="/careers/">Careers </Link> </li>
                    {/*<li className="no_margin">
                    <Link className="dropdown-item" to="/referral/">Professional Advisors </Link> </li>*/}
               
              </ul>
              </div>
                  <div className="mgmenu_col">
                <ul className="submain">
                  <li>
                    <Link className="dropdown-item" to="#">News</Link><button onClick={(e)=>toggleMenu(e)} className="">+</button>
                    <ul className="parentsubnav">
                     <li><Link className="dropdown-item" to="/media-moments/">Media Moments</Link></li>
                <li><Link className="dropdown-item" to="/announcements/">Announcements</Link></li>
                 
                  </ul>

                  </li>

                  <li>
                    <Link className="dropdown-item" to="#">Community Support</Link><button onClick={(e)=>toggleMenu(e)} className="">+</button>
                    <ul className="parentsubnav">
                     <li><Link className="dropdown-item" to="/events-new/">Events</Link></li>
                <li><Link className="dropdown-item" to="/project-8/">Giving Back</Link></li>
                 
                  </ul>
                   
                  </li>

                  </ul>
                  </div>
                </div>
                

              </div>
          </li>
          {/*<li className="nav-item p-3">
              <Link className="nav-link" to="/identifix/" aria-disabled="true">Identifix</Link>
            </li>*/}
          <li className="nav-item p-3">
            {/* <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Contact</a> */}
            {/*<Link className="nav-link" aria-disabled="true"><button className="no_button"onClick={()=>showContactForm()}  aria-disabled="true">Contact</button></Link>*/}
               <Link className="nav-link" to="/contact/" aria-disabled="true">Contact</Link> 
          </li>
        </ul>
        {newTopbar?<ul className="top-belt d-flex ms-auto no_line"><li className="nav-item">
              <a className="nav-link" aria-current="page" href="#get-in-touch">{typeof window !== "undefined" && window.screen.width > 979 ? "Book your free consultation today" : "Call 1300 062 950"} <i className="fa fa-chevron-right"></i></a>
            </li></ul>:<ul className="top-belt d-flex ms-auto">
          {/*<li className="nav-item">
            <a className="nav-link" aria-current="page" href="tel:1300062950">{typeof window !== "undefined" && window.screen.width > 979 ? "Speak to our experts 1300 062 950" : "Call 1300 062 950"} <i className="fa fa-chevron-right"></i></a>
          </li>*/}
          <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/contact/">Speak to our experts</a>

          {/*<Link className="nav-link" aria-disabled="true"><button className="no_button"onClick={()=>showContactForm()}  aria-disabled="true">Book your free consultation / Speak to our experts</button></Link>*/}

            
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/creditor-portal/">Creditor portal <i className="fa fa-chevron-right"></i></a>
          </li>
        </ul>}
      </div>
    </nav>
    <nav className={newTopbar?'navbar navbar-expand-lg below-nav navbar-light col-12 desktopNav d-flex d-none d-lg-block d-xl-nonee megamenu':'navbar navbar-expand-lg below-nav navbar-light col-12 desktopNav d-flex d-none d-lg-block d-xl-nonee megamenu new_headnav'} style={{ paddingTop: "55px" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Mackey} alt="Mackay Goodwin - Corporate Restructuring, Advisory & Insolvency" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-banner mb-2 mb-lg-0">
            <li className="nav-item p-3 dropdown" onMouseOver={(t) => { t.currentTarget.classList.add('show'); inputEl1.current.style.height = inputEl.current.offsetHeight; }} onMouseOut={(t) => { t.currentTarget.classList.remove('show'); inputEl1.current.style.height = 0 }}>
              <Link className="nav-link" to="#"> Services</Link>
              <div className="dropdown-menu" ref={inputEl} aria-labelledby="navbarDropdown">
                <div className="mgmenurow">
                  <div className="mgmenu_col">
                  <ul className="submain">
                  <li>
                    <Link className="dropdown-item" to="/restructuring/">Restructure & Turnaround</Link><button onClick={(e)=>toggleMenu(e)} className="">+</button>
                    <ul className="parentsubnav">
                     <li><Link className="dropdown-item" to="/voluntary-administration/">Voluntary Administration + DOCA    </Link></li>
                      <li><Link className="dropdown-item" to="/small-business-restructure/">Small Business Restructure</Link></li>
                      <li><Link className="dropdown-item" to="/safe-harbour/">Safe Harbour    </Link></li>
                       
                  </ul>

                  </li>
                   <li>
                    <Link className="dropdown-item" to="/personal-insolvency/">Personal Insolvency</Link><button onClick={(e)=>toggleMenu(e)} className="">+</button>
                    <ul className="parentsubnav">
                     <li><Link className="dropdown-item" to="/bankruptcy/">Bankruptcy</Link></li>
                <li><Link className="dropdown-item" to="/debt-agreements/">Debt Agreements</Link></li>
                <li><Link className="dropdown-item" to="/personal-insolvency/">Creditor Negotiations </Link></li> 
                 
                  </ul>

                  </li>
               
              </ul>
              </div>
                  <div className="mgmenu_col">
                <ul className="submain">
                  <li>
                    <Link className="dropdown-item" to="/insolvency/">Corporate Insolvency</Link><button onClick={(e)=>toggleMenu(e)} className="">+</button>
                    <ul className="parentsubnav">
                     <li><Link className="dropdown-item" to="/liquidation/">Creditors Voluntary Liquidation</Link></li>
                <li><Link className="dropdown-item" to="/liquidation/">Simplified Liquidation</Link></li>
                <li><Link className="dropdown-item" to="/liquidation/">Members Voluntary Liquidation</Link></li>
                <li><Link className="dropdown-item" to="/corporate-insolvency-landing-page#receverships_sec">Receverships </Link></li>
                 
                  </ul>

                  </li>
                   <li>
                    <Link className="dropdown-item" to="/corporate-advisory/">Corporate Advisory</Link>
                    </li>
                       
                  </ul>
                  </div>
                </div>
                

              </div>

              
            </li>
            {/* <li className="nav-item p-3 dropdown" onMouseOver={(t) => { t.currentTarget.classList.add('show'); }} onMouseOut={(t) => { t.currentTarget.classList.remove('show'); }}>
              <Link className="nav-link" to="/insights/">Insights</Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="p-2"><Link className="dropdown-item" to="/deal-hub/">Deal Hub</Link></li>
                <li className="p-2"><Link className="dropdown-item" to="/news/">News & articles</Link></li>
                <li className="p-2"><Link className="dropdown-item" to="/back-in-business/">Case studies</Link></li>
                
              </ul>
            </li>*/}
            <li className="nav-item p-3 dropdown" onMouseOver={(t) => { t.currentTarget.classList.add('show'); }} onMouseOut={(t) => { t.currentTarget.classList.remove('show'); }}>
              <Link className="nav-link" to="#" tabIndex="-1" aria-disabled="true">Resources </Link>

              <div className="dropdown-menu" ref={inputEl} aria-labelledby="navbarDropdown">
                <div className="mgmenurow">
                  <div className="mgmenu_col">
                  <ul className="submain">
                  <li>
                    <Link className="dropdown-item" to="#">MG Academy</Link><button onClick={(e)=>toggleMenu(e)} className="">+</button>
                    <ul className="parentsubnav">
                     <li><Link className="dropdown-item" to="/watch-on-demand/">Watch On Demand</Link></li>
                      <li><Link className="dropdown-item" to="/ondemand/">Working Lunch</Link></li>
                      </ul>

                  </li>
                   <li className="no_margin">
                    <Link className="dropdown-item" to="/news/">Insights</Link> </li>
                    <li className="no_margin">
                    <Link className="dropdown-item" to="/back-in-business/">Case Studies</Link> </li>
                    <li className="no_margin">
                    <Link className="dropdown-item" to="/identifix/">Indentifix </Link> </li>
               
              </ul>
              </div>
                  <div className="mgmenu_col">
                <ul className="submain">
                  <li>
                    <Link className="dropdown-item" to="#">Guides</Link><button onClick={(e)=>toggleMenu(e)} className="">+</button>
                    <ul className="parentsubnav">
                    <li><Link className="dropdown-item" to="/insights/guide-to-liquidation/">Liquidation </Link></li>
                     <li><Link className="dropdown-item" to="/insights/your-comprehensive-guide-to-voluntary-administration-2023/">Voluntary Administration</Link></li>
                <li><Link className="dropdown-item" to="/insights/guide-to-small-business-restructure/">Small Business Restructure</Link></li>
                <li><Link className="dropdown-item" to="/insights/how-safe-harbour-can-help-protect-directors-from-personal-liability/">Safe Harbour</Link></li>
                <li><Link className="dropdown-item" to="/insights/your-guide-to-australian-bankruptcy/">Bankruptcy </Link></li>
                  
                  </ul>

                  </li>
                    
                       
                  </ul>
                  </div>
                </div>
                

              </div>

              {/*<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="p-2"><Link className="dropdown-item" to="/mg-way/#people">People</Link></li>
                <li className="p-2"><Link className="dropdown-item" to="/mg-way/#about">About us</Link></li>
                <li className="p-2"><Link className="dropdown-item" to="/careers">Careers</Link></li>
                <li className="p-2"><Link className="dropdown-item" to="/mg-way/#community-support">Community support</Link></li>
              </ul>*/}
            </li>
            <li className="nav-item p-3 dropdown" onMouseOver={(t) => { t.currentTarget.classList.add('show'); }} onMouseOut={(t) => { t.currentTarget.classList.remove('show'); }}>
              <Link className="nav-link" to="/mg-way/" tabIndex="-1" aria-disabled="true">About Us</Link>
              {/* <Link className="nav-link dropdown-toggle" to="/#services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                MG Academy
              </Link> */}
              {/*<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="p-2"><Link className="dropdown-item" to="/media-moments/">Media Moments</Link></li>
              <li className="p-2"><Link className="dropdown-item" to="/news/">Resources</Link></li>
              <li className="p-2"><Link className="dropdown-item" to="/events/">Events</Link></li>
              <li className="p-2"><Link className="dropdown-item" to="/mg-academy/#incubator-program">Incubator Program</Link></li>
              </ul>*/}

               <div className="dropdown-menu" ref={inputEl} aria-labelledby="navbarDropdown">
                <div className="mgmenurow">
                  <div className="mgmenu_col">
                  <ul className="submain">
                   
                   <li className="no_margin">
                    <Link className="dropdown-item" to="/mg-way/">About Us</Link> </li>
                    <li className="no_margin">
                    <Link className="dropdown-item" to="/mg-way/#people">Our People</Link> </li>
                    <li className="no_margin">
                    <Link className="dropdown-item" to="/careers/">Careers </Link> </li>
                   {/* <li className="no_margin">
                    <Link className="dropdown-item" to="/referral/">Professional Advisors </Link> </li>*/}
               
              </ul>
              </div>
                  <div className="mgmenu_col">
                <ul className="submain">
                  <li>
                    <Link className="dropdown-item" to="#">News</Link><button onClick={(e)=>toggleMenu(e)} className="">+</button>
                    <ul className="parentsubnav">
                     <li><Link className="dropdown-item" to="/media-moments/">Media Moments</Link></li>
                <li><Link className="dropdown-item" to="/announcements/">Announcements</Link></li>
                 
                  </ul>

                  </li>

                  <li>
                    <Link className="dropdown-item" to="#">Community Support</Link><button onClick={(e)=>toggleMenu(e)} className="">+</button>
                    <ul className="parentsubnav">
                     <li><Link className="dropdown-item" to="/events-new/">Events</Link></li>
                <li><Link className="dropdown-item" to="/project-8/">Giving Back</Link></li>
                 
                  </ul>
                   
                  </li>

                  </ul>
                  </div>
                </div>
                

              </div>
            </li>
            {/*<li className="nav-item p-3">
              <Link className="nav-link" to="/identifix/" aria-disabled="true">Identifix</Link>
            </li>*/}
            <li className="nav-item p-3">
              {/*<Link className="nav-link" aria-disabled="true"><button className="no_button"onClick={()=>showContactForm()}  aria-disabled="true">Contact</button></Link>*/}
                <Link className="nav-link" to="/contact/" aria-disabled="true">Contact</Link> 
            </li>
          </ul>
          {newTopbar?null:<div className="serch_top">
          <form action="/search">
                 <input type="text" id="search" onChange={e => { setQuery(e.target.value); }} value={query} placeholder="Search" name="s" class="frm_input"/>
                 <input type="submit" value="" class="frm_submit"/>  
              </form>                 
          </div>}
        </div>
      </div>
    </nav>
    <div id="mobileNav" className="light position-fixed">
      <div className="bg-light">
        {newTopbar?<ul className="top-belt d-flex ms-auto no_line"><li className="nav-item">
              <a className="nav-link" aria-current="page" href="#get-in-touch">Book your free consultation today <i className="fa fa-chevron-right"></i></a>
            </li></ul>:<ul className="top-belt d-flex justify-content-center">
          <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/contact/">
          {typeof window !== "undefined" && window.screen.width > 979 ? "Speak to our experts" : "Speak to our experts"} <i className="fa fa-chevron-right"></i>
          </a>

            {/*<a className="nav-link" aria-current="page">
            <button className="no_button"onClick={()=>showContactForm()}  aria-disabled="true">
              {typeof window !== "undefined" && window.screen.width > 979 ? "Book your free consultation today" : "Book your free consultation"} <i className="fa fa-chevron-right"></i>
            </button>
            </a>*/}
          </li>
          {/*<li className="nav-item">
            <a className="nav-link" aria-current="page" href="/contact/">Get expert advice <i className="fa fa-chevron-right"></i></a>
          </li>*/}
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/creditor-portal/">Creditor portal <i className="fa fa-chevron-right"></i></a>
          </li>
        </ul>}
      </div>
      <input type="checkbox" id="top-nav" />
      <div className="position-relative">
        <span className="hamburgerspan"></span>
        <span className="hamburgerspan"></span>
        <span className="hamburgerspan"></span>
      </div>

      <div className="mobile-logo black-logo text-center"> <Link to="/"><img src="https://res.cloudinary.com/mbsaiyed/image/upload/v1625504292/svg/logo-color.svg" alt="Mackay Goodwin - Corporate Restructuring, Advisory & Insolvency" /></Link></div>


      <div id="menu-cont-1">
        <div className="top-mobile">
          {newTopbar?<ul className="top-belt d-flex ms-auto no_line"><li className="nav-item">
              <a className="nav-link" aria-current="page" href="#get-in-touch">{typeof window !== "undefined" && window.screen.width > 979 ? "Book your free consultation today" : "Call 1300 062 950"} <i className="fa fa-chevron-right"></i></a>
            </li></ul>:<ul className="top-belt2 d-flex ms-auto">
            <li className="nav-item">

            

            <a className="nav-link" aria-current="page" href="/contact/">{typeof window !== "undefined" && window.screen.width > 979 ? "Speak to our experts" : "Speak to our experts"} <i className="fa fa-chevron-right"></i></a>

              
            </li>
            {/*<li className="nav-item">
              <a className="nav-link" aria-current="page" href="/contact/">Get expert advice <i className="fa fa-chevron-right"></i></a>
            </li>*/}
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/creditor-portal/">Creditor portal <i className="fa fa-chevron-right"></i></a>
            </li>
          </ul>} 
        </div>
       
         <div className="mobile-logo black-logo text-center"><Link  onClick={()=>{document.getElementById('top-nav').checked=false;}} to="/"><img src="https://res.cloudinary.com/mbsaiyed/image/upload/v1625481695/svg/mobile-logo.svg" alt="Mackay Goodwin - Corporate Restructuring, Advisory & Insolvency" /></Link></div>

        <ul className="menu-ul">
         <li className="nav-item">  
            <div className="serch_top">
            <form action="/search">
                <input type="text" id="search" onChange={e => { setQuery(e.target.value); }} value={query} placeholder="Search" name="s" class="frm_input"/>
                <input type="submit" value="" class="frm_submit"/>      
            </form>             
            </div>
          </li>
          <li className="nav-item sub-menu"><Link className="nav-link" to="/expertsinbusiness/"> Services</Link>
            <input type="checkbox" id="menu-1" />
            <div id="menu-cont-2">
              <div className="mobile-logo black-logo text-center"><Link  onClick={()=>{document.getElementById('top-nav').checked=false;}}  to="/"><img src="https://res.cloudinary.com/mbsaiyed/image/upload/v1625481695/svg/mobile-logo.svg" alt="Mackay Goodwin - Corporate Restructuring, Advisory & Insolvency" /></Link></div>
              <ul className="menu-ul submain">
                <label className="menu-label" htmlFor="menu-1">Menu</label>
                  
                 <li className="nav-item">
                 <Link to="/restructuring/">Restructure & Turnaround</Link>
                 <button onClick={(e)=>toggleMenu(e)} className="">+</button>
                 <ul className="parentsubnav">
                     <li><Link className="dropdown-item" to="/voluntary-administration/">Voluntary Administration + DOCA    </Link></li>
                      <li><Link className="dropdown-item" to="/small-business-restructure/">Small Business Restructure</Link></li>
                      <li><Link className="dropdown-item" to="/safe-harbour/">Safe Harbour    </Link></li>
                       
                  </ul>

                 </li>
                <li className="nav-item"><Link to="/personal-insolvency/">Personal Insolvency</Link>

                <button onClick={(e)=>toggleMenu(e)} className="">+</button>
                    <ul className="parentsubnav">
                     <li><Link className="dropdown-item" to="/bankruptcy/">Bankruptcy</Link></li>
                <li><Link className="dropdown-item" to="/debt-agreements/">Debt Agreements</Link></li>
                <li><Link className="dropdown-item" to="/personal-insolvency/">Creditor Negotiations </Link></li> 
                 
                  </ul>

                </li>
                <li className="nav-item"><Link to="/insolvency/">Corporate Insolvency</Link>
                <button onClick={(e)=>toggleMenu(e)} className="">+</button>
                    <ul className="parentsubnav">
                     <li><Link className="dropdown-item" to="/liquidation/">Creditors Voluntary Liquidation</Link></li>
                <li><Link className="dropdown-item" to="/liquidation/">Simplified Liquidation</Link></li>
                <li><Link className="dropdown-item" to="/liquidation/">Members Voluntary Liquidation</Link></li>
                <li><Link className="dropdown-item" to="/corporate-insolvency-landing-page#receverships_sec">Receverships </Link></li>
                 
                  </ul>
                </li>
                <li className="nav-item"><Link to="/corporate-advisory/">Corporate Advisory</Link></li>

              </ul>
            </div>
          </li>
          <li className="nav-item sub-menu">
            <Link className="nav-link" to="/expertsinbusiness/"> Resources</Link>
            <input type="checkbox" id="menu-2" />
            <div id="menu-cont-2">
              <div className="mobile-logo black-logo text-center"><Link  onClick={()=>{document.getElementById('top-nav').checked=false;}}  to="/"><img src="https://res.cloudinary.com/mbsaiyed/image/upload/v1625481695/svg/mobile-logo.svg" alt="Mackay Goodwin - Corporate Restructuring, Advisory & Insolvency" /></Link></div>
              <ul className="menu-ul submain">
                <label className="menu-label" htmlFor="menu-2">Menu</label>
                  
                 <li className="nav-item"> 
                 <Link to="#">MG Academy</Link>
                 <button onClick={(e)=>toggleMenu(e)} className="">+</button>
                 <ul className="parentsubnav">
                     <li><Link className="dropdown-item" to="/watch-on-demand/">Watch On Demand</Link></li>
                      <li><Link className="dropdown-item" to="/ondemand/">Working Lunch</Link></li>
                      </ul>

                 </li>
                 <li className="nav-item"><Link to="/news/">Insights</Link> </li>
                 <li className="nav-item">
                    <Link to="/back-in-business/">Case Studies</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/identifix/">Indentifix </Link>
                   </li>

                    <li className="nav-item"> 
                    <Link to="#">Guides</Link>
                    <button onClick={(e)=>toggleMenu(e)} className="">+</button>
                    <ul className="parentsubnav">
                    <li><Link className="dropdown-item" to="/insights/guide-to-liquidation/">Liquidation </Link></li>
                     <li><Link className="dropdown-item" to="/insights/your-comprehensive-guide-to-voluntary-administration-2023/">Voluntary Administration</Link></li>
                <li><Link className="dropdown-item"  to="/insights/guide-to-small-business-restructure/">Small Business Restructure</Link></li>
                <li><Link className="dropdown-item"  to="/insights/how-safe-harbour-can-help-protect-directors-from-personal-liability/">Safe Harbour</Link></li>
                <li><Link className="dropdown-item"  to="/insights/your-guide-to-australian-bankruptcy/">Bankruptcy </Link></li>
                  </ul>

                  </li>

                  
                
                 
                 
              </ul>
            </div>
          </li>
          {/* <li className="nav-item sub-menu"><Link className="nav-link" to="/insights/">Insights</Link>
            <input type="checkbox" id="menu-2" />
            <div id="menu-cont-2">
              <div className="mobile-logo black-logo text-center"><Link  onClick={()=>{document.getElementById('top-nav').checked=false;}}  to="/"><img src="https://res.cloudinary.com/mbsaiyed/image/upload/v1625481695/svg/mobile-logo.svg" alt="" /></Link></div>
              <ul className="menu-ul">
                <label className="menu-label" htmlFor="menu-2">Menu</label>
                <li className="nav-item"><Link className="dropdown-item" to="/deal-hub/">Deal Hub</Link></li>
                <li className="nav-item"><Link className="dropdown-item" to="/news/">Resources</Link></li>
                <li className="nav-item"><Link className="dropdown-item" to="/back-in-business/">Case studies</Link></li>
                
              </ul>
            </div>
          </li> */}
          
          <li className="nav-item sub-menu">
          <Link className="nav-link" to="/mg-academy/">About Us</Link>
            <input type="checkbox" id="menu-4" />

            <div id="menu-cont-2">
              <div className="mobile-logo black-logo text-center"><Link  onClick={()=>{document.getElementById('top-nav').checked=false;}}  to="/"><img src="https://res.cloudinary.com/mbsaiyed/image/upload/v1625481695/svg/mobile-logo.svg" alt="Mackay Goodwin - Corporate Restructuring, Advisory & Insolvency" /></Link></div>
              <ul className="menu-ul submain">
                <label className="menu-label" htmlFor="menu-4">Menu</label>
                    
                     <li className="nav-item">
                    <Link to="/mg-way/">About Us</Link> </li>
                    <li className="nav-item">
                    <Link to="/mg-way/#people">Our People</Link> </li>
                    <li className="nav-item">
                    <Link to="/careers/">Careers </Link> </li>
                    {/*<li className="nav-item">
                    <Link to="/referral/">Professional Advisors </Link> </li>*/}

                 <li className="nav-item">
                 <Link to="#">News</Link>
                 <button onClick={(e)=>toggleMenu(e)} className="">+</button>
                <ul className="parentsubnav">
                     <li><Link  className="dropdown-item"  to="/media-moments/">Media Moments </Link></li>
                <li><Link  className="dropdown-item" to="/announcements/">Announcements</Link></li>
                 
                  </ul>

                 </li>
                <li className="nav-item">
                <Link to="#">Community Support</Link><button onClick={(e)=>toggleMenu(e)} className="">+</button> 

                <button onClick={(e)=>toggleMenu(e)} className="">+</button>
                    <ul className="parentsubnav">
                     <li><Link className="dropdown-item"  to="/events-new/">Events</Link></li>
                <li><Link className="dropdown-item"  to="/project-8/">Giving Back</Link></li>
                 
                  </ul>

                </li>
                 
                 
              </ul>
            </div>

          
          </li>

            {/*<li className="nav-item"><Link className="nav-link" aria-disabled="true"><button className="no_button"onClick={()=>showContactForm()}  aria-disabled="true">Contact</button></Link> </li>*/}
          <li className="nav-item"><Link className="nav-link" to="/contact/" aria-disabled="true">Contact</Link> </li>
        </ul>


      </div>
    </div>
    <div id="white" ref={inputEl1}></div>
    
  </header>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
