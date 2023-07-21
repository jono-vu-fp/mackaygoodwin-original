import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="Corporate Restructuring and Advisory" />

    <section id="banner-section" className="sec_404"><div class="container position-relative"><div class="row"><div class="col-sm-12 col-md-12 col-lg-6 col-xl-5"><div class="banner-content innerpage-banner"><h1 class="banner-heading">Page Not Found</h1><h2 class="banner-subheading"></h2><div class="banner-desc d-lg-block">We're very sorry, but that page doesn't exist or has been moved.</div><a class="btn btn-primary me-5" href="https://mackaygoodwin.com.au/">Back to home</a></div></div><div class="col-sm-12 col-md-12 col-lg-6 col-xl-5"><div class="banner-image"><img src="https://cms.mackaygoodwin.com.au/wp-content/uploads/2022/10/expertsinbusiness_img.jpg" class="img-fluid" alt="" /></div></div></div></div></section>
  </Layout>
)

export default NotFoundPage
