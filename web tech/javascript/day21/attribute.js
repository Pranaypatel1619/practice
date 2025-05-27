function state1(){
    document.querySelector("legend").removeAttribute("style")
    document.querySelector("input").removeAttribute("placeholder")
    document.querySelector("fieldset").style.borderColor="blue"
    document.querySelector("legend").style.Color="blue"
}

function state2(){
    document.querySelector("legend").setAttribute("style","display:none")
    document.querySelector("input").setAttribute("placeholder","Email or Phone")
    document.querySelector("fieldset").style.borderColor="black"
    document.querySelector("legend").style.Color="black"
}