var priAmount = prompt('Enter the loan amount');
var timeDuration = prompt('Enter the loan duration');
var rateOfInt = prompt('Enter the rate of intrest');

function bikeLoan(pA, tD, rI) {
    console.log(`Loan amount:${pA}`);
    console.log(`Loan Duration:${tD}years`);
    console.log(`Rate of intrest(years):${rI}`);
    var intrestAmount = (pA * tD * rI) / 100;
    console.log(`Intrest:${intrestAmount}`);
    return intrestAmount + Number(pA); //we took Number data type to convert to number when we use promt it will covert to string we use Number
}
var sbi = bikeLoan(priAmount, timeDuration, rateOfInt);
console.log(`You have to paybac:${sbi}`);


// WAPT calculate Area of Triangle,collect the value from the user by using prompt
var base = prompt('Enter the base');
var height = prompt('Enter the height');
function area(b, h) {
    console.log(`base of triangle:${b}`);
    console.log(`height of triangle:${h}`);
    var add=(b*h*0.5);
    return add;
}
var triangle=area(base,height); 
console.log(triangle);