/* eslint-disable */

//write your code here

let pronouns = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];

for (let pronoun of pronouns) {
  for (let adj of adjectives) {
    for (let noun of nouns) {
      console.log([pronoun + adj + noun] +".com"
      );
    }
  }
};
