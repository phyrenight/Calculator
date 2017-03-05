(function(){
  "use strict";

  var currentEquation = "";

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
  var subtract = document.getElementById("subtract");
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
  var equation = "";
  var screen = document.getElementById("printScreen");
  var str = screen.innerHTML;
  if(str.length < 12){
    equation = combineInputs(str, this.innerHTML);
    screen.innerHTML = equation;
    currentEquation = equation;
    console.log(currentEquation);
  }
  else{
    alert("Calculator only takes 12 numbers.");
  }
}

function combineInputs(str, num){
  /*
    args: str - string of numbers
    num: new number to be added to string
    returns a string  
  */
  if(parseFloat(str) === 0 && str != "0.") {
    return String(num);
  }
  else{
    return str + String(num);
  }
}

function addDecimal(){
  // add check to make sure current number has only on decimal
  var printScreen = document.getElementById("printScreen");
  var printScreenValue = printScreen.innerHTML.indexOf(".");
  if(printScreenValue < 0){
    var currentNumber = printScreen.innerHTML + ".";
    var currentInput = currentEquation + ".";
    currentEquation = currentInput;
    printScreen.innerHTML = currentNumber;
  }
}

function operation(){
  var str ="";
  var printScr = document.getElementById("printScreen");
  str += screen.innerHTML;
  var allinput = "";
  if(eval(currentEquation.slice(-1)) !== 0){
    allinput = currentEquation + this.innerHTML;
    printScr.innerHTML = 0;
    currentEquation = allinput;
  }
}

function solve(){ 
  var printScreen = document.getElementById("printScreen");
  console.log(currentEquation);
  if(isNumeric(currentEquation.slice(-1))){
    currentEquation = eval(currentEquation);
    console.log(currentEquation)
    printScreen.innerHTML = eval(currentEquation);
  }
}

function isNumeric(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function clearScreen(){
  var printScreen = document.getElementById("printScreen");
  printScreen.innerHTML = 0;
  currentEquation = 0;
}
})();
