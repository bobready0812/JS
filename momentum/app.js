const h1 = document.querySelector("div.hello:first child h1");

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "peach";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

h1.addEventListener

window.addEventListener("resize",handleWindowResize)
window.addEventListener("copy",handleWindowCopy)
