'use strict'
function createItem(item) {
    const trashCan = new Image(18, 18);
    trashCan.src = "img/trash_can.png";

    const node = document.createElement('div');
    node.textContent = item;
    node.appendChild(trashCan);
    node.style.display = 'flex';
    node.style.justifyContent = 'space-between';
    node.style.padding = '4px 0px';

    return node;
}

const button = document.querySelector('.button');
const input = document.querySelector('.input');
const content = document.querySelector('.content');
button.addEventListener('click', () => {
    if(input.value.length === 0)
        return;
    const item = createItem(input.value);
    content.appendChild(item);
    input.value = "";
});

input.addEventListener('keydown', (event) => {
    if(event.isComposing || event.keyCode === 229)
        return;
    if(input.value.length === 0 || event.key !== 'Enter')
        return;
    const item = createItem(input.value);
    content.appendChild(item);
    input.value = "";
});