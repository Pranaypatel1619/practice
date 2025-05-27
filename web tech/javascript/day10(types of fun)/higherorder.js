function higherOrderFun(calbck){
    console.log(`This is higher order function bcz 
        it takes another function as a arg`)
        calbck()
}
function callBackFun(){
    console.log(`This is a callback function passed
        as a arg for high.ord.function`)
}
higherOrderFun(callBackFun)



//using anonomous function
var hiherorder=function(calbck){
    console.log("This is Higher order Function")
    calbck()   
}
hiherorder(function(){
    console.log("This is callback function")
})



// fun()
// function fun(){
//     console.log("This is Fun!!!!")
// }


var add=(a,b)=>{
    return a+b;
}
var sub=(a,b)=>{
    return a-b;
}
var mul=(a,b)=>{
    return a*b;
}
var operation=(a,b,ope)=>{
    return ope(a,b);
}
console.log(operation(4,6,add));
console.log(operation(4,6,sub));
console.log(operation(4,6,mul));



//create a function that repeats call back function for n number of times

//for loop
var high=(repeat,n)=>{
     return repeat(n);
}  
var call=(n)=>{
    for (i=0;i<n;i++){
        console.log('hii');
    }
}  
high(call,10);

// (OR) we can write using while loop
function repeat(n,calbck){
    var count=0;
    while(count<n){
        calbck();
        count++;
    }
}
repeat(30,()=>{
    console.log("function call")
})

