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
        case '_':
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
const equals = document.getElementById('equals');

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
});

modulo.addEventListener("click", ()=>{
    current.textContent = moduloOpp(parseFloat(current.textContent));
}); 

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

equals.addEventListener('click', equal);

function equal(){
    if(current.textContent !== ""){
        list.push(current.textContent);
        while(list.length > 1){
            for(let i = 0; i < list.length; i++){
                if(list[i] == "*" || list[i] == "/"){
                    if(list[i+1] == "0"){
                        current.textContent = "Hahaa Your Dumb!";
                        last.textContent = "";
                        list = [];
                        return;
                    } else{
                        const result = operate(list[i],parseFloat(list[i-1]), parseFloat(list[i+1]));
                        list.splice(i-1, i+1);
                        list.splice(i-1,i,result);
                        i = 0;
                    }
                }
            }
            for(let i = 0; i < list.length; i++){
                if(list[i] == "+" || list[i] == "_"){
                    const result = operate(list[i], parseFloat(list[i-1]), parseFloat(list[i+1]));
                    list.splice(i-1, i+1);
                    list.splice(i-1,i,result);
                    i = 0;
                }
            }
            
        }
    }
    last.textContent = "";
    current.textContent = list[0];
    list = [];
}

// make the calculator using keyboard
window.document.addEventListener('keydown', (e)=>{

    if(e.key >= "0" && e.key <= "9"){
        current.textContent += e.key
    }else if(e.key == "Backspace"){
        current.textContent = current.textContent.substring(0,current.textContent.length - 1);
    }else if(current.textContent !== "" && (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/')){
        last.textContent = current.textContent + e.key;
        list.push(...current.textContent.split(e.key));
        current.textContent = "";
        list.push(e.key == '-' ? '_' : e.key);
    } else if (e.key == '%'){
        current.textContent = moduloOpp(parseFloat(current.textContent));
    } else if(e.key == "Enter"){
        equal();
    } else if(e.key == "Escape"){
        current.textContent = "";
        last.textContent = "";
        list = [];
    }
})