"use strict";

function number(num) {
  /*
    args: num - a new number to add to the screen
    function: updates part the screen of the calculator
  */
  var screen = document.getElementById("printScreen");
  var str = screen.innerHTML;
  if(str.length < 12){
    screen.innerHTML = combineInputs(str, num);
    pastOperation(num);
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

function operation(operate){
  var str ="";
  var printScr = document.getElementById("printScreen");
  var screen = document.getElementById("past");
  str += screen.innerHTML;
  var allinput = "";
  if(eval(str) !== 0){
    allinput = str + operate;
    printScr.innerHTML = 0;
    screen.innerHTML = allinput;
  }

}

function solve(op){ 
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
