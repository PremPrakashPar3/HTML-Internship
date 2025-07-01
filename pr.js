// Example 1
// function test() {
// var x = 10;
// if (true) {
// var x = 20;
// console.log(x);
// }
// console.log(x);
// }
// test();

// function test() {
// let x = 10;
// if (true) {
// let x = 20;
// console.log(x);
// }
// console.log(x);
// }
// test();
// if (true) {
// var x = 5;
// }
// console.log(x);
// if (true) {
// let y = 10;
// }
// console.log(y);
var c = 10;
{
var c = 20;
console.log(c);
}
console.log(c);
// function outer() {
// var x = 'outer';
// function inner() {
// console.log(x);
// }
// inner();
// }
// outer();