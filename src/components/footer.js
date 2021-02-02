import React from 'react';
// import { Link } from "gatsby"

// import Layout from "./layouts/layout"
// import SEO from "./layouts/seo"

import "./footer.css";

const Footer = () => (

  // <Layout>
  //   <SEO title="Page two" />
  //   <h1>Welcome to my footer</h1>
  //   <p>This is the footer page</p>
  //   <Link to="/">Go back to the homepage</Link>
  // </Layout>

  <footer>
    <div>
      Developed by Minh Nguyen © {new Date().getFullYear()}.
    </div>
  </footer>

);

export default Footer
