const container = document.querySelector('.container');
const wrkngArea = document.querySelector('.wrkng--area');
const firstDisplay = document.querySelector('.wrkng--area__display-one');
const secondDisplay = document.querySelector('.wrkng--area__display-two');


let firstNumber;
let secondNumber;
let operator;
let output = [];

container.addEventListener('click', e =>{
    
    if(! e.target.classList.contains('container')){
        if(! e.target.classList.contains('wrkng--area')){
            if(e.target.classList.contains('clear')){
               clear();
            }else if(e.target.classList.contains('delete')){
                output.splice(-1,1);
                firstDisplay.textContent = output.join('');
                e.stopImmediatePropagation();
            }else if(e.target.classList.contains('equals')){
                operate(operator, firstNumber,secondNumber);
            }else{
                output.push(e.target.textContent);
                // firstDisplay.textContent = output.join('');
                if(e.target.classList.contains('division')){
                    operator = '/';
                    
                    secondNumber = output.slice(output.indexOf('/'));

                    // output = [];
                    // output.push(e.target.textContent);
                    firstNumber = output.slice(0 , output.indexOf('/'))
                    // secondNumber.pop();
                    secondNumber.splice(0, 1);
                    
                    secondDisplay.textContent = firstNumber;
                    firstDisplay.textContent = '';
                    firstDisplay.textContent = firstNumber;
                    secondDisplay.textContent = secondNumber;

                    firstNumber = operate(operator, firstNumber, secondNumber);
                    firstDisplay.textContent = firstNumber;
                }
                if(e.target.classList.contains('multiply')){

                }
                if(e.target.classList.contains('subtract')){

                }
                if(e.target.classList.contains('equals')){

                }
                if(e.target.classList.contains('addition')){

                }

                // firstDisplay.textContent = output.join('');
            }

            
        }
    }
})




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
    firstNumber = '';
    secondNumber = '';
    operator = '';
    output = [];
    secondDisplay.textContent = '';
    firstDisplay.textContent = '0';
}