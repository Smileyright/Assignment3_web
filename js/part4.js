"use strict"

const $ =(selector) => document.querySelector(selector);

const processEntries = (evt, emailPattern) => {
    if (isNaN(parseInt($("#nights").value))) {
        $("#nights_err").textContent = "Must be a number";
        evt.preventDefault();
    }
    if ($("#name").value === "") {
        $("#name_err").textContent = "This field is required";
        evt.preventDefault();
    }
    if ($("#email").value === "") {
        $("#email_err").textContent = "This field is required";
        evt.preventDefault();
    }
    if (emailPattern.test(testEmail)) {
        $("#email_err").textContent = "Please enter a valid email";
        evt.preventDefault();
    }
   
    
    if ($("#phone").value === "") {
        $("#phone_err").textContent = "This field is required";
        evt.preventDefault();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    $("#arrivalDate").focus;
    $("#submit").addEventListener("click", processEntries);
})