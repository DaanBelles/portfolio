"use strict";

document.addEventListener('DOMContentLoaded', init);

function init() {
    trackMouse();
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

function trackMouse() {
    document.addEventListener("mousemove", function(event) {
        const light = document.getElementById("light");
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Position the light source around the mouse pointer
        light.style.left = mouseX + "px";
        light.style.top = mouseY + "px";
    });
}