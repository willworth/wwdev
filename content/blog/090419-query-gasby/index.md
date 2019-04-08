---
title: Queries in Gatsby
date: "2019-04-09"
---

*This post provides a brief, beginner-friendly introduction to APIs, contrasts them against GraphQL, and then gives an example of how to run queries in Gatsby.*

Gatsby- the static site generator for react with which this site is built- uses GraphqQL.



GraphQL is, per [wikipedia](https://en.wikipedia.org/wiki/GraphQL):

> ... *an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.*



So what does that mean and why should we care?

## Tradtional APIs

An [API](https://en.wikipedia.org/wiki/Application_programming_interface) is, simply, a way to connect to a program.  If a company wants to allow others to access its program, it makes a public API for people to connect to. (Of course, companies routinely have APIs for different programs within their organisations to communicate, too.)  Goodreads, a book based social network now owned by Amazon, has a traditional API.  [Here's the API listings page](https://www.goodreads.com/api).

If you look at those listings, you'll see that they are all different addresses - URLS.  These are called "endpoints" when talking about APIs. So just like accessing a normal website, different addresse (endpoints) provide you different things:
```
Get the reviews for a book given an ISBN:
https://www.goodreads.com/book/isbn/ISBN?format=FORMAT 
Show an owned book:
https://www.goodreads.com/owned_books/show/OWNED_BOOK_ID?format=xml
```

The key difference being that, unlike a normal webpage, these *endpoints* are for programs to access.  These things are great! You get access to all sorts of data that you can mash up in whatever way you want.  If you want to see some of the huge range of free publicly accessible APIs, checkout [programmableweb](https://www.programmableweb.com/) or [any api](https://any-api.com/).

As you'll see if you look at the (actually pretty well documented) page for goodreads's API, these things can get complicated, and it can be hard to know which endpoint is best.  Another drawback of this approach is a lack of flexibility in the query. Let's say you want a car's tyre size- you might have an end point about the wheels, but get a response with lots of other data you aren't interested in. 


## The GraphQL advantage

These two points- endpoint complexity and redundant data- are (to my understanding) the key reasons developers want to use GraphQL:

* It uses one, unified endpoint for everything
* You have complete flexibility in what you request, so there's no unnecessary additional transfer.



This makes things simpler and more efficient for developers. It seems to be becoming very popular very quickly.  I'm not an expert (at *all*), but if you want to learn more about GraphQL, [howtographql](https://www.howtographql.com/) seems like a good, free resource.


## Gatsby

So gatsby uses graphql to pull all your data in when it compiles its build.  This can be all sorts of data, coming from differnt places.  One important place it comes from is `gatsby-config`, which is one of the core files in a gatsby project- it's got all the plugin... *configuration* (as you might expect) and also contains metadata about the site.

So rather than hard coding the site title everywhere, for example, that's something that can be accessed via a query. Normally in [React](https://reactjs.org/), anything that's not hard coded needs to be passed down as props, which is a pain, as you can easily have components handling data they're not interested in.  My way of understanding all this is that it works like [styled components](https://www.styled-components.com/), in that everything is selfcontained.  So with my site name query example, you'd query for that data within the component which needs it, rather than passing it down however many levels.


```javascript
import React from "react";  
import { StaticQuery, graphql, Link } from "gatsby";  // remember if it's an internal within gatsby, use Link, not href.

const Header = () => (  //notice we have *not* passed in any props. Instead we use StaticQuery
<StaticQuery // StaticQuery does not accept variables (hence the name “static”), but can be used in any component, including pages.
  query={graphql`
    query HeadingQuery {
      site {
        siteMetadata { 
          title
        }
      }
    }
  `}   
  render={data =>(
  <div className ="header" >
      <h1>
        <Link to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
  </div>
  )}
/>
);

export default Header;

```
## Where did the query come from?

Obviously, this is a lot of trouble to go to just for the site title, but the same technique applies for other, more worthwile usecases.  The question is, *Where did the query come from?*

When you run `gatsby develop` , the gatsby cli shows you this:

```
View GraphiQL, an in-browser IDE, to explore your site's data and schema

http://localhost:8000/___graphql
```

which has a nice list of clickable links on the right for you to explore your schema.  I don't yet know enough to explain how it works properly (and this post is long enough), but the great thing about it is that you can check a query works in the interactive IDE, and then just copy it into your code, following the format above.

## Warning and conclusion

I am a beginner with GraphQL, and I may have missed out or misrepresented important details here.  Please let me know if you spot any problems, or want any clarifications.  I hope this was useful- good luck and keep coding!