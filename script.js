let firstNumber;
let secondNumber;
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

operate('*', 1, 2,);