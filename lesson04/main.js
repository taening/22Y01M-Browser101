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
    target.style.top = `${y}px`;

    description.style.left = `${x}px`; 
    description.style.top =  `${y}px`;
    description.innerHTML = `${x}px, ${y}px`;
});

document.addEventListener('mouseleave', () => {
    container.style.display = 'none';
});

document.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const image = new Image(300, 170);
    image.src = '/lesson04/img/bulletMarks.png';
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.style.zIndex = -3;
    image.className = 'bullet-marks';

    document.getElementsByTagName('body')[0].appendChild(image);
    setTimeout(() => {
        document.getElementsByTagName('body')[0].removeChild(image);
    }, 2000);
});