module.exports = {
  siteMetadata: {
    title: `GoodsUmpire`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@rishabhbisht`,
    siteUrl: `https://nikartsgallery.com`,
  },
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
    FAST_DEV: true,
    FAST_REFRESH: true,
    LAZY_IMAGES: true,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-dark-mode`,
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },

    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "https://nikitaartsgallery.herokuapp.com",
        collectionTypes: [`painting`, `category`],
        singleTypes: [`global`, `homepage`],
        queryLimit: 2000,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/Buddha1.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
}
