import React from "react";
import { Link } from "gatsby";

const Footer = () => (
  <div className ="footer"
    style={{
      background: "#073541",
    //   marginBottom: "1.45rem",
      minHeight: "10vh"
    }}
  >
    
      <h3 style={{ margin: 0 }}>
        <Link 
          to="/" 
          style={{
            color: "#3a9bfb",
            textDecoration: "none",
            marginLeft: "60px",
             letterSpacing: "2px",
             fontFamily: "monospace"
          }}
        >
          willworth.dev
        </Link>
      </h3>
      
    
  </div>
);

export default Footer;
