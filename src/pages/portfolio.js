import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import bitcoin from "./bitcoinscreenshot.jpg";
import bride from "./cookiepolicyscreenshot.jpg";
import tarot from "./tarot.jpg";
import songbook from "./songbook.jpg";
import conf from "./conf.jpg";


const Portfolio = () => (
  <Layout>
    <h1>Portfolio</h1>
    <p>
      A portfolio is an opportunity not just to show ability, but also
      demonstrate priorities. <br />
      My goal is a job as a fullstack javascript developer. <br /> 
      Trying to provide examples of the skils I think I need, below are examples of
 a CRUD app, an API calling app, some simple DOM manipulation, modern CSS, and some React 
(of which, more soon.)  I'm planning to blog about approaches and lessons learnt...{" "}
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
      <h2>Frontend Conferences</h2>
      <h3>
        {" "}
        <a href="https://github.com/willworth/conferences">API Code</a>.{" "}
        <a href="https://github.com/willworth/conf">React frontend Code</a>.{" "}
        <a href="https://willworth.github.io/conf/">
          Demo (API deployed on heroku/Frontend on Github pages)
        </a>
        .
      </h3>
    </div>
    <img src={conf} alt="conferences app screenshot" class="portfolioPic" />
    <p>
      I've put together a node backend API serving JSON of conferences.  That's then being consumed by a React frontend, and dynamically laid out with CSS GRID.
    </p>
    <hr />
    <div className="portfolioSummary">
      <h2>APIplayground</h2>
      <h3>
        {" "}
        <a href="https://github.com/willworth/APIplayground">Code</a>.{" "}
        <a href="https://wwdevapiplayground.herokuapp.com/">
          Demo deployed on heroku
        </a>
        .
      </h3>
    </div>
    <img src={bitcoin} alt="Bitcoin app screenshot" class="portfolioPic" />
    <p>
      This Node app is a demonstration of fetching data from a remote API. It
      uses ejs templating, promise-based requests, and is hosted on heroku.
    </p>
    <hr />
    <div className="portfolioSummary">
      <h2>Songbook (Node CRUD example)</h2>
      <h3>
        {" "}
        <a href="https://github.com/willworth/songbook">Code</a>.{" "}
        <a href="https://wwdevsongbook.herokuapp.com/">
          Demo deployed on heroku
        </a>
        .
      </h3>
    </div>
    <img src={songbook} alt="songbook app screenshot" class="portfolioPic" />
    <p>
      I built this app to practise the core CRUD actions, gain familiarity with MongoDB and use the MVC design pattern.
      I learnt a lot about authentication, using sessions cookies and password encryption.
    </p>
    <hr />
    <div className="portfolioSummary">
      <h2>Privacy Policy Notice</h2>
      <h3>
        {" "}
        <a href="https://www.bridemagazine.co.uk/">Live on the web</a>.
      </h3>
    </div>
    <img src={bride} alt="Bride site screenshot" class="portfolioPic" />
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
        <a href="https://github.com/willworth/tarot/">Code</a>.{" "}
        <a href="https://willworth.github.io/tarot/">
          Demo deployed on github pages
        </a>
        .
      </h3>
    </div>
    <img src={tarot} alt="Bitcoin app screenshot" class="portfolioPic" />
    <p>
      Although I've been learning React, I wanted to have something showing
      direct DOM manipulation. This is essentially a random number generator
      which updates the source image.  I'm using flexbox to position the cards.
    </p>
    <hr />
    <p>
      <a href="mailto:email@willworth.dev">Email me</a>.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Portfolio;
