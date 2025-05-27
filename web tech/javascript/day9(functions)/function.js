//Function is a block of code used to perform specific tasks
function wedding(){
    console.log("Happy Married Life.....")
    console.log("All are welcome .....") 
}
wedding();
wedding(); //we can call how many times we need 

function calculate(num1,num2){
    console.log(num1+num2)
    console.log(num1-num2)
    console.log(num1*num2)
    console.log(num1%num2)
    console.log(Math.floor(num1/num2)) 
}
calculate(19,16)
calculate(5,27)


//function with parametrs
function sum(num1,num2){
    var add=num1+num2;
    return add;
}
var ad=sum(16,19);
console.log(ad);
console.log(sum(5,27))  //we can give without storing in variable also we get 