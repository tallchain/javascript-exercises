const palindromes = function (word) {

let lowercase = word.toLowerCase()
let wordSplit = lowercase.split("");
let wordFiltered = wordSplit.filter(filterLetters);
let omegalul = wordFiltered.reduce((sum, current) => sum + current)
let wordReversed = wordFiltered.slice();
wordReversed.reverse();
let wordReversedReduce = wordReversed.reduce((sum, current) => sum + current)
return (omegalul == wordReversedReduce) ? true : false
}
    function filterLetters(letter) {
        if ( letter === "!" || letter === " " || letter === "." || letter === ",") {
        return false}
        else {return true}
    }
// Do not edit below this line
module.exports = palindromes;
