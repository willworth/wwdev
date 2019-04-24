import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import will from "./bw.jpg" 


const Contact = () => (
  <Layout>
   <h1>Hi!</h1>
  <blockquote>
     <em> I'm a Javascript developer with professional experience
       looking for a full time position.</em>
    </blockquote>  
    <img  src={will} alt="Will" class="willpic"  />
    <p>Most recently, I've been focusing on Javascript- with Node, Express, and React.
      My desire to improve these skills led me to choose Gatsby to build
      this site (though, frankly, I don't feel I'm fully leveraging the advantages of React, yet). </p>
      <p>For details of what I've been working on, please see my  <Link to="/portfolio">portfolio</Link>. </p>
      <p>Apart from the above, I've also worked with wordpress and PHP, and as a tester with a
       python stack on a large scale webscraping project. </p>

    <p> If you have something I may be able to help with
       (I'm open to opensource volunteer project work, too), please do get in touch.</p>
       <p>Tambien hablo <Link to="/espanol">español</Link>.</p>
    <p> 
    <a href="mailto:email@willworth.dev">Send me an email</a> or find me on 
    <a href ="https://www.linkedin.com/in/willworth/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> or 
    <a href ="https://www.github.com/willworth/" target="_blank" rel="noopener noreferrer"> Github</a>.</p> 
    


    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
