import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const contact = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Welcome to my contact</h1>
    <p>This is the contact page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default contact
