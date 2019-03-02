import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"


const Portfolio = () => (
  <Layout>
    <h1>Hi!</h1>
  <blockquote>
    <p>This page will hold my portfolio.</p>
    </blockquote>  
   
    
    <p><a href="mailto:willworthcoding@gmail.com">Send me an email</a> in the mean time.</p> 
    


    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Portfolio
