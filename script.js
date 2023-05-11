const container = document.querySelector('.container');
const wrkngArea = document.querySelector('.wrkng--area');
const firstDisplay = document.querySelector('.wrkng--area__display-one');
const secondDisplay = document.querySelector('.wrkng--area__display-two');


let total = '0'
let operationStr = '';
let operator;

const multiply = (num1, num2) =>{
  return num1 * num2;
};
const divide = (num1, num2) =>{
  return num1 / num2;
};
const subtract = (num1, num2) =>{
  return num1 - num2;
};
const add = (num1, num2) =>{
  return num1 + num2;
};

function operate (opp, num1, num2, ){
  if (opp === '*'){
      return multiply(num1, num2);
  }else if(opp === '/'){
      return divide(num1, num2);
  }else if(opp === '-'){
      return subtract(num1,num2);
  }else if(opp === '+'){
      return add(num1, num2);
  }
}



function clear(){
  total = '0';
  operationStr = '';
  operator = '';
  secondDisplay.textContent = '';
  firstDisplay.textContent = '0';
}

function buttonClick(value){
  if(isNaN(value)){
    handleSymbol(value)
  }else{
    handleNumber(value)
  }
}
function handleSymbol(symbol){

}
function handleNumber(numberString){
  if (total === '0'){
    total = numberString;
  }else{
    total += numberString;
  }

  firstDisplay.textContent = total;
}

function main (){
  container.addEventListener('click', e =>{
    
    if(! e.target.classList.contains('container')){
      if(! e.target.classList.contains('wrkng--area')){
        if(e.target.classList.contains('clear')){
          clear();
        }else if(e.target.classList.contains('delete')){
          back();
          e.stopImmediatePropagation();
        }else if(e.target.classList.contains('equals')){
          
        }else {
          buttonClick(e.target.textContent)
        }
  
              
      }
    }
  })
}

main();






