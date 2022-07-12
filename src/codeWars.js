// function areYouPlayingBanjo(name) {
//   // Implement me
//   if (name.startsWith('R') || name.startsWith('r')) {
//     return `${name} plays banjo`;
//   }
//   return `${name} does not plays banjo`;
// }

// console.log(areYouPlayingBanjo('Rocky'));




//Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
//Test.assertEquals(SeriesSum(1), "1.00")
// Test.assertEquals(SeriesSum(2), "1.25")
// Test.assertEquals(SeriesSum(3), "1.39")
// Test.assertEquals(SeriesSum(4), "1.49")



// function SeriesSum(n)
// {
//   let result = 0;
//   for (i = 0; i < n; i++) {
//     // console.log(1+i*3);
//     result += 1/(1+i*3);
    
//   }
  
//   return result.toFixed(2);
// }

// console.log(SeriesSum(4));







// Mod256 without mod

// function mod256WithoutMod(number)
// {
//   // return number % 256;
//   if (number > 0) {
//     let q = Math.floor(number / 256);
//     return number - 256 * q;
// }
//   if (number < 0) {
//     let q = Math.ceil(number / 256);
//     return number - 256 * q;
// }
// }


// function mod256WithoutMod(number)
// {
//   if(number < 0)
//   {
//     return -mod256WithoutMod(-number);
//   }
//   console.log(number & 255);
//   return 14 & 9;
// }

// console.log(mod256WithoutMod(1));








// const str = 'CodeWars';

// const arr = str.match(/./g);
// let odd = [];
// let even = [];
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 0) {
//     odd.push(arr[i]);
//   } else {
//     even.push(arr[i]);
//   }
  
// }
// const joinedOdd = odd.join('');
// const joinedEven = even.join('');
// let allArr = `${joinedOdd} ${joinedEven}`;
// console.log(allArr);
// console.log(joinedEven);


// const sortMyString = str => {
//     let even = str.split('').filter((value, index) => index % 2 === 0).join('')
//     let odd = str.split('').filter((value, index) => index % 2 !== 0).join('')
//   return even + ' ' + odd;
// }
// console.log(sortMyString('CodeWars')); //CdWr oeas





function redistributeWealth(wealth) {
  if (wealth.every(el => el === wealth[0])) {
    void wealth;
  }
    const average = wealth.reduce((acc, value) => acc+value ,0)/wealth.length;
    return wealth.map(el => el = average);
  
  }

  console.log(redistributeWealth([5, 5, 5, 5, 5]));