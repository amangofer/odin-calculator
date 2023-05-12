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

const current = document.querySelector('.current');
const last = document.querySelector('.last');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const dot = document.getElementById('dot');

const clear = document.getElementById('clear');
const sign = document.getElementById('sign');
const del = document.getElementById("delete");

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const division = document.getElementById('division');
const times = document.getElementById('times');
const modulo = document.getElementById('modulo');

let list = [];
const operators = /\+|\_|\x|\//;

one.addEventListener('click', ()=>{
    current.textContent += "1";
});
two.addEventListener('click', ()=>{
    current.textContent += "2";
});
three.addEventListener('click', ()=>{
    current.textContent += "3";
});
four.addEventListener('click', ()=>{
    current.textContent += "4";
});
five.addEventListener('click', ()=>{
    current.textContent += "5";
});
six.addEventListener('click', ()=>{
    current.textContent += "6";
});
seven.addEventListener('click', ()=>{
    current.textContent += "7";
});
eight.addEventListener('click', ()=>{
    current.textContent += "8";
});
nine.addEventListener('click', ()=>{
    current.textContent += "9";
});
zero.addEventListener('click', ()=>{
    current.textContent += current.textContent !== "0" ? "0" : "";
});
dot.addEventListener('click', ()=>{
    current.textContent += current.textContent.indexOf(".") > -1 ? "": ".";
});

// clears the whole screen
clear.addEventListener('click', ()=>{
    current.textContent = "";
    last.textContent = "";
    list = [];
});

// adds/removes negative sign from a number
sign.addEventListener('click', () => {
    current.textContent = current.textContent.charAt(0) !== "-" ? "-" + current.textContent 
        : current.textContent.charAt(0) === "-" ? current.textContent.substring(1) : current.textContent;
});

// deletes number from the last
del.addEventListener('click', ()=> {
    current.textContent = current.textContent.substring(0,current.textContent.length - 1);
})

plus.addEventListener('click', ()=>{
    if (current.textContent !== ""){
        last.textContent += current.textContent + "+" ;
        list.push(...current.textContent.split(operators))
        list.push("+")
        current.textContent = "";
    }
});

minus.addEventListener('click', ()=>{
    if (current.textContent !== ""){
        last.textContent += current.textContent + "-";
        list.push(...current.textContent.split(operators));
        list.push("_");
        current.textContent = "";
    }
});

division.addEventListener('click', ()=>{
    if(current.textContent !== ""){
        last.textContent += current.textContent + "/";
        list.push(...current.textContent.split(operators))
        list.push("/")
        current.textContent = "";
    }
});

times.addEventListener('click', ()=>{
    if(current.textContent !== ""){
        last.textContent += current.textContent + "x";
        list.push(...current.textContent.split(operators))
        list.push("*")
        current.textContent = "";
    }
});