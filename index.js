'use strict';

let result = 0;
let screenEl = document.getElementById('screen');

let plusBtn = document.getElementById('plus-btn');
let minusBtn = document.getElementById('minus-btn');
let multiplyBtn = document.getElementById('multiply-btn');
let divideBtn = document.getElementById('divide-btn');
let equalSignBtn = document.getElementById('equal-sign-btn');
let deleteBtn = document.getElementById('backspace-btn');

let oneBtn = document.getElementById('one-btn');
let twoBtn = document.getElementById('two-btn');
let threeBtn = document.getElementById('three-btn');
let fourBtn = document.getElementById('four-btn');
let fiveBtn = document.getElementById('five-btn');
let sixBtn = document.getElementById('six-btn');
let sevenBtn = document.getElementById('seven-btn');
let eightBtn = document.getElementById('eight-btn');
let nineBtn = document.getElementById('nine-btn');
let zeroBtn = document.getElementById('zero-btn');

function calculate() {}

function plus() {
   if (screenEl.innerText != '0') {
      screenEl.innerText += plusBtn.innerText;
   }
}

function minus() {
   if (screenEl.innerText != '0') {
      screenEl.innerText += minusBtn.innerText;
   }
}

function multiply() {
   if (screenEl.innerText != '0') {
      screenEl.innerText += multiplyBtn.innerText;
   }
}

function divide() {
   if (screenEl.innerText != '0') {
      screenEl.innerText += divideBtn.innerText;
   }
}

function equal() {
   if (screenEl.innerText != '0') {
      let copy = screenEl.innerText;
      let text = '';
      let res = 0;

      for (const c of copy) {
         if (c === 'x') {
            text += '*';
         } else if (c === '÷') {
            text += '/';
         } else {
            text += c;
         }
      }

      res = eval(text);
      screenEl.innerText = res;
   }
}

function backspace() {
   if (screenEl.innerText != '0') {
      let len = screenEl.innerHTML.length;
      let text = screenEl.innerText.slice(0, len - 1);
      screenEl.innerText = text;
   }
}

function one() {
   if (screenEl.innerText != '0') {
      screenEl.innerText += oneBtn.innerText;
   } else {
      screenEl.innerText = oneBtn.innerText;
   }
}

function two() {
   if (screenEl.innerText != '0') {
      screenEl.innerText += twoBtn.innerText;
   } else {
      screenEl.innerText = twoBtn.innerText;
   }
}

function three() {
   if (screenEl.innerText != '0') {
      screenEl.innerText += threeBtn.innerText;
   } else {
      screenEl.innerText = threeBtn.innerText;
   }
}

function four() {
   if (screenEl.innerText != '0') {
      screenEl.innerText += fourBtn.innerText;
   } else {
      screenEl.innerText = fourBtn.innerText;
   }
}

function five() {
   if (screenEl.innerText != '0') {
      screenEl.innerText += fiveBtn.innerText;
   } else {
      screenEl.innerText = fiveBtn.innerText;
   }
}

function six() {
   if (screenEl.innerText != '0') {
      screenEl.innerText += sixBtn.innerText;
   } else {
      screenEl.innerText = sixBtn.innerText;
   }
}

function seven() {
   if (screenEl.innerText != '0') {
      screenEl.innerText += sevenBtn.innerText;
   } else {
      screenEl.innerText = sevenBtn.innerText;
   }
}

function eight() {
   if (screenEl.innerText != '0') {
      screenEl.innerText += eightBtn.innerText;
   } else {
      screenEl.innerText = eightBtn.innerText;
   }
}

function nine() {
   if (screenEl.innerText != '0') {
      screenEl.innerText += nineBtn.innerText;
   } else {
      screenEl.innerText = nineBtn.innerText;
   }
}

function zero() {
   if (screenEl.innerText != '0') {
      screenEl.innerText += zeroBtn.innerText;
   }
}
