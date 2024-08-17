/*function add(a,b){
    return a+b;
}

function divide(a,b){
    return a/b;
}

function subtract(a,b){
    return a-b;
}

function dooperation(a,b,op){
    return op(a,b);
}

console.log(dooperation(1,5,divide));

*/


// const fs = require("fs");

// fs.readFile("a.txt","utf-8",(err, data) => {
//     if(err)[
//         console.log("Error in loading the file.")
//     ]
//     else{
//         console.log(data);
//     }

// })

// fs.readFile("b.txt","utf-8",(err, data) => {
//     console.log(data);
// })

// setTimeout(()=> {
//     console.log("Hi there, I am a callback");
// },0)

// console.log("Hii")



//Making setTimeout synchronous:

// function setTimeoutsync(timeout){
//     let startTime = new Date();
//     while(1){
//         let currentTime = new Date();
//         if(currentTime.getTime() - startTime.getTime() > timeout){
//             break;
//         }
//     }
// }

// setTimeoutsync(5000);
// console.log("Hi there")




// let timeme = new Date();
// console.log(timeme.getFullYear());





//Promisified version of fs.readFile
// const fs = require("fs");


// function filefetch(resolve){
//     fs.readFile("a.txt","utf-8",resolve)
// }

// function promisifiedfs(){
//     return new Promise(filefetch)
// }

// function main(err,data){
//     console.log(data);
// }

// promisifiedfs().then(main)



//classes are a cleaner wway to write native fucntions
// class Rectangle{
//     constructor(length, breadth,color){
//         this.length=length;
//         this.breadth=breadth;
//         this.color=color;
//     }
//     Area(){
//         return (this.breadth * this.length);

//     }
//     paint(){
//         console.log(`THe color u entered is ${this.color} `);
//     }

// }


// const rect = new Rectangle(2,4,"red");  //rect variable is an instance or an OBJECT of Rectangle class.
// console.log(rect.Area());

// rect.paint();


// const map = new Map();
// map.set('name', 'anish');
// map.set('gender','male')

// console.log(map.get('name'))
// console.log(map.get('gender'))

// const date = new Date();
// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getTimezoneOffset());


// function runafter3s(resolve){
//     setTimeout(resolve,3000);
// }

// runafter3s(() => {
//     console.log("Hi")
// })




// setTimeout(()=>{
//     console.log("Hi")
//     setTimeout(()=>{
//         console.log("Hello")
//         setTimeout(()=>{
//             console.log("Hi there")
//         },5000)
//     },3000)
// },1000)


// //or

// setTimeout(()=>{
//     console.log("Hi")
// },1000)


// setTimeout(()=>{
//     console.log("Hello")
// },4000)


// setTimeout(()=>{
//     console.log("Hi there")
// },9000)

// //or

// setTimeout(step1done, 1000)

// function step1done(){
//     console.log("Hi");
//     setTimeout(step2done, 3000)

// }

// function step2done(){
//     console.log("Hello");
//     setTimeout(step3done, 5000)

// }

// function step3done(){
//     console.log("Hi there");

// }


// //Promisified 

// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// setTimeoutPromisified(1000).then(()=>{
//     console.log("Hi")
//     setTimeoutPromisified(3000).then(()=>{
//         console.log("Hello")
//         setTimeoutPromisified(5000).then(()=>{
//             console.log("Hi there")
//         })
//     })   
// })


// //or

// setTimeoutPromisified(1000)
//   .then(() => {
//     console.log("hi");
//     return setTimeoutPromisified(3000);
//   })
//   .then(() => {
//     console.log("hello");
//     return setTimeoutPromisified(5000);
//   })
//   .then(() => {
//     console.log("hi there");
//   });





// function waitfor3sec(resolve){
//     setTimeout(resolve,1000)
// } 

// function setTimeoutpromisified(){
//     return new Promise(waitfor3sec);
// }

// function main(){
//     console.log("Anish is good")
// }

// setTimeoutpromisified().then(main);


// function practisepromise(){
//     return new Promise((resolve)=>{
//         setTimeout(resolve, 1000);
//     })
// }

// practisepromise().then(()=>{
//     console.log("Anish is pretty dang good at coding.!!")
// })





//promisified version of fs.readfile
// const fs = require("fs");

// function promisifiedreadme(filename,encoding){
//     return new Promise((resolve,reject) => {
//         fs.readFile(filename,encoding,(err,data)=>{
//             if(!err){
//                 resolve(data);
//             }
//             else{
//                 reject(err);
//             }
//         })
//     })
// }


// promisifiedreadme("a.txt","utf-8").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err => {
//         console.log(err);
//     })
// })





//Promisified version CleanFile

// const fs = require("fs");

// function PromisifiedCleanFile(filename, encoding) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filename, encoding, (err, data) => {
//             if (err) reject(err);
//             else {
//                 let trimmedContent = data.trim();

//                 fs.writeFile(filename,trimmedContent,encoding, (err) => {
//                     if(err) reject(err);
//                     else{
//                         resolve(trimmedContent);

//                     }
//                 })
//             }
//         })
//     })
// }

// PromisifiedCleanFile("a.txt","utf-8").then(data => {
//     console.log("File modified successfully" , data);
// }).catch(err => {
//     console.log(err);
// })



//Promisified writefile
// const fs = require("fs");

// function PromisifiedWriteFile(filename, data, encoding) {
// 	return new Promise((resolve, reject) => {

// 		fs.writeFile(filename, data, encoding, err => {
// 			if (err) reject(err);
// 			else {
// 				resolve(data);
// 			}
// 		})
// 	})
// }

// let modified_file = "Anish, you are in file B rn";

// PromisifiedWriteFile("b.txt", modified_file, "utf-8",).then(data => {
// 	console.log("Data edited");
// }).catch(err => {
// 	console.log("Error found");
// })



//Promisified Clean file

// const fs = require("fs");

// function PromidifiedCleanFile(filename,encoding){
//     return new Promise((resolve,reject) => {
//         fs.readFile(filename,encoding,(err,data)=>{
//             if(err) reject(err);
//             else{
//                 let modified_file = data.trim();

//                 fs.writeFile(filename, modified_file, encoding, err => {
//                     if(err) reject(err);
//                     else{
//                         resolve(data);
//                     }
//                 })
//             }
//         } )
//     })
// }


// PromidifiedCleanFile("b.txt" , "utf-8").then(data=>{
//     console.log("File modified")
// }).catch(err => {
//     console.log("Error fdound")
// })




//sleep-completely.js
/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// function sleep(milliseconds) {
//     return new Promise(resolve => setTimeout( resolve , milliseconds))
// }

// sleep(3000).then(() => {
//     console.log("Hi");
// })

// module.exports = sleep;





function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


async function solve() {
    await setTimeoutPromisified(1000);
    console.log("Hi")
    await setTimeoutPromisified(3000);
    console.log("hello")
    await setTimeoutPromisified(5000);
    console.log("hi there")
}

solve();


function setTimeoutPromisified2(ms) {
    return new Promise((resolve, reject) => {
        if (!err) {
            setTimeout(resolve, ms);
        }
        else {
            reject();
        }
    })
}


setTimeoutPromisified2(2000).then(() => {
    console.log("2 seconds have passed");
}).catch(() => {
    console.log("Error has been detected")
})
