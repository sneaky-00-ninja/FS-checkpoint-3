# Questions:
## 1) What makes Javascript different from any other programming language?
The most unique thing about JavaScript is that it is the only programing language then can be directly used by a web browser. The reason for this is that it does not have to be compiled like most other languages do. JavaScript was actually purposely designed so that it could be read directily by any web browser without having to be interpreted.  

## 2) What are some JS data types?
JavaScript uses 8 different types of data. There are 7 basic types, and objects.
These data types are: 

-   **String.** Used for storing text. A string is a sequence of characters. 
 `var myString = 'This is a string';`
 
-   **Number.** Any numercial figure, including integers and numbers with decimal places.
  `var myNumber = 6283.5;`

-   **Bigint.** Used for very large numbers, as the "Number" data type is only accurate for integers up to 15 digits long. A Bigint number can be created by appending n to the end of an integer, or by calling the `BigInt()`: function.  
 `var myBigInteger = BigInt(775592547466841);`

-   **Boolean.** For variables with only 2 possible values, "True" or "False". Usually used to check a condition, such as comparing 2 variables to see if they are equal. 
  `var myBoolean = true;` 

-   **Undefined.** When a variable has been created but has no value assigned to it, then it is "Undefined".  
 `let myUndefined;` 

-   **Null.** A variable can intentionally be declared as "Null", which represents the absence of any value. This is usually used when a programmer intends to use a value at some time in the future.  
  `var myNull = null`;


-   **Symbol.**  This is for having a variable that cannot be changed (being immutable). To create a symbol you use the `Symbol()` function.  
 `let mySymbol = Symbol('I am unique.');`

-   **Object.** A group of multiple variables grouped together. 
  `var myObject = {type:"car", make: "toyota", model:"hilux", color:"grey"};`


 
## 3) What are the three OF THE MOST COMMON functions of String in JS?
JavaScript has a series of built in methods that are referred to as string functions, these are used to work with and alter strings. Remember that strings are just sequences of characters.  

It is difficult to say for certain which ones are used more frequently that others, but here are 3 of what seem to be the most useful  and widely used... 

**string.indexOf** 
This will return the index position of the first instance of a character or substring or multiple characters. The desired characters are entered in the brackets as an argument. 
If no such character is found, then **-1** is returned.

    let myText = "The lazy fox ate a dog.";
    let result = text.indexOf("lazy");
In this case, result will equal **4**. The substring "lazy" starts at index 4. 

**string.slice** 
This returns a substring of the original string based on the “start” and “end” index arguments.

    let myText = "The goose ate a duck.";
    let myResult = myText.slice(16,20); 
In this case, myResult will be **duck**, which has characters from index 16 to 19. Remember that with a start and end index as arguments, the start is at the first named index (16 here), and the end is before the second named index (ends at 19 here, with 20 being the second argument).

**string.concat** 
This string function combines two or more strings  and returns a new combined string. 

    let text1 = "Boy ";
    let text2 = "world!";
    let text3 = "eats "
    let newText = text1.concat(text3, text2);

This creates the new string type variable called newText which states **"Boy eats world!"**


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

The main difference is that a name is declared in creating a function declaration, while a function expression is using an function without a name.  
Unnamed functions are known as anonymous function, and there is a shorthand form of this known as an arrow function. 

So the 3 types of functions in JavaScript. These are:
- **Named Functions.** When a function is declared and assigned a keyword as a name, with which it can later be called/used. 
- **Anonymous Functions.** This is when a function is used or created without a keyword being assigned to it. 
- **Arrow Functions.**  A shorthand unnamed function that contain the 2 character arrow "**=>**".

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


## 7) What is the "this" keyword in JS? 
The **THIS** keyword in JavaScript is similar to the **Self** keyword that we used in Python. It is used to refer to or use a specified object in the current instance of a function. "This" can be whatever is currently being processed, or "this" can be the item that the mouse cursor is hovering over, or the last item clicked. Depending on how THIS is called, it could refer to a global object or the object inside which this is used. 

If THIS is used in an object method, then it is referring to the object in which it is called. 
For example: 

    var player = {
      firstName: "Jonah",
      lastName : "Lomu",
      position : "Wing",
      summary : function() {
        return this.lastName + " plays as " + this.positon;
      }
    };
Here, THIS is referring to the player object.  

If THIS is used alone or in a normal function, then it is reffering to a global object. Which in the case of a web browser it is [object window]
