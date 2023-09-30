// Write your solution here!

let  cats =["Milo", "Otis", "Garfield"];

  function destructivelyAppendCat(cat){
cats.push(cat)
}

function destructivelyPrependCat(cat){

  cats.unshift(cat);
}

  function destructivelyRemoveLastCat(cat){

cats.pop(cat);

}
function destructivelyRemoveFirstCat(cat) {
  cats.shift(cat);
}

function appendCat(cat) {
  let newCatsArray = [...cats, cat];
  return newCatsArray;
}
function prependCat(cat) {
  let newCatsArray = [cat,...cats];
  return newCatsArray;
}

function removeLastCat() {
  let newCatsArray = [...cats];
  newCatsArray.pop();
  return newCatsArray;
}

// After I finished the tasks, I looked for other ways to solve it and found this
// function removeLastCat() {
//   const newCatsArray = cats.slice(0, -1);
//   return newCatsArray;
// }

function removeFirstCat() {
  const newCatsArray = cats.slice(1);
  return newCatsArray;
}
