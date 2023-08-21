"use strict";

let result = 0;
let screen = document.getElementById("screen");

function calculate(element) {
  switch (element.innerHTML) {
    case "0":
      if (screen.innerHTML != "0") screen.innerHTML += "0";
      break;
    case "1":
      if (screen.innerHTML == "0") screen.innerHTML = "1";
      else screen.innerHTML += "1";
      break;
    case "2":
      if (screen.innerHTML == "0") screen.innerHTML = "2";
      else screen.innerHTML += "2";
      break;
    case "3":
      if (screen.innerHTML == "0") screen.innerHTML = "3";
      else screen.innerHTML += "3";
      break;
    case "4":
      if (screen.innerHTML == "0") screen.innerHTML = "4";
      else screen.innerHTML += "4";
      break;
    case "5":
      if (screen.innerHTML == "0") screen.innerHTML = "5";
      else screen.innerHTML += "5";
      break;
    case "6":
      if (screen.innerHTML == "0") screen.innerHTML = "6";
      else screen.innerHTML += "6";
      break;
    case "7":
      if (screen.innerHTML == "0") screen.innerHTML = "7";
      else screen.innerHTML += "7";
      break;
    case "8":
      if (screen.innerHTML == "0") screen.innerHTML = "8";
      else screen.innerHTML += "8";
      break;
    case "9":
      if (screen.innerHTML == "0") screen.innerHTML = "9";
      else screen.innerHTML += "9";
      break;
    case "+":
      if (screen.innerHTML != "0") screen.innerHTML += "+";
      break;
    case "-":
      if (screen.innerHTML != "0") screen.innerHTML += "-";
      break;
    case "x":
      if (screen.innerHTML != "0") screen.innerHTML += "x";
      break;
    case "÷":
      if (screen.innerHTML != "0") screen.innerHTML += "÷";
      break;
    case "=":
      let expression = screen.innerHTML
        .replaceAll("x", "*")
        .replaceAll("÷", "/");

      try {
        screen.innerHTML = evaluate(expression);
      } catch (error) {
        screen.innerHTML = "Invalid Expression!";
      }

      break;
    case "Delete":
      if (screen.innerHTML == "Invalid Expression!") {
        screen.innerHTML = "0";
      } else {
        if (screen.innerHTML.length > 1) {
          screen.innerHTML = screen.innerHTML.substring(
            0,
            screen.innerHTML.length - 1
          );
        } else {
          screen.innerHTML = "0";
        }
      }
      break;
    default:
      console.log("Key entered not available!");
  }
}

/**
 * Evaluates the arithmetic expression.
 * @param {string} expression
 * @returns result of evaluating the expression
 */

function evaluate(expression) {
  let getResult = new Function("return " + expression);
  return getResult();
}
