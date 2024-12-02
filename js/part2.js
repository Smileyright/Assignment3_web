"use strict"

const $ = (selector) => document.querySelector(selector);

const processEntries = (evt) => {
    var change = parseInt($("#money").value);
        if (change <= 99) {
            makeChange(change);
        } else {
            $("#money_err").textContent = "Please enter a valid number";
        }
        evt.preventDefault();
    }
    
    const makeChange = (change, evt) => {
        if (change > 25) {
            $("#quarters").value = Math.floor(change / 25);
            change = change % 25;
        }
        if (change > 10) {
            $("#dimes").value = Math.floor(change / 10);
            change = change % 10;
        }
        if (change > 5) {
            $("#nickels").value = Math.floor(change / 5);
            change = change % 5;
        }
        $("#pennies").value = change;
    }

document.addEventListener("DOMContentLoaded", () => {
    $("#makeChange").addEventListener("click", processEntries);
});