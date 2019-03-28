---
title: Codewars Total Points 
date: "2019-03-28"
---
# Codewars Challenge:  "Total Points"

I'm going to blog coding exercises I do to document my learning, try to extract lessons, and pick up best practices.  This first example isn't very impressive, but it's the one I've done this morning, so it's where I'll start.  

## The challenge:

([View the challenge on codewars here](https://www.codewars.com/kata/total-amount-of-points/))

*Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.*

*For example: ["3:1", "2:2", "0:1", ...]*

*Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:*

    if x>y - 3 points
    if x<y - 0 point
    if x=y - 1 point*


---

## My initial thoughts:

So it's just iterating over an array, and a bit of simple control flow logic.  The only complication is that it's an array of strings.


## My quick and dirty solution:

```javascript
function points(games) {
let teamScore = 0;
for (i=0; i<games.length; i++) {
    let home = games[i].charAt(0);
    let away = games[i].charAt(2);
        console.log(`home is ${home}, away is ${away}`);  //just to be sure
    let homeInt = parseInt(home);
    let awayInt = parseInt(away);
    if (homeInt > awayInt){
         teamScore += 3;
        } 
    else if (homeInt == awayInt){
        teamScore += 1; 
        }
return teamScore;
}

```
The great thing about these challenges, especially for people teaching themselves to code, is that you can look at other people´s solutions.  

I knew before looking that most solutions would be using ES6, but I wanted to focus on the string conversion first and foremost here.



## Other solutions

I've been doing quite a lot of map functions with my react stuff, so this answer seems fairly intuitive to me:

```javascript
function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}
```

Others are impressively concise, but I'm keenly aware that intelligabilty is a key measure of code- especially if you're working on a team

```javascript
const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)
```

### Lessons learnt and areas for improvement

Arrays are basic, but each time I do one of these challenges I learn something.  For example, I immediately thought of parseInt, but looking at other solutions I found the Number constructor [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number). Seems pretty basic, but I've never seen it used like this before.  I obviously need more practice working with numbers in javascript.

In initial attempts, I tend not to combine methods, so as to keep what I'm doing clear, but I think it makes sense to simplify my above to parse the results directly to ints.  Of course, my solution isn't ES6, but I think/hope the below is clear to the reader:



### Final solution:

```javascript

function points(games) {

let teamScore = 0;
for (i=0; i<games.length; i++) {

let home = parseInt(games[i].charAt(0));
let away = parseInt(games[i].charAt(2));
if (home > away)
{  teamScore += 3;} 
else if (home == away)
{ teamScore += 1;} 

}
return teamScore;
}
```

