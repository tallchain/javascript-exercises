const removeFromArray = function(arr, ...remove) {
    for (item of remove) {
        while (arr.includes(item)) {
        let i = arr.indexOf(item)
        arr.splice(i,1)}
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
