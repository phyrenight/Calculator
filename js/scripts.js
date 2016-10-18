function number(num) {
  var screen = document.getElementById("printScreen");
  var str = screen.innerHTML;
  var total = "";
  if (parseInt(str) === 0) {
    total = String(num);
    screen.innerHTML = total;
  }
  else {
    total = str + String(num);
    screen.innerHTML = total;
  }
  pastOperation(num)
}

function pastOperation(num) {
  var screen = document.getElementById("past");
  var str = screen.innerHTML;
  var total = "";
  if (parseInt(str) === 0) {
    total = String(num);
    screen.innerHTML = total;
  }
  else {
    total = str + String(num);
    screen.innerHTML = total;
  }
}

function addDecimal(){
  // add check to make sure current number has only on decimal
  var printScreen = document.getElementById("printScreen");
  var pastInputs = document.getElementById("past");
  var currentNumber = printScreen.innerHTML + ".";
  var currentInput = pastInputs.innerHTML + ".";
  pastInputs.innerHTML = currentInput;
  printSrceeninnerHtml = currentNumber;

}

function updateScreen(total){
  var screenAll = document.getElementById("past");
  var currentNum = document.getElementById("printScreen");
  console.log(screenAll);
  console.log(currentNum);
  console.log(total);
}
function operation(operate){
  var str ="";
  var printScr = document.getElementById("printScreen");
  var screen = document.getElementById("past");
  str += screen.innerHTML;
  var allinput = "";
  if(str.length > 0){
    allinput = str + operate;
    printScreen.innerHTML = 0;
    screen.innerHTML = allinput;
  }
}
function solve(op){ 
  var printScreen = document.getElementById("printScreen");
  var parentStr = document.getElementById("past");
  var str = parentStr.innerHTML;
  var operations = [];
  var numbers = [];
  var start = 0;
  var total = 0;
  if(str.length > 2){
    for(var i in str){
      if(str[i] == "+"){
        operations.push(str[i]);
        numbers.push(str.slice(start, parseInt(i)));
        start = (parseInt(i)+ 1);
      }
      else if(str[i] == "*"){
        operations.push(str[i]);
        numbers.push(str.slice(start, parseInt(i)));
        start = (parseInt(i) + 1);
      }
      else if(str[i] == "-"){
        operations.push(str[i]);
        numbers.push(str.slice(start, parseInt(i)));
        start = (parseInt(i) + 1);
      }
      else if(str[i] == "/"){
        operations.push(str[i]);
        numbers.push(str.slice(start, parseInt(i)));
        start = (parseInt(i) + 1);
      }
    }
    numbers.push(str.slice(start))
    num1 = parseFloat(numbers[0]);
    num2 = parseFloat(numbers[1]);
    total = doTheMath(num1, num2, operations[0]);
    console.log(total)
    var x = 1;
    for(var n  = 2; n < numbers.length; ++n){
      total = doTheMath(parseInt(total), parseInt(numbers[n]), operations[x]);
      console.log(total);
      ++x;
    }
    printScreen.innerHTML = total;
    parentStr.innerHTML = total;
  }
}
function doTheMath(num1, num2, operation){
  console.log(operation);
  if(operation == "+"){
    return parseFloat(num1) + parseFloat(num2);
  }
  else if(operation == "-"){
    return parseFloat(num1) - parseFloat(num2);
  }
  else if(operation == "*"){
    return parseFloat(num1) * parseFloat(num2);
  }
  else if(operation == "/"){
    return parseFloat(num1) / parseFloat(num2);
  }
  else{
    console.log("what")
  }
}


function clearScreen(){
  var printScreen = document.getElementById("printScreen");
  var pastIput = document.getElementById("past");
  printScreen.innerHTML = 0;
  pastIput.innerHTML = 0;
}
  /*var previousOp =" ";
  var str =  parentStr.innerHTML;
  var total = 0;
  var start = 0;
  console.log("hello");
  for(var i in str){
    if(previousOp == " "){
      total = parseInt(str.slice(start, i));
      console.log(i);
      previousOp = str[i];
      console.log(previousOp);
      start = i;
    }
    else{
      if(previousOp ==  "+"){
        console.log(str[i], i);
        total += parseInt(str.slice(start, i));
        console.log(total);
        start = i +1;
        previousOp = str[i];
      }
      else if(previousOp == "*"){
        console.log(str.slice(start, i));
        num = parseInt(str.slice(start, i));
        total = total * num;
        start = i+1;
        previousOp = str[i]
      }
      else if(previousOp == "-"){
        console.log(str.slice(start, i));
        num = parseInt(str.slice(start, i));
        total = total - num;
        start = i+1;
        previousOp = str[i];
      }
      else if(previousOp == "/"){
        console.log(str.slice(start, i));
        num = parseInt(str.slice(start, i));
        total = total/num;
        start = i+1;
        previousOp = str[i];
      }
      else{

      }
    }
  }
  updateScreen(total);
 // console.log(str);
}*/
/*
var num1 = "";
var num2 = "";
var operatorCounter = 0;
var currentOperator = "";
/*
function number(num) {
  // 
  if (operatorCounter < 1) {
    num1 = num1.concat(num);
    printToScreen(num1);
  } else {
    num2 = num2.concat(num);
    printToScreen(num2);
  }
}

function printToScreen(num) {
  screen = document.getElementById("printScreen");
  screen.innerHTML = num;
}

function operation(operat) {
  //args: operat - the next operation to be performed
  // carries out the mathmatical operations
  if (operatorCounter === 0) {
    currentOperator = operat;
    operatorCounter += 1;
  } else {
    if (currentOperator == "+") {
      num1 = parseFloat(num1) + parseFloat(num2);
      assignment(num1, operat);
      currentOperator = operat;
    } else if (currentOperator == "-") {
      num1 = parseFloat(num1) - parseFloat(num2);
      assignment(num1, operat);
    } else if (currentOperator == "*") {
      num1 = parseFloat(num1) * parseFloat(num2);
      assignment(num1, operat);
    } else if (currentOperator == "/") {
      num1 = parseFloat(num1) / parseFloat(num2);
      assignment(num1, operat);
    }
  }
}

function assignment(num, operat) {
  printToScreen(num);
  num2 = "";
  if (operat == "=") {
    currentOperator = "";
    operatorCounter = 0;
  } else {
    currentOperator = operat;
    operatorCounter += 1;
  }
}*/