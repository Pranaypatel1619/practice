//FILTER METHOD 👇👇👇👇👇*****
var arr = [101, 300, 20, 155, 600]; // [300,600]

var filteredArray = arr.filter(function (element, index) {
  return element > 200; // 300 > 200
});

console.log(filteredArray);



// TASK 👇👇👇👇👇
var details = [
    {
        brand: "Apple",
        model: "Iphone 14",
        price: 90000,
    },
    {
        brand: "Apple",
        model: "Iphone 12",
        price: 70000
    },
    {
        brand: "Samsung",
        model: "Galaxy",
        price: 110000,
    },

    {
        brand: "Vivo",
        model: "vivo A27",
        price: 40000,
    },
    {
        brand: "Vivo",
        model: "vivo Pro",
        price: 50000,
    },
];

var newdata = details.filter(function (element, index) {
    //element = {brand:"",model:"",price:""}

    return element.brand == "Apple" || element.brand== "Samsung" && element.price > 50000;
});

console.log(newdata);




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