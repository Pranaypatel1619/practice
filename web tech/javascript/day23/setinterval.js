var num=0;
function fun(){
    num++
    document.getElementById("count").innerHTML=num
}
function fun2(){
    window.setInterval(fun,1)
}