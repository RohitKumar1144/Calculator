document.querySelector('.js-result').innerHTML = localStorage.getItem('calc') || '';

function updateCalc(value){
  calc += value;
  localStorage.setItem('calc', JSON.stringify(calc));
  showResult();
}

function showResult(){
  document.querySelector('.js-result').innerHTML = `${calc}`;
}

let calc = JSON.parse(localStorage.getItem('calc')) || '';