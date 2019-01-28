//strings
alert("BOri, Bori, Bori");
alert("Ulbo, Ulbo, Ulbo");
alert("Zhanar, Zhanar, Zhanar");
var greeting = " Bori";
greeting + " Ulbo";

var quote = "Stay awhile and listen!";
console.log(quote[6]); //w
//the "="
var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer); //true
//avoid "" in ""
var joke = "Why couldn't the shoes go out and play?\nThey were all \"tied\" up!";
console.log(joke);
//endline
var haiku = "Blowing from the west"+"\nFallen leaves gather"+"\nIn the east.";
console.log(haiku);
//string1 + stirng2
var thingOne = "red";
var thingTwo = "blue";
console.log(thingOne+' '+thingTwo);
//conditions
var money = 100.50;
var price = 100.50;
if (money > price) {
  console.log("You paid extra, here's your change.");
} 
else if (money === price) {
  console.log("You paid the exact amount, have a nice day!");
} 
else {
  console.log("That's not enough, you still owe me money.");
} //"You paid the exact amount, have a nice day!"
//while loop
var start = 0;
while (start < 10) { 
  console.log(start);
  start = start + 2; 
}
//funcctions
function laugh(num){
    var res = "";
    for(var i = 0; i < num; i++)
        res += "ha";
    res += "!";
    return res;
}
console.log(laugh(3));
//functions
function addTen(x) {
    return x + 10;
  }
function divideByThree(y) {
    return y / 3;
}  
  var result = addTen(2);
  console.log(divideByThree(result)); //4

  sayHi("Julia");
//hoisting
function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting = "Hello";
} //undefined Julia