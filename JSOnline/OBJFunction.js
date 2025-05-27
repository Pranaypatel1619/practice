var obj = {
    id: 101,
    brand: "Apple",
    fnAdd: function () {    //we can pass only anonomus fuction
      var x = 10;
      var y = 200;
      console.log(x + y);
    },
  };
  console.log(obj);
  obj.fn();