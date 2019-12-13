import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import will from "./will.jpg";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="willworth.dev"
          keywords={[`willworth.dev`, `javascript`, `react`]}
        />

        <img src={will} alt="Will" class="willpic" />
        <h2>Hi! </h2>

        <p>
          {" "}
          I'm Will- a Javascript (React / Node ) developer based in Alicante.
          <br /> <br /> I'm looking for ways to help, so{" "}
          <Link to="/contact">get in touch</Link> if you have a project you
          think I could help with.
        </p>

        <p>
          You can also see my <Link to="/portfolio">portfolio</Link>, or the{" "}
          <Link to="/blog">blog</Link>.
        </p>

        <p>
          Tambien hablo <Link to="/espanol">español</Link>.
        </p>
        <hr />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
