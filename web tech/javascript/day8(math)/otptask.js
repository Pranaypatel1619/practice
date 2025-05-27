// WAPTP A RANDOM OTP 
var otp=""
for (var i = 0;i<4;i++){
    // var res = Math.floor(Math.random()*10);
    // otp=otp+res;
    // OR 
    otp+= Math.floor(Math.random()*10);
}
console.log(otp);