var totatCost = 0;
var currentItem = null;
var currentItemCost = 0;
var ordered = [];
var multiplier = 1;
var whichMenu = null;
var timeHour = "midnight";

const comments = ["Yummy.", "Nice.", "My dad ate that yesterday.", "That is a popular choice.", "Mmmm, I think I'll have that too."]; 

const prices = new Map([  
  ["toast", 1],
  ["fruit", 2],
  ["eggs", 3],
  ["bacon", 4],
  ["frogs", 4],
  ["snails", 6],  
  ["soup", 8],
  ["chips", 2],  
  ["carrots", 4],
  ["peas", 6],  
  ["chuleta", 24],
  ["fish", 18],  
]);



const enterHour = () => {
  timeHour = prompt(`What is the current Hour of the day, in 24:00 format? \n Please enter a value between 00 and 23 `);
  console.log(timeHour);
  //timeHour = Number(timeHour);
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
console.log("Hour is " + timeHour);
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
    alert("Sorry, we are closed.");
  }  
}






const listen = () => {
  currentItemCost = prices.get(currentItem)*multiplier; 
  totatCost = totatCost + currentItemCost;
  ordered.push(currentItem);
}    
  
  
const waitressComment = () => {
  alert(comments[(Math.floor(Math.random() * comments.length))]);  
  alert(`That costs € ${currentItemCost}`);
}

const entree = () => {
  currentItem = prompt("For ENTREE... frogs or snails or soup ?");
  currentItem = currentItem.toLowerCase();
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
 currentItem = currentItem.toLowerCase();
  if (currentItem === "chips" || "carrots" || "peas") {
    listen();
    waitressComment();  
  } else {
    alert("No such item.");
    currentItem = null;
  }
}

const main = () => {
  currentItem = prompt("For MAIN... chuleta or fish ?");
 currentItem = currentItem.toLowerCase();
  if (currentItem === "chuleta" || "fish") {
    listen();
    waitressComment();  
  } else {
    alert("No such item.");
    currentItem = null;
  }
}

const dealChoice = () => {
  var deal = confirm("Would you like one entree and two side choices at regular cost? \n (and no main)");
  if (deal === true) {
    entree();
    side();
    side();
    alert(`Your order is... \n ${ordered} \n Total cost is... € ${totatCost}`);
  } else {
     var mainSelect = confirm("Would you like one main?");
     if (mainSelect === true) {
       main();    
      alert(`Your order is... \n ${ordered} \n Total cost is... € ${totatCost}`);
     } else {
       alert("Please come back when you are hungry.");       
     }
  }  
}  


const breakfast = () => {
  alert("Today's Breakfast menu... \n   \n toast €1  \n fruit €2 \n eggs €3 \n bacon €4 ");
  currentItem = prompt("For BREAKFAST... toast or fruit or eggs or bacon?");
  currentItem = currentItem.toLowerCase();
  if (currentItem === "toast" || "fruit" || "eggs" || "bacon") {
    listen();
    waitressComment();  
  } else {
    alert("No such item.");
    currentItem = null;
  }  
//  alert(`Total cost is... € ${totatCost}`);
}

const lunch = () => {
  alert("This is great! lunch is cheap for you here.");
  alert("Today's Lunch menu... \n  \n ENTREES  \n frogs €8 \n snails €6  \n soup €4 \n  \n SIDES  \n chips €2 \n carrots €4 \n peas €6   \n \n MAINS  \n chuleta €46  \n fish €32 ");
  dealChoice();
}
 
const dinner = () => {
    alert("Please note that dinner costs 50% more than lunchtime prices.");  
    multiplier = 1.5;  
    alert("Today's Dinner menu... \n  \n ENTREES  \n frogs €12 \n snails €9  \n soup €6 \n  \n SIDES  \n chips €3 \n carrots €6 \n peas €69  \n \n MAINS  \n chuleta €69  \n fish €48 ");
    dealChoice();  
}




alert("Welcome to McYummy's Restaurant. \n  ");
enterHour ();
brekLunchOrDinner ();
