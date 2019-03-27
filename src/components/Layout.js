import React from "react"
// import { Link } from "gatsby"
import Header from "./header"
import './mainstyle.css'


class Layout extends React.Component {
  
  render() {
    const {  title, children } = this.props
    
     
    return (
      <div
      
    >
           <Header/>   
        
        <main style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        
      }}>{children}</main>
        
      </div>
    )
  }
}

export default Layout
