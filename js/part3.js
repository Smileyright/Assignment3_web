"use strict"

const $ =(selector) => document.querySelector(selector);

const processEntries = (evt) => {
    const income = parseFloat($("#income").value);
    if (!isNaN(income) || income > 0) {
        $("#tax").value = calculateTax(income);
    }   else {
        $("#income_err").textContent = "Please enter a valid number"
    }
    evt.preventDefault();
};

const calculateTax = (income) => {
    if (income <= 9875) {
        return (income / 10);
    }   else if (income <= 40125) {
        return (987.5 + ((income - 9875) * 0.12));
    } else if (income <= 85525) {
        return (4617.5 + ((income - 40125) * 0.22));
    } else if (income <= 163300) {
        return (14605.5 + ((income - 85525) * 0.24));
    } else if (income <= 207350) {
        return (33271.5 + ((income - 163300) * 0.32));
    } else if (income <= 518400) {
        return (47367.5 + ((income - 207350) * 0.35));
    } else {
        return (156235.5 ((income - 518400) * 0.37));
    }
}

document.addEventListener("DOMContentLoaded", () => {
    $("#income").focus();
    $("#calculate").addEventListener("click", processEntries);
});