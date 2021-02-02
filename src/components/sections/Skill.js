import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const skill = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Welcome to my skill</h1>
    <p>This is the skill page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default skill
