//Anonomus means a Nameless function

var add=function(){
    console.log(10+20);
}
add();         // o/p is 30
console.log(add);         //o/p is console.log(10+20);
 

var sub=function(num1,num2){
    console.log(num1-num2);
    return num1-num2;
}
console.log(sub(10,5));


