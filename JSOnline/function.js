function sum(){
    var x=16;
    var y=19;
    res=x+y;
    console.log(res)
}
sum()


function city(){
    var city="hyd"
    console.log(city)
}
city()  // here also we get jgtl bcz we are using
     //same function name so updated function will be executed
function city(){
    var city="jgtl"
    console.log(city)
}
city()


function add(x,y){
    console.log(x+y)
}
add(1,2)
add(16,19)
add(5,27)

function name(x,y){
    console.log(x,y)
}
name("ab","bc","de","xy") //here we wont get error 1st one will execute remaing will ignore
name("viart") // here also no error x will as virat and y as undefined