'use strict'

const textDescription = document.querySelector('.text__description');
window.addEventListener('click', (event) => {
    textDescription.innerHTML = `
    DOMRect: left(${event.target.getBoundingClientRect().left}), 
            right(${event.target.getBoundingClientRect().right}),
            top(${event.target.getBoundingClientRect().top}),
            bottom(${event.target.getBoundingClientRect().right}) <br/>
    Client Coordinates: ${event.clientX}, ${event.clientY} <br/>
    Page Coordinates: ${event.pageX}, ${event.pageY}
    `;
});
