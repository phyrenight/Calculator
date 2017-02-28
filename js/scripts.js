(function(){
  "use strict";

  var zero = document.getElementById("zero");
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");
  var four = document.getElementById("four");
  var five = document.getElementById("five");
  var six = document.getElementById("six");
  var seven = document.getElementById("seven");
  var eight = document.getElementById("eight");
  var nine = document.getElementById("nine");
  
  var clearScrn = document.getElementById("clear");
  var division = document.getElementById("division");
  var multiply = document.getElementById("multiply");
  var addition = document.getElementById("addition");
  var subract = document.getElementById("subtract");
  var equals = document.getElementById("equals");
  var decimal = document.getElementById("decimal");


  clearScrn.addEventListener("click", clearScreen, false);
  division.addEventListener("click", operation, false);
  multiply.addEventListener("click", operation, false);
  addition.addEventListener("click", operation, false);
  subtract.addEventListener("click", operation, false);
  equals.addEventListener("click", solve, false);
  decimal.addEventListener("click", addDecimal, false);

  zero.addEventListener("click", number, false);
  one.addEventListener("click", number, false);
  two.addEventListener("click", number, false);
  three.addEventListener("click", number, false);
  four.addEventListener("click", number, false);
  five.addEventListener("click", number, false);
  six.addEventListener("click", number, false);
  seven.addEventListener("click", number, false);
  eight.addEventListener("click", number, false);
  nine.addEventListener("click", number, false);


function number() {
  /*
    args: num - a new number to add to the screen
    function: updates part the screen of the calculator
  */
  var screen = document.getElementById("printScreen");
  var str = screen.innerHTML;
  if(str.length < 12){
    screen.innerHTML = combineInputs(str, this.innerHTML);
    pastOperation(this.innerHTML);
  }
  else{
    alert("Calculator only takes 12 numbers.");
  }
}

function pastOperation(num) {
  /*
    args: num is a string of numbers or an operation
    functinon: uupdates part of the screen
  */
  var screen = document.getElementById("past");
  var str = screen.innerHTML;
  var total = "";
  screen.innerHTML = combineInputs(str, num);
}

function combineInputs(str, num){
  /*
    args: str - string of numbers
    num: new number to be added to string
    returns a string  
  */
  var total = "";
  if(parseFloat(str) === 0 && str != "0.") {
    total = String(num);
    return total;
  }
  else{
    total = str + String(num);
    return total;
  }
}

function addDecimal(){
  // add check to make sure current number has only on decimal
  var printScreen = document.getElementById("printScreen");
  var pastInputs = document.getElementById("past");
  var printScreenValue = printScreen.innerHTML.indexOf(".");
  if(printScreenValue < 0){
    var currentNumber = printScreen.innerHTML + ".";
    var currentInput = pastInputs.innerHTML + ".";
    pastInputs.innerHTML = currentInput;
    printScreen.innerHTML = currentNumber;
  }
}
/*
function updateScreen(total){
  var screenAll = document.getElementById("past");
  var currentNum = document.getElementById("printScreen");
  console.log(screenAll);
  console.log(currentNum);
  console.log(total);
}*/

function operation(){
  var str ="";
  var printScr = document.getElementById("printScreen");
  var screen = document.getElementById("past");
  str += screen.innerHTML;
  var allinput = "";
  if(eval(str) !== 0){
    allinput = str + this.innerHTML;
    printScr.innerHTML = 0;
    screen.innerHTML = allinput;
  }

}

function solve(){ 
  var printScreen = document.getElementById("printScreen");
  var parentStr = document.getElementById("past");
  var str = parentStr.innerHTML;
  if(isNumeric(str.slice(-1))){
    parentStr.innerHTML = eval(str);
    printScreen.innerHTML = eval(str);
  }
}

function isNumeric(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function clearScreen(){
  var printScreen = document.getElementById("printScreen");
  var pastIput = document.getElementById("past");
  printScreen.innerHTML = 0;
  pastIput.innerHTML = 0;
}
})();