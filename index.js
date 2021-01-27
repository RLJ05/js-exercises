function addUp(number) {
  return Array.from(new Array(number)).map((val,i) => ++i).reduce((acc, cur) => acc + cur);
}

/* 
  Create a function that, given a string str, finds a letter that has a single occurrence. 
  Return the letter in uppercase. 
  If the input is empty, return an empty string "".
*/
function singleOccurance(str) {
  
}

/* 
  Create a function that takes a string and returns a string in which each character is repeated once.
*/
function doubleChar(str) {

}

/* 
  Create a function that returns an array of strings sorted by length in ascending order.
*/
function sortByLength(arr) {

}

/* 
  Create a function that returns true if all parameters are truthy, and false otherwise.
  Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
  You will always be supplied with at least one parameter.
*/
function allTruthy(...arr) {

}

/* 
  Create a function that takes an array of numbers and returns the second largest number.
  There will be at least two numbers in the array.
*/
function secondLargest(arr) {

}

/* 
  Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
  Return an empty array if the object is empty.
*/
function toArray(obj) {

}

/* 
  Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
*/
function spelling(str) {

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

}

/* 
  Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.
  A single printed page requires each color once, so printing is not possible if any of the slots lack ink
*/
function inkLevels(obj) {

}

/* 
  You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). 
  Create a function that takes the video length and return it in seconds.
  The video length is given as a string.
  If the number of seconds is 60 or over, return false (see example #3).
  You may get a number of minutes over 99 (e.g. "121:49" is perfectly valid).
*/
function minutesToSeconds(str) {

}

/* 
  Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
*/
function reverseCase(str) {

}

/* 
  Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. 
  A number is symmetrical when it is the same as its reverse.
*/
function isSymmetrical(num) {

}

/* 
  Create a function to return the amount of potatoes there are in a string.
*/
function potatoes(str) {

}

/* 
  Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
  Your output must be case-sensitive (see second test).
*/
function charCount(char, str) {

}

/* 
  Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. 
  Descending order is when you sort from highest to lowest.
  You can expect non-negative numbers for all test cases.
*/
function sortDescending(num) {

}

module.exports = { reverseCase, sortDescending, charCount, potatoes, singleOccurance, addUp, doubleChar, sortByLength, allTruthy, secondLargest, toArray, spelling, chatroomStatus, inkLevels, isSymmetrical, minutesToSeconds };
