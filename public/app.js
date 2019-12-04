/*const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result');

console.log(buttons);

buttons.forEach(element => {
  element.addEventListener('click' , function() {
    let value = this.textContent;

    if (value == 'C') {
      result.innerHTML = 0;
    }
    else if (value == '<==') {
      result.innerHTML = result.innerHTML.slice(0, -1);
    }
    else if (value == '=') {
      result.innerHTML += '';
      parseInt
    }
    else {
      result.innerHTML += value;
      console.log(value);
    }

    if (result.textContent === '') {
      result.innerHTML = 0;
    }
  })
})
*/

function isSymbol(value) {
  return ['/', '*', '-', '+', '%','.'].indexOf(value) !== -1
}

function getLastChar() {
  return result.innerHTML.substr(-1)

}

function addToresult(value) {
  if (!isStarted) {
    if (!isSymbol(value)) {
      result.innerHTML = null
    }
    isStarted = true
  }
  if (isSymbol(getLastChar()) && isSymbol(value)) {
    removeresult()
  }
  result.innerHTML += value
}

function removeresult(length = -1) {
  result.innerHTML = result.innerHTML.slice(0, length)
  if (!result.innerHTML) {
    result.innerHTML = 0
    isStarted = false
  }
}

function refreshresult() {
  result.innerHTML = 0
  isStarted = false
}

fonction calcu() {
  resultF = eval(result.innerHTML);
  result.innerHTML = resultF;
}

const result = document.getElementById('result')
const buttons = document.querySelectorAll('.btn')

let isStarted = false

buttons.forEach(element => {
  element.addEventListener('click', function() {

    let value = this.textContent
    switch (value) {
      case 'C':
        refreshresult();
        break;
      case '<==':
        removeresult();
        break;
      case '='
        calcu();
        break;
      default:
        addToresult(value);
    }
  })
})
