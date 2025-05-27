// function fun1(){
//     console.log("this is function1")
// }
// function fun2(){
//     console.log("this is function2")
// }

// setTimeout(fun2,1000);
// setTimeout(fun1,2000)



// function fun1(){
//     console.log("This is function1");
    
// }
// function fun2(){
//     console.log("This is function2");
    
// }

// setTimeout(fun2,1000)
// setTimeout(fun1,2000)

function fun1(){
    document.getElementById("container").style.transform="translate(94vw,0px)"
    document.getElementById("container").style.transition="transform 1s"

}
setTimeout(fun1,1000);

function fun2(){
    document.getElementById("container").style.transform="translate(94vw,84vh)"
    document.getElementById("container").style.transition="transform 1s"

}
setTimeout(fun2,2000);

function fun3(){
    document.getElementById("container").style.transform="translate(0vw,84vh)"
    document.getElementById("container").style.transition="transform 1s"

}
setTimeout(fun3,3000);

function fun4(){
    document.getElementById("container").style.transform="translate(0vw,0vh)"
    document.getElementById("container").style.transition="transform 1s"

}
setTimeout(fun4,4000);