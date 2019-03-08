import React from "react";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: "#008B8B",
      marginBottom: "1.45rem",
      minHeight: "10vh"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
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
          willworth.dev
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
);

export default Header;
