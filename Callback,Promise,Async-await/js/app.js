// /*
// // x=10;
// // console.log(x);
// // let x;

// var a = 10;
// b=5
// console.log(a+b);
// var b;

// // only hoists declarations

// z = 2;
// console.log(z)
// let z;
// */

// // CALLBACK HELL

// function Info(name,getUser) {
//     getUser();
//     setTimeout(() => {
//         console.log("Welcome " + name);
//     }, 3000);
// }

// function getUser() {
//     console.log("Data uploaded!!!");
// }
// Info("Altan",getUser);


// // PROMISE  => resolve / reject

// const promise = new Promise(function(resolve,reject){
//     if(10>8) {
//         resolve("OK");
//     }
//     else{
//         reject("Error....");
//     }
// })

// promise.then(function(x) {
//     console.log(x)
// }).catch(function(y){
//     console.log(y)
// })

// // PROMISE METHODS
// const success = Promise.resolve(11);
// const unsuccess = Promise.reject("Ooops...");
// const promiseAll = Promise.all(p1,p2,p3,p4,p5);
// const racePromise = Promise.race(p1,p2,p3,p4,p5)
// console.log(success)
// console.log(unsuccess)

// ASYNC-AWAIT

const FetchPosts = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();  
    } catch (error) {
        console.log(error)
    }
    setTimeout(() => {
        console.log(data); 
    }, 10000);
}


async function FetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();  
    } catch (error) {
        console.log(error)
    }
    setTimeout(() => {
        console.log(data); 
    }, 10000);
}

FetchPosts();