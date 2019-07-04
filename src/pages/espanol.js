import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const Espanol = () => (
  <Layout>
    <h1>Hola!</h1>

    <p>
      {" "}
      Llevo casi 10 años estudiando español y me encanta. Vivo en España desde
      hace 5 años, enseñando inglés. Este sitio web está solo en inglés por
      ahora, pero tengo una versión en español planeada.
    </p>

    <p>
      <p>
        {" "}
        <a
          href="https://tinyurl.com/espwwdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Descargar mi currículum (en español)
        </a>
        . <br /> <br />
        <a
          href="https://tinyurl.com/engwwdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download my c.v. (in English)
        </a>
        .
      </p>
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
