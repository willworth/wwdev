import React from "react"
// import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"
// import './mainstyle.css'


class Layout extends React.Component {
  
  render() {
    const {   children } = this.props
    
     
    return (
      <div  className ="layout">
           <Header/>   
        
        <main className ="main" style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        
      }}>{children}</main>
        <Footer/>
      </div>
    )
  }
}

export default Layout
