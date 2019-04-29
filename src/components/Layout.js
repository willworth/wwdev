import React from "react"
// import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"
// import './mainstyle.css'
import layoutStyles from "../styles/layout.module.scss"


class Layout extends React.Component {
  
  render() {
    const {   children } = this.props
    
     
    return (
      <div  className ={layoutStyles.layout}>
           <Header/>   
        
        <main className ={layoutStyles.main}>{children}</main>
        <Footer/>
      </div>
    )
  }
}

export default Layout
