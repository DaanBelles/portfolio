document.addEventListener("mousemove", function(event) {
    const light = document.getElementById("light");
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Position the light source around the mouse pointer
    light.style.left = mouseX + "px";
    light.style.top = mouseY + "px";
});
