"use strict";

var left = 0, right = 0, operator = "";
function setOperand(operand) {
    if (operator !== "") {
        right = 1 * ("" + right + operand);
        document.getElementById("resultField").value = right;
    } else {
        left = 1 * ("" + left + operand);
        document.getElementById("resultField").value = left;
    }
    console.log(left, operator, right);
}

function setOperator(newOperator) {
    if (newOperator == "+" ||
        newOperator == "-" ||
        newOperator == "*" ||
        newOperator == ":") {
        operator = newOperator;
    }
    else {
        throw "INVALID_OPERATOR";
    }
}

function calc() {
    var result = 0;
    if (operator == "+") {
        result = left + right;
    }
    else if (operator == "-") {
        result = left -right;
    }
    else if (operator == "*") {
        result = left * right;
    }
    else if (operator == ":") {
        result = left / right;
    }
    else {
        result = 0;
    }
    left = result;
    right = 0;
    operator = "";
    document.getElementById("resultField").value = left;
}

function reset(){
    left = 0;
    right = 0;
    operator = "";
    document.getElementById("resultField").value = 0;
}
