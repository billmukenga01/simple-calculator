const container = document.querySelector('.container');
const wrkngArea = document.querySelector('.wrkng--area');
const firstDisplay = document.querySelector('.wrkng--area__display-one');
const secondDisplay = document.querySelector('.wrkng--area__display-two');


let total = 0;
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
  if(total === '0'){
    return
  }
  
  const intOperationNum = parseFloat(operationStr);

}



function clear(){
  total = 0 ;
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
  if(symbol === '.'){

  }else if(symbol === '&times'){

  }else if(symbol === '&divide'){

  }else if(symbol === '-'){

  }else if(symbol === '+'){

  }

}
function handleNumber(numberString){
  if (operationStr === '0'){
    operationStr = numberString;
  }else{
    operationStr += numberString;
  }

  firstDisplay.textContent = operationStr;
}

function handleMath(){
  if(operationStr === '0'){

  }

  const operation = parseInt(operationStr);

  if (total == 0){
    total = operation
  }else{
    operation(operation);
  }

  operationStr = '0';
}

function main (){
  container.addEventListener('click', e =>{
    
    if(! e.target.classList.contains('container')){
      if(! e.target.classList.contains('wrkng--area')){
        if(e.target.classList.contains('clear')){
          clear();
        }else if(e.target.classList.contains('delete')){
          back();
        }else if(e.target.classList.contains('equals')){
          
        }else {
          buttonClick(e.target.textContent)
        }
  
              
      }
    }
  })
}

main();






