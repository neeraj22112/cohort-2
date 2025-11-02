// // 1. Print number from 1 to 10

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// //2. Print only even numbers from 1 to 20

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// // 3. Print number from 10 to 1

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// // 4. Print the word "yes"  5 times

// for (let i = 1; i <= 5; i++) {
//   console.log("Yes");
// }

// // 5. Print wether number even or odd btw 1 to 10

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is Even`);
//   } else {
//     console.log(`${i} is Odd`);
//   }
// }

// //6. Ask user for a number and check if it's Positive or negative

// let num = +prompt("Give a number");
// if (num >= 0) console.log(`${num} is Positive`);
// else console.log(`${num} is Negavite`);

// //7. Ask user its Age and check if it is eligible for vote or not

// let age = prompt("Enter your age:");

// if (age === null) {
//   console.error("You canceled");
// } else if (age.trim() === "") {
//   console.error("Please enter your age kindly");
// } else if (isNaN(age)) {
//   console.error("Please enter your age in number");
// } else {
//   age = Number(age);
//   if (age >= 18) {
//     console.log("You are eligible to vote");
//   } else {
//     console.log("You are not eligible to vote");
//   }
// }

// // 8. Print multiplication table of 5

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 * ${i} = ${5 * i}`);
// }

// //9. Count how many numbers between 1 and 15 are greater than 8

// let count = 0;
// for (let i = 1; i <= 15; i++) {
//   if (i >= 8) {
//     count++;
//   }
// }
// console.log(`Digits grater then 8 in between 1 to 15 are: ${count}`);

// // 10. Ask user for password and print access status

// let userInput = prompt("Enter your password");
// let usr_password = "Shadow123";
// userInput === usr_password
//   ? console.log("Login complete!!")
//   : console.log("Access denied");

// //11. Allow only 3 attempts to enter correct password. If user gets it right early, stop. If not → “Account locked”

// let pasword = "neeraj123";
// for (let i = 1; i <= 3; i++) {
//   let userinput = prompt("Enter tour password");
//   if (pasword === userinput) {
//     console.log("Access Granted");
//     break;
//   } else {
//     if (i === 3) {
//       console.log("Account Locked");
//     } else {
//       console.log("Wrong Password ! Try Again");
//     }
//   }
// }

// //12. Ask user for words until they type “stop”. Count how many times they typed “yes” Loop until "stop" is typed. Count "yes".

// let count = 0;
// let word;
// while (true) {
//   word = prompt(`Enter any word and type "stop" to end it:`);

//   if (word === "stop") {
//     break;
//   }
//   if (word === "yes") {
//     count++;
//   }
// }
// console.log(`You type 'yes' ${count} times`);

// //13. Print numbers divisible by 7 from 1 to 50. Use modulo % and loop.

// for (i = 1; i <= 50; i++) {
//   if (i % 7 === 0) {
//     console.log(`${i} is divisible by 7`);
//   }
// }

// //14.  Sum of all odd numbers from 1 to 30. Add only odd numbers. Print final sum.

// let sum = 0;
// for (i = 1; i <= 3; i++) {
//   if (i % 2 === 1) {
//     sum += i;
//   }
// }
// console.log(`Sum of odd numbers is ${sum}`);

// //15. Keep asking number until user enters an even number. Use while loop. Stop only if input is even.

// let num;

// while (true) {
//   num = +prompt("Enter a number:");

//   if (num % 2 === 0) {
//     console.log("Even number entered!");
//     break;
//   } else {
//     console.log("It is a odd number! Try again.");
//   }
// }

// //16. Print numbers between two user inputs. Input start and end using prompt() → print all between.

// let start = +prompt("Enter starting number : ");
// let end = +prompt("Enter ending number : ");

// for (start; start <= end; start++) {
//   console.log(start);
// }

// //17. Print only first 3 odd numbers from 1 to 20. Use loop. Stop with break after 3 odd prints.

// let count = 0;
// for (i = 1; i <= 20; i++) {
//   if (count === 3) {
//     break;
//   } else if (i % 2 === 1) {
//     console.log(i);
//     count++;
//   }
// }

// //18.  Ask user 5 numbers. Count how many are positive. Use loop + condition + counter.

// let count = 0;
// for (i = 1; i <= 5; i++) {
//   let num = +prompt("Enter a number : ");
//   if (num > 0) {
//     count++;
//   }
// }
// console.log(`${count} positive numbers entered by the user`);

// //19. ATM Simulator – Allow 3 withdrawals. Start with ₹1000 balance. Ask withdrawal amount 3 times.. If enough balance → deduct. Else → print “Insufficient balance”

// let balance = 1000;
// for (i = 1; i <= 3; i++) {
//   let amount = +prompt("Enter the amount you want to withdraw: ");

//   if (amount <= 0) {
//     console.log("Enter a valid amount");
//   } else if (balance - amount >= 0) {
//     console.log(`${amount} withdrawn successfully!!`);
//     balance -= amount;
//   } else {
//     console.log(`Insufficient balance, Remaining balance - ${balance}`);
//     break;
//   }
// }
