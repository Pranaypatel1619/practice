// dynamicrendering TASK

// This done by me 👇🏻

// var currentTime = new Date();
// var hours = currentTime.getHours();
// console.log(currentTime);
// console.log(hours);

// if (hours >= 6 && hours < 12) {
//   console.log("Good Morning");
//   var z=alert("Good Morning")
// } else if (hours >= 12 && hours < 18) {
//   console.log("Good Afternoon");
//   var z=alert("Good Afternoon")
// } else {
//   console.log("Good Night");
//   var z=alert("Good Night")
// }

// This done by mam 👇🏻
var dynamicrendering=new Date(0,0,0,12);
console.log(dynamicrendering);
var hours = dynamicrendering.getHours();
console.log(hours);

if (hours >= 0 && hours < 12) {
  console.log("Good Morning");
  var z=alert("Good Morning")
} else if (hours >= 12 && hours < 16) {
  console.log("Good Afternoon");
  var z=alert("Good Afternoon")
 } else if (hours >= 16 && hours < 19) {
    console.log("Good Evenig");
    var z=alert("Good Evenig")
} else if (hours >= 19 && hours < 23){
  console.log("Good Night");
  var z=alert("Good Night");
} else {
  alert("Invalid");
}



