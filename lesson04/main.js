'use strict'

const container = document.querySelector('.container');
const leftDiv = container.querySelector('.left');
const rightDiv = container.querySelector('.right');
const topDiv = container.querySelector('.top');
const bottomDiv = container.querySelector('.bottom');
const coordinatesDiv = container.querySelector('.coordinates');
window.addEventListener('mousemove', (event) => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    const coordinateX = event.clientX;
    const coordinateY = event.clientY;

    container.style.left = `${coordinateX - 60}px`;
    container.style.top = `${coordinateY - 60}px`;

    leftDiv.style.left = `${-coordinateX + 30}px`;
    leftDiv.style.borderLeftWidth = `${coordinateX}px`;

    rightDiv.style.right = `${-(width - coordinateX) + 30}px`;
    rightDiv.style.borderRightWidth = `${width - coordinateX}px`;

    topDiv.style.top = `${-coordinateY + 30}px`;
    topDiv.style.borderTopWidth = `${coordinateY}px`;

    bottomDiv.style.bottom = `${-(height - coordinateY) + 30}px`;
    bottomDiv.style.borderBottomWidth = `${height - coordinateY}px`;

    coordinatesDiv.innerHTML = `${coordinateX}px, ${coordinateY}px`;
});
