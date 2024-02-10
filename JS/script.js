// * Topic
// @ Sub topic
// ? sub sub topic
// & sub sub sub topic
// -- horizontal line
// ! error
// # information
// $ reference

//*3 .Output
// let txt=document.getElementById("text1");
// txt.innerHTML="This is an innerHTML";

// alert("This is a alert");

// console.log("This is a console");
// -----------------------------------------
//* 4.Statements
// let a,b,c;
// a=2;
// c=3;>
// c=a+b;
// ---------------------------------------------
//* 6.Comments
// single line

/*multiple 
line */
// ---------------------------------------------
//* 8. var vs let vs const
//@ i)scope

//? global scope
// {
//     var  x=2;
// }
// console.log(x); //2

//? block scope
// {
//     let a=2;
// }
// console.log(a); // a is not defined

//? block scope
// {
//     const b=2;
// }

// console.log(b); // b is not defined

//? ii)Redeclared

// var a=2;
// var a=3;
// console.log(a); 3 // can redeclare

// let b=2;
// let b=3;
// console.log(b); // cannot redeclare

// const c=2;
// const c=3;
// console.log(c); // cannot redeclare

// decalring in another block is allowed in let

// let a=2;
// {
//     let a=3;
//     console.log(a); //3
// }
// console.log(a); //2

//? iii) Hoisting

// a=2;
// console.log(a); //2
// var a;

// b=2;
// console.log(b); // cannot access b before initialization //Refernce Error
// let b;

// c=2;
// console.log(c); //!Reference Error
// let c;

//? iv)Reassigned
// var a=2;
// a=3;
// console.log(a); //3

// let b=2;
// b=3;
// console.log(b); //3

// const c=2;
// c=3;
// console.log(c); //Error

//? v) Must be assigned

// var a;
// a=2;
// console.log(a); //2

// let b;
// b=2;
// console.log(b); //2

// const c;
// c=2;
// console.log(c); //! Error

//@ Constant Objects and Arrays

// const arr=["red","green","yellow"];
// arr[1]="purple";
// console.log(arr); //[ 'red', 'purple', 'yellow' ]

// arr=[1,2,3] //! error

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
// console.log(obj); //! error
// ----------------------------------------------------------
// *11.Function
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

// console.log(a); //3

//@ REST Operator

// function sum(val1,val2,...args) {
//   return args
// }
// console.log(sum(11,22,33,44));
// ------------------------------------------------------
//* 12.Objects
//@ Object Definition
// const person = {
//   name: "webgod",
//   age: 27,
//   "fav book":"ds"
// };

//@ Object Properties
// console.log(person); //{ name: 'webgod', age: 27, language: 'javascript' }

// console.log(person.age); //27

// console.log(person["age"]) //27

// console.log(person["fav book"]); //ds

// person.langauge="javascript";
// delete person.langauge;
// delete person["langauge"];
// console.log(person);

//@ Object Methods
// x

// console.log(person.fullName());

// person.hello=function () {
//   console.log("hello world"); //'hello world'
//  }

// person.hello();
//!person.hello;

//@ Object Display
//convert into array
// let myArray =Object.values(person);
// console.log(myArray); //[ 'webgod', 27 ]

//@ singleton
//# object literal- non singleton
// const obj1={}

//# object constrcutor - singleton
// Object.create

// const obj1=new Object();

//@ Nested Object
// const regularUser = {
//   email: "abc@gmail.com",
//   fullName: {
//     userfullname: {
//       firstname: "web",
//       lastname: "god",
//     },
//   },
// };

// console.log(regularUser.fullName.userfullname.firstname);

//@ combining objects
//? assign()
// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "a", 4: "b" };
//! console.log({obj1,obj2});

// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3); //{ 1: 'a', 2: 'b', 3: 'a', 4: 'b' }

//? use of spread
// const obj3 = {...obj1,...obj2};
// console.log(obj3); //{ 1: 'a', 2: 'b', 3: 'a', 4: 'b' }

//@ array of objects

// const users= [
//   {
//     id:1,
//     email:"abc@gamil.com"
//   },

//   {
//     id:2,
//     email:"def@gmail.com"
//   }
// ]

// console.log(users[0].email); //'abc@gmail.com'

//@ keys values entries and hasOwnProperty

// const tinderUser = {};

// tinderUser.id = "123abc";
// tinderUser.name = "webgod";
// tinderUser.isLoggedIn = false;

// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //[ '123abc', 'webgod', false ]
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true

//@ Object Destructuring
// const course = {
//   coursename : "js",
//   price:"1000",
//   courseInstructor:"webgod"
// }

// const {coursename}=course;
// console.log(coursename); //js

// const {coursename:javascript} = course;
// console.log(javascript);  //js

//$ use in react
//we write {company} in place of props.company
// const navbar = ({company}) => {

// }

// navbar(company="webgod")

//@ Symbol

// const mySym = Symbol("key1");
// console.log(mySym);

// const person = {
//   name: "webgod",
//   age: 27,
//   [mySym]:"my symbol"
// };

// console.log(person[mySym]); //'my symbol'

//@ Object.freeze
// const person = {
//     name: "webgod",
//     age: 27
//   };

//   person.language="js";
//   console.log(person); //{ name: 'webgod', age: 27, language: 'js' }

//   Object.freeze(person);
//   person.gender="male";
//   console.log(person); //{ name: 'webgod', age: 27, language: 'js' }

// ----------------------------------------

//* 13.this
//# current context
//@ default

// console.log(this);
// this.globalThis="hello";
// console.log(this); //{ globalThis: 'hello' }

//@ inside a function

// function fn() {
//   let username = "webgod";
//   console.log(this.username); //undefined
//   console.log(this); //global object
// }

// fn();

//@ inside a method
//? Implicit Binding
// const person = {
//   firstName: "Web",
//   lastName: "God",
//   fullName: function () {
//     console.log(this); //owner object (person)
//   },
// };

// person.fullName()

//? Explicit Binding
//& call()
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

//& apply

//  myFunc.apply(obj1,["js",10]);

//& bind

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

//? default binding

// function myFunc() {
//     console.log(this.name);
//   }

//   globalThis.name="Web God"
//   myFunc()

// ------------------------------------------
//* 14.Events
// const txt3 = document.getElementById("text3");
// const btn1=document.getElementById("btn1");
// btn1.addEventListener("click",()=>{
//     txt3.innerHTML="Event Triggered by Event Listener";
// })

// ------------------------------------------------
//* 15.Strings
// let a ="webgod"
// console.log(a); //webgod

// let b='Web God'
// console.log(b); //Web God

// let c=`This is a text`;
// console.log(c); //This is a text

// let name="Web God"
// let text=`My Name is ${name}`;
// console.log(text); ///My Name is Web God

// let str="2";
// let num=2;
// console.log(str==num); //true
// console.log(str===num); //false
// -------------------------------------------------

//* 16.String Functions

//@ length
// let str="This is a string and that is a good";
// console.log(str.length); //35

//@ Extracting String Characters
// let char = str.charAt(5);
// console.log(char); //i

// let char2=str.charCodeAt(5);
// console.log(char2); //105

// let char3=str.at(5);
// console.log(char3); //i

// console.log(str[5]); //i

//@ Extracting String Parts
// let part = str.slice(10,16)
// console.log(part); //string

// let part2 = str.slice(10)
// console.log(part2); //string and that is a good

// let part3 = str.slice(-4)
// console.log(part3); //good

// let part4 = str.slice(-10,-1)
// console.log(part4); //is a goo

// let part5 = str.substring(10,16)
// console.log(part5); //string

// let str2=str.toUpperCase();
// console.log(str2); //THIS IS A STRING AND THAT IS A GOOD

// let str3=str.toLowerCase();
// console.log(str3); //this is a string and that is a good

// -----------------------------------------------------------
//* 22.Arrays

//@ Creating an Array
// const arr=["mango","apple","guava","grapes"];
// console.log(arr); //[ 'mango', 'apple', 'guava', 'grapes' ]

// const arr2=new Array("mango,apple,guava,grapes");
// console.log(arr2); //[ 'mango', 'apple', 'guava', 'grapes' ]

//@ Accessing Array Elements
// console.log(arr[3]); //grapes

//@ Changing an Array Element
// arr[1]="kiwi"
// console.log(arr); //[ 'mango', 'kiwi', 'guava', 'grapes' ]

//@ Converting an Array to a String

// let str=arr.toString();
// console.log(str); //'mango,kiwi,guava,grapes'

//@ Arrays are Objects
// console.log(typeof(arr)); //object

//@ Recognize an Array
// console.log(Array.isArray(arr)); //true

// console.log(arr instanceof Array); //true

// ----------------------------------------------------

//* 23. Array Methods
// const arr=["mango","apple","guava","grapes"];

//@  Array length
// console.log(arr.length); //4

//@ Array toString()
// let str=arr.toString();
// console.log(str); //'mango,apple,guava,grapes'

//@ at
// let arr2=arr.at(2);
// console.log(arr2); //guava

//@ join
// let str= arr.join("-");
// console.log(str); //'mango-apple-guava-grapes'

//@ pop
// arr.pop();
// console.log(arr); //[ 'mango', 'apple', 'guava' ]

//@ push()
// arr.push("potato");
// console.log(arr); //[ 'mango', 'apple', 'guava', 'grapes', 'potato' ]

//@ shift
// arr.shift();
// console.log(arr); //[ 'apple', 'guava', 'grapes' ]

//@ unshift
// arr.unshift("tomato");
// console.log(arr); //[ 'tomato', 'mango', 'apple', 'guava', 'grapes' ]

//@ delete
// delete arr[2];
// console.log(arr); //[ 'mango', 'apple', , 'grapes' ]

//@ concat
// const arr2=["watermelon","kiwi"];
// const arr3= arr.concat(arr2);
// console.log(arr3); //[ 'mango', 'apple', 'guava', 'grapes', 'watermelon', 'kiwi' ]

// const arr3=arr.concat("raddish");
// console.log(arr3); //[ 'mango', 'apple', 'guava', 'grapes', 'raddish' ]

//@ copywithin
// arr.copyWithin(2,0);
// Copy to index 2, all elements from index 0:
// console.log(arr);//[ 'mango', 'apple', 'mango', 'apple' ]

//@ flat
// const arr2=[[1,2],[3,4],[5,6]];
// const arr3=[[[1,2],[1,3]],[[2,3],[4,5]]]
// const newArr=arr2.flat();
// console.log(newArr); //[ 1, 2, 3, 4, 5, 6 ]
// const newArr2=arr3.flat().flat();
// console.log(newArr2);//[ 1, 2, 1, 3, 2, 3, 4, 5 ]

//@ splice
// arr.splice(2,0,"kiwi","melon");
// console.log(arr); //[ 'mango', 'apple', 'kiwi', 'melon', 'guava', 'grapes' ]
// arr.splice(0, 1);
// console.log(arr); //[ 'apple', 'guava', 'grapes' ]

//@ toSpliced

// const newArr=arr.toSpliced(0,1);
// console.log(newArr);

//@ slice
// const newArr=arr.slice(1);
// console.log(newArr); //[ 'apple', 'guava', 'grapes' ]

// ---------------------------------------------------
//* 26.Array Iteration

//@ foreach
// const arr=[53,3,7,18,23];
// arr.forEach(myFunc);

// function myFunc(value,index,array)
// {
//     arr[index]=value+10;
// }

// console.log(arr); //[ 63, 13, 17, 28, 33 ]

//@ map

// const arr=[53,3,7,18,23];

// const newArr=arr.map(myFunc);

// function myFunc(value) {
//     return value*2;
//  }

//  console.log(newArr);

//? by arrow function part 1
// const arr=[11,22,33,44,55];
// const newArr=arr.map(value=> value*2);
// console.log(newArr); //[ 22, 44, 66, 88, 110 ]

//? by anonymous fn
// const arr=[11,22,33,44,55];
// const newArr=arr.map(function (value) {
//     return value*2;
//  });
// console.log(newArr); //[ 22, 44, 66, 88, 110 ]

//@flatmap
// const arr=[11,22,33,44,55];
// const newArr=arr.flatMap(function (value) {
//     return value*2;
//  });
// console.log(newArr); //[ 22, 44, 66, 88, 110 ]

//@ filter

// const arr = [53, 3, 7, 18, 43];

// const newArr=arr.filter(myFunc);

// function myFunc(value) {
//     return value>23;
//   }

// console.log(newArr); //[ 53, 43 ]

//? Using foreach instead of filter
// const newArr = [];
// arr.forEach((val) => {
//   if (val > 23) {
//     newArr.push(val);
//   }
// });

// console.log(newArr); //[ 53, 43 ]

//? object example filter
// const books = [
//   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//   { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];

// let userBooks = books.filter((bk)=> bk.genre ==="History");
// console.log(userBooks);

//@ Chaining
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = myNumbers
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num > 71);
// console.log(newNumbers);

//@ reduce

// const arr=[11,22,33,44,55];

// const newArr=arr.reduce(myFunc,0);
// console.log(newArr); //165

// function myFunc(total,value) {
//     console.log(total); //11,33,66,110
//     console.log(value); //22,33,44,55
//     return total+value;

//  }

//? Example of reduce
// const shoppingCart = [
//   {
//       itemName: "js course",
//       price: 2999
//   },
//   {
//       itemName: "py course",
//       price: 999
//   },
//   {
//       itemName: "mobile dev course",
//       price: 5999
//   },
//   {
//       itemName: "data science course",
//       price: 12999
//   },
// ]

// const priceToPay = shoppingCart.reduce((acc,item)=> acc+item.price,0);
// console.log(priceToPay); //22996

//@ reduceRight

// const arr=[11,22,33,44,55];

// const newArr=arr.reduceRight(myFunc);
// console.log(newArr); //165

// function myFunc(total,value) {
//     console.log(total); //55,99,132,154
//     console.log(value); //44 //33 //22 //11
//     return total+value;

//  }

//@ every()

// const arr=[52,6,9,17,27];
// const newArr=arr.every(myFunc);
// console.log(newArr); //true

// function myFunc(value) {
//     return value>5;
// }

//@ some()

// const arr=[52,6,9,17,27];
// const newArr=arr.some(myFunc);
// console.log(newArr); //true

// function myFunc(value) {
//     return value>32;
// }

//@ Array.from()

// const str="webgod";
// const newArr=Array.from(str);
// console.log(newArr); //[ 'w', 'e', 'b', 'g', 'o', 'd']

//@ keys();

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys=fruits.keys();
// console.log(keys); //{ [Iterator] }

// for(let i of keys) {
//     console.log(i);  //0,1,2,3
// }

//@ entries();

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys=fruits.entries();
// console.log(keys); //{ [Iterator] }

// for(let i of keys) {
//     console.log(i);
//     console.log(i[0]);
//     console.log(i[1]);
//       //0,1,2,3
// }

//^ @with() 2023 updated

//^ const fruits = ["Banana", "Orange", "Apple", "Mango"];
//^ const newArr=fruits.with(2,"pineapple");
//^ console.log(newArr);

//@ spread

// const arr1 = ["Jan", "Feb", "Mar"];
// const arr2 = ["Apr", "May", "Jun"];
// const arr3 = ["Jul", "Aug", "Sep"];
// const arr4 = ["Oct", "Nov", "May"];

// console.log(...arr1,...arr2,...arr3,...arr4); //'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov May'

// --------------------------------------------------------------------
//* 35.Loop
//@ for

// for(let i=1;i<=10;i++) {
//     console.log(i);
// }

//? Expression 1(* optional)

// let i=1;

// for(;i<=10;i++) {
//     console.log(i);
// }

//? Expression 2(* optional)

// let i=1;

// for(;;i++) {
//     console.log(i);
//     if(i==10) break;
// }

//? Expression 3(* optional)

// let i=1;

// for(;;) {
//     console.log(i);
//     if(i==10) break;
//     i++;

// }

//? for in

// const obj= {
//     name:"webgod",
//     age:26
// }
// console.log(obj); //{ name: 'webgod', age: 26 }

// for(let i in obj) {
//     console.log(i); //'name','age'
//    // console.log(obj.i); //undefiined undefined
//     console.log(obj[i]); //'webgod',26
// }

//@ for of
// const arr = ["Banana", "Orange", "Apple", "Mango"];
// for (let i of arr) {
//     console.log(i);
// }

// const str="webgod";

// for(let i of str) {
//     console.log(i);
// }

//@ while

// let i=1;
// while(i<=10) {
//     console.log(i);
//     i++;
// }

//@ do while

// let i=1;
// do{
//     console.log(i);
//     i++;
// }

// while(i<=10);

//? When to Use while vs do...while:
// while loop
// let x = 5;
// while (x > 10) {
//   console.log("This won't be executed because the condition is false initially.");
// }

// do...while loop
// let y = 5;
// do {
//   console.log("This will be executed at least once, even though the condition is initially false.");
// } while (y > 10);

//* 36.Break
//@ break

// let i=1;
// while(i<=10) {
//     if(i==5) break;
//     console.log(i); //1,2,3,4
//     i++;
// }

//@ continue
//? while loop
// let i=1;
// while(i<=10) {
//     if(i==5) {
//         i++;
//         continue;
//     };
//     console.log(i); //1,2,3,4,6,7,8,9,10
//     i++;

// }

//? for loop

// for(let i=1;i<=10;i++) {
//     if(i==5) continue;
//     console.log(i); //1,2,3,4,6,7,8,9,10
// }

//@ labels

// outerloop:for(let i=1;i<=3;i++) {
//     for(let j=1;j<=3;j++) {
//         if(j==3) break outerloop ;
//         console.log(i);
//         console.log(j);

//     }
// }
// --------------------------------------------------------
//* 39.Maps

// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United State of America");
// map.set("Fr", "France");
// map.set("IN", "India");

// // console.log(map);

// for (let [key, value] of map) {
//   console.log(key);
//   console.log(value);
// }
// ------------------------------------------------------------
//* 45.Errors
//@ try and catch

// try {
//     addalert("hello");
// }

// catch(err) {
// console.log(err); //[ReferenceError: addalert is not defined]
// console.log(err.message); //'addalert is not defined'
// }

//@ throw

// let a=14;
// if(a>10) {
//     throw Error("Number should not be 4"); //!Number should not be 4
// }

//@ finally
// try {
//     alertd("hello");
// }

// finally {
// console.log("This is a finally"); //'This is a finally'
// }

// ---------------------------------------------------------------
//* 47. Hoisting
//@ var
// x=5;
// console.log(x); // 5
// var x;

//@ let
// y=10;
// console.log(y); // ReferenceError: y is not defined
// let y;

//@ const
// z=20;
// console.log(z);
// const z; //! declarations must be initialized
// --------------------------------------------------------
//* 48.Use Strict

// "use strict";
// x=3.14;
// ---------------------------------------------------------------
//* 49.Arrow Function
// function fn() {
//     console.log("this is normal function"); //`this is normal function'
// }

// fn()

// const fn = () => {
//   console.log("this is an arrow function"); //'this is an arrow function'
// };

// fn();

// const double = (n)=>{
//     return n*2;
// }

// console.log(double(6)); //12

// const double = (n) => n * 2; //Implicit return

// console.log(double(6)); //12

// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(11, 22)); //33

// const sum = (a, b) => (a + b);
// console.log(sum(11, 22));

//! const sum =(a,b) => {username:"webgod"};
//! console.log(sum(11,22)); //undefined

// const sum =(a,b) => ({username:"webgod"});
// console.log(sum(11,22)); { username: 'webgod' }

//@ this
//? normal function
// function fn() {
//     return this
// }

// console.log(fn()); //global object
//? arrow function
// const fn2 = () => {
//    return this
// }

// console.log(fn2()); //{}

//? lexical scoping

// function outerFunction() {
//     const outerVariable = "I am in the outer scope";

//     function innerFunction() {
//       console.log(outerVariable); // innerFunction can access outerVariable
//     }

//     innerFunction();
//   }

//   outerFunction();

//? other example
// const obj = {
//     value: "I am in the object",
//     regularMethod: function () {

//       const arrowFunction = () => {
//         return this.value; // 'this' is captured from the surrounding method (regularMethod)
//       };
//       return arrowFunction();
//     },
//   };

//   console.log(obj.regularMethod()); // Outputs: I am in the object

//  -----------------------------------------------------------------------------------
//* 50. Nested function's scope

// let a=10;

// function outer() {
//     let b=20;
//     function inner() {
//         let c=30;
//         console.log(a,b,c); // 10 20 30
//     }
//     inner()
// }

// outer()

// --------------------------------------------------
//* 51. Closure

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   inner();
// }

// outer();
// outer();

// function outer() {
//   let counter=0;
//   function inner() {
//     counter++;
//     console.log(counter); // 1,2
//   }
//   return inner
// }

// let fn=outer()
// fn()
// fn()
// --------------------------------------------------------
//* 52. Function Currying

//@ Easy Example
// function curry(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(curry(2)(3)(5)); //10

//@ Complex Example
// function sum(a,b,c) {
//   return a+b+c;
// }
// // console.log(sum(2,3,5)); //10

// function curry(fn) {
//   return function(a) {
//     return function(b) {
//       return function(c) {
//         return fn(a,b,c)
//       }
//     }
//   }
// }

// const carriedSum=curry(sum);
// console.log(carriedSum(2)(3)(5));
// -------------------------------------------------------
//* 53.Immediately Invoked Function Expressions IIFE
//# to remove pollution of global scope
//@ named IIFE
// (function func() {
//   console.log("DB connected"); //'DB connected'
// })();

//@ unnamed IIFE
// (()=>{
//   console.log("DB CONNECTED 2");
// })();

// ((name)=>{
//   console.log(`DB connected by ${name}`); //'DB connected by WebGod'
// })('WebGod');
// -------------------------------------------------------
//* 56. Async JS

//@ setTimeOut

// setTimeout(function () {
//   console.log("hello");
// },5000);

const sayHello = () => {
  console.log("Hello");
};

setTimeout(sayHello, 5000);

//@ Example of setTimeOut and clearTimeOut

//? setTimeOut
// let setT = document.getElementById("setT");

// let changeText = () => {
//   setT.innerHTML = "Hello This is Changed";
// };

// let start = document.getElementById("start");
// let stop = document.getElementById("stop");

// let startEvent = () => {
//   setTimeout(changeText, 5000);
// };

//? clearTimeOut
// start.addEventListener("click", startEvent);

// stop.addEventListener("click", () => {
//   clearTimeout(startEvent);
// });

