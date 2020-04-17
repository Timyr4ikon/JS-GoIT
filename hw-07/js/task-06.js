'use strict';

const input = document.querySelector('#validation-input');

input.addEventListener('blur', (e) =>{
    if(input.value.length === Number(input.dataset.length)){
        input.classList.add('valid');
        return;
    }
        input.classList.add('unvalid')
})

input.addEventListener('focus', (e)=>{
    input.classList.remove('valid')
    input.classList.remove('unvalid')
})