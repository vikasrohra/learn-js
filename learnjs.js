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

