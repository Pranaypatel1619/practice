var num=0;
var arr=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]
function rightArrow()
{
    num++;
    if(num<=arr.length-1)
    {
        document.getElementById("container").style.backgroundImage=`url(./imgages/${arr[num]})`
        document.getElementById("leftHeading").style.backgroundImage=`url(./imgages/${arr[num]})`
        document.getElementById("leftPara").style.backgroundImage=`url(./imgages/${arr[num]})`
    }
    else{
        num=0;
        document.getElementById("container").style.backgroundImage=`url(./imgages/${arr[num]})`
        document.getElementById("leftHeading").style.backgroundImage=`url(./imgages/${arr[num]})`
        document.getElementById("leftPara").style.backgroundImage=`url(./imgages/${arr[num]})`
    }
}
function leftArrow()
{
    num--;
    if(num>=0)
    {
        document.getElementById("container").style.backgroundImage=`url(./imgages/${arr[num]})`
        document.getElementById("leftHeading").style.backgroundImage=`url(./imgages/${arr[num]})`
        document.getElementById("leftPara").style.backgroundImage=`url(./imgages/${arr[num]})`
    }
    else{
        num=arr.length-1;
        document.getElementById("container").style.backgroundImage=`url(./imgages/${arr[num]})`
        document.getElementById("leftHeading").style.backgroundImage=`url(./imgages/${arr[num]})`
        document.getElementById("leftPara").style.backgroundImage=`url(./imgages/${arr[num]})`
    }
}
function autoChange()
{
    num++;
    if(num<=arr.length-1)
    {
        document.getElementById("container").style.backgroundImage=`url(./imgages/${arr[num]})`
        document.getElementById("leftHeading").style.backgroundImage=`url(./imgages/${arr[num]})`
        document.getElementById("leftPara").style.backgroundImage=`url(./imgages/${arr[num]})`
    }
    else{
        num=0;
        document.getElementById("container").style.backgroundImage=`url(./imgages/${arr[num]})`
        document.getElementById("leftHeading").style.backgroundImage=`url(./imgages/${arr[num]})`
        document.getElementById("leftPara").style.backgroundImage=`url(./imgages/${arr[num]})`
    }
}
setInterval(autoChange,5000);