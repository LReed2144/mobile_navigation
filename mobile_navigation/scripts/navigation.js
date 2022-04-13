document.addEventListener('DOMContentLoaded', function () {
console.log('testing');

let nav = document.querySelector("header nav");
nav.addEventListener('click' , function() {
    nav.classList.toggle('expanded');
});
});