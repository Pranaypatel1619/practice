function incWidth(){
    var imgwidth=document.getElementById("width").value;
    var imgheight=document.getElementById("height").value;
    document.querySelector("img").style.width=imgwidth+"px";
    document.querySelector("img").style.height=imgheight+"px";
}