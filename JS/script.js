// 3.
// let txt=document.getElementById("text1");
// txt.innerHTML="This is an innerHTML";

// alert("This is a alert");

// console.log("This is a console");
// -----------------------------------------
// Statements
// let a,b,c;
// a=2;
// c=3;
// c=a+b;
// ---------------------------------------------
// 6.Comments
// single line

/*multiple 
line */
// ---------------------------------------------
// 8. var vs let vs const
// i)scope

// global scope
// {
//     var  x=2;
// }
// console.log(x); //2

// // block scope
// {
//     let a=2;
// }
// console.log(a); //a is not defined

// // block scope
// {
//     const b=2;
// }

// console.log(b); //b is not defined

// ii)Redeclared

// var a=2;
// var a=3;
// console.log(a); 3 //can redeclare

// let b=2;
// let b=3;
// console.log(b); //cannot redeclare

// const c=2;
// const c=3;
// console.log(c); //cannot redeclare

// decalring in another block is allowed in let

// let a=2;
// {
//     let a=3;
//     console.log(a); //3
// }
// console.log(a); //2

// iii) Hoisting

// a=2;
// console.log(a); //2
// var a;

// b=2;
// console.log(b); //cannot access b before initialization //Refernce Error
// let b;

// c=2;
// console.log(c); //Reference Error
// let c;

// iv)Reassigned
// var a=2;
// a=3;
// console.log(a); //3

// let b=2;
// b=3;
// console.log(b); //3

// const c=2;
// c=3;
// console.log(c); //Error

// v) Must be assigned

// var a;
// a=2;
// console.log(a); //2

// let b;
// b=2;
// console.log(b); //2

// const c;
// c=2;
// console.log(c); //Error

// Constant Objects and Arrays

// const arr=["red","green","yellow"];
// arr[1]="purple";
// console.log(arr); //[ 'red', 'purple', 'yellow' ]

// arr=[1,2,3] //error

// const obj = {
//     name:"webgod",
//     age:12
// }
// obj.name="javascript"
// console.log(obj.name); //javascript

// obj={
//     name:"js",
//     age:20
// }
// console.log(obj); //error
// ----------------------------------------------------------
// 11.Function
// function fn() {
//     console.log("This is a function"); //This is a function
// }

// fn()

// function sum(a,b) {
//     return a+b
//   }

// let d=sum(11,22);
// console.log(d); //33

// let a=3;
// function func() {
//     let a=2; //local scope

// }

// func()
// console.log(a); //3
// ------------------------------------------------------
// 12.Objects

// const person = {
//     name:"webgod",
//     age:27,
//     language:"javascript"
// }

// console.log(person); //{ name: 'webgod', age: 27, language: 'javascript' }

// console.log(person.age); //27

// console.log(person["age"]) //27

// const person = {
//   firstName: "Web",
//   lastName: "God",
//   fullName: function () {
//     // return person.firstName + " "+person.lastName;
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(person.fullName());

// ----------------------------------------

// 13.this

// default

// this.globalThis="hello";
// console.log(this); //{ globalThis: 'hello' }

//inside a function

// function fn() { 
//     console.log(this); //global object
//  }

//  fn()

//inside a method
// Implicit Binding
// const person = {
//   firstName: "Web",
//   lastName: "God",
//   fullName: function () {
//     console.log(this); //owner object (person)
//   },
// };

// person.fullName()

// Explicit Binding
// call()
// function myFunc(name,age) {
//     console.log(this); //{ name: 'webgod', ag: 25 }
//     console.log(name); //js
//     console.log(age); //10
//  }
 
//  obj1 = {
//      name: "webgod",
//      ag:25
//  }
 
//  myFunc.call(obj1,"js",10);

 //apply

//  myFunc.apply(obj1,["js",10]);

 //bind

//  const newBounded=myFunc.bind(obj1,"js",10);
//  newBounded()

// function myFunc(name,age) {

//     console.log(this); //Empty object
//     this.name=name;
//     this.age=age
//     console.log(this); //myFunc { name: 'js', age: 10 }
//     console.log(name); //js
//     console.log(age); //10
//  }
 

// const fn=new myFunc("js",10);

// default binding

// function myFunc() {
//     console.log(this.name);
//   }

//   globalThis.name="Web God"
//   myFunc()

// ------------------------------------------



