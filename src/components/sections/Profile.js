import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const profile = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Welcome to my profile</h1>
    <p>This is the profile page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default profile
