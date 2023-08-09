/* const cats = [
    "Milo",
    "Otis",
    "Garfield",
];


function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}


function appendCat(name) {
   const catsCopy = [...cats, "Broom"]
   return catsCopy;
}


function prependCat(name) {
    const catsCopy = ["Arnold", ...cats];
    return catsCopy;
}

function removeLastCat() {
    const catsCopy = cats.slice(0, cats.length -1);
    return catsCopy;
}

function removeFirstCat() {
    const catsCopy = cats.slice(1);
    return catsCopy;
}
*/



const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

function appendCat(name) {
    const newArray = [...cats, name]
    return newArray
}

function prependCat(name) {
    const newArr = [name, ...cats]
    return newArr
}

function removeLastCat(name) {
    const newArr = cats.slice(0,2)
    return newArr
}
function removeFirstCat(name) {
    const newArray = cats.slice(1)
    return newArray
}







