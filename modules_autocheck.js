// Module 1 Task 28

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

  switch (password) { 
    case null:
      message = "Canceled by user!";
      break;
    case "jqueryismyjam": 
      message = "Welcome!"; 
      break;
      default:
      message = "Access denied, wrong password!";
  }

  // Change code above this line
  return message;
}

console.log(checkPassword('jqueryismyjam'));
console.log(checkPassword('fnggldnf'));






// Module 1 Task 29


function getShippingCost(country) {
  let message;
  // Change code below this line
  switch(country) {
    case "China":
    message = `Shipping to China will cost 100 credits`;
    break;
    
    case "Chile":
    message = `Shipping to Chile will cost 250 credits`;
    break;

    case "Australia":
    message = `Shipping to Australia will cost 170 credits`;
    break;

    case "Jamaica":
    message = `Shipping to Jamaica will cost 120 credits`;
    break;

    default:
    message = "Sorry, there is no delivery to your country"
  }
  // Change code above this line
  return message;
}

console.log(getShippingCost("China"));





// Module 1 Task 33


function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (maxLength < message.length) {
    result = message.slice(0, maxLength) + "...";
  } else {
    result = message;
  }
  /// Change code above this line
  return result;
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // Curabitur ligula...
console.log(formatMessage("Vestibulum facilisis purus nec", 20));  //  Vestibulum facilisis...




// Module 2 Task 11 


function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
 

 return message.split(" ").length * pricePerWord;


   // Change code above this line
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); //100




// Module 2 Task 13

function slugify(title) {
  // Change code below this line

return title.split(' ').join("-").toLowerCase();


  // Change code above this line
}

console.log(slugify("Arrays for begginers")); // arrays-for-begginers


// Module 2 Task 16



function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
const totalArr = firstArray.concat(secondArray);
if (maxLength < totalArr.length) {
  return totalArr.slice(0, maxLength);
}
return totalArr;

    // Change code above this line
}
  

console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));



//Module 2 Task 21



function findLongestWord(string) {
  // Change code below this line
    const splitedString = string.split(' ');
    let longestWord = splitedString[0];
    
    // console.log(longestWord.length);

    for (const word of splitedString) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    
    return longestWord;
  // Change code above this line
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // jumped
console.log(findLongestWord("Google do a roll")); // Google


// Module 2 Task 25


function getCommonElements(array1, array2) {
  // Change code below this line
const uniqElement = [];

for (const element of array1) {
  if (array2.includes(element)) {
    uniqElement.push(element);
  }
}

return uniqElement;
 // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]



// Module 2 Task 29

function getEvenNumbers(start, end) {
   // Change code below this line

   const EvenNumber = [];
    
    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) {
            EvenNumber.push(i);

        }
    }

    return EvenNumber;

    // Change code above this line
}
  
console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]



// Module 2 Task 32

function includes(array, value) {
  // Change code below this line
    let needToFind;
    for (const element of array) {
        if (element === value) {
            needToFind = element;
            // console.log(element);
    }
}
    return needToFind === value;
  // Change code above this line
}

console.log(includes([1, 2, 3, 4, 5], 3)); //true
console.log(includes([1, 2, 3, 4, 5], 17)); //false
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")); // true