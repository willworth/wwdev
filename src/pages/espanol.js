import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"


const Espanol = () => (
  <Layout>
   <h1>Hola!</h1>
  
    <p> Llevo casi 10 años estudiando español, y me encanta.  He estado en españa más que 5 años, enseñando inglés.
        Este sitio web esta solo en inglés por ahora, pero tengo una version española planeada.</p>

    <p> 
    <a href="mailto:willworthcoding@gmail.com">Enviame un correo</a> o me puedes encontrar aqui: 
    <a href ="https://www.linkedin.com/in/willworth/"> LinkedIn</a> or 
    <a href ="https://www.github.com/willworth/"> Github</a>.</p> 
    
    <Link to="/">Volver</Link>
  </Layout>
)

export default Espanol
