import React from "react";
import { Link } from "gatsby";

const Footer = () => (
  <div className ="footer"
    style={{
      // background: "#073541"
    
    }}
  >
    
      <h3 style={{
            paddingTop: "2rem",
            }}>
        <Link 
          to="/" 
          style={{
            color: "silver",
            textDecoration: "none",
            marginLeft: "70px",
             letterSpacing: "2px",
             fontFamily: "Righteous"
          }}
        >
          willworth.dev
        </Link>
      </h3>
      
    
  </div>
);

export default Footer;
