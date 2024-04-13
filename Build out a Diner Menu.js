var currentItem = "none";
var orderOpen = true;
var totatCost = 0;
var currentItem = null;
var currentItemCost = 0;
var ordered = [];
var multiplier = 1;
var whichMenu = null;
var timeHour = "midnight";
var deal = false;
var currentMenu = [];

const comments = ["Yummy.", "Nice!!!", "My dad had that yesterday.", "That is a popular choice.", "Mmmm, I think I'll have that too.", "I knew you'd choose that."]; 

const prices = new Map([  
  	["toast", 1],
 	["fruit", 2],
 	["eggs", 3],
 	["bacon", 4],
 	["soup", 4],
 	["snails", 6],  
 	["frogs", 8],
 	["chips", 2],  
	["carrots", 4],
 	["peas", 4],  
	["chuleta", 24],
	["fish", 18],  
	["tea", 1], 
	["coffee", 2], 
	["juice", 2], 
	["soda", 2], 
	["wine", 4], 
	["beer", 4],
	[" ", 0],	
]);

const brekMenu =[
    {item: 'toast', cost: 1},
    {item: 'fruit', cost: 2},
    {item: 'eggs', cost: 3},
    {item: 'bacon', cost: 4}
];

const brekDrinkMenu =[
    {item: 'tea', cost: 1},
    {item: 'coffee', cost: 2},
    {item: 'juice', cost: 2}
];

const entreeMenu =[
    {item: 'frogs', cost: 4},
    {item: 'snails', cost: 6},
    {item: 'soup', cost: 8}
];

const sideMenu =[
    {item: 'chips', cost: 2},
    {item: 'carrots', cost: 4},
    {item: 'peas', cost: 6}
];
const mainMenu =[
    {item: 'chuleta', cost: 24},
    {item: 'fish', cost: 18},
];

const drinkMenu =[
    {item: 'coffee', cost: 2},
    {item: 'soda', cost: 2},
    {item: 'wine', cost: 4},
    {item: 'beer', cost: 4}
];


      // brekMenu      // alert(`Here is the breakfast menu: \n ${showBrekMenu}`);
let showBrekMenu = brekMenu.map(function(e){
  return `${e.item} ${e.cost}€` +"\n";
});


      // brekDrinks      // alert(`For breakfast drinks we have: \n ${showBrekDrinkMenu}`);
let showBrekDrinkMenu = brekDrinkMenu.map(function(e){
  return `${e.item} ${e.cost}€` +"\n";
});


      // entreeMenu      // alert(`The entrees are: \n ${ShowEntreeMenu}`);
let ShowEntreeMenu = entreeMenu.map(function(e){
  return `${e.item} ${e.cost}€` +"\n";
});  
  

      // sideMenu      // alert(`The side dishes are: \n ${ShowSideMenu}`);
let ShowSideMenu = sideMenu.map(function(e){
  return `${e.item} ${e.cost}€` +"\n";
});  
  

      // mainMenu      // alert(`The main dishe options are: \n ${ShowMainMenu}`);
let ShowMainMenu = mainMenu.map(function(e){
  return `${e.item} ${e.cost}€` +"\n";
});


      // drinkMenu      // alert(`What would you like to drink? Your choices are: \n ${ShowDrinkMenu}`);
let ShowDrinkMenu = drinkMenu.map(function(e){
  return `${e.item} ${e.cost}€` +"\n";
});


const enterHour = () => {
	alert("Schedule... \n 6:00-10:59 breakfast \n 11:00-16:59 lunch \n 17:00-21:59 dinner")
  timeHour = prompt(`What is the current Hour of the day, in 24:00 format? \n Please enter a value between 00 and 23`);
  console.log(timeHour);
  if (timeHour == null || timeHour == "") {
    alert("You must enter a number!!!");
    enterHour ();    
  } else if (timeHour > 23) {
    alert("You must enter a number less than 24 !!!");
    enterHour ();
  } else {
    if (timeHour >= 0 && timeHour <= 23) {
      alert(`The time is between ${timeHour}:00 and ${timeHour}:59 `)
    } else {
      alert("Please state the time! \n(My watch isnt working.)");      
      enterHour ();
    }    
  }
}


const brekLunchOrDinner = () => {
  if (timeHour < 6) {
    alert("We are closed. Please come back after 6am.");
  } else if (timeHour < 11) {
    alert("We are open for breakfast.");
    breakfast();
  } else if (timeHour < 17) {
    alert("We are open for lunch.");
    lunch();
  } else if (timeHour < 22) {
    alert("We are open for dinner.");
    dinner();
  } else if (timeHour >= 22) {
    alert("Sorry, we are closed. Please return tomorrow at an earlier time.");
  }  
}


const entree = () => {
  currentItem = prompt("For ENTREE... frogs or snails or soup ?");
  currentItem = currentItem.toLowerCase();
  if (currentItem === "frogs" || currentItem === "snails" || currentItem === "soup") {
	waitressComment();  
  } else {
		alert("No such item.");
    	currentItem = " ";
  }
}


const side = () => {
  currentItem = prompt("For SIDE... chips or carrots or peas ?");
 currentItem = currentItem.toLowerCase();
  if (currentItem === "chips" || currentItem === "carrots" || currentItem === "peas") {
    waitressComment();  
  } else {
    	alert("No such item.");
    	currentItem = " ";
  }
}

const dealChoice = () => {
  deal = confirm("Would you like one entree and two side choices at the regular lunchtime cost?");
  if (deal === true) {
	multiplier = 1;
    entree();
    side();
    side();
	multiplier = 1.5;
  } 
}  


const breakfast = () => {
	alert("what would you like to drink?");
	currentMenu = showBrekDrinkMenu;
	takeOrder();
	alert("what would you like to eat?");
	currentMenu = showBrekMenu;
	takeOrder();
	alert(`Your order is... \n ${ordered} \n Total cost is... € ${totatCost}`);
}


const lunch = () => {
	alert("what would you like to drink?");
	currentMenu = ShowDrinkMenu;
	takeOrder();
	alert("For entree...");
	currentMenu = ShowEntreeMenu;
	takeOrder();
	alert("for sides...");
	currentMenu = ShowSideMenu;
	takeOrder();	
	alert("for main course...");
	currentMenu = ShowMainMenu;
	takeOrder();	
	alert(`Your order is... \n ${ordered} \n Total cost is... € ${totatCost}`);
}


const dinner = () => {
	multiplier = 1.5;
	alert("Please note that dinner items costs 50% more than lunchtime prices!!! \n (and this menu only shows the lunchtime prices)");  
	alert("what would you like to drink?");
	currentMenu = ShowDrinkMenu;
	takeOrder();
	alert("what would you like to eat? ...");
	dealChoice();
	if (deal === false) {
		alert("For entree...");
		currentMenu = ShowEntreeMenu;
		takeOrder();
		alert("for sides...");
		currentMenu = ShowSideMenu;
		takeOrder();		
	} 
	alert("for main course...");
	currentMenu = ShowMainMenu;
	takeOrder();	
	alert(`Your order is... \n ${ordered} \n Total cost is... € ${totatCost}`);
}


const waitressComment = () => {
	currentItemCost = prices.get(currentItem)*multiplier; 
	totatCost = totatCost + currentItemCost;
	ordered.push(currentItem);
	var currentComment = comments[(Math.floor(Math.random() * comments.length))];
	alert(`${currentItem} , ${currentComment} `);
	alert(`That costs € ${currentItemCost}`);
}



const takeOrder = () => {
	orderOpen = true;
	while (orderOpen == true) {
		currentItem = prompt(`What item do you choose now? \n ${currentMenu} \n \n (enter "0" to finish this part of the order)`);
		if (currentItem === null || currentItem === ""  ) {
			alert(`you must enter an item. \n or "0" (zero) to continue.`)
			currentItem = "no entry";
		} else {
			currentItem = currentItem.toLowerCase();
			if (currentItem === "0") {
				orderOpen = false;
				alert("Okay.");
			} else if (prices.has(currentItem)) {
				waitressComment();
				var more = confirm("Anything else?");
				if (more === false){
					orderOpen = false;
				}
			} else {
			alert("HAHA! That is not even on the menu. \n \n Make sure you are reading our current meun. \n (or... maybe check your spelling?)")
			currentItem = "no entry";
			}
		}
	}  // end of while loop. 
}  // end of takeOrder function. 




alert("Welcome to McYummy's Restaurant.");
enterHour();
brekLunchOrDinner();
