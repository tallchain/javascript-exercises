const repeatString = function(str, num) {
    let newstr = ""
    for (let i = 1; i <= num; i++) {
    newstr+= str
    }
    if (num < 0) {return "ERROR"}
return newstr
};

// Do not edit below this line
module.exports = repeatString;
