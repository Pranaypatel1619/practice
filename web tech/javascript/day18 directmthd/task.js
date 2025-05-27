var num=1;
function inc(){
    if (num>=1 && num<=9){
        num++;
        document.getElementById("result").innerHTML=num;
    }
}

function dec(){
    if (num>1 && num<=10){
        num--;
        document.getElementById("result").innerHTML=num;
    }
}