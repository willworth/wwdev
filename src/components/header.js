import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const Header = () => (
<StaticQuery
  query={graphql`
    query HeadingQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `}
  render={data =>(

  <div className ="header" >
    <div  style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
        backgroundColor: "teal"
        
      }}
    >
      <h1  style={{ margin: 0 }}>
        <Link 
          to="/" className = "sitetitle"
          style={{
            color: "black",
            fontFamily: "monospace",
            textDecoration: "none",
            padding: "5px",
             letterSpacing: "1px"
          }}
        >
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <Link to="/">Home </Link> {}
        <Link to="/blog/">Blog</Link> {}
        <Link to="/portfolio/">Portfolio</Link> {}
        <Link to="/contact/">Contact</Link> {}
        <Link to="/espanol/">Español</Link>
      </nav>
    </div>
  </div>
  )}
/>
);

export default Header;
