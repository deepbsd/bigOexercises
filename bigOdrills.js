// These are functions that I'm being asked to quantify as one or another type of bigO time complexity

const fnName = isPrime;


// Even or odd == 0(1) Constant time
function isEven(val){
  let value = val.length, ticks = 0;
  if (value % 2 == 0){
    return {
      ticks: ticks+1,
      result: true };
  }
  else
    return {
      ticks: ticks+1, 
      result: true};
}

function createRandArray(l){
  let arr = Array(l).fill(0).map(function(n){ return Math.round(Math.random()*100)} );
  return arr.sort();
}

// Are you here?
function areYouHere(arr1, arr2=createRandArray(arr1.length)) {
    let ticks = 0;
    for (let i=0; i<arr1.length; i++) {
        ticks++;
        const el1 = arr1[i];
        for (let j=0; j<arr2.length; j++) {
            ticks++;
            const el2 = arr2[j];
            if (el1 === el2) return { ticks: ticks, result: true};
        }
    }
    
    return {ticks: ticks, result: false};
}


function doubleArrayValues(array) {
    let ticks = 0;
    for (let i=0; i<array.length; i++) {
        ticks++;
        array[i] *= 2;
    }
    return { ticks: ticks, result: array};
}


function createRandNum(){
  return Math.round(Math.random()*100)
}

function naiveSearch(array, item=createRandNum()) {
    let ticks = 0;
    for (let i=0; i<array.length; i++) {
        ticks++;
        if (array[i] === item) {
            ticks++;
            return {ticks: ticks, result: i };
        }
    }
    return {ticks: ticks, result: false };
}



function createPairs(arr) {
    let ticks = 0, pairs = "";
    for (let i = 0; i < arr.length; i++) {
        ticks++;
        for(let j = i+1; j < arr.length; j++) {
            ticks++;
            //console.log(arr[i] + ", " +  arr[j] );
            pairs = pairs + arr[i] + ", " + arr[j];
        }
    }
    return { ticks: ticks, result: pairs}
}


function generateFib(array) {
  let num = array.length;
  let ticks = 0, result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      ticks++;
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      ticks++;
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      ticks++;
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return {ticks: ticks, result: result};
}


function efficientSearch(array, item=Math.round(Math.random()*array.length)) {
    let ticks = 0, result = null;
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            ticks++;
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            ticks++;
            maxIndex = currentIndex - 1;
        }
        else {
            ticks++;
            return {ticks: ticks, result: currentIndex};
        }
    }
    return {ticks: ticks, result: -1};
}

function findRandomElement(arr) {
    let ticks = 0, result = null;
    ticks++;
    return { ticks: ticks, result: arr[Math.floor(Math.random() * arr.length)] };
}


function isPrime(arr) {
    let ticks = 0, n = Math.round(Math.random()*1000);
    console.log("N: ",n);
    // if n is less than 2 or a decimal, it's not prime
    if (n < 2 || n % 1 != 0) {
        ticks++;
        return { ticks: ticks, result: false};
    }
    // otherwise, check if `n` is divisible by any integer
    // between 2 and n.
    for (let i = 2; i < n; ++i) {
        ticks++;
        if (n % i == 0) {
          return {ticks: ticks+1, result: false };
        }
    }
    ticks++;
    return { ticks: ticks, result: true };
}



function getRunTimeOperations(fn, input) {
  const {ticks, result} = fn(input);
  console.log(
    `With input of size ${input.length}, ${fn.name} ` +
    `clocked ${ticks} ticks to generate result of ${result}.`);
}

getRunTimeOperations(fnName, [1,2,3]);
getRunTimeOperations(fnName, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
getRunTimeOperations(fnName, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
getRunTimeOperations(fnName, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]);
