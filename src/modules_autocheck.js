// // Module 1 Task 28

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   switch (password) { 
//     case null:
//       message = "Canceled by user!";
//       break;
//     case "jqueryismyjam": 
//       message = "Welcome!"; 
//       break;
//       default:
//       message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// }

// console.log(checkPassword('jqueryismyjam'));
// console.log(checkPassword('fnggldnf'));






// // Module 1 Task 29


// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch(country) {
//     case "China":
//     message = `Shipping to China will cost 100 credits`;
//     break;
    
//     case "Chile":
//     message = `Shipping to Chile will cost 250 credits`;
//     break;

//     case "Australia":
//     message = `Shipping to Australia will cost 170 credits`;
//     break;

//     case "Jamaica":
//     message = `Shipping to Jamaica will cost 120 credits`;
//     break;

//     default:
//     message = "Sorry, there is no delivery to your country"
//   }
//   // Change code above this line
//   return message;
// }

// console.log(getShippingCost("China"));





// // Module 1 Task 33


// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (maxLength < message.length) {
//     result = message.slice(0, maxLength) + "...";
//   } else {
//     result = message;
//   }
//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // Curabitur ligula...
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));  //  Vestibulum facilisis...




// // Module 2 Task 11 


// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
 

//  return message.split(" ").length * pricePerWord;


//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); //100




// // Module 2 Task 13

// function slugify(title) {
//   // Change code below this line

// return title.split(' ').join("-").toLowerCase();


//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers")); // arrays-for-begginers


// // Module 2 Task 16



// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// const totalArr = firstArray.concat(secondArray);
// if (maxLength < totalArr.length) {
//   return totalArr.slice(0, maxLength);
// }
// return totalArr;

//     // Change code above this line
// }
  

// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));



// //Module 2 Task 21



// function findLongestWord(string) {
//   // Change code below this line
//     const splitedString = string.split(' ');
//     let longestWord = splitedString[0];
    
//     // console.log(longestWord.length);

//     for (const word of splitedString) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
    
//     return longestWord;
//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // jumped
// console.log(findLongestWord("Google do a roll")); // Google


// // Module 2 Task 25


// function getCommonElements(array1, array2) {
//   // Change code below this line
// const uniqElement = [];

// for (const element of array1) {
//   if (array2.includes(element)) {
//     uniqElement.push(element);
//   }
// }

// return uniqElement;
//  // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]



// // Module 2 Task 29

// function getEvenNumbers(start, end) {
//    // Change code below this line

//    const EvenNumber = [];
    
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             EvenNumber.push(i);

//         }
//     }

//     return EvenNumber;

//     // Change code above this line
// }
  
// console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]



// // Module 2 Task 32

// function includes(array, value) {
//   // Change code below this line
//     let needToFind;
//     for (const element of array) {
//         if (element === value) {
//             needToFind = element;
//             // console.log(element);
//     }
// }
//     return needToFind === value;
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3)); //true
// console.log(includes([1, 2, 3, 4, 5], 17)); //false
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")); // true


// //Module 3 Task 7


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston"
// };

// console.log(apartment);


//Module 3 Task 10

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   console.log(key);
//   keys.push(key);
//   console.log(apartment[key]);
//   values.push(apartment[key]);
// };

// console.log(keys, values);



//Module 3 Task 12

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   propCount = Object.entries(object).length;
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));




//Module 3 Task 13

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const apartProps = Object.values(apartment);
// const keys = Object.keys(apartment);
// for (const value of apartProps) {
//   // console.table(keys);
//   values.push(value);

// }





//Module 3 Task 14


// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   for (const key of Object.keys(object)) {
   
//       propCount += 1;
    
//   }

//   // propCount = Object.keys(object).length; // этот вариант мне больше нравится

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ }));



//Module 3 Task 16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   for (const value of Object.values(salaries)) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));


//Module 3 Task 17


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line


// for (const value of colors) {
//   hexColors.push(value.hex);
//   rgbColors.push(value.rgb);
// }


// console.log(hexColors);
// console.log(rgbColors);






//Module 3 Task 18

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   let productPrice = null;

//   for (const product of products) {
//     // console.log(product.price);
//     if (product.name === productName) {
//       console.log(product.price);
//       productPrice = product.price;
//       return productPrice;
//     } 
//   }
//   return productPrice = null;
  

//   // Change code above this line
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("ds"));






//Module 3 Task 19


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const propValuesArray = [];

//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//         propValuesArray.push(product[propName]);
//     }
//   }

//   return propValuesArray;

//   // Change code above this line
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("category"));





//Module 3 Task 20


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
  
  

//   for (const product of products) {
//     const { name, price, quantity } = product;
//     if (name === productName) {
//       totalPrice = price * quantity;
//     }
//   }
//   return totalPrice;


//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Radar"));



//Module 3 Task 25


// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//   tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast;
// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// console.log(highToday);

//Module 3 Task 30


// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const defaultObject = {
//     completed,
//     category,
//     priority,
//   };
//   // const objectFromArgument = data;
//   // console.log(newObject);
//   const newObject = {...defaultObject, ...data };
//   return newObject;
//   // Change code above this line
// }
//   // console.log(newObject);

// // console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));



//Module 3 Task 31



// // Change code below this line
// function add(...args) {
//   const argsOfArray = args;
//   let total = 0;
//   console.log(argsOfArray);
//   for (const arg of argsOfArray) {
//     total += arg;
    
//   }
//   return total;
//   // return total += ...argsOfArray;
//   // Change code above this line
// }
// console.log(add(15, 27));


//Module 3 Task 32


// // Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (firstNumber < arg) {
//       total += arg;
//     }
  
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(50, 12, 4, 11, 48, 10, 8));



//Module 3 Task 33

// // Change code below this line
// function findMatches(array1, ...rest) {
//   const matches = []; // Don't change this line

// for (const element of rest) {
//   if (array1.includes(element)) {
//     matches.push(element);
//   }
//   }
//   // Change code above this line
//   return matches;
// }


// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));






//Module 3 Task 35



// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     const bookIndex = this.books.indexOf(oldName);
//     console.log(bookIndex);
//     this.books.splice(bookIndex, 1, newName);

//     // Change code above this line
//   },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// console.log(bookShelf);



//Module 3 Task 41\41














// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   addPotion(newPotion) {

//     const { potions } = this;

//     for (const element of potions) {
//       if (element.name === newPotion.name) {
    
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//       }
//           this.potions.push(newPotion);

//     }
    
//   },
//   removePotion(potionName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
     
//       if (potions[i].name === potionName) { 
//         console.log(potionName);
//         potions.splice(i, 1);
//         return potions;
//       } 
//     }
//     return `Potion ${potionName} is not in inventory!`;
      
//   },

//   updatePotionName(oldName, newName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === oldName) {
//         potions[i].name = newName;
//         return potions[i].name;
//       }
      
//     }
//       return `Potion ${oldName} is not in inventory!`;
//   },
// };




// atTheOldToad.addPotion({ name: "Speed potion", price: 460 });
// // console.log(atTheOldToad.potions);
// // atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.potions);


//Module 4 Task2


// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
  
//   return callback(pizzaName);
// }

// console.log(makeMessage("Ultracheese", deliverPizza));


//Module4 Task 3


// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     const { pizzas } = pizzaPalace;
    
//     if (pizzas.includes(pizzaName)) {
//      return makePizza(pizzaName);
//     }
//     const error = `There is no pizza with a name ${pizzaName} in the assortment.`;
//     return onError(error);
    
   
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// pizzaPalace.order('Vienna', makePizza, onOrderError);


//Module 4 Task 13


// function changeEven(numbers, value) {
  // // Change code below this line
  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] % 2 === 0) {
  //     numbers[i] = numbers[i] + value;
  //   }
  // }

//   const newArr = [];
//   numbers.forEach(element => {
//     element % 2 === 0
//     ? newArr.push(element + value)
//     : newArr.push(element);
//   });
//   return newArr;
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));


// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
//   const planetsLengths = planets.map(planet => planet.length);
 
  
//   console.log(planetsLengths);


//Module 4 Task 19


// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0
// );
// const oddNumbers = numbers.filter(number => number % 2 !== 0
// ); 

// console.log(evenNumbers);
// console.log(oddNumbers);


//Module 4 Task 20


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);


// console.log(uniqueGenres);



// Change code below this line

// Change code above this line


// const allUsers = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];

/* Дополни функцию getTotalBalanceByGender(users, gender) так, 
чтобы она возвращала общий баланс пользователей (свойство balance), 
пол которых (свойство gender) совпадает со значением параметра gender. */

// const getTotalBalanceByGender = (users, gender) => {
 
//   return users.filter(user => gender === user.gender).reduce((totalBalance, bal) => {
//     return totalBalance + bal.balance;
//   }, 0);
// };


// console.log(getTotalBalanceByGender(allUsers, "female"));


/* Дополни функцию getSortedFriends(users) так, 
чтобы она возвращала массив уникальных имён друзей 
(свойство friends) отсортированный по алфавиту .*/
// const getSortedFriends = users => {
//   return [...users].flatMap(friend => friend.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));
  //  return sortedFriends;
// };


/* Дополни функцию getNamesSortedByFriendCount(users) так, 
чтобы она возвращала массив имён пользователей отсортированный 
по возрастанию количества их друзей (свойство friends).*/

// const getNamesSortedByFriendCount = users => {
//    const sortedUsers = [...users].sort((a, b) => a.friends.length - b.friends.length)
//    .map(user => user.name);
//    return sortedUsers;
// };


// const getTotalFriendCount = users => {
//   // const friendsArr = users.flatMap(user => user.friends);
//   // return friendsArr.length;
//   return users.reduce((acc, friends) => {
//     return acc + friends.friends.length;
//   }, 0);
// };


// const sortByDescendingFriendCount = users => {
//   const friendsLength = [...users];
//   console.log(friendsLength.length);
//     const sortedByFriends = [...users].sort((a, b) => a.friends.length - b.friends.length)
//    return sortedByFriends;
// };


// Change code below this line
// const sortByName = users => {
//    const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
//    return sortedUsers;
// };
// // Change code above this line

// console.log(sortByName(allUsers));
// const getUsersWithFriend = (users, friendName) => {
   
//    return users.filter(user => user.friends.includes(friendName));
// };


// const getFriends = (users) => {
//   const allFriends = users.flatMap(friend => friend.friends);
//   // console.log(allFriends);
//   return allFriends.filter((friend, index, array) => array.indexOf(friend) === index);
// };

// console.log(getFriends(allUsers));

//Module 4 Task 35

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, time) => {
//   return (total + time.playtime * time.gamesPlayed);
// }, 0);

// console.log(totalAveragePlaytimePerGame);



//Module4 Task 45


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];

// /* Дополни код так, чтобы в переменной names получился 
// массив имён авторов в алфавитном порядке, рейтинг книг 
// которых больше значения переменной MIN_BOOK_RATING. */

// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].sort((a, b) => a.author.localeCompare(b.author))
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author);

// console.log(names);




//Module 5 Task 1

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };


// pizzaPalace.order("Smoked");


//Module 5 Task 10



class Storage {
  items = [];
  constructor (items) {
      this.items = items
  }

  getItems() {
      return this.items;
  }
  addItem(newItem) {
      this.items = [...this.items, newItem];
  }
  removeItem(itemToRemove) {
      this.items = this.items.filter(arrItem => arrItem !== itemToRemove);
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.table(storage); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.table(storage); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.table(storage);
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
