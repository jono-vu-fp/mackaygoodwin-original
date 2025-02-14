module.exports = {
  siteMetadata: {
    title: `Corporate Restructuring, Advisory & Insolvency | Mackay Goodwin`,
    description: `Specialist restructure, turnaround and insolvency advisors. Registered administrators and liquidators with extensive experience in business recovery. Enquire now.`,
    author: `Mackay Goodwin`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://mackaygoodwin.com.au`,
      },
    },
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        useACF: true,
        url:
          `http://cms.mackaygoodwin.com.au/graphql`,
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 0
      }
    },
    `gatsby-transformer-sharp`,
    
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-force-trailing-slashes`,
    // `gatsby-plugin-no-index`
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: "GTM-PRCLGBS",
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-htaccess`,
  ],
}
