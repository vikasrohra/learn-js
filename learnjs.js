// var a = 7;

// function getName () {
//     console.log("Namaste JS");
// }

// getName();
// console.log(a);

// // Output:
// // Namaste JS
// // 7

// getName();
// console.log(a);

// var a = 7;

// function getName () {
//     console.log("Namaste JS");
// }

// // Output:
// // Namaste JS
// // Undefined

// getName();
// console.log(a);

// function getName () {
//     console.log("Namaste JS");
// }

// // Output:
// // Namaste JS
// // Uncaught ReferenceError: a is not defined

// console.log(a);
// getName();

// function getName () {
//     console.log("Namaste JS");
// }

// // Output:
// // Uncaught ReferenceError: a is not defined

// getName();
// console.log(a);

// var a = 7;

// var getName = () => {
//     console.log("Namaste JS");
// }

// // Output:
// // Uncaught TypeError: getName is not a function

// getName();
// console.log(x);

// var x = 7;

// var getName = function() {
//     console.log("Namaste JS");
// }

// // Output:
// // Uncaught TypeError: getName is not a function

// var x = 1;
// a();
// b();
// console.log(1)

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);
// }

// // Output:
// // 10
// // 100
// // 1

// var a = 1;
// a();
// b();
// console.log(1)

// function a() {
//     var a = 10;
//     console.log(a);
// }

// function b() {
//     var a = 100;
//     console.log(a);
// }

// // Output:
// // Uncaught TypeError: a is not a function

// function a() {
//     console.log(b);
// }
// var b = 10;
// a();

// // Output:
// //10

// function a() {
//     c();
//     function c() {
//         console.log(b);
//     }
// }
// var b = 10;
// a();

// // Output:
// //10

// function a() {
//     var b = 10;
//     c();
//     function c() {
//         console.log(b);
//     }
// }
// a();

// // Output:
// //10

// function a() {
//     var b = 10;
//     c();
//     function c() {
//     }
// }
// a();
// console.log(b);

// // Output:
// // Uncaught ReferenceError: b is not defined

// console.log(b);
// let a = 10;
// var b = 100;

// // Output:
// // undefined

// let a = 10;
// var b = 100;
// console.log(b);

// // Output:
// // 100

// console.log(a);
// let a = 10;
// var b = 100;

// // Output:
// // Uncaught ReferenceError: Cannot access 'a' before initialization

// let a = 10;
// var b = 100;
// console.log(a);

// // Output:
// // 10

// let a = 100;
// let a = 10;

// // Output:
// // Uncaught SyntaxError: Identifier 'a' has already been declared

// let a = 100;
// var a = 10;

// // Output:
// // Uncaught SyntaxError: Identifier 'a' has already been declared

// console.log(a);
// var a = 100;
// var a = 10;
// console.log(a);

// // Output:
// // undefined
// // 10

// const a;
// console.log(a);

// // Output:
// // Uncaught SyntaxError: Missing initializer in const declaration

// const a;
// a = 10;
// console.log(a);

// // Output:
// // Uncaught SyntaxError: Missing initializer in const declaration

// console.log("Namaste");
// const a = 1;
// a = 10;
// console.log(a);

// // Output:
// // Uncaught TypeError: Assignment to constant variable.

// const a = 1;
// console.log(a);

// // Output:
// // 1

// {
// 	var a = 10;
// 	let b = 100;
// 	const c = 1000;

// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

//// Output:
//// 10
//// 100
//// 1000
//// 10
//// Uncaught ReferenceError: b is not defined

// if (true){
// 	var a = 10;
// 	let b = 100;
// 	const c = 1000;

// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

//// Output:
//// 10
//// 100
//// 1000
//// 10
//// Uncaught ReferenceError: b is not defined

// for (let i=0; i<1; i++){
// 	var a = 10;
// 	let b = 100;
// 	const c = 1000;

// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// //// Output:
// //// 10
// //// 100
// //// 1000
// //// 10
// //// Uncaught ReferenceError: b is not defined

// var a = 99;
// {
// 	var a = 10;
// 	let b = 100;
// 	const c = 1000;

// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }

// // Output:
// // 10
// // 100
// // 1000

// // Inner a's initialization shadows outer a, this is because variale declared with var are in global scope

// var a = 99;
// {
// 	var a = 10;
// 	let b = 100;
// 	const c = 1000;

// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }
// console.log(a);

// // Output:
// // 10
// // 100
// // 1000
// // 10

// // Inner a's initialization shadows outer a, this is because variale declared with var are in global scope (same level hence first it was undefined during memory creation phase, then becomes 99, then becomes 10)

// let b = 99;
// {
// 	var a = 10;
// 	let b = 100; // It shadows the outer b
// 	const c = 1000;

// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }
// console.log(b);

// // Output:
// // 10
// // 100
// // 1000
// // 99

// let b = 99;
// {
//     console.log(b);
// 	var a = 10;
// 	let b = 100; // It shadows the outer b
// 	const c = 1000;

// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }
// console.log(b);

// // Output:
// // Uncaught ReferenceError: Cannot access 'b' before initialization

// const b = 99;
// function x() {
//     const b = 100;
//     console.log(b);
// }
// x();
// console.log(b);

// // Output:
// // 100
// // 99

// const b = 99;
// function x() {
//     var b = 100;
//     console.log(b);
// }
// x();
// console.log(b);

// // Output:
// // 100
// // 99

// var b = 99;
// function x() {
//     const b = 100;
//     console.log(b);
// }
// x();
// console.log(b);

// // Output:
// // 100
// // 99

// let a = 10;
// {
//     var a = 99;
// }

// // Output:
// // Uncaught SyntaxError: Identifier 'a' has already been declared (Illegal Shadowing)

// const a = 10;
// {
//     var a = 99;
// }

// // Output:
// // Uncaught SyntaxError: Identifier 'a' has already been declared (Illegal Shadowing)

// let a = 10;
// {
//     let a = 99;
// }

// // Desc: Legal Shadowing

// const a = 10;
// {
//     const a = 99;
// }

// // Desc: Legal Shadowing

// var a = 10;
// {
//     let a = 99;
// }

// // Desc: Legal Shadowing

// var a = 10;
// {
//     const a = 99;
// }

// // Desc: Legal Shadowing

// const a = 10;
// {
//     const a = 20;
//     {
//         const a = 30;
//         console.log(a);
//     }
// }

// // Output:
// // 30

// const a = 10;
// {
//     const a = 20;
//     {
//         const a = 30;
//     }
//     console.log(a);
// }

// // Output:
// // 20

// const a = 10;
// {
//     const a = 20;
//     {
//         console.log(a);
//     }
// }

// // Output:
// // 20

///////////////////////////   Closures   //////////////////////////////////

// function a() {
// 	var b = 7;
// 	function c() {
// 		console.log(b);
// 	}
// 	c();
// }
// a();

// // Output:
// // 7

// function a() {
//     c();
// 	var b = 7;
// 	function c() {
// 		console.log(b);
// 	}
// }
// a();

// // Output:
// // undefined

// function a() {
// 	var b = 7;
// 	function c() {
// 		console.log(b);
// 	}
// 	return c;
// }
// var d = a();
// d();

// // Output:
// // 7

// function d() {
//     var e = 14;
//   function a() {
//     var b = 7;
//     function c() {
//       console.log(b, e);
//     }
//     c();
//   }
//   a();
// }
// d();

// // Output:
// // 7 14

// function d() {
//     var e = 14;
//   function a() {
//     var b = 7;
//     return function c() {
//       console.log(b, e);
//     }
//   }
//   a()();
// }
// d();

// // Output:
// // 7 14

// function d() {
//   var e = 14;
//   function a() {
//     var e = 7;
//     return function c() {
//       console.log(e);
//     };
//   }
//   a()();
// }
// d();

// // Output:
// // 7

// function d() {
//     let e = 14;
//     function a() {
//       let e = 7;
//       return function c() {
//         console.log(e);
//       };
//     }
//     a()();
//   }
//   d();

// // Output:
// // 7

//////////////////////////////////   setTimeout and Closures   //////////////////////////////////

//   function a() {
//     var b = 10;
//     setTimeout(() => {
//         console.log(b);
//     }, 3000);
//   }
//   a();

// //   Output:
// //   10

// function a() {
//   var b = 10;
//   setTimeout(() => {
//     console.log(b);
//   }, 3000);
//   b = 100;
// }
// a();

// //   Output:
// //   100

// - setTimeout will takes callback function (along with the reference to the surrounding scope/env that forms a closure) and stores it into some place (event loop or callback queue) and attaches a timer to it and JS proceedes to the next line, once the timer expires JS takes that callback function puts it back to the call stack and runs it.

// - setTimeout callback function forms a closure, this callback function remembers reference to outer environment and forms a closure and takes along with it whereever it goes.

// Q. Need to print (1, 2, 3, 4, 5) after every second.

// function a() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// a();

// //   Output:
// //   6
// //   6
// //   6
// //   6
// //   6

// Q. Why the above code behaves like this?
// A. Because every callback function of setTimeout refer to the same surrounding envirenment. By the time any timer expires value of i becomes 6. As we know JS doesn't wait it will continue to execute the loop and in each loop a callback function (along with lexical scope) is stored in a place and timer is attached. Once any timer finishes, it prints the value of i (that is 6 because before executing an callback value became 6) as this callback function has a reference to the lexical scope.

// An easy and quick fix is to declare i with let, as let has a block scope, so for each iteration, i is a new copy altogether. So when a callback function is stored a new copy of i is stored with it meaning referring to a different memory location.
// Var has a gobal scope, hence it updates the original copy.

// function a() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// a();

// //   Output:
// //   1
// //   2
// //   3
// //   4
// //   5

// Q) What if interviewer ask to not to use let?
// - Closures will help
// - With below, every time a new copy is supplied to callback because now a close function a separate function that gets created in every loop meaning every callback function points to different copy.

// function a() {
//   for (var i = 1; i <= 5; i++) {
//     function close(c) {
//       setTimeout(() => {
//         console.log(c);
//       }, c * 1000);
//     }
//     close(i);
//   }
// }
// a();

// //   Output:
// //   1
// //   2
// //   3
// //   4
// //   5

//////////////////////// Functions ////////////////////////////

// Function Statement OR Function Declaration
// a();
// function a() {
//     console.log('a is called');
// }

// // Output:
// // a is called

// Function Expression
// b();
// var b = function() {
//     console.log('b is called');
// }

// // Output:
// // Uncaught TypeError: b is not a function

// Anonymous Functions
// function () {
//     console.log("Namaste");
// }

// // Output:
// // Uncaught SyntaxError: Function statements require a function name

// Named Function Expression
// var b = function xyz() {
//     console.log('b is called');
// }
// b();

// // Output:
// // b is called

// var b = function xyz() {
//     console.log('b is called');
// }
// b();
// xyz();

// // Output:
// // b is called
// // Uncaught ReferenceError: b is not defined

// var b = function xyz() {
//     console.log(xyz);
// }
// b();
// xyz();

// // Output:
// // b is called
// // f xyz {
// // console.log(xyz);
// // }
// // Uncaught ReferenceError: b is not defined

// Difference between Parameters and Arguments

// function sum(a, b) { // here a and b are parameters
//     return a+b;
// }
// sum(2, 3); // here 2 and 3 are arguments

//  First Class Functions / Functions are First Class Citizens
// - THe ability to use functions as values, that can be passed as arguments to another functions and can be returned from the functions is called First Class Functions.

//  var a = function (param1) {
// 	return function () {};
//  }

//  var b = function (param1) {
// 	return function xyz() {};
//  }

//  a();
//  b();

// //  Output:
// //  f () {
// //  }

// //  f xyz () {
// //  }

///////////////// Callback /////////////////////////
// setTimeout(functon() {
// 	console.log('Timer');
// }, 5000);

// function a(b) {
// 	console.log('a');
// 	b();
// }

// a(function () {
// 	console.log('b');
// });

// // Output:
// // a
// // b
// // Timer (after 5 seconds)

// Create a button and click on that button call an event
// document.getElementById('clickMe').addEventListener('click', function xyz () {
//     console.log('Clicked');
// });

// We need to count how many times a button is clicked
// 0. one solution is to create a global variable and increment it on enery click
// let count = 0;
// document.getElementById('clickMe').addEventListener('click', function xyz () {
//     console.log('Clicked ' + ++count);
// });
// But this is not a good way of doing it as we don't want to update the count from anywhere in the code

// 1. To do so we have to create a closure
// function attachEventListeners() {
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("Clicked " + ++count);
//   });
// }
// attachEventListeners();

////////////////////////  TRUST ISSUES WITH setTimeout()  //////////////////////////////////
// console.log("START");

// setTimeout(function cb() {
// 	console.log("CALLBACK");
// }, 5000);

// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate < startDate + 10000) { // Block the thread for 10 secs
// 	endDate = new Date().getTime();
// }

// console.log("WHILE EXPIRES");

// // Output:
// // START
// // WHILE EXPIRES
// // CALLBACK (after 10 secs as main thread (callstack) was blocked by GEC)

// console.log("START");

// setTimeout(function cb() {
// 	console.log("CALLBACK");
// }, 0);

// console.log("END");

// // Output:
// // START
// // END
// // CALLBACK

// // Because callback function will first placed into the webapi environment with it's timer, then immediately moved to callstack queue as timer is 0, event loop will observe the call stack and queue, if stack is empty only then it move the callback function.

//////////////////////////////////////////////     Higher Order Functions & How to approach in interviews     //////////////////////////////////

// Q. Given am array of radius of circles, you need to find area of each circle. [3, 1, 2, 4]
// A.
// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
// 	const output = [];
// 	for(let i = 0; i < radius.length; i++) {
// 		output.push(Math.PI * radius[i] * radius[i]);
// 	}
// 	return output;
// }

// console.log(calculateArea(radius));

// Q. How with radius, you need to calculate diameter and circumference
// A.
// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
// 	const output = [];
// 	for(let i = 0; i < radius.length; i++) {
// 		output.push(Math.PI * radius[i] * radius[i]);
// 	}
// 	return output;
// }

// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
// 	const output = [];
// 	for(let i = 0; i < radius.length; i++) {
// 		output.push(2 * Math.PI * radius[i]);
// 	}
// 	return output;
// }

// console.log(calculateCircumference(radius));

// const calculateDiameter = function (radius) {
// 	const output = [];
// 	for(let i = 0; i < radius.length; i++) {
// 		output.push(2 * radius[i]);
// 	}
// 	return output;
// }

// console.log(calculateDiameter(radius));

// // NOTE: We can observe here is we are repeating the code here. We must follow DRY (Don't Repeat Yourself) Principle

// // - Now we can clearly see code is repeating in all the functions and in every function there is a for loop hence not optimized.
// // - So the issues with above code is,
// // 	0. Repeatitive Code
// // 	1. Not optimized code
// // 	2. Function is not doing a single task
// // - So to optimize this we can clearly see in every function only formula is changing rest everything is same so we can think to outsource this formula and pass as an argument to a function as below

// const radius = [3, 1, 2, 4];

// const area = function(radius) {
// 	return Math.PI * radius * raduis;
// }

// const circumference = function(radius) {
// 	return 2 * Math.PI * radius;
// }

// const diameter = function(radius) {
// 	return 2 * radius;
// }

// const calculate = function(radius, logic) { // calculate here is HOC and logic is callback function
// 	const output = [];
// 	for(let i = 0; i < radius.length; i++) {
// 		output.push(logic(radius[i]));
// 	}

// 	return output;
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// // NOTE:
// // The above code is,
// // 0. Resuable, calculate() is used to calculate all the required areas
// // 1. Optimized
// // 2. Every function is doing a single task

// // Observation:
// // calculate() is the partial implementation of map, hence code can be changed to below code

// const radius = [3, 1, 2, 4];

// const area = function(radius) {
// 	return Math.PI * radius * raduis;
// }

// const circumference = function(radius) {
// 	return 2 * Math.PI * radius;
// }

// const diameter = function(radius) {
// 	return 2 * radius;
// }

// console.log(radius.map(area)); // similar to radius.map(r => area(r));
// console.log(radius.map(circumference));
// console.log(radius.map(diameter));

//// Complete implementation of map

// const radius = [3, 1, 2, 4];

// const area = function(radius) {
// 	return Math.PI * radius * raduis;
// }

// const circumference = function(radius) {
// 	return 2 * Math.PI * radius;
// }

// const diameter = function(radius) {
// 	return 2 * radius;
// }

// Array.prototype.calculate = function(logic) { // calculate here is HOC and logic is callback function
// 	const output = [];
// 	for(let i = 0; i < this.length; i++) {
// 		output.push(logic(this[i]));
// 	}

// 	return output;
// }

// console.log(radius.calculate(area));
// console.log(radius.calculate(circumference));
// console.log(radius.calculate(diameter));

//////////////////// MAP, FILTER & REDUCE /////////////////////////////////

// // Find even and odd numbers. [5, 1, 3, 2, 6]

// // 0. MAP

// const arr = [5, 1, 3, 2, 6];

// // Double - [10, 2, 6, 4, 12];
// // Triple - [15, 3, 9, 6, 18];
// // Binary - ["101", "1", "11", "10", "110"];

// function double(x) {
// 	return x * 2;
// }

// console.log(arr.map(double));
// console.log(arr.map(function triple(x) {
// 	return x * 3;
// }));
// console.log(arr.map(x => x.toString(2)));

// // 1. FILTER

// const arr = [5, 1, 3, 2, 6];

// function isOdd() {
// 	return x % 2;
// }

// console.log(arr.filter(isOdd)); // Odd

// console.log(arr.filter(x => x % 2 === 0)); // Even

// // 2. REDUCE
// // - It will take all the element of the array and come up with a single value out of them, meaning, it will iterate over all the elements of the array and generate a single value out of it.
// // - Example questions:
// // 	0. Find out sum of all the elements inside the array
// // 	1. Find out smallest/largest element of the array

// // Q. Find out sum of all the elements inside the array

// // 0. Using for loop

// const arr = [5, 1, 3, 2, 6];
// function sumOfArr(arr) {
// 	let sum = 0;
// 	for(let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 	}

// 	return sum;
// }
// sumOfArr(arr);

// // 1. Using REDUCE

// const arr = [5, 1, 3, 2, 6];
// const sum = arr.reduce((acc, curr) => {
// 	acc += curr;

// 	return acc;
// }, 0); // "First argument" is a "function" that has 2 arguments, "acc" is the accumulator that accumulates the result in each iteration like sum, "curr" is the current element value in the iteration like arr[i], "Second argument" is the initial value of the accumulator
// console.log(sum);

// // Q. Find out max in the array

// // 0. Using for loop

// const arr = [5, 1, 3, 2, 6];
// function maxInArr(arr) {
// 	let max = 0;
// 	for(let i = 0; i < arr.length; i++) {
// 		if(arr[i] > max) {
// 			max = arr[i];
// 		}
// 	}

// 	return max;
// }
// maxInArr(arr);

// // 1. Using REDUCE

// const arr = [5, 1, 3, 2, 6];
// const maxNum = arr.reduce((max, curr) => {
// 	if(curr > max) {
// 		max = curr;
// 	}
// 	return max;
// }, 0); // "First argument" is a "function" that has 2 arguments, "acc" is the accumulator that accumulates the result in each iteration like sum, "curr" is the current element value in the iteration like arr[i], "Second argument" is the initial value of the accumulator
// console.log(maxNum);

// // **Tricky scenario where REDUCE can help**
// // - We have a list of uers
// const users = [
// {firstName: 'Vikas', lastName: 'Rohra', age: 30},
// {firstName: 'Donald', lastName: 'Trumph', age: 75},
// {firstName: 'Elon', lastName: 'Musk', age: 50},
// {firstName: 'Deepika', lastName: 'Padukone', age: 30}
// ];
// // - we need to return an object where key is age and value is count of the simalar ages.
// // {30: 2, 75: 1, 50: 1}
// // - Observation is we need to return a single object, if we have a list of objects and we need to return a single object that is a case where we can use REDUCE

// const output = users.reduce((acc, curr) => {
// 	if(acc[curr.age]) {
// 		acc[curr.age] += 1;
// 	}
// 	else {
// 		acc[curr.age] = 1;
// 	}
// 	return acc;
// }, {});

// console.log(output);

//////////////////////  Promises /////////////////////////////////////////////

// const GITHUB_URL = "https://api.github.com/users/vikasrohra";

// const user = fetch(GITHUB_URL); // fetch is a JS api to call api calls

// console.log(user);

// user.then(function(data) {
//     console.log(data);
// });

// //  Promise with success callback

// // Promise Consumer

// const cart = ["Shirt", "Jeans", "Shoes"];

// const promise = createOrder(cart);

// promise.then((orderId) => console.log(orderId));

// // Promise Producer

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     // Validate the cart
//     if (!isCartValid(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }

//     // Logic/API call to save cart details
//     const orderId = "1234";

//     // return orderId
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });

//   return pr;
// }

// function isCartValid(cart) {
//   return true;
// }

// //  Promise with failure callback

// // Promise Consumer

// const cart = ["Shirt", "Jeans", "Shoes"];

// const promise = createOrder(cart);

// promise
//   .then((orderId) => console.log(orderId))
//   .catch((err) => console.log(err.message));

// // Promise Producer

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     // Validate the cart
//     if (!isCartValid(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }

//     // Logic/API call to save cart details
//     const orderId = "1234";

//     // return orderId
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });

//   return pr;
// }

// function isCartValid(cart) {
//   return false;
// }

// //  Promise chaining

// // Promise Consumer

// const cart = ["Shirt", "Jeans", "Shoes"];

// createOrder(cart)
//   .then((orderId) => {
//     console.log(orderId);
//     return orderId;
//   })
//   .then((orderId) => {
//     return proceedToPayment(orderId);
//   })
//   .then((paymentInfo) => {
//     console.log(paymentInfo);
//   })
//   .catch((err) => console.log(err.message));

// // Promise Producer

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     // Validate the cart
//     if (!isCartValid(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }

//     // Logic/API call to save cart details
//     const orderId = "1234";

//     // return orderId
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });

//   return pr;
// }

// function isCartValid(cart) {
//   return true;
// }

// function proceedToPayment() {
//   return new Promise(function (resolve, reject) {
//     resolve("Payment Successful");
//   });
// }

// // NOTE: In the above promise chaining code, if any promise fails it fails the entire chain, meaning catch is applicable for all the promises above it. If we want a scenario where weather create order is successful or not we have call preceed to payment api, then shift catch above to proceed to payment and below the create order then catch will only be aplicable for create order

// //  Promise chaining with calling proceed to payment always weather create order fails/success

// // Promise Consumer

// const cart = ["Shirt", "Jeans", "Shoes"];

// createOrder(cart)
//   .then((orderId) => {
//     console.log(orderId);
//     return orderId;
//   })
//   .catch((err) => console.log(err.message))
//   .then((orderId) => {
//     return proceedToPayment(orderId);
//   })
//   .then((paymentInfo) => {
//     console.log(paymentInfo);
//   });

// // Promise Producer

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     // Validate the cart
//     if (!isCartValid(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }

//     // Logic/API call to save cart details
//     const orderId = "1234";

//     // return orderId
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });

//   return pr;
// }

// function isCartValid(cart) {
//   return false;
// }

// function proceedToPayment() {
//   return new Promise(function (resolve, reject) {
//     resolve("Payment Successful");
//   });
// }

////////////////////////////  Promise APis - Promise.all, Promise,allSettled, Promise.race and Promise.any  ///////////////////////////

// // 0.0 Promise.all all success

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1 resolved");
//   }, 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P2 resolved");
//   }, 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P3 resolved");
//   }, 2000);
// });

// Promise.all([p1, p2, p3]).then((res) => console.log(res));

// // Output:
// // After 3 seconds prints
// // ['P1 resolved', 'P2 resolved', 'P3 resolved']

// // 0.1 Promise.all with one fail

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P1 resolved");
//     }, 3000);
//   });

//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("P2 rejected");
//     }, 1000);
//   });

//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P3 resolved");
//     }, 2000);
//   });

//   Promise.all([p1, p2, p3]).then((res) => console.log(res));

//   // Output:
//   // After 1 second prints
//   // Uncaught (in promise) P2 rejected

//   // Uncaught because we have not handled this error

// // 0.2 With error handling

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1 resolved");
//   }, 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("P2 rejected");
//   }, 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P3 resolved");
//   }, 2000);
// });

// Promise.all([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// // Output:
// // After 1 second prints
// // P2 rejected

// // 1.0 Promise.allSettled all success

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P1 resolved");
//     }, 3000);
//   });

//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P2 resolved");
//     }, 1000);
//   });

//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P3 resolved");
//     }, 2000);
//   });

//   Promise.allSettled([p1, p2, p3])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));

//   // Output:
//   // After 3 seconds prints
//   // [{status: 'fulfilled', value: 'P1 resolved'}, {status: 'fulfilled', value: 'P2 resolved'}, {status: 'fulfilled', value: 'P3 resolved'}]

//   // 1.1 Promise.allSettled one fail

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P1 resolved");
//     }, 3000);
//   });

//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("P2 rejected");
//     }, 1000);
//   });

//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P3 resolved");
//     }, 2000);
//   });

//   Promise.allSettled([p1, p2, p3])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));

//   // Output:
//   // After 3 seconds prints
//   // [{status: 'fulfilled', value: 'P1 resolved'}, {status: "rejected", value: 'P2 rejected'}, {status: 'fulfilled', value: 'P3 resolved'}]

// // 2.0 Promise.race all success

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P1 resolved");
//     }, 3000);
//   });

//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P2 resolved");
//     }, 1000);
//   });

//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P3 resolved");
//     }, 2000);
//   });

//   Promise.race([p1, p2, p3])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));

//   // Output:
//   // After 1 seconds prints
//   // P2 resolved

// // 2.1 Promise.race one fail

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P1 resolved");
//     }, 3000);
//   });

//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("P2 rejected");
//     }, 1000);
//   });

//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P3 resolved");
//     }, 2000);
//   });

//   Promise.race([p1, p2, p3])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));

//   // Output:
//   // After 1 seconds prints
//   // P2 rejected

// // 3.0 Promise.any all success

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P1 resolved");
//     }, 3000);
//   });

//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P2 resolved");
//     }, 1000);
//   });

//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P3 resolved");
//     }, 2000);
//   });

//   Promise.any([p1, p2, p3])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));

//   // Output:
//   // After 1 second prints
//   // P2 resolved

// // 3.1 Promise.any one fail

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P1 resolved");
//     }, 3000);
//   });

//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("P2 rejected");
//     }, 1000);
//   });

//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("P3 resolved");
//     }, 2000);
//   });

//   Promise.any([p1, p2, p3])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));

//   // Output:
//   // After 2 seconds prints
//   // P3 resolved

// // 3.2 Promise.any all fail

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("P1 rejected");
//   }, 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("P2 rejected");
//   }, 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("P3 rejected");
//   }, 2000);
// });

// Promise.any([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.error(err);
//     console.log(err.errors);
//   });

// // Output:
// // After 3 seconds prints
// // AggregateError: All promises were rejected
// // ['P1 rejected', 'P2 rejected', 'P3 rejected']

///////////////////////////////////////  async-await  ///////////////////////////////////////////

// const p = new Promise((resolve, reject) => resolve("Namaste"));

// async function getData() {
//   return p;
// }

// const promiseData = getData();
// promiseData.then((res) => console.log(res));

// // Output:
// // Namaste

// async function getData() {
//   return "Namaste";
// }

// const promiseData = getData();
// promiseData.then((res) => console.log(res));

// // Output:
// // Namaste

// async function getData() {
//   console.log("Namaste");
// }

// const promiseData = getData();
// promiseData.then((res) => console.log(res));

// // Output:
// // Namaste
// // undefined

// // How promises were handled before async-await

// const p = new Promise((resolve, reject) => resolve("Namaste"));

//  function getData() {
// 	p.then(res => console.log(res));
//  }
//  getData();

// // Output:
// // Namaste

// // Handling promises using async-await

// const p = new Promise((resolve, reject) => resolve("Namaste"));

// async function handlePromise() {
//   const val = await p;
//   console.log(val);
// }
// handlePromise();

// // Output:
// // Namaste

// // What is difference between handling promises using normal way vs using async-await?

// // Normal way

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Namaste"), 10000);
// });

// function getData() {
//   p.then((res) => console.log(res));
//   console.log("I will not wait for the promise to resolve");
// }
// getData();

// // Output:
// // I will not wait for the promise to resolve
// // Namaste (after 10 secs)

// // 0. In normal way, promise is put out of the normal thread and kept with the browser apis then once it gets resolved it moved to stack queue and through evenot loop it pushed back to the call stack after it gets empty, and we know JS doesn't wait for anyone, so it will execute the console statement without waiting for the promise to get resolved.

// // using async-await

//  const p = new Promise((resolve, reject) => {
//    setTimeout(() => resolve("Namaste"), 10000);
//  });

//  async function getData() {
// console.log("Hello World!");
//    const res = await p;
//    console.log("I will wait for the promise to get resolved");
//    console.log(res);
//  }
//  getData();

// // Output:
// // Hello World!
// // after 10 secs,
// // I will wait for the promise to get resolved
// // Namaste

// // async function with 2 await statements that handles same promise

//  const p = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Namaste"), 10000);
//   });

//   async function getData() {
// console.log("Hello World!");
//     const res1 = await p;
//     console.log("I will wait for the promise to get resolved 1");
//     console.log(res1);

//     const res2 = await p;
//     console.log("I will wait for the promise to get resolved 2");
//     console.log(res2);
//   }
//   getData();

// // Output:
// // Hello World!
// // after 10 secs,
// // I will wait for the promise to get resolved 1
// // Namaste
// // I will wait for the promise to get resolved 2
// // Namaste

// // async function with 2 await statements that handles different promises where p1 takes more time than p2

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Namaste 1"), 40000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Namaste 2"), 20000);
// });

// async function getData() {
//   console.log("Hello World!");
//   const res1 = await p1;
//   console.log("I will wait for the promise to get resolved 1");
//   console.log(res1);

//   const res2 = await p2;
//   console.log("I will wait for the promise to get resolved 2");
//   console.log(res2);
// }
// getData();

// // Output:
// // Hello World!
// // after 10 secs,
// // I will wait for the promise to get resolved 1
// // Namaste 1
// // I will wait for the promise to get resolved 2
// // Namaste 2

// // async function with 2 await statements that handles different promises where p1 takes less time than p2

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Namaste 1"), 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Namaste 2"), 10000);
// });

// async function getData() {
//   console.log("Hello World!");
//   const res1 = await p1;
//   console.log("I will wait for the promise to get resolved 1");
//   console.log(res1);

//   const res2 = await p2;
//   console.log("I will wait for the promise to get resolved 2");
//   console.log(res2);
// }
// getData();

// // // Output:
// // // Hello World!
// // // after 5 secs,
// // // I will wait for the promise to get resolved 1
// // // Namaste 1
// // // after 10 secs,
// // // I will wait for the promise to get resolved 2
// // // Namaste 2

// // Get data using fetch with async-await with error handling

// const API_URL = "https://api.github.com/users/vikasrohra";

// const handlePromise = async function () {
//   try {
//     const data = await fetch(API_URL);
//     const jsonVal = await data.json(); // fetch(API_URL).then(res => res.json()).then(res => console.log(res))
//     console.log(jsonVal);
//   } catch (err) {
//     console.log(err);
//   }
// };
// handlePromise();

// // Output:
// // TypeError: Failed to fetch


// As async functions returns promise, we can handle the errors in traditional way

// const API_URL = "https://api.github.com/users/vikasrohra";

// const handlePromise = async function () {
//   const data = await fetch(API_URL);
//   const jsonVal = await data.json(); // fetch(API_URL).then(res => res.json()).then(res => console.log(res))
//   console.log(jsonVal);
// };
// handlePromise().catch((err) => console.log(err));

// // Output:
// // TypeError: Failed to fetch



/////////////////////////////  this keyword  ////////////////////////////////////


"use strict"

// //  0. this keyword in global space

// console.log(this);


// //  1. this keyword in functional space

// function a() {
//     // the value of this depends on strict / non-strict mode
//     console.log(this); // undefined in strict mode, window in non-strict mode
// }
// a();


// // The value of this keywork also depends on how you call the fucntion

// function a() {
//     // the value of this depends on strict / non-strict mode
//     console.log(this); // undefined in strict mode, window in non-strict mode
// }
// a(); // undefined
// window.a(); // window


// // 2. this keyword inside object's method

// const obj = {
//     a: 10,
//     x: function() {
//         console.log(this);
//     }
// };

// obj.x(); // {a: 10, x: f}


// // Call apply and bind methods for sharing methods

// const student1 = {
//     name: 'Vikas',
//     printName: function() {
//         console.log(this);
//     }
// };

// student1.printName(); // {name: 'Vikas', printName: ƒ}


// const student2 = {
//     name: 'Sakiv'
// };

// student1.printName(student2); // {name: 'Vikas', printName: ƒ}

// student1.printName.call(student2); // {name: 'Sakiv'}, here we are changing where this keyword refer to, in this case we are saying to point it to student2 object



// // 3. this keyword inside arrow function
// // Arrow functions donot have their own this keyword, they take the value of their lexical envirenment where they are enclosed

// const student1 = {
//     name: 'Vikas',
//     printName: () => {
//         console.log(this);
//     }
// };

// student1.printName(); // window

// // Becuase arrow functions this keyword to it's lexical environment in which they are enclosed

// const student1 = {
//     name: 'Vikas',
//     printName: function() {
//        const y = () => {
//         console.log(this);
//        }
//        y();
//     }
// };

// student1.printName(); // {name: 'Vikas', printName: ƒ}

// // Becuase arrow functions this keyword to it's lexical environment in which they are enclosed, mehod y is an arrow function it's this will point to outer env, outer env's this point to the student1 object


// // 4. this keyword inside DOM

// on click of Click Me button it refers to that button [object HTMLButtonElement]



// // 5. this keyword inside classes, constructors ?