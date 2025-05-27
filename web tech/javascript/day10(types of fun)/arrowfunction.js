//Arrow Fuction means no function name and no functionkeyword
var add=()=>console.log(16+19);
add()


var op=()=>{        //if we have multiple statements we need to use curlybraces{}
    console.log(16+19);
    console.log(10-5);
}
op();


//area of circle   (pie*radius**2)
var areaOfCircle=rad=>console.log(3.14*rad**2);  //  pie value is 22/7=3.14 
areaOfCircle(20);  //if we have one parameter need not to use open brackets()


//area of triangle
var areaOfTri=(base,height)=>console.log(0.5*base*height);   //if we have two or more parameters need to use open brackets()
areaOfTri(16,19);