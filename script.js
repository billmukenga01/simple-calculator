let firstNumber;
let secondNumber;
let operator;



const container = document.querySelector('.container');
const wrkngArea = document.querySelector('.wrkng--area');

container.addEventListener('click', e =>{
    let output;
    if(! e.target.classList.contains('container')){
        if(! e.target.classList.contains('wrkng--area')){
            output = e.target.textContent;
            wrkngArea.textContent = output;
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



