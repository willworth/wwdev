import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import will from "./bw.jpg" 


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="willworth.dev"
          keywords={[`willworth.dev`, `javascript`, `react`]}
        />
        
    <img  src={will} alt="Will" class="willpic"  />
        <h1>Hi!</h1>
  <blockquote>
    <p> <em> I'm a Javascript developer with some professional experience
       looking for my first full time position.</em></p>
    </blockquote> 

<p>Please have a look at my <Link to="/portfolio">portfolio</Link>, the <Link to="/blog">blog</Link>, or <Link to="/contact">get in touch</Link>.</p>

<p>Tambien hablo <Link to="/espanol">español</Link>.</p>
 <hr/>
<h4>More about Will</h4>
<p>   A big part of the appeal of coding is the chance to make something useful. <br/>

      {" "}
      <em> I love the logic and design of systems</em>, and derive much more
      pleasure from working with them than I do from the asthetics. User experience is, of course, very important, but I would
      always choose a quick site that's got clear navigation over something more
      asthetically appealling that makes me work to use it.
      <a href="https://en.wikipedia.org/wiki/Don't_Make_Me_Think">
        Don''t make me think
      </a>
      ! <br/>
      
    </p>

      </Layout>
    )
  }
}

export default BlogIndex

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
`
