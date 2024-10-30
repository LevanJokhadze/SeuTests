let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");
let equals = document.querySelector(".equals");
let result = document.getElementById("result");
let first = document.getElementById("first");
let last = document.getElementById("last");
let op = document.getElementById("operator");
var number = 0;
var firstNum = "";
var secondNum = "";
var num = true;
var operator = null;

numbers.forEach(item => {
    item.addEventListener("click", () => {
        if (num) {
            number = item.textContent;
            firstNum += number;
            first.textContent = firstNum;
        } else {
            number = item.textContent;
            secondNum += number;
            last.textContent = secondNum;
        }
    });
});

operators.forEach(item => {
    item.addEventListener("click", () => { 
        num = false;
        operator = item.textContent;
        op.textContent = operator;
    });
})



equals.addEventListener("click", () => {
    const first =  parseFloat(firstNum);
    const last =  parseFloat(secondNum);
    var res = 0;

    if (operator === "+") {
        res = first + last;
    } else if (operator ===  "-") { 
         res = first - last;
        } else if (operator ===  "*") { 
             res = first * last;
            } else if (operator ===  "/") { 
                 res = first / last;
            }

    result.innerText = res;
});