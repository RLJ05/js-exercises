function addUp(number) {
    return Array.from(new Array(number)).map((val,i) => ++i).reduce((acc, cur) => acc + cur);
}

/* 
  Create a function that, given a string str, finds a letter that has a single occurrence. 
  Return the letter in uppercase. 
  If the input is empty, return an empty string "".
*/
function singleOccurance(str) {
    let count = {};
    for(let c of str.toUpperCase()) {
        count[c] = c in count ? count[c] + 1 : 1;
    }
    for(let c in count) {
        if (count[c] === 1) return c;
    }
    return '';
}

/* 
  Create a function that takes a string and returns a string in which each character is repeated once.
*/
function doubleChar(str) {
    let result = '';
    for(let c of str) {
        result += c + c;
    }
    return result;
}

/* 
  Create a function that returns an array of strings sorted by length in ascending order.
*/
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

/* 
  Create a function that returns true if all parameters are truthy, and false otherwise.
  Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
  You will always be supplied with at least one parameter.
*/
function allTruthy(...arr) {
    return arr.every(x => Boolean(x));
}

/* 
  Create a function that takes an array of numbers and returns the second largest number.
  There will be at least two numbers in the array.
*/
function secondLargest(arr) {
    return arr.sort((a, b) => a - b).at(-2);
}

/* 
  Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
  Return an empty array if the object is empty.
*/
function toArray(obj) {
    let result = [];
    for(let k in obj) result.push([k, obj[k]]);
    return result;
}

/* 
  Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
*/
function spelling(str) {
    let result = [];
    for(let i = 1; i <= str.length; i++) result.push(str.slice(0, i));
    return result;
}

/* 
  Write a function that returns the number of users in a chatroom based on the following rules:

  If there is no one, return "no one online".
  If there is 1 person, return "user1 online".
  If there are 2 people, return "user1 and user2 online".
  If there are n>2 people, return the first two names and add "and n-2 more online".
  For example, if there are 5 users, return:

  "user1, user2 and 3 more online"
*/
function chatroomStatus(arr) {
    switch(arr.length) {
        case 0: return 'no one online';
        case 1: return `${arr[0]} online`;
        case 2: return `${arr[0]} and ${arr[1]} online`;
        default: return `${arr[0]}, ${arr[1]} and ${arr.length - 2} more online`;
    }
}

/* 
  Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.
  A single printed page requires each color once, so printing is not possible if any of the slots lack ink
*/
function inkLevels(obj) {
    return Math.min.apply(null, Object.values(obj));
}

/* 
  You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). 
  Create a function that takes the video length and return it in seconds.
  The video length is given as a string.
  If the number of seconds is 60 or over, return false (see example #3).
  You may get a number of minutes over 99 (e.g. "121:49" is perfectly valid).
*/
function minutesToSeconds(str) {
    let [minutes, seconds] = str.split(':');
    if(Number(seconds) >= 60) return false;
    return Number(minutes) * 60 + Number(seconds);
}

/* 
  Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
*/
function reverseCase(str) {
    return str.split('').map(c => c.toUpperCase() === c ? c.toLowerCase() : c.toUpperCase()).join('');
}

/* 
  Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. 
  A number is symmetrical when it is the same as its reverse.
*/
function isSymmetrical(num) {
    let str = num.toString();
    for(let i = 0; i < str.length / 2; i++) {
        if(str[i] !== str.at(-(1+i))) return false;
    }
    return true;
}

/* 
  Create a function to return the amount of potatoes there are in a string.
*/
function potatoes(str) {
    let matches = str.match(/potato/g);
    return matches === null ? 0 : matches.length;
}

/* 
  Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
  Your output must be case-sensitive (see second test).
*/
function charCount(char, str) {
    return str.split('').filter(c => c === char).length;
}

/* 
  Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. 
  Descending order is when you sort from highest to lowest.
  You can expect non-negative numbers for all test cases.
*/
function sortDescending(num) {
    return Number(num.toString().split('').sort().reverse().join(''));
}

module.exports = { reverseCase, sortDescending, charCount, potatoes, singleOccurance, addUp, doubleChar, sortByLength, allTruthy, secondLargest, toArray, spelling, chatroomStatus, inkLevels, isSymmetrical, minutesToSeconds };
