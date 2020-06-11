import React from "react"
import { graphql } from "gatsby"

export default function RecipeTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="recipe-container">
      <div className="recipe">
        <h1>{frontmatter.title}</h1>
				<a
          href={frontmatter.code}
        >
					View Code on GitHub
				</a>
        <div
          className="recipe-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

// For some reason, $path is not coming through correctly.
// I confirmed that the page renderes correctly when I hard code `eq: "babe-grandpa-node"` below
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
				code
				slug
      }
    }
  }
`
