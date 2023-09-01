import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KX3F5L7');`}}
        />
        
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=1"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" crossOrigin="anonymous"></link>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"></link>
        {props.headComponents}
        <meta name="google-site-verification" content="phYoyguFJu6oqzRW-3qg3hMoNHSXn6zvm3qmyTwS3fY" />

        <script dangerouslySetInnerHTML={{
          __html: `{
"@context": "https://schema.org",
"@type": "Organization",
"name": "Mackay Goodwin",
"url": "https://mackaygoodwin.com.au/contact/",
"logo":
"https://s3.amazonaws.com/livechat-temp/logo/image-1625825990592-655522706.PNG
",
"contactPoint": {
"@type": "ContactPoint",
"telephone": "+61 1300 062 950",
"contactType": "customer service",
"contactOption": "TollFree",
"areaServed": "AU",
"availableLanguage": "en"
},
"address": [{
"@type": "PostalAddress",
"streetAddress": "Level 12, 20 Bridge
Street",
"addressLocality": "Sydney",
"addressRegion": "NSW",
"addressCountry": "Australia",
"postalCode": "NSW 2000",
"telephone": "+61292207100",
"email": "",
"contactType": "customer service",
"areaServed": "worldwide",
"availableLanguage": ["en"]
},{
"@type": "PostalAddress",
"streetAddress": "Level 10/120
Edward St",
"addressLocality": "Brisbane",
"addressRegion": "Brisbane City",
"addressCountry": "Australia",
"postalCode": "QLD 4000",
"telephone": "+61730547120",
"email": "",
"contactType": "customer service",
"areaServed": "worldwide",
"availableLanguage": ["en"]
},{
"@type": "PostalAddress",
"streetAddress": "Level 16, 90 Collins
Street",
"addressLocality": "Melbourne
",
"addressRegion": "Melbourne",
"addressCountry": "Australia",
"postalCode": "VIC 3000",
"telephone": "+61385828176",
"email": "",
"contactType": "customer service",
"areaServed": "worldwide",
"availableLanguage": ["en"]
},{
"@type": "PostalAddress",
"streetAddress": "Level 14/197 St Georges
Terrace",
"addressLocality": "Perth",
"addressRegion": "Perth",
"addressCountry": "Australia",
"postalCode": "WA 6000",
"telephone": "+61863232383",
"email": "",
"contactType": "customer service",
"areaServed": "worldwide",
"availableLanguage": ["en"]
},{
"@type": "PostalAddress",
"streetAddress": "Level 1, 48-50 Smith
Street",
"addressLocality": "Darwin",
"addressRegion": "Darwin",
"addressCountry": "Australia",
"postalCode": "NT",
"telephone": "+61863232383",
"email": "",
"contactType": "customer service",
"areaServed": "worldwide",
"availableLanguage": ["en"]
},{
"@type": "PostalAddress",
"streetAddress": "1st Floor/25 Sturt
Street",
"addressLocality": "Townsville",
"addressRegion": "Townsville",
"addressCountry": "Australia",
"postalCode": "QLD 4810",
"telephone": "+61863232383",
"email": "",
"contactType": "customer service",
"areaServed": "worldwide",
"availableLanguage": ["en"]
},{
"@type": "PostalAddress",
"streetAddress": "283 – 287, Sir Donald
Bradman Drive",
"addressLocality": "Adelaide",
"addressRegion": "Brooklyn Park",
"addressCountry": "Australia",
"postalCode": "SA",
"telephone": "+61863232383",
"email": "",
"contactType": "customer service",
"areaServed": "worldwide",
"availableLanguage": ["en"]
},{
"@type": "PostalAddress",
"streetAddress": "6, Dick
Street",
"addressLocality": "Newcastle",
"addressRegion": "Newcastle West",
"addressCountry": "Australia",
"postalCode": "NSW",
"telephone": "+61399824474",
"email": "",
"contactType": "customer service",
"areaServed": "worldwide",
"availableLanguage": ["en"]
},{
"@type": "PostalAddress",
"streetAddress": "Level 1, 27-21 Myers
Street",
"addressLocality": "Geelong",
"addressRegion": "Geelong",
"addressCountry": "Australia",
"postalCode": "VIC",
"telephone": "+61399824474",
"email": "",
"contactType": "customer service",
"areaServed": "worldwide",
"availableLanguage": ["en"]
},{
"@type": "PostalAddress",
"streetAddress": "Shop 5, 29 Queensland
Avenue",
"addressLocality": "Gold Coast",
"addressRegion": "Broadbeach",
"addressCountry": "Australia",
"postalCode": "QLD 4218",
"telephone": "+61292207100",
"email": "",
"contactType": "customer service",
"areaServed": "worldwide",
"availableLanguage": ["en"]
},{
"@type": "PostalAddress",
"streetAddress": "Ground Floor, SmartSpace,
Enterprise 1, Innovation Campus,
Squires Way",
"addressLocality": "Wollongong",
"addressRegion": "North Wollongong",
"addressCountry": "Australia",
"postalCode": "NSW 2500",
"telephone": "+611300750599",
"email": "",
"contactType": "customer service",
"areaServed": "worldwide",
"availableLanguage": ["en"]
}
,{
"@type": "PostalAddress",
"telephone": "+61290437554",
"email": "",
"streetAddress": "Level 2/351 Oran
Park Dr",
"addressLocality": "Western Sydney",
"addressRegion": "Oran Park",
"addressCountry": "Australia",
"postalCode": "NSW 2570",
"contactType": "customer service",
"areaServed": "worldwide",
"availableLanguage": ["en"]
}],
"sameAs": [
"https://www.facebook.com/MackayGoodwinAU",
"https://twitter.com/GoodwinMackay",
"https://www.instagram.com/mackay.goodwin/",
"https://www.youtube.com/channel/UCG7SWnAcd3R7SLLXM-erfeQ",
"https://www.linkedin.com/authwall?trk=qf&original_referer=&sessionRedirect=https%
3A%2F%2Fau.linkedin.com%2Fcompany%2Fmackay-goodwin"
]
}`}}
        />
        
      </head>
      <body {...props.bodyAttributes}>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KX3F5L7"
height="0" width="0" style={{ "display": "none", "visibility": "hidden" }}></iframe></noscript>
        {props.preBodyComponents}

        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" crossOrigin="anonymous"></script>
        <script type="application/javascript" src="https://script.chatsystem.io/4cdc00125303779d3450f86e801f8dafbe95e0"></script>

        {/*tracking code*/}
        {/*<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/40112486.js"></script>*/}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
