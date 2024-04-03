var totatCost = 0;
var currentItem = null;
var currentItemCost = 0;
var ordered = [];
var multiplier = 1;

const comments = ["Yummy.", "Nice.", "My dad ate that yesterday.", "That is a popular choice.", "I think I'll have that too."]; 

const prices = new Map([
  ["frogs", 4],
  ["snails", 6],  
  ["soup", 8],
  ["chips", 2],  
  ["carrots", 4],
  ["peas", 6],  
  ["chuleta", 46],
  ["fish", 32],  
]);

const listen = () => {
  currentItemCost = prices.get(currentItem)*multiplier; 
  totatCost = totatCost + currentItemCost;
}
const waitressComment = () => {
  alert(comments[(Math.floor(Math.random() * comments.length))]);  
  alert(`That costs € ${currentItemCost}`);
}

const entree = () => {
  currentItem = prompt("For ENTREE... frogs or snails or soup ?");
  if (currentItem === "frogs" || "snails" || "soup") {
    listen();
    waitressComment();  
  } else {
    alert("No such item.");
    currentItem = null;
  }
}

const side = () => {
  currentItem = prompt("For SIDE... chips or carrots or peas ?");
  if (currentItem === "chips" || "carrots" || "peas") {
    listen();
    waitressComment();  
  } else {
    alert("No such item.");
    currentItem = null;
  }
}

alert("Welcome to McYummy's Restaurant. \n  ");
var whichMenu = prompt(`Are you here for breakfast, lunch or dinner? \n \n  ENTER \n "b" for breakfast \n "l" for lunsh \n "d" for dinner.`);

if (whichMenu === null) {
  alert("Eat something!");
}
console.log(whichMenu);

if (whichMenu === "b") {
  alert("Sorry, breakfast menu is no longer available! \n Try again tomorrow before 10am.");
}

if (whichMenu === "l") {
  alert("Great, lunch is cheap for you here.");
  var deal = confirm("Would you like one entree and two side choices at regular cost? \n (and no main)");
  if (deal === true) {
    entree();
    side();
    side();
    alert(`Total cost is... € ${totatCost}`)
    

  }
}

  if (whichMenu === "d") {
    alert("Great, but please note that dinner costs 50% more than lunchtime prices.");
    multiplier = 1.5;
    // TODO enter item.
    alert("Actually, sorry! Dinner doesn´t start till 7pm \n Please come back later.");   
  }



