'use strict';

const boxes = document.querySelector('input[type="number"]');
const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const push = document.querySelector('#boxes');

let startPX = 30;


function createBoxes(){
    let result = [];
    for(let i = 0;i < Number(boxes.value);i++){
        let div = document.createElement('div');
        div.style.width=`${startPX}px`;
        div.style.height=`${startPX}px`;
        div.style.background = randomColor();
        result.push(div);
        startPX+=10;
}
    push.append(...result);
}
function destroyBoxes(){
    push.innerHTML = '';
    startPX = 30;
}
render.addEventListener('click',createBoxes);
destroy.addEventListener('click', destroyBoxes)

function randomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
    