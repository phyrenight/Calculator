function number(num) {
  var screen = document.getElementById("printScreen");
  var str = screen.innerHTML;
  if(str.length < 12){
    screen.innerHTML = combineInputs(str, num);
    pastOperation(num);
  }
  else{
    alert("Calculator only takes 12 numbers.")
  }
}

function pastOperation(num) {
  var screen = document.getElementById("past");
  var str = screen.innerHTML;
  var total = "";
  screen.innerHTML = combineInputs(str, num);
}

function combineInputs(str, num){
  console.log(str);
  var total = "";
  if(parseInt(str) === 0) {
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
  var currentNumber = printScreen.innerHTML + ".";
  var currentInput = pastInputs.innerHTML + ".";
  pastInputs.innerHTML = currentInput;
  printScreen.innerHtml = currentNumber;

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
    printScr.innerHTML = 0;
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
  var num1 = 0;
  var num2 = 0;
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
    numbers.push(str.slice(start));
    num1 = parseFloat(numbers[0]);
    num2 = parseFloat(numbers[1]);
    total = doTheMath(num1, num2, operations[0]);
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
    // add check to make sure theiir is no dividing by 0
    return parseFloat(num1) / parseFloat(num2);
  }
  else{
    // need a better else
    console.log("what");
  }
}

function clearScreen(){
  var printScreen = document.getElementById("printScreen");
  var pastIput = document.getElementById("past");
  printScreen.innerHTML = 0;
  pastIput.innerHTML = 0;
}
