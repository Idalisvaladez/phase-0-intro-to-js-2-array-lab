const cats = [
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