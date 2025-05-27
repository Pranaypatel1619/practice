var usrname = prompt("what is ur name");
var email = prompt("what is ur email");
var number = prompt("what is ur number");
var city = prompt("what is ur city");

document.getElementById("container1").innerHTML =
    `<table border="1px" cellpadding="10px" cellspacing="0px">
        <tr>
            <th colspan="2">USER INTERFACE</th>
        </tr>
        <tr>
            <td>Name:</td>
            <td id="t1">${usrname}</td>
        </tr>
        <tr>
            <td>Email:</td>
            <td id="t2">${email}</td>
        </tr>
        <tr>
            <td>Number:</td>
            <td id="t3">${number}</td>
        </tr>
        <tr>
            <td>City:</td>
            <td id="t4">${city}</td>
        </tr>
    </table>`

var carColor=prompt("Enter the color");
var carBrand=prompt("Enter the car name");
document.getElementById("container2").innerHTML =
    `I like <span id='col'>${carColor}</span> color <span style="color:${carColor}">${carBrand}</span> car`
document.getElementById('col').style.color=carColor;    // we can give direct in span tag like 2nd carbrand color (OR) we can store like this and we can give color