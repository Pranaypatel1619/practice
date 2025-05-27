function findNumberIsEven(num) {
  if (num % 2 == 0) {
    console.log("Given number is a even");
  }
}
findNumberIsEven(100);



// ifelse 👇👇👇👇👇

function findEvenOdd(value) {
  if (value % 2 === 0) {
    console.log("Given number is Even");
  } else {
    console.log("Given number is Odd");
  }
}
findEvenOdd(54);
findEvenOdd(57);
findEvenOdd(99);



// elseif 👇👇👇👇👇
function Wish(message) {
  if (message === "gm") {
    console.log("Good Morning Kabir");
  } else if (message === "ga") {
    console.log("Good Afternoon Kabir");
  } else if (message === "ge") {
    console.log("Good evening Kabir");
  } else if (message === "gn") {
    console.log("Good Night Kabir");
  } else {
    console.log("There is nothing to Wish Kabir");
  }
}

Wish("cdshcbsdjkh");




// switch 👇👇👇👇👇
function Wish(message) {
  switch (message) {
    case "gm":
      {
        console.log("Good morning Kabir");
      }
      break;
    case "ga":
      {
        console.log("Good Afternoon Kabir");
      }
      break;
    case "ge":
      {
        console.log("Good Evening Kabir");
      }
      break;
    case "gn":
      {
        console.log("Good Night Kabir");
      }
      break;
    default: {
      console.log("No wish Message");
    }
  }
}

Wish("gembjkbjkb");