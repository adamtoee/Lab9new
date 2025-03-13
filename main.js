/////// Variables Section ///////
const myName = "Adam To"
const fruits = ['apples', 'bananas', 'blueberries', 'strawberries', 'pineapples'];
const car = [{make:"Toyota", model:"Prius", color:"Silver"},
             {make:"Chevy", model:"Bolt", color:"Blue"}, 
             {make:"Honda", model:"Civic", color:"White"}];
const today = new Date();
const loggedIn = true;



/////// PART 1 - Variables and Data Types demo///////
var a = 'Test1';
let b = 'Test2';

function testVar(){
  var a = 30;
  
  if(true){
    var a = 50;
    console.log(a);
  }
  console.log(a);
}

function testLet(){
  let a = 30;
 
  if(true){
    let a = 50;
    console.log(a);
  }
  console.log(a);
}

console.log(a);
console.log(b);
console.log("Example using var");
testVar();
console.log("Example using LET");
testLet();
// When you are done with this section you can comment out the console.logs above






//////// PART 2 - template literals////////
const result2Element = document.getElementById('result2');

////starter code////
//update code below to using template literals (not concatenation) to pull in the variables myName, color, make, into output
const honda = car[2]; // this allows us to create a single variable that isolates our honda civic. very simple approach.
result2Element.innerHTML = `Hello my name is ${myName} and I drive a ${honda.make} ${honda.model}`;


//Footer Section
const footerElement = document.getElementById("footer");
//update code below to use template literals to pull in the myName and the current year
footerElement.innerHTML = `&copy; Clint Tuttle 2024`;
footerElement.innerHTML = `&copy; ${myName} 2025`;





//////// PART 3 - Ternary Operator////////
////section 1 - basic if else statement
if (loggedIn) {
    const result3Element = document.getElementById('result3');
    result3Element.innerHTML = "Welcome back!";
} else {
    const result3Element = document.getElementById('result3');
    result3Element.innerHTML = "Please log in";
}

////Sample code.  You can uncomment this to see how simple a ternaly operator can be
 const result3Element = document.getElementById('result3');
 loggedIn ? ("welcome back") : ("please log in");

////section 2 -ternary operator to update the result3Element





//////// PART 4 - Arrow Functions////////
// function Greetings(name) {
//     return `Hello ${name}!`;
// };

// console.log(Greetings("Clint"));

//Make a copy of the above function and rename it GreetingsArrow() and then convert function to an arrow function here
 
const GreetingsArrow = () => {
  return `Hello ${myName}!`;
}
console.log(GreetingsArrow());

//////// PART 5 - Array methods////////
function printFruit() {

    let resultElement = document.getElementById("result5");

    resultElement.textContent = "";

    // Loop through the fruits array
    const temp = fruits.filter(fruits => fruits.startsWith("b")); // this will create an new array and filter out the fruits that start with a B
    for (let i = 0; i < temp.length; i++) {
 
        // Create a list item for each fruit
        let p = document.createElement("p");
        p.textContent = temp[i];

        // Append the list item to the ordered list
        resultElement.appendChild(p);
    }

 }



 
 
 function clearText() {
    let resultElement = document.getElementById("result5");
    resultElement.textContent = "";
 }





 //////// PART6 - Destructuring////////
//  myCar(car[0]);

//  function myCar(car) {
//      var make = car.make;
//      var model = car.model;
//      var color = car.color;
 
//      var message = `I drive a ${color} ${make} ${model}`;
   
//      document.getElementById("result6").textContent = message;
//  } 




//convert the myCar function to use destructuring
const myCar = car[0];

const {make, model, color} =  myCar;

var message = `I drive a ${color} ${make} ${model}`;

document.getElementById("result6").textContent = message;





//////// PART 7 - Spread Operator////////

const baseProduct = {
    id: 'PROD-001',
    name: 'Wireless Headphones',
    price: 199.99,
    warranty: '1 year'
  };
  
  // Seasonal promotion overrides
  const holidayPromo = {
    price: 149.99,
    promoText: 'Holiday Special!',
    bundle: 'Free carrying case'
  };
  
  // Merge basePrduct and Seasonal using spread operator and add lastUpdated property with a value of '2023-12-31'
  ///UPDATE THIS CODE
  const currentProduct = {...baseProduct,...holidayPromo,lastUpdated: '2023-12-31'};


  
  //Check the result object in the console:
  console.log(currentProduct);
  //UPDATE THIS OUTPUT
  document.getElementById("result7").textContent = `The ${currentProduct.name} are on sale for ${currentProduct.price} as of ${currentProduct.lastUpdated}`; 





 //////// PART 8 - Try Catch////////
 function InputValidation() {
    const message = document.getElementById("part8-p");
    message.innerHTML = "";
    
    let x = document.getElementById("part8-input").value;
    
    try { 

      if(x.trim()=="") throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x<10) throw "too low";
      if(x > 15 ) throw "too high"

      message.innerHTML = "Success" ;
  
    }
    catch(err) {
      if (err == "empty") {
        message.innerHTML = "Input is empty!";
      } else if (err == "not a number") {
        message.innerHTML = "Input is not a number!";
      } else if (err == "too low") {
        message.innerHTML = "Input is too low!";
      } else if (err == "too high") {
        message.innerHTML = "Input is too high!";
      }
     } 
    finally {
      
    }

    
  }


