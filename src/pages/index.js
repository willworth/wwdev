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
        <blockquote>
          <p>
            {" "}
            <em>
              {" "}
              I'm a Javascript (React / Node ) developer with professional
              experience looking for a full time position.
            </em>
          </p>
        </blockquote>
        <p>
          {" "}
          <a
            href="https://tinyurl.com/espwwdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Descargar mi currículum (en español)
          </a>
          . <br /> <br />
          <a
            href="https://tinyurl.com/engwwdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download my c.v. (in English)
          </a>
          .
        </p>
        <p>
          Please have a look at my <Link to="/portfolio">portfolio</Link>, the{" "}
          <Link to="/blog">blog</Link>, or{" "}
          <Link to="/contact">get in touch</Link>.
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
