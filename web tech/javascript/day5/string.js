// // String
// // length
// var str = "Hello World";
// console.log(str.length);
// console.log(`the length of the ${str} string is ${str.length}`);
// // toUpperCase
// var lowerdata = str.toUpperCase();
// console.log(lowerdata);
// // toLowerCase
// var Upperdata = str.toLowerCase();
// console.log(Upperdata);

// // toUpperCase and toLowerCase example
// var data = prompt("Enter the day name").toLowerCase();
// // data = data.toLowerCase();      ---> instred of writing this line we can write side of the data above line ☝️☝️☝️
// switch(data){
//     case "monday": console.log("day 1");
//        break;
//     case "tuesday": console.log("day 2");
//        break;
//     case "wednesday": console.log("day 3");
//        break;
//     default: console.log("Invalid input");
// }

// var str = "hello pranay".length;
// console.log(str);

// to remove the white space right and left side we use "TRIM"
var data = "         hello world           ".trim();
console.log(data);

// to get the ASCCI value of the index we use "charCode()"
console.log(data.charCodeAt(3)); //ascii value of 3 index

// to return the character by giving the index we use "charAt()"
console.log(data.charAt(2));  //return the 2nd index character

// console.log(data.charAt(data.length-1)); //+ve only
console.log(data.at(-1)); //+ve and -ve

// to check the cha5racter is present in the varibale or not to check we use"includes"
console.log(data.includes("h")); //true //boolean

console.log(data.replace("l","d")); // to replace l with d
console.log(data.replaceAll("l","d")); // to replace all l with d

// to combine 2 or more strings we use concat 
var fristname = "katukam"
var middlename = "pranay"
var lastname = "patel"
var concatedstore = fristname.concat(middlename,lastname);
console.log(concatedstore);

//SPLIT VERY VERY IMP*******
console.log(data.split()); //array //['hello world]

console.log(data.split("")); //array //['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

