// var arr=["red","blue","black","white"];
// console.log(arr.includes("red"));

// var arr1=[1,4,2,34,55,65,76,87,3];
// var arr2=arr1.filter(function(num){
//     return num%2!=0;
// });
// console.log(arr2);


// var arr=["red","blue","black","white"];
// var arr3=arr.filter((num)=>{
//     return num.length>=5;
// })
// console.log(arr3)


// var str = `she sells seashells by the seashore,the shells she sell are seashells,i'm sure.
// For if she sells seashells on the seashore,the i,m sure she sells seashore shells`;
               
// var vowel=str.split("");
// console.log(vowel);
// var vowel1=vowel.filter(function(str){
//     return str!='a' && str!='e' && str!='i' && str!='o' && str!='u'
// })
// str=vowel1.join("");
// console.log(str);




// var arr=["red","blue","black","white"];
// var slc=arr.slice(0,2);
// console.log(arr)
// console.log(slc); //the slice will not effect the original array
// var splc=arr.splice(0,2);
// console.log(arr)
// console.log(splc);   //splice will effect the original array




// array=[1,[54,[87,2,[94,74],65],61],6]
// console.log(array)
// array=array.flat(Infinity);   //it will remove the nested array 
// console.log(array)




// var arr1=[1,4,2,34,55,65,76,87,3];
// console.log(arr1);
// var arr=arr1.map(function(num){
//     return num+5;        //we can add,mul,div,and sub 
// })
// console.log(arr);




// var arr=["red","blue","black","white"];
// var uprlwr=arr.map(function(chr1){
//     if(chr1.length>=4){
//         return chr1.toUpperCase();
//     }
//     else{
//         return chr1.toLowerCase();
//     }
// })
// console.log(uprlwr)




// var arr=["red","blue","black","white"];
// for (i in arr){
//     console.log(i)
// }

// for (i of arr){
//     console.log(i)
// }



// var arr=["red","blue","black","white"];

// var arr1=arr.entries()    //entries will print both index and values
// for (i of arr1){
//     console.log(i)
// }

// var arr2=arr.keys()  //keys only the index will print
// for (i of arr2){
//     console.log(i)
// }
// var arr3=arr.values()  //values only the values will print
// for (i of arr3){
//     console.log(i)
// }
