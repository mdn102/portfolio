import React from 'react'
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../layouts/seo"

// import "../../styles/App.css";
// import "../../styles/index.css";
import BlogCarousel from './BlogCarousel';


const blog = () => (
  // <Layout>
  //   <SEO title="Page two" />
  //   <h1>Welcome to my blog</h1>
  //   <p>This is the blog page</p>
  //   <Link to="/">Go back to the homepage</Link>
  // </Layout>

  return (
  <div className='homePage projectHome'>
    <div style={{ padding: '10px', justify_content: 'center', align_item: 'center' }}>
      <h4>Here are my recently challenges: </h4>
    </div>
    <BlogCarousel />
  </div>
);
);

export default blog;
