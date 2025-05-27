function add(x, y) {
    console.log(x + y); // undefined + undefined or undefined + 122 = NaN(not a number)
}

function print() {
    console.log("kdbvdfjkbvdjkbvdjkvbdjkb");
}

function fn(f) {
    console.log(f);
    f();
    f();
    f();
}

fn(function () {      //we can call the any function inside function name anonomus function and normal fun
    var city = "Delhi";
    console.log(city);
});

console.log("-------------------------------------------");

fn(print);

console.log("-------------------------------------------");

fn(add);