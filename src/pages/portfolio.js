import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import SEO from "../components/seo";

const Portfolio = props => (
  <Layout>
    <SEO title="Will Worth: Portfolio" />
    <h1>Portfolio</h1>
    <p>
      {" "}
      <a
        href="https://tinyurl.com/espwwdev"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Descargar mi currículum (download my c.v. in Spanish)
      </a>
      .
    </p>

    <p>
      <em>
        Please note: The Node examples are running on heroku's free tier, and
        therefore take a little time to start up. I think it's ok for a
        portfolio demo, but obviously not for production code.
      </em>
    </p>
    <hr />
    <div className="portfolioSummary">
      <h2>React conference viewer</h2>
      <h3>
        {" "}
        <a href="https://github.com/willworth/reactfrontendconferenceviewer">
          Code on github
        </a>{" "}
        <a href="https://trusting-kirch-fda3f9.netlify.com/">
          Demo (Deployed with Netlify)
        </a>
      </h3>
    </div>
    <Img
      fluid={props.data.confnew.childImageSharp.fluid}
      alt="conference app screenshot"
      class="portfolioPic"
    />
    <p>
      This is an update on the conference viewer below- it's now using state and
      props to allow you to create a shortlist.
    </p>
    <div className="portfolioSummary">
      <h2>Frontend Conferences</h2>
      <h3>
        {" "}
        <a href="https://github.com/willworth/conferences">API Code</a>{" "}
        <a href="https://github.com/willworth/conf">React frontend Code</a>{" "}
        <a href="https://willworth.github.io/conf/">
          Demo (API deployed on heroku/Frontend on Github pages)
        </a>
      </h3>
    </div>
    <Img
      fluid={props.data.conference.childImageSharp.fluid}
      alt="conference app screenshot"
      class="portfolioPic"
    />
    <p>
      I've put together a node backend API serving JSON of conferences. That's
      then being consumed by a React frontend, and dynamically laid out with CSS
      GRID.
    </p>
    <hr />
    <div className="portfolioSummary">
      <h2>APIplayground</h2>
      <h3>
        {" "}
        <a href="https://github.com/willworth/APIplayground">Code</a>{" "}
        <a href="https://wwdevapiplayground.herokuapp.com/">
          Demo deployed on heroku
        </a>
      </h3>
    </div>
    <Img
      fluid={props.data.bitcoin.childImageSharp.fluid}
      alt="songbook app screenshot"
      class="portfolioPic"
    />
    <p>
      This Node app is a demonstration of fetching data from a remote API. It
      uses ejs templating, promise-based requests, and is hosted on heroku.
    </p>
    <hr />
    <div className="portfolioSummary">
      <h2>Songbook (Node CRUD example)</h2>
      <h3>
        {" "}
        <a href="https://github.com/willworth/songbook">Code</a>{" "}
        <a href="https://wwdevsongbook.herokuapp.com/">
          Demo deployed on heroku
        </a>
      </h3>
    </div>
    <Img
      fluid={props.data.songbook.childImageSharp.fluid}
      alt="songbook app screenshot"
      class="portfolioPic"
    />
    <p>
      I built this app to practise the core CRUD actions, gain familiarity with
      MongoDB and use the MVC design pattern. I learnt a lot about
      authentication, using sessions cookies and password encryption.
    </p>
    <hr />
    <div className="portfolioSummary">
      <h2>Privacy Policy Notice</h2>
      <h3>
        {" "}
        <a href="https://www.bridemagazine.co.uk/">Live on the web</a>
      </h3>
    </div>
    <Img
      fluid={props.data.cookie.childImageSharp.fluid}
      alt="songbook app screenshot"
      class="portfolioPic"
    />
    <p>
      This example is a simple javascript overlay advising viewers about the
      site's privacy policy. It was deployed across{" "}
      <a href="https://www.archant.co.uk/">Archant Media</a>- which has hundreds
      of newspaper and magazine titles with (together){" "}
      <em> 7.6+ million visitors each month</em>. Although the code is trivial,
      I include it to show that I can integrate my work with existing codebases.
    </p>
    <hr />
    <div className="portfolioSummary">
      <h2>Tarot Card Reader</h2>
      <h3>
        {" "}
        <a href="https://github.com/willworth/tarot/">Code</a>{" "}
        <a href="https://willworth.github.io/tarot/">
          Demo deployed on github pages
        </a>
      </h3>
    </div>
    <Img
      fluid={props.data.tarot.childImageSharp.fluid}
      alt="songbook app screenshot"
      class="portfolioPic"
    />
    <p>
      Although I've been learning React, I wanted to have something showing
      direct DOM manipulation. This is essentially a random number generator
      which updates the source image. I'm using flexbox to position the cards.
    </p>
    <hr />
    <p>
      <a href="mailto:email@willworth.dev">Email me</a>
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Portfolio;

export const portfolioQuery = graphql`
  query {
    songbook: file(relativePath: { eq: "songbook.jpg" }) {
      ...fluidImage
    }
    bitcoin: file(relativePath: { eq: "bitcoinscreenshot.jpg" }) {
      ...fluidImage
    }
    conference: file(relativePath: { eq: "conferencescreenshot.jpg" }) {
      ...fluidImage
    }
    tarot: file(relativePath: { eq: "tarot.jpg" }) {
      ...fluidImage
    }
    cookie: file(relativePath: { eq: "cookiepolicyscreenshot.jpg" }) {
      ...fluidImage
    }
    confnew: file(relativePath: { eq: "confnew.png" }) {
      ...fluidImage
    }
  }
`;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
