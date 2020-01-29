//sum
function sum(a, b){
   return a+b;
}
console.log (sum(1, 2));

//mul
function multiply(x,y){
    return x*y;
}
console.log (multiply(5, 3));

//per
function percentage (num, per){
  return (num/100)*per;
}
console.log (percentage(10, 5));

//div
function division (a, b){
    return a/b;
}
console.log (division(1, 2));

//intDiv
function integerDivision (a, b){
    return Math.floor(a/b);
}
console.log (integerDivision(9, 2));

//abs
function aBs (a){
    return Math.abs(a);
}
console.log (aBs(-1));

//sin
function sinus (a){
    return Math.sin(a);
}
console.log (sinus(0.5));

//cos
function cosinus (a){
    return Math.cos(a);
}
console.log (cosinus(0.5));

//tg
function tangus (a){
    return Math.tan(a);
}
console.log (tangus(0.5));

//Ctg
function ctg(x) {
   return 1 / Math.tan(x);
}
console.log (ctg(0.5));

//Sqr
function sqr (a,n) {
    return Math.pow(a, n);
}
console.log (sqr(2, 2));

//Factorial
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log (factorial(3));

//Round
function round (a) {
    return Math.round(a);
}
console.log (round(3.6));

//Sub
function sub (a, b) {
    return a-b;
}
console.log (sub(2,1));








