// Task1👇👇👇👇👇
var num1 = 100;
console.log(++num1); // pre-increment //101
// It is First performing increment operation then printing the value

var num2 = 100;
console.log(num2++); // post-uncrement //100
// It is first printing the value then it perfoming increment Operation

console.log(num2); //101


// Task2👇👇👇👇👇

var x = 100;
var y = 200;

var result1 = x + ++y; //201 // 100 + 201 = 301

var a = 100;
var b = 200;
var result2 = a + b++; //300 // 100 + 200+ //300 //201

console.log(result1, result2);
console.log(b); //200 or 201


// Task3👇👇👇👇👇

var x = 100;
var y = 50;

var result1 = --x + --y; // 99 + 49 = 148
console.log(result1); //x = 99 , y = 49

var result2 = x-- + y--; // 99 + 49 = 148
console.log(result2);

console.log(x, y); //x =98 y=48