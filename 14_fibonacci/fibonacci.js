const fibonacci = function(b) {
if (b < 0) {return "OOPS"}
let array = [0, 1]
let i = 1
while (i <= +b) {
    let j = array.at(i) + array.at(i-1)
    array.push(j)
    i++}
return array.at(b)
};

// Do not edit below this line
module.exports = fibonacci;
