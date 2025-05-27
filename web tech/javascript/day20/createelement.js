var div1=document.createElement('div')
console.log(div1);
document.body.appendChild(div1)
div1.style.backgroundColor='black'
div1.style.width='200px'
div1.style.height='200px'
var div2=document.createElement('div')
div1.appendChild(div2)
div2.style.width='50%'
div2.style.height='50%'
div2.style.backgroundColor='yellow'



var arr1=['fname','1name','Email','PHNO','Gender','Place']
var arr2=['PRANAY','pranaykatukam@gmail.com','xxxxxxxx','MALE',"HYDERABAD"]
var table=document.createElement('table')
document.body.appendChild(table)
table.style.border='2px solid black'
table.style.borderCollapse='collapse'
for(i=0;i<=5;i++){
    var row=document.createElement('tr')
    table.appendChild(row)
    var heading=document.createElement('th')
    row.appendChild(heading)
    var tData=document.createElement('td')
    row.appendChild(tData)
    heading.innerHTML=arr1[i];
    tData.innerHTML=arr2[i];
    tData.style.border='2px solid black'
    heading.style.border='2px solid black'
}