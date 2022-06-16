// // let base = prompt('Введите число');
// // let power = prompt('Введите степень');

// // base = Number(base);
// // power = Number(power);

// // const result = base ** power;
// // console.log(result);


// // const max = 100;
// // const min = 1;
// // console.log(Math.round(Math.random() * (max - min) + min));


// // const min = 1;
// // const max = 10;
// // let total = 0;

// // for (let i = min; i <= max; i += 1) {
// //     if (i % 2 !== 0) {
// //         console.log('не четное: ', i);
// //         continue;
// //     }
// //     console.log('четное', i);
// //     total += i;
// // }

// // let count = 0;

// // function cc(card) {
// //   // Only change code below this line
// // switch (card) {
// //   case 2:
// //   case 3:
// //   case 4:
// //   case 5:
// //   case 6:
// //   count += 1;
// //   break;
// //   case 7:
// //   case 8:
// //   case 9:
// //   count;
// //   break;
// //   case 10:
// //   case "A":
// //   case "K":
// //   case "Q":
// //   case "J":
// //   count -= 1;
// //   break;
// // }
// //   if (count > 0) {
// //     return `${count} Bet`;
// //   } else {
// //     return `${count} Hold`;
// //   }

  
// //   // Only change code above this line
// // }
// // console.log(cc(2), cc(3), cc(7), cc('K'), cc('A'));
// // cc(2); cc(3); cc(7); cc('K'); cc('A');

// const myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"],
//     bark: "woof"
// };
// // delete myDog["bark"];
// // console.log(myDog);

// // Setup
// function phoneticLookup(val) {
//   let result = "";

//   // Only change code below this line
//   const lookup = {
//     alpha: "Adams",
//     bravo: "Boston",
//     charlie: "Chicago",
//     delta: "Denver",
//     echo: "Easy",
//     foxtrot: "Frank"
//   }

//   result = lookup[val];
  

//   // Only change code above this line
//   return result;
// }

// phoneticLookup("echo");
// // console.log(phoneticLookup('delta'));


// function checkObj(obj, checkProp) {
//   // Only change code below this line
//     if (obj.hasOwnProperty(checkProp)) {
//         // console.log(obj.hasOwnProperty(checkProp));
//     // console.log(obj[checkProp]);
//     return obj[checkProp];
//     } else {
//         // console.log("Not Found");
//       return "Not Found";
//   }
//   // Only change code above this line
// }

// // checkObj({
// //     gift: "pony",
// //     pet: "kitten",
// //     bed: "sleigh"
// // },
// //     "bed");




// //     console.log(checkObj({
// //     gift: "pony",
// //     pet: "kitten",
// //     bed: "sleigh"
// // },
// //     "bed"));


// //     function solution(str){
// //         console.log(str.split(/(.{2})/).filter(O=>O));

// //     }

// // solution('abcde');




// function slugify(title) {
//   // Change code below this line
//     let slug = title.toLowerCase().replaceAll(" ", "-");
// ;
// //   return slug;
//   console.log(slug);

//   // Change code above this line
// }   

// slugify('Ten secrets of JavaScript');


// function isAdult(age) {


//     if (age >= 18) {
//         return passed;
//     }
// }
// console.log(passed);
// isAdult(5);


// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     const totalArr = firstArray.concat(secondArray);
//     console.log(totalArr);
//     if (maxLength < totalArr.length) {
    
//     return totalArr.slice(0, maxLength);
// }
// return totalArr;

//     // Change code above this line
// }
  
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));


// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//     for (let i = 0; i < order.length; i += 1) {
      
//         total += order[i];
//         console.log(i);
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function findLongestWord(string) {
//   // Change code below this line
//     const splitedString = string.split(' ');
//     let longestWord = splitedString[0];
    
//     console.log(longestWord.length);

//     for (const word of splitedString) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
    
//     return longestWord;
//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));



// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//     for (let i = min; i <= max; i += 1) {
//         console.log(i);
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(14, 17)); 


// function filterArray(numbers, value) {
//    // Change code below this line
//   const newArr = [];

//   for (const number of numbers) {
//       if (number > value) {
//         newArr.push(number);
//     }
    
//   }

// return newArr;
//   // Change code above this line
// }

// console.log(filterArray([12, 24, 8, 41, 76], 38));




// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
  
//     for (const element of order) {
//         console.log(element);
//     total += element;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function getEvenNumbers(start, end) {
//    // Change code below this line
//     const EvenNumber = [];
    
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             EvenNumber.push(i);

//         }
//     }

//     return EvenNumber;
//     // Change code above this line
// }
  
// console.log(getEvenNumbers(6, 12));


// function includes(array, value) {
//   // Change code below this line
//    const valueToFind = value;
//     let Boolean;
//     for (const element of array) {
//         if (element === value) {
//             Boolean = element;
//             console.log(element);
//     }
// }
//     return Boolean === valueToFind;

//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 7));


// function ifTwtWillCost(ifCource) {
//     const myMoney = 200;
//     const twt = 0.6;

//     let myTWT = myMoney / twt;
//     console.log(`${myTWT.toFixed(2)} TWT I can buy on ${myMoney} USD`);

//     const sum = myTWT * ifCource;
//     const myEarn = sum - myMoney;
    
//     console.log(`${sum.toFixed(2)} USD I will have if TWT will rise to ${ifCource} USD`);
//     console.log(`I will earn ${myEarn.toFixed(2)} USD`);
//     return sum;
// }

// ifTwtWillCost(1.13);



// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (records[id]) {
    records[id][prop] = [value];
  }
  console.log(records);
}

updateRecords(recordCollection, 5439, 'tracks', 'gemme');
