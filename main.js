// math operator functions
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;    
}

function divide(num1, num2){
    return num1 / num2;
}

function moduloOpp(num){
    return num / 100;
}

// operator selector
function operate(opp, num1, num2){

    switch(opp){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        case '%':
            return moduloOpp(num1);
    }

}