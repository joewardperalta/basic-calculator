"use strict";

let numberElement = document.getElementById("number");
let expressionElement = document.getElementById("expression");
let result = 0;

function calculate(currentElement) {
  switch (currentElement.id) {
    case "zero-btn":
      if (numberElement.innerHTML != "0") numberElement.innerHTML += "0";
      break;

    case "one-btn":
      if (numberElement.innerHTML != "0") numberElement.innerHTML += "1";
      else numberElement.innerHTML = "1";
      break;

    case "two-btn":
      if (numberElement.innerHTML != "0") numberElement.innerHTML += "2";
      else numberElement.innerHTML = "2";
      break;

    case "three-btn":
      if (numberElement.innerHTML != "0") numberElement.innerHTML += "3";
      else numberElement.innerHTML = "3";
      break;

    case "four-btn":
      if (numberElement.innerHTML != "0") numberElement.innerHTML += "4";
      else numberElement.innerHTML = "4";
      break;

    case "five-btn":
      if (numberElement.innerHTML != "0") numberElement.innerHTML += "5";
      else numberElement.innerHTML = "5";
      break;

    case "six-btn":
      if (numberElement.innerHTML != "0") numberElement.innerHTML += "6";
      else numberElement.innerHTML = "6";
      break;

    case "seven-btn":
      if (numberElement.innerHTML != "0") numberElement.innerHTML += "7";
      else numberElement.innerHTML = "7";
      break;

    case "eight-btn":
      if (numberElement.innerHTML != "0") numberElement.innerHTML += "8";
      else numberElement.innerHTML = "8";
      break;

    case "nine-btn":
      if (numberElement.innerHTML != "0") numberElement.innerHTML += "9";
      else numberElement.innerHTML = "9";
      break;

    case "plus-btn":
      expressionElement.innerHTML =
        numberElement.innerHTML + currentElement.innerHTML;
      numberElement.innerHTML = "0";
      break;

    case "minus-btn":
      expressionElement.innerHTML =
        numberElement.innerHTML + currentElement.innerHTML;
      numberElement.innerHTML = "0";
      break;

    case "times-btn":
      expressionElement.innerHTML =
        numberElement.innerHTML + currentElement.innerHTML;
      numberElement.innerHTML = "0";
      break;

    case "divide-btn":
      expressionElement.innerHTML =
        numberElement.innerHTML + currentElement.innerHTML;
      numberElement.innerHTML = "0";
      break;

    case "equals-btn":
      let expression = (expressionElement.innerHTML += numberElement.innerHTML);

      expression = expression
        .replaceAll("×", "*")
        .replaceAll("÷", "/")
        .replaceAll("−", "-");

      try {
        let getResult = new Function("return " + expression);
        numberElement.innerHTML = getResult();
      } catch (error) {
        numberElement.innerHTML = "Invalid Expression!";
      }

      expressionElement.innerHTML += " = ";
      break;

    case "plusminus-btn":
      if (numberElement.innerHTML.indexOf("-") == -1)
        numberElement.innerHTML = "-" + numberElement.innerHTML;
      else numberElement.innerHTML = numberElement.innerHTML.replace("-", "");
      break;

    case "delete-btn":
      expressionElement.innerHTML = "";
      break;

    case "clear-btn":
      expressionElement.innerHTML = "";
      numberElement.innerHTML = "0";
      break;

    default:
      console.log("Key entered not available!");
  }
}
