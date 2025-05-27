function bgCol() {
    console.log("Function Called");
    var userCol = document.querySelector("input").value;
    document.body.style.backgroundImage=`linear-gradient(${userCol})`  
    document.body.style.backgroundSize="100% 100vh"
}
