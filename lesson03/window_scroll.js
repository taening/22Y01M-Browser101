'use strict'

const containerButtons = document.querySelector('.container__btns');
const special = document.querySelector('.special');
containerButtons.addEventListener('click', (event) => {
    if(event.target.className === 'scrollby') {
        window.scrollBy(0, 100);
    }
    else if(event.target.className === 'scrollto') {
        window.scrollTo(0, 100);
    }
    else if(event.target.className === 'scrollinto') {
        const specialBox = document.querySelector(".special");
        const scrollIntoViewObject = { behavior: "smooth" };
        specialBox.scrollIntoView(scrollIntoViewObject);
    }
    else {
        return ; 
    }
});