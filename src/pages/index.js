import React from "react";
import Cover from "../components/cover";
import Navigation from "../components/navigation";
import Profile from "../components/profile";
import Projects from "../components/projects";
import Contacts from "../components/contacts";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import favicon from "../static/favicon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";



const IndexPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const metaDescr = data.site.siteMetadata.description;
  const { edges: projectImgData } = data.ProjectImgs;
  const { edges: hobbyImgData } = data.HobbyImgs;
  return (
    <div>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={metaDescr} />
        <link rel="icon" type="/image/png" href={favicon} />
      </Helmet>
      <Cover coverImg={data.coverImg} />
      <div className="container-fluid main">
        <Navigation />
        <Profile profileImg={data.profileImg} hobbyImgs={hobbyImgData} />
        <Projects projectImgs={projectImgData} />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
};

export default IndexPage;


export const query = graphql`
  query allImgsQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    coverImg: imageSharp(id: { regex: "/fullstack/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }

    profileImg: imageSharp(id: { regex: "/minh/" }) {
      sizes(maxWidth: 420, maxHeight: 630) {
        ...GatsbyImageSharpSizes
      }
    }

    ProjectImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 320) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    HobbyImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/icons/.*.png/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 40) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
