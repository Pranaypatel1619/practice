// ===>FILL 
// var arr=[1,2,3,4,33,45,6,5,6657,3,32,435,89];
// var arr1=arr.fill("Aplle",1,6);
// console.log(arr);

// ===>EVERY
// var arr=[1,2,3,4,33,45,6,5,6657,3,32,435,89];
// var val=arr.every((num)=>{
//     return num%2!=0;       
// })
// console.log(val);   //false   //every value should satisfy the conditio then it return true



// ===>SOME
// var arr=[1,2,3,4,33,45,6,5,6657,3,32,435,89];
// var val=arr.some((num)=>{
//     return num%2!=0;       
// })
// console.log(val); //true   //any of the value satisfy the condition return true



// ===>FIND
// var arr=[12,45,62,45,74,12,36,30,60,54,12,50];
// var val=arr.find((num)=>{
//     return num%2==0 && num%3==0 && num%5==0      
// })
// console.log(val);      //it will give the value which satisfy the condition



// ===>FINDINDEX
// var arr=[12,45,62,45,74,12,36,30,60,54,12,50];
// var val=arr.findIndex((num)=>{
//     return num%2==0 && num%3==0 && num%5==0      
// })
// console.log(val);   //it will give the index of the value which satisfy the condition


// var arr=[1,4,7,6,5,2,3];
// console.log(arr.sort());   //o/p=[1, 2, 3, 4, 5, 6, 7]

var arr=[110,14,72,161,55,223,334];
console.log(arr.sort());      //o/p= [110, 14, 161, 223, 334, 55, 72]
   
console.log(arr.sort((a,b)=>{
    return a-b;       //o/p==[14, 55, 72, 110, 161, 223, 334]
}));   



var arr=['apple','aeroplane','banana',"ball","donkey","cat"];
console.log(arr.sort());