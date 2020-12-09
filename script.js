//chunk()
function myChunk(array, size) {
    var newArray = [];
    var c = 0;
    var i = 0;
    while (i < array.length) {
        var tempArr = [];
        while (c < i + size) {
            if (array[c] != undefined)
                tempArr.push(array[c]);
            c++;
        }
        i = i + size;
        newArray.push(tempArr);
    }
    return newArray;
}
//reduce()
function reduce(array, cb, accumulator) {
    var result = accumulator;
    for (var i = 0; i < array.length; i++) {
        result = cb(result, array[i]);
    }
    return result;
}
//filter
function filter(array, predicate) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        predicate(array[i], i) && newArray.push(array[i]);
    }
    return newArray;
}
//find
function find(collection, predicate) {
    for (var i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i)) {
            return collection[i];
        }
    }
    return null;
}
//sum
function sum(array) {
    var sum = 0;
    array.forEach(function (element) {
        sum = sum + element;
    });
    return sum;
}
//driver
console.log("sum() sum of array[4, 2, 8, 6] : sum = ", sum([4, 2, 8, 6]));
console.log("find() odd number : first odd number = ", find([2, 4, 6, 8, 9, 10, 99], function (num, index) {
    return num % 2 != 0;
}));
console.log("filter() number > 5 : Filtered Array = ", filter([1, 10, 13, 3, 2, 4, 9], function (num, index) {
    return num > 5;
}));
console.log("reduce() sum of array[1, 2, 3, 4, 5] : reduced = ", reduce([1, 2, 3, 4, 5], function (sum, curr) {
    return sum + curr;
}, 0));
console.log("chunk([1, 2, 3, 4, 5], 2)): New Array = ", myChunk([1, 2, 3, 4, 5], 2));
