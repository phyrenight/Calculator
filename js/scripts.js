function number(num) {
  var screen = document.getElementById("printScreen");
  var str = screen.innerHTML;
  var total = "";
  if (parseInt(str) === 0) {
    total = String(num);
    var removescreen = document.getElementById("screen")
    removescreen.removeChild(screen)
    screen = document.createElement("P");
    var node = document.createTextNode(total)
    screen.appendChild(node);
    screen.setAttribute("id", "printScreen");
    removescreen.appendChild(screen);
  } else {
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
    var removescreen = document.getElementById("screen")
    removescreen.removeChild(screen)
    screen = document.createElement("P");
    var node = document.createTextNode(total)
    screen.appendChild(node);
    screen.setAttribute("id", "past");
    removescreen.appendChild(screen);
  } else {
    total = str + String(num);
    screen.innerHTML = total;
  }
}

function operation(operate){
  var str ="";
  var screen = document.getElementById("past");
  //console.log(screen.innerHTML)
  str += screen.innerHTML;
  var allinput = "";
  console.log(str)
  if(str.length > 0){
    allinput = str + operate;
   // console.log(allinput);
    screen.innerHTML = allinput;
  }
  /*if (currentOperator == "+") {
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
  }*/
}
function solve(){
  var parentStr = document.getElementById("past");
  var str =  parentStr.innerHTML;
  var total = 0;
  var start = 0;
  for(var i in str){
    if(str[i] ==  "+"){
      console.log(str[i], i);
      total += parseInt(str.slice(start,i));
      console.log(total);
      start = i;
    }
  }
 // console.log(str);
}
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