import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const JoshyPage = () => (
  <Layout>
    <SEO title="Joshy's Page" />
    <h1>This page was made by Joshy</h1>
    <p>It has a paragraph</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default JoshyPage
