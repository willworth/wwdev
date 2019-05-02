import React from "react";
import Header from "./header";
import Footer from "./footer";
import layoutStyles from "../styles/layout.module.scss";

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className={layoutStyles.container}>
        <Header />
        <div className={layoutStyles.content}>
         <div className={layoutStyles.main}>
          {children}
         </div>
          <Footer />
        </div>
      </div>
    );
  }
}s


export default Layout;
