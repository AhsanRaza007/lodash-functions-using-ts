
//chunk()
function myChunk(array:Array<any>, size:number){
    let newArray: Array<any> = [];
    
    let c: number = 0;
    let i: number = 0;
    while(i < array.length){
        let tempArr: Array<any> = [];

        while(c<i+size){
            if(array[c] != undefined)
                tempArr.push(array[c]);
            c++;
        }
        i=i+size;
        newArray.push(tempArr)
    }

    return newArray;
}
//reduce()
function reduce(array:Array<number>, cb:Function, accumulator:number){
    let result:number = accumulator;
    for(let i=0; i<array.length; i++){
        result = cb(result, array[i]);
    }
    return result;
}


//filter
function filter(array:Array<number>, predicate:Function){
    let newArray:Array<number> = [];
    for(let i=0; i<array.length; i++){
        predicate(array[i], i) && newArray.push(array[i]);
    }
    return newArray;
}


//find
function find(collection:Array<number>, predicate:Function){
    for(let i=0; i<collection.length; i++){
        if(predicate(collection[i], i)){
            return collection[i];
        }
    }
    return null;
}

//sum
function sum(array:Array<number>){
    let sum:number = 0;
    array.forEach(element => {
        sum = sum + element;
    });
    return sum;
}


//driver
console.log("sum() sum of array[4, 2, 8, 6] : sum = ", sum([4, 2, 8, 6]) )


console.log("find() odd number : first odd number = ", find([2, 4, 6, 8, 9, 10, 99], (num, index)=>{
    return num%2 != 0;
}));


console.log("filter() number > 5 : Filtered Array = ", filter([1, 10, 13, 3, 2, 4, 9], (num, index)=>{
    return num > 5;
}));


console.log("reduce() sum of array[1, 2, 3, 4, 5] : reduced = ", reduce([1, 2, 3, 4, 5], (sum, curr)=>{
    return sum + curr;
}, 0));

console.log("chunk([1, 2, 3, 4, 5], 2)): New Array = ", myChunk([1, 2, 3, 4, 5], 2));