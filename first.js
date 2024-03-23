1; // Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/download)  and [VS Code](https://code.visualstudio.com/) on your computer.
// installation completed
2; // Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var personName = "Eric";
console.log("Hello ".concat(personName, ", would you like to learn some python today?"));
3; // Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName1 = "Hania khan";
//in lowercase
console.log("lowercase:", personName1.toLowerCase());
//in uppercase
console.log("uppercase:", personName1.toUpperCase());
//in titlecase
console.log("titlecase:", personName1.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
4; // Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
// following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var famousQuote = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
console.log("\"".concat(author, "\" once said,\"").concat(famousQuote, "\""));
5; // Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Albert Einstein";
var message = "\"".concat(famous_person, "\" once said, \"").concat(famousQuote, "\"");
console.log(message);
6; // Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var personName2 = "\t\n Hania khan \n\t";
console.log("whitspace:", personName2);
console.log("Stripped:", personName2.trim());
7; // Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
8; // You should create four lines that look like this:
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
9; // Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favoriteNumber = 6;
console.log("My favorite number is ".concat(favoriteNumber, "."));
10; // Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
// because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
//  describing what the program does.
//author: [HaniaKhan]
//Date: [Teusday , feburary 19 , 2024]
//task 9: printing my favorite number
var favoriteNumber1 = 6;
//reveling my favorite number in a message formate.
console.log("My favorite number is ".concat(favoriteNumber1, "."));
11; // Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["Laiba", "Maham", "Javeria"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
12; // Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
var names1 = ["Laiba", "Maham", "Javeria"];
var message1 = "Do you like to play criket.";
console.log(names1[0] + " " + message1);
console.log(names1[1] + " " + message1);
console.log(names1[2] + " " + message1);
13; // Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ["Toyota Corolla", "Audi etron", "Honda City"];
transportation.map(function (items) { return console.log("I would like to own a ".concat(items, ".")); });
14; // Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestArray = ["Laiba", "Maham", "Javeria"];
guestArray.map(function (items) {
    return console.log("Dear, ".concat(items, " You are invited to the dinner."));
});
15; //Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
var guestArr = ["Laiba", "Maham", "Javeria"];
var canNotAttend = "Laiba";
console.log(canNotAttend + " " + "can not attend the dinner.");
//• Modify your list, replacing the name of the guest who can’t make it with
//the name of the new person you are inviting.
var newGuest = "Hania";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// • Print a second set of invitation messages, one for each person who is still
// in your list.
guestArr.map(function (items) {
    return console.log("Dear, ".concat(items, " You are invited to the dinner."));
});
