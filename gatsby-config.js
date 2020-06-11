module.exports = {
  siteMetadata: {
    title: `Substrate Recipes`,
    description: `A Hands-On Cookbook for Aspiring Blockchain Chefs`,
    author: `Joshy Orndorff`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `local-markdown`,
    //     path: `${__dirname}/src/local-markdown`,
    //   },
    // },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `main-recipes-content`,
        remote: `https://github.com/substrate-developer-hub/recipes.git`,
        branch: `alt-front-end`,
        // Only import the docs folder from a codebase.
        patterns: [`text/**/*.md`]
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
