const marvalHeroes = ["iron man", "captain america", "black widow"];
// console.log(marvalHeroes);

const dcHeroes = ["batman", "joker"];
// console.log(dcHeroes[1]);

console.log("for of loop");
for (let hero of marvalHeroes) {
  console.log(hero);
}

console.log("for in loop");
for (let dc in dcHeroes) {
  console.log(dc);
}

console.log("simple For loop");
for (let i = 0; i < marvalHeroes.length; i++) {
  console.log(marvalHeroes[i]);
}

marvalHeroes.forEach((hero, i) => {
  console.log(hero, i);
});
