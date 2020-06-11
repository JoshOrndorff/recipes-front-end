/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const RecipeTemplate = path.resolve(`src/templates/recipe-template.js`)

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		if (node.frontmatter.slug) {
	    createPage({
	      path: "/" + node.frontmatter.slug,
	      component: RecipeTemplate,
	      context: {
					slug: node.frontmatter.slug
				}, // additional data can be passed via context
	    })
		}
  })
}
