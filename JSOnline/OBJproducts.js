// I have a Product and I want to store information of that product like
//product name, price, category, rating,stock

var product = {
    pName: "Iphone 14 Pro",
    price: 115000,
    rating: 4.6,
    stock: true,
    category: "Electronic",
  };
  
  console.log(product);



//To access the only the value of the data 
  var product = {
    pName: "Iphone 14 Pro",
    price: 115000,
    rating: 4.6,
    stock: true,
    category: "Electronic",
    price: 60000,
  };
  
 
  //Access the Property of product Object
  console.log(product.pName);
  
  var x = product.category;
  console.log(x);
  
  console.log(product["price"]);  //only updated price will executed

  console.log(product);   //here also only updated price will get 1st price will be ignored