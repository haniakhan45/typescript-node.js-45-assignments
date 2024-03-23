16; //More Guests: You just found a bigger dinner table, so now more space is
//available. Think of three more guests to invite to dinner.

//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
//bigger dinner table.

let guestAr: string[] = ["Laiba", "Maham", "Javeria", "Hania"];

let canNotAttend1: string = "Javeria";

let newGuest1: string = "Alishba";

guestAr[guestAr.indexOf(canNotAttend1)] = newGuest1;
console.log(guestAr);

guestAr.map((items) =>
  console.log(
    `Dear ${items}, I found a bigger dinner table so I am invited more people. `
  )
);

//part.2
//Add one new guest to the beginning of your array.

let guestBeg: string = "Aniqa";
guestAr.unshift(guestBeg);
console.log(guestAr);

//part.3
//Add one new guest to the middle of your array.

let middleGuest: string = "sara";
let middleIndex = guestAr.length / 2;
guestAr.splice(middleIndex, 0, middleGuest);
console.log(guestAr);

//part.4
//Use append() to add one new guest to the end of your list.

guestAr.push("fatima");
console.log(guestAr);

//part.5
//Print a new set of invitation messages, one for each person in your list.

guestAr.map((items) =>
  console.log(`Dear ${items},You are invited more people category on dinner`)
);

17; //Changing Guest List: You just heard that one of your guests can’t make the
//dinner, so you need to send out a new set of invitations. You’ll have to think of
//someone else to invite.

//// Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

let guests: string[] = ["Huma", "Alizey", "Madiha", "Ayesha", "Sara"];
console.log("Due to limited space, only two people can be invited for dinner.");

//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
//a message to that person letting them know you’re sorry you can’t invite them to dinner.

while (guests.length > 2) {
  let removedGuest = guests.pop();
  console.log(`sorry, ${removedGuest}, you're no longer invited to dinner.`);
}

//Print a message to each of the two people still on your list, letting them know they’re still invited.

let guest: string[] = ["Huma", "Alizey"];
guest.forEach((guest) => {
  console.log(`Dear, ${guest}, you're still invited to dinner.`);
});

//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
//of your program.

guest.pop();
guest.pop();

console.log("Final guest list:", guest);

18; // Seeing the World: Think of at least five places in the world you’d like to visit.

//Store the locations in a array. Make sure the array is not in alphabetical order.
let placesToVisit: string[] = [
  "Pakistan",
  "Azerbaijan",
  "London",
  "Greece",
  "Japan",
];

//Print your array in its original order.

console.log("Original order:", placesToVisit);

//Print your array in alphabetical order without modifying the actual list.

console.log("Alphabetical order:", [...placesToVisit].sort());

// Show that your array is still in its original order by printing it.

console.log("Original order after sorting:", placesToVisit);

//Print your array in reverse alphabetical order without changing the order of the original list.

console.log("Reverse alphbetical order:", [...placesToVisit].sort().reverse());

//Show that your array is still in its original order by printing it again.

console.log("Original order after reverse sorting:", placesToVisit);

//Reverse the order of your list. Print the array to show that its
// order has changed.

placesToVisit.reverse();
console.log("Reverse order:", placesToVisit);

//Reverse the order of your list again. Print the list to show it’s back to its original order.

placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

placesToVisit.reverse();
console.log("Sorted in alphbetical order:", placesToVisit);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);

19; //Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
//of people you are inviting to dinner.

let invitation: string[] = ["Huma", "Alizey"];
let count_invitation: number = invitation.length;

console.log(`${count_invitation} people will come to the dinner`);

20; // Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.

let rivers: string[] = ["Indus", "Ravi", "Jhelum", "Kabul", "chenab"];
console.log("List of rivers:", rivers);

21; //They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let person: { name: string; fname: string; age: number } = {
  name: "Hania",
  fname: "Female",
  age: 19,
};
console.log(person);

22; //Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
//to produce an index error. Make sure you correct the error before closing the program.

let fruit: string[] = [
  "Orange",
  "Mango",
  "Bannana",
  "Apple",
  "Grapes",
  "Watermelon",
];
//console.log(fruit{6});
console.log(fruit[5]);

23; //Conditional Tests: Write a series of conditional tests. Print a statement
//describing each test and your prediction for the results of each test. Your code
//should look something like this:

//Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = "subaru";

console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru"); //true

console.log("Is car == 'honda city'? I predict False.");
console.log(car == "honda city"); //false

console.log("Is car == 'toyota'? I predict False.");
console.log(car == "toyota"); //false

console.log("Is car == 'SUBARU'? I predict False.");
console.log(car == "SUBARU"); //false

console.log("Is car.lenght == 6? I predict True");
console.log(car.length == 6); //true

console.log("Is car.lenght == 10? I predict False");
console.log(car.length == 10); //false

console.log("Is 10 > 45 ? I predict False");
console.log(10 > 45); //false

console.log("Is 10 > 5 ? I predict True");
console.log(10 > 5); //true

console.log("Is 72 > 63 ? I predict True");
console.log(72 > 63); //true

console.log("Is car == 'subaru' && car.lenght == 6? I predict True");
console.log(car == "subaru" && car.length == 6); //true

24; // More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//Tests for equality and inequality with strings

let name_1: string = "Hello";
let name_2: string = "Hello";
let name_3: string = "hello";

console.log("Testing equality and inequality with strings:");
console.log(name_1 == name_2); //true
console.log(name_1 == name_3); //false

// Tests using the lower case function

console.log("Testing with lower case :");
console.log(name_1.toLowerCase() == name_3); //true
console.log(name_1.toLowerCase() == name_2.toLowerCase()); //true

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log("Numerical test:");
let age_1: number = 17;
let age_2: number = 19;
let age_3: number = 17;

console.log(age_1 == age_2); //false
console.log(age_1 != age_2); //true
console.log(age_1 < age_2); //true
console.log(age_1 <= age_2); //true
console.log(age_1 > age_2); //false
console.log(age_1 >= age_2); //false
console.log(age_1 == age_3); //true
console.log(age_1 != age_3); //false

// Tests using "and" and "or" operators

console.log("Test with 'and' and 'or':");
console.log(age_1 == age_3 && age_2 > age_1); //true
console.log(!(age_1 == age_3)); //false

// Test whether an item is in a array

let array: string[] = ["Hello", "world", "Typescript"];

console.log("Is item array?:");
console.log(array.includes(name_1)); //true
console.log(array.includes("foo")); //false

// Test whether an item is not in a array

console.log("Is item not array?:");
console.log(!array.includes("foo")); //true

25; // Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.

let alien_color: string = "green";
if (alien_color == "green") {
  console.log("player just earned 5 point.");
}

// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)

let alien_color1: string = "yellow";
if (alien_color1 == "green") {
  console.log("No output");
}

26; // Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// Write one version of this program that runs the if block and another that runs the else block.

let alien_color2: string = "green";
if (alien_color2 == "green") {
  console.log("player just earned 5 points for shooting the alien.");
} else {
  console.log("player just earned 10 points.");
}

let alien_color3: string = "yellow";
if (alien_color3 == "green") {
  console.log("player just earned 5 points for shooting the alien.");
} else {
  console.log("player just earned 10 points.");
}

27; // Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// If the alien is green, print a message that the player earned 5 points.
// Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alien: string = "green";
if (alien == "green") {
  console.log("player earned 5 points.");
} else if (alien == "yellow") {
  console.log("player earned 10 points.");
} else {
  console.log("player earned 15 points.");
}

// If the alien is yellow, print a message that the player earned 10 points.

let aliens: string = "yellow";
if (aliens == "green") {
  console.log("player earned 5 points.");
} else if (aliens == "yellow") {
  console.log("player earned 10 points.");
} else {
  console.log("player earned 15 points.");
}

// If the alien is red, print a message that the player earned 15 points.

let alie: string = "red";
if (alie == "green") {
  console.log("player earned 5 points.");
} else if (alie == "yellow") {
  console.log("player earned 10 points.");
} else {
  console.log("player earned 15 points.");
}

28; // Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// If the person is less than 2 years old, print a message that the person is a baby.
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// If the person is age 65 or older, print a message that the person is an elder.

let age: number = 30;

if (age < 2) {
  console.log("you are a baby");
} else if (age < 4) {
  console.log("you are a toddler");
} else if (age < 13) {
  console.log("you are a kid");
} else if (age < 20) {
  console.log("you are a teenager");
} else if (age < 65) {
  console.log("you are a adult");
} else {
  console.log("you are a older");
}

29; // Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// Make a array of your three favorite fruits and call it favorite_fruits.
// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

let favorite_fruits: String[] = [
  "apple",
  "banana",
  "orange",
  "peach",
  "cherrie",
];

if (favorite_fruits.includes("apple")) {
  console.log("You really like apple!");
}
if (favorite_fruits.includes("banana")) {
  console.log("You really like banana!");
}
if (favorite_fruits.includes("orange")) {
  console.log("You really like orange!");
}
if (favorite_fruits.includes("peach")) {
  console.log("You really like peach!");
}
if (favorite_fruits.includes("cherrie")) {
  console.log("You really like cherrie!");
}

30; //Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. -->

let users: string[] = ["admin", "fariha", "fatima", "madiha", "areeba"];

for (let user of users) {
  if (user === "admin") {
    console.log("Hello admin,  would you like to see a status report?");
  } else {
    console.log(`Hello ${user}, thank you for logging in again`);
  }
}
