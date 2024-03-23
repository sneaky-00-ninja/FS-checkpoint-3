// PRACTICAL EXERCISE for Couse Checkpoint 8.

// INSTRUCTIONS: Part 1
//  -Create a for loop in JS that prints each name in this list. myList = “velma”, “explorer”, “jane”, “john”, “harry”
const myList = ['velma', 'explorer', 'jane', 'john', 'harry'];

var printList = () => {
  for (name in myList) {
    console.log(myList[name]);
  }
}

printList();


// INSTRUCTIONS: Part 2
//  -Create a while loop that loops through the same list and also prints the names. Note: Remember to create a counter so that the cycle is not infinite.
var printAgain = () => {
  counter = 0;
  while (counter < myList.length){
    console.log(myList[counter]);    
    counter++;
  }
}

printAgain();


// INSTRUCTIONS: Part 3
//  -Create an arrow function that returns "Hello world".
const hiWorld = () => {
  console.log("Hello world"); 
}

hiWorld(); 
