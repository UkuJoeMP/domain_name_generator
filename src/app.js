/* eslint-disable */

//write your code here

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let SelectPronoun = 0; SelectPronoun < pronoun.length; SelectPronoun++) {
  for (let SelectAdj = 0; SelectAdj < adj.length; SelectAdj++) {
    for (let SelectNoun = 0; SelectNoun < noun.length; SelectNoun++) {
      console.log(
        pronoun[SelectPronoun] + adj[SelectAdj] + noun[SelectNoun] + ".com"
      );
    }
  }
}
