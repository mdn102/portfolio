module.exports = {
  siteMetadata: {
    title: `Minh Nguyen || Portfolio`,
    description: `A portfolio shows my skills with Gatsby.`,
    author: `minh nguyen`,
    siteUrl: "https://minhdnguyen.web.app/",
    keywords: 'javascript, react, gatsby, firebase '
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-54516992-1",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://minhdnguyen.web.app`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    // {
    //   resolve: 'gatsby-plugin-page-progress',
    //   options: {
    //     height: 3,
    //     prependToBody: false,
    //     excludePaths: ['/contact', '/blog'],
    //     color: `#d86a7e`,
    //   }
    // },
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       "gatsby-remark-relative-images",
    //       `gatsby-remark-lazy-load`,
    //       `gatsby-remark-copy-linked-files`,
    //       `gatsby-remark-vscode`,
    //       `gatsby-remark-responsive-iframe`,
    //       {
    //         resolve: 'gatsby-remark-external-links',
    //         options: {
    //           target: '_blank',
    //           rel: 'noreferrer',
    //         }
    //       },
    //       {
    //         resolve: "gatsby-remark-images",
    //         options: {
    //           maxWidth: 900
    //         }
    //       }
    //     ],
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src`,
        name: 'src',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Minh Nguyen`,
        short_name: `minh`,
        start_url: `/`,
        background_color: `#4c8bf5`,
        theme_color: `#4c8bf5`,
        display: `fullscreen`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    'gatsby-plugin-robots-txt',
  ],
}
