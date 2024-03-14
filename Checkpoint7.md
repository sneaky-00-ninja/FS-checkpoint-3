# Questions:
## 1) What makes Javascript different from any other programming language?
The most unique thing about JavaScript is that it is the only programing language then can be directly used by a web browser. The reason for this is that it does not have to be compiled like most other languages do. JavaScript was actually purposely designed so that it could be read directily by any web browser without having to be interpreted.  

## 2) What are some JS data types?
JavaScript uses 8 different types of data. There are 7 basic types, and objects.
These data types are: 
-   **String.** Used for storing text. 
-   **Number.** Any numercial figure, including integers and numbers with decimal places. 
-   **Bigint.** Used for very large numbers, as the "Number" data type is only accurate up to 15 digits. 
-   **Boolean.** For variables with only 2 possible values, "True" or "False". 
-   **Undefined.** When a variable has been created but has no value assigned to it, then it is "Undefined". 
-   **Null.** A variable can intentionally be declared as "Null", with represents the absence of any value. This is usually used when a programmer intends to use a value at some time in the future. 
-   **Symbol.**  This is for having a variable that cannot be changed (being immutable). 
-   **Object.** A group of multiple variables grouped together. 
- 
## 3) What are the three functions of String in JS?
There are 3 types of functions in JavaScript. These are:
- **Named Functions.** When a function is declared and assigned a keyword as a name, with which it can later be called/used. 
- **Anonymous Functions.** This is when a function is used or created without a keyword being assigned to it. 
- **Arrow Functions.**  A shorthand form of a function that contain the 2 character arrow "**=>**".

####  Named Function
When a function recieves a name at the time of declaration, it fits in to this category. 
For example... 
```
 function adios() {
	 console.log("Sayonara");
 }

adios();
```
####  Anonymous Function
When no name is given during declaration. Instead, the function can be assigned to a variable, as in the following example.

    var greet = function () {
    console.log("Welcome to the party!");
    };
    
    greet();

####  Arrow Function

Containing the 2 characters"**=>**", this is another type of function that has no keyword assigned as a name, but an arrow function can be assigned to a variable so that it can be called by this variable as a name. 
Arrow functions can be used to write functions in less code. It is possible to omit brackets and the "return" keyword, and simple functions can even be coded on a single line.  

Here is a simple anonymous function... 

    hola = function() {  
    return  "Hello World!";  
    }

Here is the same simple function as an arrow function.. 

    hola = () => "Hello World!";

## 4) What is a conditional?

A conditional is a piece of code that will only be executed if certain criteria is met. Most conditionals are achieved with "If" or "If/else" statements. 

For example, if a the value variable is within a certian range of numbers. Or is greater than a given number, or less than a number. Or is a given condition is True/False, depending on the desired outcome.

Examplse... 

    if (age <= 20){
    console.log("Not old enough to drink in USA.");
    }

or 

    if (age <= 8) {
      console.log('You are too young to ride the rollercoaster.');
    } else {
      console.log('Enjoy your ride!');
    }

Note that in JavaScript, as well as the "= =" operator, there is the "= = =" operator. 
The latter is for "exact equal to", which requires both the value and the datatype to be equal to give true as the outcome. 



## 5) What is a ternary operator?
The ternary operator is shorthand alternative to an if/else statement. 

The formular to use is... 
The condition statement, followed by a **?** then the expression to return if True, followed by a **:** then the expression to return if False. 

Here is an example... 

    var beverage = age >= 21 ? "Beer" : "Lemonade";
    console.log(beverage);  

Here the condition is being 21 or older. The expression if true is "Beer" and the expression if False is "Lemonade"


## 6) What is the difference between a function declaration and a function expression?
A function declaration is creating a named function, while a function expression is using an unnamed function. Both of these were described earlier,  in question 3. 



## 7) What is the "this" keyword in JS? 
The **THIS** keyword in JavaScript is similar to the **Self** keyword that we used in Python. It is used to refer to or use a specified object in the current instance. "This" can be whatever is currently being processed, or "this" can be the item that the mouse cursor is hovering over, or the last item clicked. 


# Exercise

### Create a JS function that accepts 4 arguments. Add the first two arguments, then the second two and multiply them. If the number created is greater than 50, the console logs "¡El número es mayor que 50!". If it is smaller, the console logs "¡El número es menor que 50!"

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
      


