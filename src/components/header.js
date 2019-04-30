import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import headerStyles from "../styles/header.module.scss";

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
    render={data => (
      <div className={headerStyles.header}>
        <div className={headerStyles.headerInner}>
          <h1>
            <Link to="/" className={headerStyles.sitetitle}>
              {data.site.siteMetadata.title}
            </Link>
          </h1>
          <nav className={headerStyles.nav}>
            <Link className={headerStyles.navLinks} to="/">
              Home{" "}
            </Link>{" "}
            {}
            <Link className={headerStyles.navLinks} to="/blog/">
              Blog
            </Link>{" "}
            {}
            <Link className={headerStyles.navLinks} to="/portfolio/">
              Portfolio
            </Link>{" "}
            {}
            <Link className={headerStyles.navLinks} to="/contact/">
              Contact
            </Link>{" "}
            {}
            <Link className={headerStyles.navLinks} to="/espanol/">
              Español
            </Link>
          </nav>
        </div>
      </div>
    )}
  />
);

export default Header;
