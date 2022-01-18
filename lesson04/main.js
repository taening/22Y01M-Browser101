'use strict'
const container = document.querySelector('.container');
const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const description = document.querySelector('.description');
document.addEventListener('mousemove', (event) => {
    container.style.display = 'block';

    const x = event.clientX;
    const y = event.clientY;

    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;

    target.style.left = `${x}px`; 
    target.style.top =  `${y}px`;

    description.style.left = `${x}px`; 
    description.style.top =  `${y}px`;
    description.innerHTML = `${x}px, ${y}px`;
});

document.addEventListener('mouseleave', () => {
    container.style.display = 'none';
});
