function number(num){
  var screen = document.getElementById("printScreen");
  var str = screen.innerHTML;
  var total = ""
  console.log(typeof(num));
  console.log(screen);
  if(parseInt(str) === 0){
    total = String(num);
    var removescreen = document.getElementById("screen")
    removescreen.removeChild(screen)
    screen = document.createElement("P");
    var node = document.createTextNode(total)
    screen.appendChild(node);
    screen.setAttribute("id", "printScreen");
    removescreen.appendChild(screen);   
  }
  else{
    total = str + String(num);
    screen.innerHTML = total;
  }
}



/*var num1 = "";
var num2 = "";
var operatorCounter = 0;
var currentOperator = "";

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
