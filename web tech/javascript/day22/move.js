var horMov=0;
var verMov=0;
 var chr=document.querySelector("img");
 window.addEventListener("keydown",function(e){
    if(e.key.toLowerCase()=="w"){
        if(verMov>=-52){
            verMov-=3;
            console.log(verMov)
            chr.style.transform=`translate(${horMov}vw,${verMov}vh) rotate(-90deg)`
            chr.style.transition="transform 0.1s"
        }
        else{
            verMov=52;
            chr.style.transition="none"
            chr.style.transform=`translate(${horMov}vw,${verMov}vh) rotate(-90deg)`
        }
    }
    

    else if(e.key.toLowerCase()=="s"){
        if(verMov<=52){
            verMov += 3;
            console.log(verMov)
            chr.style.transform=`translate(${horMov}vw,${verMov}vh) rotate(90deg)`
            chr.style.transition="transform 0.1s"
        }
        else{
            verMov=-52;
            chr.style.transition="none"
            chr.style.transform=`translate(${horMov}vw,${verMov}vh) rotate(90deg)`
        }
    }


    else if(e.key.toLowerCase()=="a"){
        if(horMov>= -52){
            horMov -= 3;
            console.log(horMov)
            chr.style.transform=`translate(${horMov}vw,${verMov}vh) rotate(180deg) rotateX(180deg)`
            chr.style.transition="transform 0.1s"
        }
        else{
            horMov=52;
            chr.style.transition="none"
            chr.style.transform=`translate(${horMov}vw,${verMov}vh) rotate(0deg)`
        }
    }


    else if(e.key.toLowerCase()=="d"){
        if(horMov<=52){
            horMov+=3;
            console.log(horMov)
            chr.style.transform=`translate(${horMov}vw,${verMov}vh)`
            chr.style.transition="transform 0.1s"
        }
        else{
            horMov=-52;
            chr.style.transition="none"
            chr.style.transform=`translate(${horMov}vw,${verMov}vh)`
        }
    }


else{
    alert("Invalid key")   
}

 })