console.log(window.Date); //function
console.log(window.Date()); //date and time
console.log(Date());
console.log(typeof Date()); //string
console.log(typeof new Date()); //object
var date=Date();
console.log(date); //immutable cannot be modified
var date1 = new Date();
console.log(date1); //mutable can be modified
console.log(date1.getDate());
console.log(date1.getFullYear());
console.log(date1.getMonth());
console.log(date1.getDay());

var date= new Date();
console.log(date.toLocaleString()); //mm/dd/yyyy  //hh:mm:ss
console.log(date.toLocaleDateString()); //mm/dd/yyyy
console.log(date.toLocaleTimeString()); //hh:mm:ss
console.log(date.getMonth()); //0 to 11 the month will start from 0
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getDay());  //0 to 6
console.log(date.getHours()); //0 to 23
console.log(date.getMinutes());
console.log(date.getSeconds());


// we can give our own year,month,date,time
console.log(new Date(2002,9,5,6));