# Checkpoint 6

# Questions: 
## 1)... For what do we use Classes for in Python?

**Classes are used to create objects**. 

Each class creates a new type of object, and multiple instances of this object can easily be made by using the class. It is like a blueprint or template for creating objects or instances. 

Using classes makes a program more efficient because is re-uses code.  The same result can always be achieved without using classes, but this will usually require many more lines of code.

A class can contain methods. (A method is like an internal function inside of a class.) 
Methods within a class can be used for modifying the state of objects or instances, or to perform tasks. 
It usually makes sense to use classes when with more than just one single method, because a single function will be sufficient and is more straight forward. 
In the following example, we execute the class twice to create two objects. Amd the "details" method is used twice to print a line using the attributes of each object.

    class Veg: 
      def __init__(self, name, colour):
        self.name = name
        self.colour = colour
    
      def details(self):
        print(f'This is a {self.name} and it is {self.colour}')
    
    pumpkin = Veg('Pumpkin', 'Orange')
    pumpkin.details()
    pea = Veg('Pea', 'Green')
    pea.details()




## 2)... Which method is automatically executed when a class is instantiated?

The `__init__` ("dunder init") constructor method will automatically run each time you create a class instance. It has a reserved name, like all other dunder methods. 
When this happens one or more objects are initialized, and this constructor method assigns values or attributes to these objects. 

In the example class shown in question 1, the dunder init method was used, even though it wasn't called. 
It used the "self" parameter, which always represents the current instance. 

Extract from example above: 

    class Veg: 
      def __init__(self, name, colour):
        self.name = name
        self.colour = colour




## 3)... What are the three API verbs?

API stands for **Application Programming Interface**. 

The three most common API verbs are **GET, PUT, and POST**. 
**PATCH and DELETE** are also common. 

**GET** is used to request data information from a server or database. It will not make any changes to the server/database. 
**PUT** will update an existing variable on the server/database. Overwriting the previousvalue. 
**POST** will create a new resource or variable on the server/database. 
**PATCH** is similar to PUT, but will only partially modify the resource/variable on the server/database. 
**DELETE** will remove a variable on the server/database. 

## 4)... Is MongoDB a SQL or NoSQL database?

MongoDB is unstructured. Therefore it is classed as a NoSQL database. 
But what is SQL and what is NoSQL? 

SQL stands for **Structured Query Language**. It can be used to create or modify tables of data or other index structures, or to retrieve information from a database. But SQL is only able to communicate with Relational Databases, which scale vertically (meaning that as more data is stored, they table effectively just grows taller and taller). 
Some well known SQL systems are Microsoft SQL Server, Oracle Database, IBMDB2 and MySQL. 


NoSQL stands for **Not only SQL** and is the alternative to SQL. NoSQL can work with relational databases but also any non-relational database, 
So NoSQL systems do not have a fixed data structure and they can allow large volumes of unstructured or semi-structured data to be stored and managed. 
 One major advantage of NoSQL systems is that they are scalable across many servers, so are more suitable for accessing huge volumes of data. 
 Common NoSQL systems other than MongoDB include Redis and Apache Cassandra.  
 

## 5)... What is an API?

As mentioned in question 3 API stands for **Application Programming Interface**.

It is a tool used for sharing data by sending requests and recieving responses between different pieces of software. These can be useful for getting information from a local or external database.  The API in the interface between a client and a API server (the database). 

An analogy for an API is a waiter in a restaurent who communicates and moves orders between  customer to the kitchen. In this case the customer is the client, and the kitchen is the API server. Your GET requests would include asking to see a menu, ordering an item, or requesting the bill, and the waiter (like an API) assits with all of your interaction with the kitchen. 

## 6)... What is Postman?

The Postman application is an easy to use API client, a software tool for building and using APIs. 
It is a user-friendly tool for communication with external APIs, allowing you to interact by using the API verbs mentioned in question. It is versitile and can be used with a wide range of programming languages. 

Postman allows you to interact with a chosen server by using the API verbs mentioned in question 3, as well as a few others. 
With Postman the data retrieved can be formatted so that it is easy to read. 

## 7)... What is polymorphism?

The name Polymorphism translates to "many forms", which accurately describes what polymorphism is, it's when a variable/function/object has the ability to take on multiple forms. 

The following is an example of polymorhism. (note that the function has one name but more than one way of being used.) 

    print(len("Excelent"))
    print(len([24, 45, 56, 708, 890])) 

Here, the built-in function "len" is used for 2 different data types. Once for a string, and once for a list. 

Another example is when multiple classes contain the same method name.

    class Raven:
      def fly(self):
        print("This is a raven, it can fly.")
    
    class Kiwi:
      def fly(self):
        print("This is a kiwi, it cannot fly.")
    
    def flying_test(bird):
      bird.fly()
    
    Tom = Raven()
    Manu = Kiwi()
    
    flying_test(Tom)
    flying_test(Manu)

Here the "fly" function is executed with different signatures from different classes, therefore it is another example of polymorphism.  


Polymorphism can also be achieved with inheritance, when child classes use methods with the same name as methods in it's parent class. As in the example below where the vehicle class is called by its 2 child classes.  

    class Vehicle:
      def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    class Car(Vehicle):
      def travel(self):
        print("This will drive on the ground!")
    
    
    class Plane(Vehicle):
      def travel(self):
        print("This will fly in the sky!")
    
    car1 = Car("Toyota", "Carolla") 
    plane1 = Plane("Boeing", "747")
    car1.travel()
    plane1.travel()


## 8)... What is a dunder method?

Python has a number of predefined methods who's names begin and end with a double underscore. These are known as dunder methods. The word “dunder” is short for “double underscore”. 
Dunder methods allow instances of a class to work with the built-in functions and operators of python. 

Some common dunder methods are:

 `__init__` ,  `__add__` ,  `__len__` , `__new__` , __repr__  and `__str__` 

 The `__init__` method was breifly visited in question 2. 
Some dunder methods are called in the background without when operators are used, such as the `__add__` method which is used internally when a "+" is utilised for adding. 

## 9)... What is a python decorator?

Decorators are used to modify the behaviour of function or class.  With a decorator you can extend the functionality of a function without actually changing the original function. 
You can spot a decorator easily as it begins with an @ symbol. This symbol is followed by the name of a function defined earlier in the program, and the code written in this earlier defined function will be utilised before the new code in the decorator function. 

Here is an incomplete example, just to show layout and order to use a decorator:

    def original_fun(func):
        def first_stuff():
             primary code goes here. 
    
    @original_fun 
    def second_stuff() 
            new secondary code goes here. 
         
And in this following  example applying the template above, we will use the vehicle function below as a decorator twice, once with car and once with train. 

    def vehicle(func):
      def wrapper():
        print("We can't stay here.")  
        func()
        print("Let's move now!")
      return wrapper
    
    @vehicle
    def car():
        print("In this car")
    
    @vehicle
    def train():
        print("In that train")
    
    car()
    train()






# Exercise:      
## Create a Python class called User that uses the init method and creates a username and a password. Create an object using the class.


   
    class User:
  
    def __init__(self, username, password):
      
		print("Creating the User object")
      
        self.username = username
      
        self.password = password


    user1 = User("Joe", "Smith")

    print("Username is: " + user1.username)

    print("Password is: " + user1.password)

