'use strict'

const container = document.querySelector('.container');
const h1Tag = container.children;
window.addEventListener('resize', ()=>{
    h1Tag[0].innerHTML = "window.screen: " + window.screen.width + ", " + window.screen.height;
    h1Tag[1].innerHTML = "window.outer: " + window.outerWidth + ", " + window.outerHeight;
    h1Tag[2].innerHTML = "window.inner: " + window.innerWidth + ", " + window.innerHeight;
    h1Tag[3].innerHTML = "documentElement.clientWidth: " + document.documentElement.clientWidth + ", " + document.documentElement.clientHeight;
})