import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import bitcoin from "./bitcoinscreenshot.jpg";
import bride from "./cookiepolicyscreenshot.jpg";
import tarot from "./tarot.jpg";

const Portfolio = () => (
  <Layout>
    <h1>Portfolio</h1>
    <p>
      A portfolio is an opportunity not just to show ability, but also
      demonstrate priorities. <br />
      What do I think are the key skills I need, and how can I show them?
      Naturally, I would love to show incredible skill as a full stack
      javascript developer, but - as is clear from the look of this site- visual
      design is not my priority.{" "}
    </p>
    <p>
      {" "}
      <em> I love the logic and design of systems</em>, and derive much more
      pleasure from working with them than I do from some gradient effect or
      whatever. User experience is, of course, very important, but I would
      always choose a quick site that's got clear navigation over something more
      asthetically appealling that makes me work to use it.
      <a href="https://en.wikipedia.org/wiki/Don't_Make_Me_Think">
        Don''t make me think
      </a>
      !
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
      <a href="mailto:willworthdev@gmail.com">Email me</a>.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Portfolio;
