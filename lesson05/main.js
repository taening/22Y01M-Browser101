const btn = document.querySelector('button');
const rabbit = document.querySelector('.rabbit');
btn.addEventListener('click', () => {
    console.log("test");
    rabbit.scrollIntoView({behavior: "smooth", block: "center"});
});