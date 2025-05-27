var arr = [100, 200, 300];
console.log(arr);
//PUSH METHOD👇👇👇👇👇
//add new element at last position
arr.push(400);
arr.push("Neha", true);
console.log(arr);

//UNSHIFT METHOD👇👇👇👇👇
//add element in the first position
arr.unshift(99);
arr.unshift({ city: "delhi" }, 98);
console.log(arr);


var arr = [10001, 10002, 10003, 10004, 10005];
console.log(arr);
//POP METHOD👇👇👇👇👇
//remove element from last position
arr.pop();
arr.pop();
console.log(arr);

// SHIFT METHOD 👇👇👇👇👇
//remove element from first position
arr.shift();
arr.shift();
console.log(arr);


//SPLICE METHOD👇👇👇👇👇
var arr = ["Raj", "Rahul", "Ayush", 100, true, 99];
console.log(arr);
//Remove specific element
// arr.splice(2, 1);
arr.splice(1, 3);

//add new element
arr.splice(4, 0, { city: "delhi" });

console.log(arr);


//SLICE METHOD 👇👇👇👇👇
var arr = ["Raj", "Rahul", "Ayush", 100, true, 99];

var newArray = arr.slice(1, 5);

console.log(newArray);
console.log(arr);



// INDEXOF()👇👇👇👇👇
var arr = ["Raj", 100, "Rahul", 100, "Ayush", 100, true, 99];

var indexNumber = arr.indexOf(100);

// var indexNumber = arr.indexOf(1619); //this will get -1 if num is not there in array
console.log(indexNumber);

// lastIndexOf👇👇👇👇👇
var lastIndexNumber = arr.lastIndexOf(100);
console.log(lastIndexNumber);



//INCLUDES METHOD👇👇👇👇👇

var arr = ["Raj", 100, "Rahul", 100, "Ayush", 100, true, 99];

var isElementPresent = arr.includes("Rahul");  //true
var isElementPresent = arr.includes("rahul"); //false (case sensitive)

console.log(isElementPresent);


//how to access specific element
console.log(arr[7]);



//FOREACH METHOD👇👇👇👇👇****
// 1]example
var arr = ["Raj", 100, "Rahul", 100, "Ayush", 100, true, 99];

arr.forEach(function (element, index) {  //here we can give any parametr but 
// 1st parameter will store elememts and 2nd parameter will store index
  console.log(element,index);
});

// 2Example
var arr = [101, 300, 20, 155, 600];

console.log(arr.length);

arr.forEach(function (element, index) {
  console.log(element + 100);
});




//FILTER METHOD 👇👇👇👇👇*****
var arr = [101, 300, 20, 155, 600]; // [300,600]

var filteredArray = arr.filter(function (element, index) {
  return element < 200; // 300 > 200
});

console.log(filteredArray);