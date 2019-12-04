const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result');

console.log(buttons);

buttons.forEach(element => {
  element.addEventListener('click', function() {
    let value = this.textContent;

    if (value == 'C') {
      result.innerHTML = 0;
    }
    else if (value == '<==') {
      result.innerHTML = result.innerHTML.slice(0, -1);
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
