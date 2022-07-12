
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











// function squareSum(numbers){
//   let total = 0;
// for (const number of numbers) {
//   total += number * number;
// }
//   return total;
// }

// console.log(squareSum([1, 2]));


// function solution(str){
//   return str.split('').reverse().join('');

// }

// console.log(solution('world'));




// function countSheeps(arrayOfSheep) {
//   // TODO May the force be with you
//   let total = 0;
//   for (const sheep of arrayOfSheep) {
//     if (sheep === true) {
//       total += 1;
//     }

//   }
//    return total;

// }

// console.log(countSheeps([true, true, true, false,
//   true, true, true, true,
//   true, false, true, false,
//   true, false, false, true,
//   true, true, true, true,
//   false, false, true, true]));



//   function solution(str, ending){
//   // TODO: complete
  
//     return str.endsWith(ending);
//   }

// console.log(solution('abc', 'bc'));


// function highAndLow(numbers) {
  
//   const maxNums = Math.max(...numbers.split(' '));
//   const lowNums = Math.min(...numbers.split(' '));
  
//   return maxNums + ' ' + lowNums;
// }

// console.log(highAndLow("1 9 3 4 -5"));






// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];


// for (const product of products) {
//   console.log(product);
//   for (const key of Object.entries(product)) {
//     console.log(key);
//   }
// }














// function convertToInteger(str) {
// return parseInt(str, 2);
// }

// console.log(convertToInteger("1111110"));

// Only change code below this line


  
  



//Destructuring Assignment to Assign Variables from Arrays

// let a = 8, b = 6;
// // Only change code below this line

// [a, b] = [b, a];

// console.log(a, b);














// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//   // Only change code below this line
//   const [a, b, ...arr] = list;
//   console.log(a);
//   // const arr = list; // Change this line
//   // Only change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr);


// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// // Only change code below this line
// //const half = (stats) => (stats.max + stats.min) / 2.0;
// const half = ({max, min}) => (max + min) / 2.0; 
// // Only change code above this line
// console.log(half(stats));












// function quickCheck(arr, elem) {
//   // Only change code below this line
//   console.log(arr.indexOf(elem));
//   return arr.indexOf(elem) >= 0
//   ;
//   // Only change code above this line
// }

// console.log(quickCheck(["onions", "squash", "shallots"], "onions"));






// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   }
// };

// const invokeAction = function (action) {
//   console.log(action);
//   action();
// };

// invokeAction(user.showTag);

// let nestedArray =
// [
//   ['deep'],
//   [
//     ['deeper'], ['deeper'] 
//   ],
//   [
//     [
//       ['deepest'], ['deepest']
//     ],
//     [
//       [
//         ['deepest-est?']
//       ]
//     ]
//   ]
// ];

// console.log(nestedArray[2][1][0][0][0]);






//   function largestNum(array) {
//     return array.reduce((acc, num) => {
//         return acc > num ? acc : num;
//       });
//   };
//   console.log(largestNum([54, 43, 12, 88, 76, 2]));



function amountOfPages(summary){
    let result = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
      result += i;
      if (result.length === summary) {
        n = i;
        break;
      }
    }

    return n;
  }


  console.log(amountOfPages(17));