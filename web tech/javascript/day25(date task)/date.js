function dateTime()
{
    var date = new Date();
    console.log(date);

var hh=date.getHours();
var mm=date.getMinutes();
var ss=date.getSeconds();
var dd=date.getDate();
var mo=date.getMonth();
var yy=date.getFullYear();
var dy=date.getDay();

var arr=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg",];
document.body.style.backgroundImage=`url(./imgages/${arr[dy]})`
var am_pm="Am"
if(hh>=12){
    am_pm="pm"
    if(hh>12){
        hh-=12;
    }
}
if(hh==0){
    hh=12;
}
if(hh<=9){
    hh=`0${hh}`
}
if(mm<=9){
    mm=`0${mm}`
}
if(ss<=9){
    ss=`0${ss}`
}
if(dd<=9){
    dd=`0${dd}`
}



var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
mo=months[mo]
var days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"]
dy=days[dy]
document.getElementById("time").innerHTML=`${hh}:${mm} ${am_pm}`
document.getElementById("date").innerHTML=`${dd}-${mo}-${yy}`
document.getElementById("day").innerHTML=dy;
document.getElementById("sec").innerHTML=ss;
}
setInterval(dateTime,1000);