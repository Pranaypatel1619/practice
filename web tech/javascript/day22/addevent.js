var allInputs=document.querySelectorAll("input");
console.log(allInputs)

allInputs[0].addEventListener("click",function(){
    document.body.style.backgroundColor="red"
})

allInputs[1].addEventListener("dblclick",function(){
    document.body.style.backgroundColor="green"
})

allInputs[2].addEventListener("mouseover",function(){
    document.body.style.backgroundColor="blue"
})