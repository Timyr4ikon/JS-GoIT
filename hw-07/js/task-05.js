"use strict";

const inputName = document.querySelector("input#name-input");
const outputName = document.querySelector("span#name-output");

inputName.addEventListener('input', () => {
    outputName.textContent = inputName.value === '' ? 'незнакомец' : inputName.value
});
