// // Longest word

// // function findLongestWord(string) {
// //   // Change code below this line
// //     const splitedString = string.split(' ');
// //     let longestWord = splitedString[0];
    
// //     console.log(longestWord.length);

// //     for (const word of splitedString) {
// //         if (word.length > longestWord.length) {
// //             longestWord = word;
// //         }
// //     }
    
// //     return longestWord;
// //   // Change code above this line
// // }

// // console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));






// // function findLongestWordLength(str) {
// //     let wordsArr = str.split(' ');
// //     let longestWord = wordsArr;
// //     for (let i = 0; i > longestWord.length; i += 1) {
// //       console.log(longestWord[i]);
// //     }
// //   }
  
// //   console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));







// // Array of numbers

// // function createArrayOfNumbers(min, max) {
// //   const numbers = [];
// //   // Change code below this line
// //     for (let i = min; i <= max; i += 1) {
// //         console.log(i);
// //     numbers.push(i);
// //   }
// //   // Change code above this line
// //   return numbers;
// // }

// // console.log(createArrayOfNumbers(14, 17)); //[14, 15, 16, 17]





// // Filtered array

// // function filterArray(numbers, value) {
// //    // Change code below this line
// //   const newArr = [];

// //   for (const number of numbers) {
// //       if (number > value) {
// //         newArr.push(number);
// //     }
    
// //   }

// // return newArr;
// //   // Change code above this line
// // }

// // console.log(filterArray([12, 24, 8, 41, 76], 38)); //[41, 76]






// // Get even numbers


// // function getEvenNumbers(start, end) {
// //    // Change code below this line
// //     const EvenNumber = [];
    
// //     for (let i = start; i <= end; i += 1) {
// //         if (i % 2 === 0) {
// //             EvenNumber.push(i);

// //         }
// //     }

// //     return EvenNumber;
// //     // Change code above this line
// // }
  
// // console.log(getEvenNumbers(6, 12)); //[6,8,10,12]





// // Includes


// // function includes(array, value) {
// //   // Change code below this line
// //    const valueToFind = value;
// //     let Boolean;
// //     for (const element of array) {
// //         if (element === value) {
// //             Boolean = element;
// //             console.log(element);
// //     }
// // }
// //     return Boolean === valueToFind;

// //   // Change code above this line
// // }
// // console.log(includes([1, 2, 3, 4, 5], 7));






// // Multiply arrays

// // function multiplyAll(arr) {
// //   let product = 1;
// // //   // Only change code below this line
// // // //   for (let i = 0; i < arr.length; i++) {
// // // //     for (let j = 0; j < arr[i].length; j++) {
// // // //       console.log(arr[i][j]);
// // // //     product *= arr[i][j];
// // // //   }
// // // // }
// //   for (const firstLoop of arr) {
// //     for (const secondloop of firstLoop) {
// //       console.log(secondloop);
// //       product *= secondloop;
// //     }
// //   }
// //   // Only change code above this line
// //   return product;
// // }

// // console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]])); // 1*2*3*4*5*6*7 = 5040




// //Recursion


// // function sum(arr, n) {
// //   // Only change code below this line
// // if (n <= 0) {
// //   return 0;
// // } else {
// //   return sum(arr, n - 1) + arr[n - 1];
// // }
// //   // Only change code above this line
// // }

// // console.log(sum([2, 3, 4, 5], 3)); //2+3+4 = 9


// // function multiply(arr, n) {
// //     if (n <= 0) {
// //       return 1;
// //     } else {
// //       return multiply(arr, n - 1) * arr[n - 1];
// //     }
// // }
  
// // console.log(multiply([2, 3, 4, 5], 3));// 2*3*4 = 24






// // Random


// // console.log(Math.floor(Math.random() * 10)); // от 0 до 10
// // console.log(Math.floor(Math.random() * 20));
// // console.log(Math.floor(Math.random() * 30));
// // console.log(Math.floor(Math.random() * 40));
// // console.log(Math.floor(Math.random() * 50));
// // console.log(Math.floor(Math.random() * 60));
// // console.log(Math.floor(Math.random() * 70));


// // function randomRange(myMin, myMax) {
// //   // Only change code below this line
// //   return Math.floor(Math.random()* (myMax - myMin + 1)) + myMin;
// //   // Only change code above this line
// // }
// // console.log(randomRange(1, 99));




// // // CountUp


// // function countup(n) {
// //     if (n < 1) {
// //       return [];
// //     } else {
// //       const countArray = countup(n - 1);
// //       countArray.push(n);
// //       return countArray;
// //     }
// //   }
// //   console.log(countup(5)); // [1, 2, 3, 4, 5]



// // //Countdown

// // function countdown(n){

// //     if (n < 1) {
// //       return [];
// //     } else {
// //       const countArray = countdown(n - 1);
// //     //   console.log(n);
// //       countArray.unshift(n);
// //       return countArray;
// //     }
// //   }
// //   // Only change code above this line
// //   console.log(countdown(4)); //[4, 3, 2, 1]
  
  


// //Range of numbers


// // function rangeOfNumbers(startNum, endNum) {
// //     if (endNum - startNum === 0) {
// //       return [startNum];
// //     } else {
// //       const numbersArr = rangeOfNumbers(startNum, endNum - 1);
// //       // console.log(numbersArr);
// //       numbersArr.push(endNum);
// //       return numbersArr;
// //     }
// //   }
    
  
  
// //   console.log(rangeOfNumbers(2, 6)); //[2, 3, 4, 5, 6]





// //Thermostat


// // // Only change code below this line
// // class Thermostat {
// //   constructor(fahrenheit) {
// //     this._fahrenheit = fahrenheit;
// //   }
// //   get temperature() {
// //     return (5/9 * (this._fahrenheit - 32));
// //   }
// //   set temperature(celsius) {
// //     this._fahrenheit = celsius * 9.0 / 5 + 32;
    
// //   }
// // }
// // // Only change code above this line

// // const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// // // console.log(thermos);
// // let temp = thermos.temperature; // 24.44 in Celsius
// // console.log(temp);
// // thermos.temperature = 26;
// // temp = thermos.temperature; // 26 in Celsius
// // // console.log(temp);








// // function descendingOrder(n) {
// //     const str = String(n).split('').sort((a, b) => b.localeCompare(a)).join('');
// //     console.log(str);
// //     const number = Number(str);
   
// //     return number;
// //   }
// //   console.log(descendingOrder(123456789));









// // /*Return Largest Numbers in Arrays
// // Return an array consisting of the largest number from each 
// // provided sub-array. For simplicity, the provided array will 
// // contain exactly 4 sub-arrays. */

// // function largestOfFour(arr) {
    
// // // // императивный подход
// // //     const results = [];
// // //   for (let i = 0; i < arr.length; i++) {
// // //     let largestNumber = arr[i][0];
// // //     for (let j = 1; j < arr[i].length; j++) {
// // //       if (arr[i][j] > largestNumber) {
// // //         largestNumber = arr[i][j];
// // //       }
// // //     }
// // //     results[i] = largestNumber;
// // //   }

// // //   return results;



// // // декларативный подход
  
// // return arr.map((el) => {
   
// //     return el.reduce((acc, num) => {
// //         return acc > num ? acc : num
// //     });
// //   });


  
// //   };
  
// //   console.log(largestOfFour([
// //     [4, 5, 1, 3], 
// //     [13, 27, 18, 26], 
// //     [32, 35, 37, 39], 
// //     [1000, 1001, 857, 1]
// // ])); // [5, 27, 39, 1001]





// // //EndsWith under the hood

// // function confirmEnding(str, target) {
// //     console.log(str.indexOf(target, str.length - target.length));
// //     return str.indexOf(target, str.length - target.length) !== -1;
// //   }
  
// //   confirmEnding("Bastian", "n");






// //   //str.repeat under the hood

// //   function repeatStringNumTimes(str, num) {
// //     let string = '';
// //     for (let i = 0; i < num; i += 1){
// //       string += str;
// //     }
// //     return string;
// //   }
  
// //   console.log(repeatStringNumTimes("abc", 3));






// //   // Truncate a String


// //   function truncateString(str, num) {
// //     let result;
// //      if (num < str.length) {
// //       result = str.slice(0, num) + "...";
// //     } else {
// //       result = str;
// //     }
// //     return result;
// //   }
  
// //   console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));







// //Finders Keepers

//   function findElement(arr, func) {
  
//     for (const el of arr) {
//       if (func(el)) {
//         return el;
//       }
//     };
//   }
  
//   console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));





// Title Case a Sentence


// function titleCase(str) {
//     return str.toLowerCase()
//     .split(' ')
//     .map((el) => el[0].toUpperCase() + el.slice(1))
//     .join(' ');
  
//   }
  
//   console.log(titleCase("I'm a little tea pot")); //I'm A Little Tea Pot
//   console.log(titleCase("sHoRt AnD sToUt")); //Short And Stout






// //Slice and Splice


// function frankenSplice(arr1, arr2, n) {
//     let resultingArr = [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
//     return resultingArr;
//   }
  
//   console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // [4, 1, 2, 3, 5, 6]
//   console.log(frankenSplice
//     (["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
//      //["head", "shoulders", "claw", "tentacle", "knees", "toes"]






//  // Falsy Bouncer
// //Remove all falsy values from an array.    

// function bouncer(arr) {
//     return arr.filter(value => !!value);
//   }
  
//   console.log(bouncer([7, "ate", "", false, 9])); //[7, "ate", 9]






// Where do I Belong




function getIndexToIns(arr, num) {

    return [...arr, num].sort((a,b) => a - b).indexOf(num);
  }
  
  console.log(getIndexToIns([10, 20, 30, 40, 50], 30));