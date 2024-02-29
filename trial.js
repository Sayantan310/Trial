// function n(a,b){
//     return a+b
// }
// let a = n(1,2)
// console.log("NUMBER : " + a)

const { log, error } = require("console");
// const { reverse, TIMEOUT } = require("dns");
// const { resolve } = require("path");

// const { log } = require("console");

// const arr = [1,2,3,4,5,6,7,8,9]
// console.log(typeof arr);
// arr.shift()
// arr.unshift(11,12,13)
// console.log(arr)
// const s = arr.splice(2,5)
// console.log("s",s)
// console.log("arr",arr);

// const sym = Symbol("123")
// const obj = {
//     [sym] : "l1",
//     email : "Sayantan"
// }
// obj.email = "Sayantanbiswas310@gmail.com"
// obj.trial = () =>{
//     console.log(`hello ${obj.email}`);
// }
// console.log(obj.trial());

// Object.freeze(obj)
// obj["email"] = "Sayantanbiswas310"
// console.log(obj);

// const arr1 = [1,2,3,4]
// const arr2 = [5,6,7,8]
// const arr3 = [...arr1,...arr2]
// console.log(arr3);

// const obj1 = {
//     name : "Sayantan",
//     roll : "22"
// }
// const obj2 = {
//     school : "S",
//     sec : "D"
// }

// const obj3 = Object.assign({}, obj1, obj2)
// const obj4 = {...obj1, ...obj2}
// console.log(obj4);

// const arr = [
//     {
//         name : "Sayantan",
//         t : {
//             time: ()=>{
//                 console.log("li");
//             }
//         }
//     },
//     {
//         roll : "22"
//     },
//     {
//         email: "Sayantanbiswas310@gmail.com"
//     }
// ]
// console.log(arr[0].t.time());

// const obj = {
//     name : "Sayantan",
//     roll: "22",
//     id: "2"
// }
// console.log(obj.hasOwnProperty("Sayantan"));
// const t = Object.keys(obj)
// console.log(t, typeof t);
// const arr = [1,2,3,4]
// const[a,b,c,d] = arr
// console.log(a,b,c,d);
// const s = "abcd"
// const temp = Array.from(s)
// console.log(temp);

// console.log(l);
// console.log(n);
// console.log("1" + 2);
// console.log("1" - 1);
// const arr = [1,2,3,4]
// const [a,b,c,d] = arr
// console.log(a,b,c,d);
// let obj1 = {
//     name : "Sayantan",
//     id : "S",
//     roll : "22"
// }
// // const {name:l} = obj1
// const obj2 = {
//     name : "Sayantan Biswas",
//     gf : "swati pandit",
//     id : "Sl",
//     roll : "220"
// }
// let obj3 = {...obj2,...obj1}
// console.log(obj3);

// const obj1 = {
//   name: "Sayantan",
//   id: "S",
//   roll: "22",
//   t : function(){
//     log("l")
//   }
// };
// const s = JSON.stringify(obj1)
// // log(s,typeof s)
// obj2 = JSON.parse(s)
// log(obj2)
// const a = ()=>{
//     log("hkbhkbbh")
// }
// const b = eval(a.toString())
// // let c = eval(b)
// // log(typeof c)
// // c()
// b()

// let s = "Sayantan"
// temp = ""
// for (let i = s.length - 1; i >= 0; i--){
//     temp+=s[i]
// }
// log(temp)

// function f(...arr){
//     let temp = 0
//     for (let i of arr){
//         temp+=i
//     }
//     console.log(temp);
// }
// f(5,6)

// const obj = {
//     name : "Sayantan",
//     id : "22",
//     trio : function(){
//         console.log(`Welcome Mr. ${this.name}`)
//     },
//     print:function(){
//         log(this)
//     }
// }
// obj.print()

// ((name)=>{
//     log(`hello ${name}`)
// })("sayantan")

// switch (key) {
//     case value:       
//         break;

//     default:
//         break;
// }
// const twosum = (array,targetNumber)=>{
//     for (let i = 0; i < array.length - 1; i++){
//         for (let j = i+1; j < array.length; j++){
//             if (array[i] + array[j] === targetNumber){
//                 return [i,j]
//             }

//         }
//     }
// }
// const array = [10, 20, 10, 40, 50, 60, 70] 
// const targetNumber = 50


// log(twosum(array,targetNumber))



// let s = "sayantan Biswas"
// let arr = Array.from(s)
// let s2 = s.split(" ") 
// log(s2)

// let i = 1
// while(i!=5){
//     log(i)
//     i++;
// }

// arr = [1,2,5,[7,8,9,[11,12,13,[67,90,87]]]]
// let a = arr.flat(Infinity)
// log(a)
// let stack = []
// let arr = [1,2,1,2,2,3,5,5,4,6,7,8,9]
// for (let i = 0; i < arr.length; i++){
//     if (stack.includes(arr[i]) == false){
//         stack.push(arr[i])
//     }
// }
// console.log(stack)

// const m = new Map()
// m.set("l","lo")
// m.set("r","hi")
// // m.forEach((value,key)=> console.log(key,value))
// for (const [key,value] of m) {
//     log(key,value)
// }
// log(m)
// const obj = {
//     l: "hi",
//     r: "bei"
// }
// for (let key in obj){
//     log(`${key} : ${obj[key]}`)
// }

// const arr = [1,2,3,4]
// for(let i in arr){
//     log(i)
// }

// abs = {
//     t : "l",
//     f : "o"
// }
// for (a in abs){
//     log(a,abs[a])
// }

// s = "lpo"
// let l = Array.from(s)
// log(l)

// m = new Map()
// m.set('l','lop')
// m.set('p','po')

// m = {
//     "o":"po",
//     "oi":"oi"
// }
// for(i in m){
//     log(i)
// }

// ((a)=>{
//     log(`${a} logging`)
// })("sayantan")
// const a = [1,2,3,4]
// for (let i in a){
//     log(i)
// }
// log("ending loop")
// for (let i of a){
//     log(i)
// }
// const a = {
//     1 : "one",
//     2 : "two",
//     3 : "three"
// }
// Object.freeze(a)
// a[1] = "sayantan"
// log(a)

// for (let key in a){
//     log(key, a[key])
// }
// const b = new Map()
// b.set("one","1")
// b.set("two","2")
// b.set("three","3")
// b.set('four',"4")
// b.set("one","10")
// b.forEach((key, value) =>{
//     log(key,value)
// })
// log(b)

// const arr = [
//     {
//         emp_name : "Sayantan",
//         emp_id : 1
//     },
//     {
//         emp_name : "Swati",
//         emp_id : 2
//     },
//     {
//         emp_name : "Romel",
//         emp_id : 3
//     }
// ]
// arr.forEach((item,index)=>{
//     log(item,index)
// })

// const a = {
//     "one": 1,
//     "two": 2,
//     "three": 3
// }
// for(i in a){
//     log(i)
// }

// const a = {
//     name : "s",
//     id : 2
// }

// for (i in a){
//     log(i)
// }
// const b = new Map()
// b.set("one", "2")
// b.set("two", "3")

// b.forEach( (value,key) =>{
//     log(key,value)
// })

// const a = [1,2,3,4,5,6,7,8]
// const f_a = a.filter( (value)=> value>3)
// // log(f_a)
// const m_a = a.map( (value)=> value+10)
// log(m_a)

// const a = [1,2,3,4]

// const b = a.reduce( (prev,cur)=> prev+cur ,0)
// log(b)

// const a = [
//     {
//         course_name : "py",
//         price : 2000
//     },
//     {
//         course_name : "java",
//         price : 200
//     },
//     {
//         course_name : "golang",
//         price : 4000
//     },
//     {
//         course_name : "c++",
//         price : 1000
//     },
//     {
//         course_name : "c",
//         price : 200
//     },
// ]

// const b = a.reduce( (prev,cur) => prev + cur.price ,0)
// log(b)

// ((str)=>log(`${str} loging`))("sayantan")

// PROMISES

// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         log("WORK DONE")
//         resolve()
//     },1000)

// })
// p1.then(()=>{
//     log("Successfully resolved")
// })

// new Promise((res, rej)=>{
//     setTimeout(()=>{
//         log("yup successfull")
//         res({"a" : "success", "b" : "failure", "c" : "avg"})
//     },2000)
// }).then((data)=>{
//     log(data)
// })

// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = true
//         if (error === true){
//             reject("The request has been rejected")
//         }else{
//             log("The reqest has been resolved")
//             resolve({success: 1, error: 0})
//         }
//     })

// }).then((data)=>{
//     log(data)
// }).catch((data)=>{
//     log(data)
// })

// new Promise((resolve, reject)=>{
//     let error = false
//     if (error === false) {
//         setTimeout(()=>{
//             log("REQUEST SUCCESSFULL")
//             resolve(
//                 [{
//                     name: "Sayantan",
//                     id: "90"
//                 },
//                 {
//                     name: "Swati",
//                     id: "9"
//                 },
//                 {
//                     name: "Romel",
//                     id: "89"
//                 }]
//                 )
//         },2000)
//     }else{
//         reject("REQUEST FAIL")
//     }
// }).then((data)=>{
//     log(data)
//     // log("Request sucessfully completed")
// }).catch((data)=>{
//     log(data)
// }).finally(()=>log("sucesssssss"))

// const a = {
//     name1: "Sayantan",
//     id1: 89
// }
// const b =  {
//     name2: "Swati",
//     id2: 9
// }

// c = {...b,...a}
// log(c)

// const t1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if (error === false) {
//             log("Request successfull")
//             resolve(
//                 [{
//                     name: "Sayantan",
//                     id: "90"
//                 },
//                 {
//                     name: "Swati",
//                     id: "9"
//                 },
//                 {
//                     name: "Romel",
//                     id: "89"
//                 }]
//             )
//         } else {
//             reject("Request not successfull")
//         }
//     }, 2000)
// })

// async function t2() {
//     try {
//         const temp = await t1
//         log(temp)
//     }
//     catch (e) {
//         log(e)
//     }
// }

// t2()

// const arr = [1,2]
// let [a,b] = arr
// log(a,b)
// let arr = ["Sayantan","Biswas","Swati","Pandit"]
// n = arr[Math.floor(Math.random() * arr.length)]
// log(n)

// const a = ((url="www.virtualpageurl.com",success=true,falure=false)=>{
//     let time = Math.floor(Math.random()*10)
//     result = undefined
//     if (time >= 5){
//         result = falure
//     }
//     else{
//         result = success
//     }
//     if (result === true){
//         log(url)
//     }else{
//         log("Failure")
//     }
// })

// a()


s = "hello"
log(s[s.length - 1])