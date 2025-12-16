function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;}

function isInt(n) {
if (n % 1 === 0) {
    return true
};
}

const sumAll = function(a,b) {
if (a < 0 || b < 0|| isInt(a) != true || isInt(b) != true) {
    return "ERROR"
}
let arr = [a, b];
arr.sort(compareNumeric);

let i = arr[0] + 1
while (i < arr[1]) {
    arr.push(i)
    i++
}
return arr.reduce((sum, current) => sum + current)
};

// Do not edit below this line
module.exports = sumAll;
