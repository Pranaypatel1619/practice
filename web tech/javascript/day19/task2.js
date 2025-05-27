function checkPassword(){
    var userPass=document.querySelector("input").value;
    if(userPass.length==0){
       document.getElementById("passCheck").innerHTML=``; 
    }
    else if(userPass.length<=4){
        document.getElementById("passCheck").innerHTML=`Weak Password`;
        document.getElementById("passCheck").style.color=`red`  
     }
    else if(userPass.length<=7){
        document.getElementById("passCheck").innerHTML=`Average Password`;
        document.getElementById("passCheck").style.color=`orange`  
     }
     else if(userPass.length>8){
        document.getElementById("passCheck").innerHTML=`Strong Password`;
        document.getElementById("passCheck").style.color=`Green`  
     }
}
