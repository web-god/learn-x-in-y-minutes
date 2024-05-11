// * Topic
// @ Sub topic
// ? sub sub topic
// & sub sub sub topicxx
// -- horizontal line
// ! error
// # information
// $ reference

// -----------------------------------------------

//* 61.API
//@ XMLHttp Concept(Ajax)

// const requestUrl = 'https://api.github.com/users/web-god';

// const xhr = new XMLHttpRequest();
// xhr.open('GET',requestUrl);
// xhr.onreadystatechange = function() {
//     console.log(xhr.readyState);
//     if(xhr.readyState == 4) {
//         //@ Conversation to JSON Data
//         const data = JSON.parse(this.responseText);
//         console.log(data.bio);
//     }
// }
// // console.log(xhr.readyState);
// xhr.send();
//--------------------------------------------

//* 62.Promises
//@ promise Ex 1
// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task is completed");
//     resolve();
//   });
// });

// promiseOne.then(function () {
//   console.log("Promise Consumed");
// });

//@ promise Ex 2
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2 is completed");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Promise 2 Consumed");
// });

//@ promise Ex 3

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "webgod", email: "webgod.gmail.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
// console.log(user);
// });

//@ promise Ex 4
//? .then() .catch() .finally()

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;

//     if (!error) {
//       resolve({ username: "webgod", password: "123" });
//     } else {
//       reject("Error:Something went wrong");
//     }
//   }, 1000);
// });

// //! const username = promiseFour.then(function(user) {
// //! return user.username
// //! })

// //! console.log(username);

// promiseFour
//   .then(function (user) {
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => console.log("promise is either resolve or reject"));

//@ promise Ex 5
//? Async Await
// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;

//     if (!error) {
//       resolve({ username: "webgod", password: "123" });
//     } else {
//       reject("Error:Something went wrong");
//     }
//   }, 1000);
// });

// async function consumepromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumepromiseFive();

//@ fetch()
//? with async await
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers();

//? with .then() .catch()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

  



 