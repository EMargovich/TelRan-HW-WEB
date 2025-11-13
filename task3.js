const textarea = document.querySelector('#textarea');
let memory = null;
let input;
let operator;


document.addEventListener('click', (e) => {
    if(Number(e.target.innerText) || e.target.innerText === '0') {
        if(textarea.value === "ERR" || textarea.value === "0" || input === null) textarea.value = "";
        textarea.value += e.target.innerText;
        input = textarea.value;
    }

    if(e.target.innerText === "del") {
        textarea.value = null;
        memory = null;
        operator = null;
    }

    if(["+", "-", "*", "/"].includes(e.target.innerText)) {
        operator = e.target.innerText;
        if(input === null) {return}
        if(memory != null) {
            textarea.value = calc(memory, input, operator);
            memory = textarea.value;
        } else {
            memory = textarea.value;
            textarea.value = "";
        }
        input = null;
    }

    if(e.target.innerText === "=") {
        if(memory == null || input == null || operator == null) return;
        textarea.value = calc(memory, input, operator);
        if(textarea.value === "ERR") {
            memory = null
        } else {
            memory = textarea.value;
        }
        input = null;
    }
})

let calc = function (st1, st2, operator) {
    let n1 = Number(st1);
    let n2 = Number(st2);
    switch(operator) {
        case "-": return n1 - n2;
        case "*": return n1 * n2;
        case "+": return n1 + n2;
        case "/": return (n2 === 0) ? "ERR" : n1 / n2;
        default: return "ERR";
    }
}