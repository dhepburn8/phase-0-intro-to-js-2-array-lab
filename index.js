const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat() {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop(2)
}
function destructivelyRemoveFirstCat() {
    cats.shift(0)
}
function appendCat() {
    const Cats = cats.slice()
    Cats.push("Broom")
    return Cats
}
    function prependCat() {
        const Cats = cats.slice()
        Cats.unshift("Arnold")
        return Cats
    } 
    function removeLastCat(){
        const Cats = cats.slice();
        Cats.pop();
        return Cats;
    }
    function removeFirstCat(name){
        const Cats = cats.slice();
        Cats.shift(name);
        return Cats;
    }