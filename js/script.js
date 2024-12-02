"use strict"

const $ =(selector) => document.querySelector(selector);



const processEntries = (evt) => {
    const subtotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#taxRate").value);


    if ((subtotal) > 0 && subtotal < 10000) {
        if (parseFloat(taxRate) > 0 && taxRate < 12) {
            $("#salesTax").value = (subtotal * (taxRate / 100)).toFixed(2);
            $("#total").value = (parseFloat($("#salesTax").value) + subtotal).toFixed(2);
            evt.preventDefault();
        }   else {
            $("#tax_rate_err").textContent = "Please enter a valid number";
            evt.preventDefault();  
        }
    }   else {
        $("#subtotal_err").textContent = "Please enter a valid number";
        evt.preventDefault();
    }
};
const clearForm1 = (evt) => {
$("#subtotal").value = "";
$("#taxRate").value = "";
$("#salesTax").value = "";
$("#total").value = "";
$("#tax_rate_err").textContent = "";
$("#subtotal_err").textContent = "";
evt.preventDefault();
}



document.addEventListener("DOMContentLoaded", () => {
    $("#clear").addEventListener("click", clearForm1);
    $("#calculate").addEventListener("click", processEntries);
});