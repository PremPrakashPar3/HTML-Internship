// console.log("statr")
// function hello() {
//     console.log("hello");
// } 
// setTimeout(function(){
//     console.log("call after 2 seconds");
// },0)
// hello();
// console.log("end")
// https://javascript.info
// let a;
// a=14;
// function fn() {
//     console.log("hello");
// } 
// function fn2() {
//   let a=10;
//   console.log(a);
//   console.log("hello2");
//   fn();
// }
// fn2();
// console.log(a);
fn2();
let a;
a=14
function fn(){
  let a=8
  console.log(a)
  console.log("hello")

}
setTimeout(fn,1000)
a=16
console.log(a)
function fn2(){
  var c=10;
  console.log(c);
  console.log("hello2")

}
console.log(a);