//Imediate Invoked Function Expressin(IIFE)
//we can use by anonomus function/arrow function

(function(){
    console.log("this is IIFE")
})();      //must and should semicolon(;) without this the nxt line won't execute

(()=>console.log("this is IIFE"))();

((num1,num2)=>{
console.log(num1+num2);
})(16,19);

var addedVal=((num1,num2)=>{
    return num1+num2;
    })(16,19);
console.log(addedVal);    
