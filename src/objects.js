// Setup
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {

//   // If prop isn't tracks and value isn't an empty string, 
//   //update or set that album's prop to value.
//   if (prop !== 'tracks' && value !== '') {
//     records[id][prop] = value;

//   //If prop is tracks but the album doesn't have a tracks property, 
//   //create an empty array and add value to it.
//   } else if (prop === "tracks" && records[id].hasOwnProperty('tracks') === false) {
//     records[id][prop] = [value];

//   //If prop is tracks and value isn't an empty string, 
//   //add value to the end of the album's existing tracks array.  
//   } else if (prop === 'tracks' && value !== '') {
//     records[id][prop].push(value);

//   //If value is an empty string, delete the given prop property from the album.  
//   } else if (value === '') {
//     delete records[id][prop];
//   }

  

//   return records;
// }

// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
// console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
// console.log(updateRecords(recordCollection, 2548, "artist", ""));
// console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
// console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
// console.log(updateRecords(recordCollection, 2548, "tracks", ""));
// console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));











// // Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for (const element of contacts) {
    
//     if (element.firstName === name) {
//       if (element.hasOwnProperty(prop)) {
//               return element[prop];
//       }
//       return "No such property";
//     } 
//   }
//    return "no such contact";
    
//   // Only change code above this line
// }

// console.log(lookUpProfile("Sherlock", "likes"));










// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
//   };
//   function makeList(arr) {
//     // Imperative
//   //   const failureItems = [];
//   //   for (const element of arr)
//       // failureItems.push(`<li class="text-warning">${element}</li>`);
//   //   console.log(failureItems);
  
//     // Declarative refactoring
//   const failureItems = arr.map((el) => {
//       return `<li class="text-warning">${el}</li>`
//   });
//     return failureItems;
//   }
  
//   const failuresList = makeList(result.failure);
//   console.log(failuresList);











// let user = {
//     name: 'Kenneth',
//     age: 28,
//     data: {
//       username: 'kennethCodesAllDay',
//       joinDate: 'March 26, 2016',
//       organization: 'freeCodeCamp',
//       friends: [
//         'Sam',
//         'Kira',
//         'Tomo'
//       ],
//       location: {
//         city: 'San Francisco',
//         state: 'CA',
//         country: 'USA'
//       }
//     }
//   };
  
//   function addFriend(userObj, friend) {
//     // Only change code below this line
//     // console.log(userObj.data.friends.push(1));

//     return userObj.data.friends = [...userObj.data.friends, friend];
  
//     // Only change code above this line
//   }
  
//   console.log(addFriend(user, 'Pete'));
//   console.log(user);
