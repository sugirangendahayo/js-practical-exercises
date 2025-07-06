
// For myMap method
Array.prototype.myMap = function(callbackFn){
    const result = [];

    for(let i = 0; i < this.length; i++){
        result.push(callbackFn(this[i], i, this));
    }

    return result;
}

const testmapArray = (array) =>{
    return array.myMap(num => num * 2);
}


// for myFilter method

Array.prototype.myFilter = function(callbackFn){
    const result = [];
   for(let i = 0; i < this.length; i++){
    if(callbackFn(this[i], i, this)){
        result.push(this[i])
    }
   }
   return result;
}   

const testfilterArray = (array) =>{
    return array.myFilter(num => num %2 !== 0);
}


// for myReducer method

Array.prototype.myReducer = function(callbackFn, initialValue){
    
    let accumulator = initialValue;
    let startIndex = 0;

    if(accumulator === undefined){
        if(this.length === 0){
            throw new TypeError(
              "Something went wrong here(Reduce of empty array with no initial value)"
            );
        }
     accumulator = this[0];
     startIndex = 1;
    }

    for(let i = startIndex; i< this.length; i++){
        accumulator = callbackFn(accumulator, this[i], i , this);
    }
    return accumulator;
}

const testReducer = (array)=>{
    return array.myReducer((acc, val)=> acc + val, 0);
}

//  for myForeach method 

Array.prototype.myForeach = function(callbackFn){
    for(let i=0; i < this.length; i++){
        callbackFn(this[i], i, this)
    }
}

const testForeach = (array) =>{
    array.myForeach((val, idx, array)=> console.log(`at index : ${idx} we have value: ${val} in the array ${array}\n`))
}



console.log("The custom mapped method of this array [1, 2, 3] is: ", testmapArray([1, 2, 3]));
console.log(
  "The custom filtered method of this array [10, 15, 20, 35, 40] is: ",
  testfilterArray([10, 15, 20, 35, 40])
);
console.log(
  "The custom reduced method of this array [1,2,3,4,5,6,7,8,9,10] is: ",
  testReducer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);
console.log(
  "The custom for each method of this array [1,2,3,4,5] is: ",
  testForeach([1, 2, 3, 4, 5])
);