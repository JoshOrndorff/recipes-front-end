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
    {
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-embed-snippet`,
						options: {}
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							// This tells prismjs about a new language called rs that extends rust.
							// It is necessary because the embed snippets are labelled after files extensions.
							languageExtensions: {
								language: 'rs',
								extend: 'rust',
								definition: {}
							},
							showLineNumbers: false, // to enable this, also enable the line in gatsby-browser.js
						}
					}
				]
			}
		},
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
