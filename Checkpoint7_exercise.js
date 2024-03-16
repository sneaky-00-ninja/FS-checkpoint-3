// INSTRUCTIONS...
// Create a JS function that accepts 4 arguments. 
//   Add the first two arguments, then the second two and multiply them. 
//   If the number created is greater than 50, the console logs “¡El número es mayor que 50!”. 
//   If it is smaller, the console logs “¡El número es menor que 50!”

function getFifty(num1, num2, num3, num4) {
  var product = (num1 +  num2) * (num3 + num4);
  if (product > 50){
    console.log('¡El número es mayor que 50!')    
  }else if (product < 50){
    console.log('¡El número es menor que 50!')    
  }else{
    console.log('Es 50')    
  }
} 

getFifty(3, 7, 2, 4);
