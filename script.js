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
                secondDisplay.textContent = '';
                firstDisplay.textContent = '0';
            }else if(e.target.classList.contains('delete')){
                output.splice(-1,1);
                firstDisplay.textContent = output.join('');
                e.stopImmediatePropagation();
            }else if(e.target.classList.contains('equals')){
                operate(operator, firstNumber,secondNumber);
            }else{
                output.push(e.target.textContent);
                firstDisplay.textContent = output.join('');
                if(e.target.classList.contains('division')){
                    secondNumber = output.slice(output.indexOf('/'))
                    firstNumber = output.slice(0 ,output.indexOf('/'))

                    secondDisplay.textContent = output.join('');
                }
                if(e.target.classList.contains('multiply')){

                }
                if(e.target.classList.contains('subtract')){

                }
                if(e.target.classList.contains('equals')){

                }
                if(e.target.classList.contains('addition')){

                }

                firstDisplay.textContent = output.join('');
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

operate('*', 1, 2,);



