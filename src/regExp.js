// regExp


// function solution(s){
//   return (s + "_").match(/.{2}/g)|| [];
// }
// console.log(solution('abcde'));


// /w[oie]rd/ ищет все слова в котором есть буквы в скобках word, wird, werd
// /[0-9a-z] ищет символы от 0 до 9 и от a до z /w[a-z]rd/g
// /[^aiu]/g ищет слова в которых нет букв aiu
// /s+/g ищет совпадения с одной и более буквами s подряд
// /go*/g ищет совпадения начинающиеся на g и с 0 или более буквами о
// /t[a-z]*i/g жадный (greedy) метод ищет наиболее длинное совпадение которое начинается на t и заканчивается на i
// /t[a-z]*?i/g ленивый (lazy) метод ищет наиболее короткое совпадение
// /wor./ ищет слово в котором последняя буква может быть любой
// /word/g ищет больще одного совпадения
// /word/i игнорирует регистр
// /^word/ ищет слово в начале строки
// /word$/ ищет слово в конце строки
// /\w/g ищет совпадение всех символов, а так же "_" [A-Za-z0-9_]
// /\W/g игнроирует при поиске символы [^A-Za-z0-9_]
// /\d/g ищет все цифры [0-9]
// /\D/g игнорирует при поиски цифры [^0-9]
// /\s/g ищет не только пробелы (space) но и [ \r\t\f\n\v] - return, tab, form feed, and new line characters
// /\S/g игнорирует все это
// /wo{3,}rd/g ищет слово word с тремя или больше о wooord
// /colou?r/ ищет оба слова color и colour (u?)
// (?=...) проверяет есть ли элемент в шаблоне поіска, но не будет ему соответствовать
// /P(engu|umpk)in/g найдет или Penguin или Pumpkin


/* let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
ищет от 3 до 6 символов [A-Za-z0-9_] и игнорирует [^0-9] но потом цифра
*/


/* Use lookaheads in the pwRegex to match passwords that are 
greater than 5 characters long, and have two consecutive digits. */

// let sampleWord = "astronaut";
// let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
 // 1. (смотрит все символі длинной в 6) 2. (все символі но в конце 2 цифрі)
// let result = pwRegex.test(sampleWord);


/*
1.Usernames can only use alpha-numeric characters.

2.The only numbers in the username have to be at the end. 
There can be zero or more of them at the end. 
Username cannot start with the number.

3.Username letters can be lowercase and uppercase.

4.Usernames have to be at least two characters long.
 A two-character username can only use alphabet letters 
 as characters.

let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;

Code Explanation
^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input
*/


// let extractStr = "мне +38(067)879-00-51 and 133457813 лет";
// let codingRegex = /\b\d{1,3}\b/g; // Change this line
// let result = extractStr.match(codingRegex).join('');
// let phoneArr = [];
// phoneArr.push(result); // Change this line
// console.log(phoneArr);

// let regexp = /#[a-f0-9]{6}\b/gi; //b в конце не позволяет искать цифры больше 6 штук

// let str = "color:#121252; background-color:#AA00ef bad-colors:f#fddee #fd2"

// console.log(str.match(regexp) );  // #121212,#AA00ef

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?1>/g; // Change this line
// let result = text.match(myRegex);
// console.log(result);


// let text = "P1P5P4CCCcP2P6P3";
// let myRegex = /C+/g; // Change this line
// let result = text.match(myRegex);
// console.table(result);


// let firstString = "Ricky is first and can be found.";
// let firstRegex = /^Ricky/;
// console.log(firstRegex.test(firstString));
// let notFirst = "You can't find Ricky now.";
// console.log(firstRegex.test(notFirst));

// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/g;
// console.log(soccerWord.match(goRegex));
// console.log(gPhrase.match(goRegex));
// console.log(oPhrase.match(goRegex));



// function getCount(str) {
//     // const regex = /[aeiou]/g;
//     // console.log(regex);
//     if (!str.match(/[aeiou]/g)) {
//          return 0;
//     }
    
//   return str.match(/[aeiou]/g).length;
// }

// console.log(getCount('ltsply'));