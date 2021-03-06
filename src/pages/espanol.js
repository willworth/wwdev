import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const Espanol = () => (
  <Layout>
    <h1>Hola!</h1>

    <p>
      {" "}
      Llevo casi 10 años estudiando español y me encanta. Vivo en España desde
      hace 7 años, enseñando inglés y ahora como informático. Este sitio web está solo en inglés por
      ahora, pero tengo una versión en español planeada.
    </p>

    <p>
     
      </p>
      <p>
      <a href="mailto:willworthdev@gmail.com">Envíame un correo</a> o me puedes
      encontrar aquí:
      <a
        href="https://www.linkedin.com/in/willworth/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        LinkedIn
      </a>{" "}
      o
      <a
        href="https://www.github.com/willworth/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Github
      </a>
      .
    </p>

    <Link to="/">Volver</Link>
  </Layout>
);

export default Espanol;
