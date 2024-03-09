"use strict"

document.addEventListener('DOMContentLoaded', init);

function init() {
    navLink();
}

function navLink() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
}